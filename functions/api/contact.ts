// Cloudflare Pages Function — POST /api/contact
// Receives a contact-form submission, sends it to the sales inbox via Resend.
// The Resend API key is provided as a Pages secret (RESEND_API_KEY) and never
// committed to the repo.

interface Env {
  RESEND_API_KEY: string;
  // Optional overrides (set as Pages env vars if you want to change defaults
  // without redeploying):
  SALES_TO?: string;
  SALES_FROM?: string;
}

const DEFAULT_TO = 'hello@shabuilds.tech';
const DEFAULT_FROM = '399apps Contact <hello@mails.shabuilds.tech>';

type SubmittedField = string | undefined;

interface Submission {
  name: SubmittedField;
  email: SubmittedField;
  company: SubmittedField;
  phone: SubmittedField;
  app: SubmittedField;
  hosting: SubmittedField;
  message: SubmittedField;
  // Honeypot — bots happily fill anything labelled "website".
  website: SubmittedField;
  // Referer for context.
  intent: SubmittedField;
}

function clean(value: unknown, maxLen = 2000): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, maxLen);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return c;
    }
  });
}

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

async function parseBody(request: Request): Promise<Record<string, unknown>> {
  const ct = (request.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) {
    return (await request.json()) as Record<string, unknown>;
  }
  // application/x-www-form-urlencoded or multipart/form-data
  const form = await request.formData();
  const obj: Record<string, unknown> = {};
  for (const [k, v] of form.entries()) obj[k] = typeof v === 'string' ? v : v.name;
  return obj;
}

function renderEmail(s: Submission, meta: { ip: string; ua: string; ts: string }): { subject: string; html: string; text: string } {
  const subjectName = s.name || 'Anonymous';
  const subjectApp = s.app && s.app !== 'other' ? s.app : 'general enquiry';
  const subject = `399apps enquiry — ${subjectName} (${subjectApp})`;

  const rows: [string, string | undefined][] = [
    ['Name', s.name],
    ['Email', s.email],
    ['Company', s.company],
    ['Phone / WhatsApp', s.phone],
    ['App', s.app],
    ['Hosting preference', s.hosting],
    ['Intent', s.intent],
  ];

  const text = [
    `New 399apps enquiry — ${meta.ts}`,
    '',
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    s.message || '(no message)',
    '',
    `IP: ${meta.ip}`,
    `User-Agent: ${meta.ua}`,
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#0a0b12;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
        <div style="width:32px;height:32px;border-radius:8px;background:#dc2626;color:#fff;display:grid;place-items:center;font-weight:800;font-size:13px;">399</div>
        <strong style="font-size:14px;">399apps.com — contact form</strong>
      </div>
      <h1 style="font-size:20px;margin:0 0 6px;line-height:1.3;">New enquiry from ${escapeHtml(s.name || 'someone')}</h1>
      <p style="margin:0 0 16px;color:#525a73;font-size:13px;">Received ${escapeHtml(meta.ts)}</p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:8px;">
        <tbody>
          ${rows
            .filter(([, v]) => v)
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 12px;background:#f6f7f9;border-radius:8px 0 0 8px;color:#67718c;font-size:12px;width:160px;vertical-align:top;text-transform:uppercase;letter-spacing:0.05em;">${escapeHtml(k)}</td>
              <td style="padding:8px 12px;background:#fafafa;border-radius:0 8px 8px 0;">${escapeHtml(String(v))}</td>
            </tr>
            <tr><td colspan="2" style="height:6px;"></td></tr>`
            )
            .join('')}
        </tbody>
      </table>

      <div style="margin-top:18px;padding:14px;background:#fff;border:1px solid #eceef2;border-radius:10px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.07em;color:#67718c;margin-bottom:6px;">Message</div>
        <div style="white-space:pre-wrap;font-size:14px;line-height:1.55;">${escapeHtml(s.message || '(no message)')}</div>
      </div>

      <div style="margin-top:20px;font-size:11px;color:#8590a8;line-height:1.6;">
        <div>IP: ${escapeHtml(meta.ip)}</div>
        <div>User-Agent: ${escapeHtml(meta.ua)}</div>
      </div>
    </div>`;

  return { subject, html, text };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let raw: Record<string, unknown>;
  try {
    raw = await parseBody(request);
  } catch {
    return jsonResponse({ ok: false, error: 'Bad payload' }, 400);
  }

  const s: Submission = {
    name: clean(raw.name, 200),
    email: clean(raw.email, 200),
    company: clean(raw.company, 200),
    phone: clean(raw.phone, 50),
    app: clean(raw.app, 60),
    hosting: clean(raw.hosting, 30),
    message: clean(raw.message, 5000),
    website: clean(raw.website, 200), // honeypot
    intent: clean(raw.intent, 100),
  };

  // Honeypot: if a bot filled it, fake success and drop the message.
  if (s.website) return jsonResponse({ ok: true });

  if (!s.name) return jsonResponse({ ok: false, error: 'Please share your name.' }, 422);
  if (!s.email || !isEmail(s.email)) return jsonResponse({ ok: false, error: 'A valid email address is required.' }, 422);
  if (!s.message) return jsonResponse({ ok: false, error: 'Please tell us a few lines about what you are trying to do.' }, 422);

  if (!env.RESEND_API_KEY) {
    return jsonResponse({ ok: false, error: 'Mail backend not configured.' }, 500);
  }

  const to = env.SALES_TO || DEFAULT_TO;
  const from = env.SALES_FROM || DEFAULT_FROM;
  const meta = {
    ip: request.headers.get('cf-connecting-ip') || 'unknown',
    ua: request.headers.get('user-agent') || 'unknown',
    ts: new Date().toISOString(),
  };
  const { subject, html, text } = renderEmail(s, meta);

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: s.email,
        subject,
        html,
        text,
      }),
    });
    if (!resp.ok) {
      const detail = await resp.text();
      console.error('Resend error', resp.status, detail);
      return jsonResponse({ ok: false, error: 'Could not send your message right now. Please email us directly.' }, 502);
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return jsonResponse({ ok: false, error: 'Could not reach the mail server. Please email us directly.' }, 502);
  }

  return jsonResponse({ ok: true });
};

// Reject anything that isn't POST so the route doesn't 404 on accidental GETs.
export const onRequest: PagesFunction<Env> = async ({ request }) => {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: { allow: 'POST' },
  });
};
