// Wave-6 / W5 — Topical-authority GST guide cluster (APPAA-67, parent APPAA-48).
// Informational / AEO pages that build topical authority + AI-citation surface
// for "how to" and "what is" GST queries. Distinct from the /answers/ QA hub
// (short Q&A): these are step-by-step / explainer guides under /guides/.
//
// English-first, data-driven. A single source of truth here also generates the
// JSON-LD @graph (Article + optional HowTo + FAQPage + WebPage + BreadcrumbList)
// so schema == visible text, mirroring usecase.ts / answers.ts.
//
// Product ground truth (do NOT invent features):
//   - Nidhi Books = GST billing + accounting (GST invoices, e-invoice/e-way bill,
//     GSTR-1 & GSTR-3B exports). Nidhi Inventory = stock. From ₹399/mo first app;
//     +₹99/mo per add-on; unlimited users (never per seat); prices exclude GST.
//   - 14-day free trial. No self-serve signup — CTA is /contact/ (/signup 404s).
// Editorial facts are general GST compliance information, current as of 2026-06.

const SITE_URL = 'https://399apps.com';
export const GUIDE_UPDATED = '2026-06-03';

export type GuideStep = { name: string; text: string };
export type GuideSection = {
  h2: string;
  body: string;
  body2?: string;
  bullets?: string[];
};
export type GuideFaq = { q: string; a: string };
export type RelatedLink = { label: string; href: string };

export type Guide = {
  slug: string;
  category: string;
  breadcrumbLeaf: string;
  seo: { title: string; description: string; keywords: string[] };
  hero: {
    eyebrow: string;
    h1: string;
    /** 40–60 word answer-first paragraph, optimized for snippet + AI citation. */
    directAnswer: string;
  };
  /** Optional ordered "how to" block → emits HowTo JSON-LD. */
  steps?: { h2: string; intro?: string; items: GuideStep[] };
  /** Prose H2 sections (definitions, rates, due dates, mistakes…). */
  sections: GuideSection[];
  /** Natural product mention rendered as a highlighted note (not the whole page). */
  productNote: string;
  faq: GuideFaq[];
  related: RelatedLink[];
};

export const GUIDES: Record<string, Guide> = {
  'how-to-file-gstr-1': {
    slug: 'how-to-file-gstr-1',
    category: 'GST returns',
    breadcrumbLeaf: 'How to file GSTR-1',
    seo: {
      title:
        'How to File GSTR-1: Step-by-Step Guide, Due Dates & Format (2026) | 399Apps',
      description:
        'A step-by-step guide to filing GSTR-1 on the GST portal — what GSTR-1 is, who must file it, monthly vs QRMP due dates, the details you need, and how it feeds GSTR-2B and GSTR-3B. Plus how Nidhi Books auto-prepares your GSTR-1.',
      keywords: [
        'how to file gstr-1',
        'gstr 1 filing',
        'gstr-1 due date',
        'gstr 1 return',
        'file gstr1 on gst portal',
        'gstr-1 step by step',
      ],
    },
    hero: {
      eyebrow: 'GST returns guide',
      h1: 'How to file GSTR-1: a step-by-step guide',
      directAnswer:
        'GSTR-1 is the monthly or quarterly GST return where you report all outward supplies (sales). To file it, log in to the GST portal, open the Returns Dashboard, select the period, add your B2B, B2C, export and credit/debit-note details (or upload them in bulk), generate the summary, then submit with a DSC or EVC.',
    },
    steps: {
      h2: 'How to file GSTR-1 on the GST portal: step by step',
      intro:
        'You file GSTR-1 online at gst.gov.in. The same steps apply whether you file monthly or quarterly under QRMP.',
      items: [
        {
          name: 'Log in to the GST portal',
          text: 'Go to gst.gov.in, log in with your credentials, and open Services → Returns → Returns Dashboard.',
        },
        {
          name: 'Select the return period',
          text: 'Choose the financial year and the month or quarter, then click "Prepare Online" (or "Prepare Offline" for bulk upload) under the GSTR-1/IFF tile.',
        },
        {
          name: 'Add your outward supplies, table by table',
          text: 'Enter invoice details: Table 4 (B2B), Table 5 (large inter-state B2C), Table 6 (exports), Table 7 (consolidated B2C), Table 9B (credit/debit notes), Table 12 (HSN summary) and Table 13 (documents issued).',
        },
        {
          name: 'Upload in bulk (optional)',
          text: 'For high invoice volume, generate a JSON from the GST Offline Tool or your accounting software and upload it instead of keying invoices one by one.',
        },
        {
          name: 'Generate the summary and preview',
          text: 'Click "Generate GSTR-1 Summary", then open the preview to check totals and fix any errors before you file.',
        },
        {
          name: 'Submit and file',
          text: 'File with a Digital Signature Certificate (companies/LLPs) or EVC (OTP). Once filed, your B2B values flow into your buyers’ GSTR-2B and auto-populate your own GSTR-3B liability.',
        },
      ],
    },
    sections: [
      {
        h2: 'What is GSTR-1?',
        body: 'GSTR-1 is a return that captures every outward supply (sale) a GST-registered business makes in a tax period — B2B and B2C invoices, exports, credit and debit notes, and advances. It is the source document that feeds the GST system: the data you report here populates your customers’ input-tax-credit statement (GSTR-2B) and pre-fills your own summary return (GSTR-3B).',
        body2:
          'Because GSTR-1 drives ITC for your buyers, accuracy matters — a missed or wrong invoice can block your customer’s credit and trigger reconciliation queries.',
      },
      {
        h2: 'Who must file GSTR-1 and when (due dates)',
        body: 'Every regular GST-registered taxpayer must file GSTR-1, even for a nil period. Your frequency depends on turnover and the QRMP scheme:',
        bullets: [
          'Monthly filers: due by the 11th of the following month.',
          'Quarterly (QRMP) filers — turnover up to ₹5 crore: GSTR-1 due by the 13th of the month after the quarter.',
          'QRMP taxpayers can optionally upload B2B invoices in the first two months of a quarter using the Invoice Furnishing Facility (IFF), due by the 13th.',
          'Composition dealers file CMP-08/GSTR-4 instead, not GSTR-1.',
        ],
      },
      {
        h2: 'Details and documents you need',
        body: 'Before you start, keep your sales invoices, export and SEZ documents, advance receipts and adjustments, and any credit/debit notes for the period ready. You will also need the correct HSN/SAC codes and tax rates for each item, plus the place of supply for inter-state sales so CGST/SGST or IGST is applied correctly.',
      },
      {
        h2: 'What happens after you file: GSTR-1A, GSTR-2B and GSTR-3B',
        body: 'After filing, the system locks most fields for the period. If you spot an error, GSTR-1A lets you amend the same period before you file GSTR-3B; otherwise corrections move to the next period’s amendment tables. Your filed B2B data appears in each buyer’s GSTR-2B (their ITC), and your outward-supply liability auto-populates GSTR-3B — so a correct, on-time GSTR-1 makes GSTR-3B faster and cleaner.',
      },
      {
        h2: 'Common GSTR-1 filing mistakes to avoid',
        body: 'The most frequent errors are: reporting B2B invoices as B2C (which denies your buyer ITC), using the wrong place of supply (charging CGST/SGST instead of IGST), missing the HSN summary in Table 12, skipping credit/debit notes, and filing after the due date — which attracts a late fee and delays your GSTR-3B.',
      },
    ],
    productNote:
      'Nidhi Books (by 399Apps) prepares your GSTR-1 automatically: every GST invoice you raise is tagged with the right HSN, place of supply and tax split, and the app exports a CA-ready GSTR-1 (B2B, B2C and HSN summary) you can upload to the portal — so filing is a review, not a re-entry job.',
    faq: [
      {
        q: 'What is the due date for GSTR-1?',
        a: 'Monthly filers must file GSTR-1 by the 11th of the following month. Quarterly (QRMP) filers with turnover up to ₹5 crore file by the 13th of the month after the quarter, with optional IFF uploads in the first two months.',
      },
      {
        q: 'Is GSTR-1 mandatory if there are no sales?',
        a: 'Yes. A regular taxpayer must file a nil GSTR-1 even with no outward supplies in the period. You can file a nil return quickly on the portal or by SMS, but skipping it still attracts a late fee.',
      },
      {
        q: 'Can I revise GSTR-1 after filing?',
        a: 'GSTR-1 cannot be revised once filed, but you can correct errors. Use GSTR-1A to amend the same period before filing GSTR-3B, or report the correction in the amendment tables (9A/9C) of a later period.',
      },
      {
        q: 'What is the difference between GSTR-1 and GSTR-3B?',
        a: 'GSTR-1 is a detailed, invoice-level statement of outward supplies. GSTR-3B is a summary return where you declare total supplies, claim input tax credit and pay net GST. GSTR-1 data now auto-populates much of GSTR-3B.',
      },
      {
        q: 'What happens if I file GSTR-1 late?',
        a: 'Late filing attracts a late fee of ₹50 per day (₹20 per day for nil returns), split between CGST and SGST and subject to turnover-based caps. It also delays your buyers’ input tax credit and your own GSTR-3B.',
      },
    ],
    related: [
      { label: 'How to file GSTR-3B', href: '/guides/how-to-file-gstr-3b/' },
      { label: 'GST late fees & interest', href: '/guides/gst-late-fees-and-interest/' },
      { label: 'GSTR-1 — glossary definition', href: '/glossary/#gstr-1' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'GST billing software cheaper than Tally?', href: '/answers/gst-billing-software-cheaper-than-tally/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
    ],
  },

  'how-to-file-gstr-3b': {
    slug: 'how-to-file-gstr-3b',
    category: 'GST returns',
    breadcrumbLeaf: 'How to file GSTR-3B',
    seo: {
      title:
        'How to File GSTR-3B: Step-by-Step Guide, Due Dates & ITC (2026) | 399Apps',
      description:
        'A step-by-step guide to filing GSTR-3B — what it is, monthly vs QRMP due dates, how Tables 3.1 and 4 auto-populate from GSTR-1 and GSTR-2B, how to claim ITC and pay tax, and the mistakes to avoid. Plus how Nidhi Books prepares it.',
      keywords: [
        'how to file gstr-3b',
        'gstr 3b filing',
        'gstr-3b due date',
        'gstr 3b return',
        'gstr-3b itc',
        'file gstr3b step by step',
      ],
    },
    hero: {
      eyebrow: 'GST returns guide',
      h1: 'How to file GSTR-3B: a step-by-step guide',
      directAnswer:
        'GSTR-3B is the monthly self-assessed summary return where you declare total outward supplies, the input tax credit (ITC) you claim and the net GST payable. To file it, log in to the GST portal, open the GSTR-3B tile for the period, verify the auto-filled values, offset your liability with ITC and cash, then submit with a DSC or EVC.',
    },
    steps: {
      h2: 'How to file GSTR-3B on the GST portal: step by step',
      intro:
        'GSTR-3B is filed online at gst.gov.in. Much of it now auto-populates from your GSTR-1 and GSTR-2B, so most of the work is verification.',
      items: [
        {
          name: 'Log in and open GSTR-3B',
          text: 'Go to Services → Returns → Returns Dashboard, select the period, and click "Prepare Online" under the Monthly Return GSTR-3B tile.',
        },
        {
          name: 'Review the auto-populated values',
          text: 'Table 3.1 (outward supplies) is pre-filled from your GSTR-1 and Table 4 (ITC) from GSTR-2B. Cross-check both against your books before accepting.',
        },
        {
          name: 'Enter the remaining details',
          text: 'Add Table 3.2 (inter-state supplies to unregistered/composition persons), Table 3.1.1 (e-commerce supplies, where applicable) and any reverse-charge liability.',
        },
        {
          name: 'Confirm and claim eligible ITC',
          text: 'In Table 4, accept the eligible input tax credit from GSTR-2B and reverse blocked or ineligible credit (Section 17(5), personal use, etc.).',
        },
        {
          name: 'Check the liability and pay',
          text: 'The portal computes net tax payable after ITC. Create a challan (PMT-06) and pay any cash shortfall via net banking, UPI or NEFT/RTGS so the cash ledger covers the liability.',
        },
        {
          name: 'Offset and file',
          text: 'Click "Make Payment / Set-off" to use ITC and cash against the liability, then file the return with a DSC (companies/LLPs) or EVC (OTP).',
        },
      ],
    },
    sections: [
      {
        h2: 'What is GSTR-3B?',
        body: 'GSTR-3B is a self-declared summary return that every regular GST taxpayer files for each tax period. Unlike GSTR-1 (which is invoice-level), GSTR-3B reports consolidated figures: total outward supplies, inward supplies liable to reverse charge, the input tax credit claimed, and the net GST paid in cash. It is the return through which tax is actually paid.',
        body2:
          'GSTR-3B cannot be revised once filed, so the summary you submit — and the ITC you claim — is final for that period and is reconciled against your GSTR-1 and GSTR-2B.',
      },
      {
        h2: 'GSTR-3B due dates (monthly and QRMP)',
        body: 'Your due date depends on whether you file monthly or under the QRMP scheme:',
        bullets: [
          'Monthly filers: due by the 20th of the following month.',
          'QRMP (quarterly) filers: due by the 22nd or 24th of the month after the quarter, staggered by your principal state of registration.',
          'QRMP taxpayers still pay tax monthly for the first two months of a quarter via challan PMT-06 (the 35% / self-assessment method).',
        ],
      },
      {
        h2: 'GSTR-3B vs GSTR-1: how they connect',
        body: 'GSTR-1 reports the invoice-level detail of your sales; GSTR-3B is the summary on which you pay tax. The GST system now links them: your outward-supply liability in GSTR-3B Table 3.1 auto-populates from GSTR-1, and your ITC in Table 4 auto-populates from GSTR-2B. Filing an accurate GSTR-1 first therefore makes GSTR-3B faster and reduces mismatch notices.',
      },
      {
        h2: 'Auto-population and locking of values',
        body: 'To curb errors and fake-ITC claims, the portal increasingly pre-fills and hard-locks GSTR-3B fields from GSTR-1/IFF and GSTR-2B. You can still report genuine adjustments where allowed, but large unexplained deviations from the auto-filled liability or ITC can trigger system flags — so reconcile your books to GSTR-2B before filing.',
      },
      {
        h2: 'Common GSTR-3B mistakes to avoid',
        body: 'Watch for: claiming ITC not reflected in GSTR-2B, forgetting to reverse blocked or ineligible credit, missing reverse-charge liability, mismatches between GSTR-1 and GSTR-3B outward supplies, and late filing — which attracts 18% interest on tax paid late plus a per-day late fee.',
      },
    ],
    productNote:
      'Nidhi Books (by 399Apps) keeps your books GSTR-3B-ready: it tracks output tax on every invoice and eligible ITC on purchases, and exports a GSTR-3B summary that matches your GSTR-1 — so you reconcile and file with confidence instead of re-keying totals.',
    faq: [
      {
        q: 'What is the due date for GSTR-3B?',
        a: 'Monthly filers must file GSTR-3B by the 20th of the following month. QRMP (quarterly) filers file by the 22nd or 24th of the month after the quarter, depending on their state, while paying tax monthly via PMT-06 in the first two months.',
      },
      {
        q: 'Can GSTR-3B be revised after filing?',
        a: 'No. GSTR-3B cannot be revised once filed. Any error or omission must be corrected in a subsequent period’s GSTR-3B (for example, adding missed liability or reversing wrongly claimed ITC), so verify the values carefully before you submit.',
      },
      {
        q: 'How is ITC claimed in GSTR-3B?',
        a: 'Eligible input tax credit is claimed in Table 4, auto-populated from your GSTR-2B. You accept the eligible credit and reverse any blocked or ineligible ITC (such as Section 17(5) items), then the net credit reduces your cash tax payable.',
      },
      {
        q: 'Is GSTR-3B mandatory for a nil return?',
        a: 'Yes. A regular taxpayer must file GSTR-3B every period, even when there is no liability. A nil GSTR-3B can be filed in a few clicks or by SMS, but missing it still attracts a late fee.',
      },
      {
        q: 'What is the difference between GSTR-3B and GSTR-1?',
        a: 'GSTR-1 is a detailed, invoice-level statement of outward supplies; GSTR-3B is a consolidated summary on which you claim ITC and pay net GST. GSTR-1 now auto-populates much of GSTR-3B, so the two must reconcile.',
      },
    ],
    related: [
      { label: 'How to file GSTR-1', href: '/guides/how-to-file-gstr-1/' },
      { label: 'GST late fees & interest', href: '/guides/gst-late-fees-and-interest/' },
      { label: 'GSTR-3B — glossary definition', href: '/glossary/#gstr-3b' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'How much does GST accounting software cost per month?', href: '/answers/gst-accounting-software-cost-per-month-india/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
    ],
  },

  'what-is-e-invoicing-under-gst': {
    slug: 'what-is-e-invoicing-under-gst',
    category: 'GST compliance',
    breadcrumbLeaf: 'What is e-invoicing under GST',
    seo: {
      title:
        'What is E-Invoicing Under GST? Turnover Limit, IRN & QR Code (2026) | 399Apps',
      description:
        'E-invoicing under GST explained — what it is, the ₹5 crore turnover threshold, who is exempt, how the IRP generates an IRN and QR code, the 30-day reporting limit, and how to generate an e-invoice. Plus how Nidhi Books handles it automatically.',
      keywords: [
        'what is e-invoicing under gst',
        'e-invoice gst',
        'e invoicing turnover limit',
        'irn and qr code',
        'gst e-invoice applicability',
        'how to generate e-invoice',
      ],
    },
    hero: {
      eyebrow: 'GST compliance guide',
      h1: 'What is e-invoicing under GST?',
      directAnswer:
        'E-invoicing under GST is the system where B2B invoices are uploaded to a government Invoice Registration Portal (IRP), which validates them and returns a unique Invoice Reference Number (IRN) and a digitally signed QR code. It is mandatory for businesses whose annual aggregate turnover exceeds ₹5 crore in any year since 2017-18.',
    },
    steps: {
      h2: 'How to generate an e-invoice: step by step',
      intro:
        'You do not type invoices into a government site. Your billing software prepares the data and exchanges it with the IRP automatically.',
      items: [
        {
          name: 'Create the invoice with all GST fields',
          text: 'Raise the B2B invoice in your accounting/billing software with GSTIN, HSN/SAC, taxable value and tax split — exactly as on a normal tax invoice.',
        },
        {
          name: 'Generate the e-invoice JSON',
          text: 'The software converts the invoice into the standard e-invoice schema (Form INV-01 / JSON).',
        },
        {
          name: 'Upload to the IRP',
          text: 'The JSON is sent to an Invoice Registration Portal (the NIC IRP or another approved IRP) over API.',
        },
        {
          name: 'Receive the IRN and signed QR code',
          text: 'The IRP validates the invoice, generates a unique 64-character Invoice Reference Number (IRN), digitally signs it and returns a QR code.',
        },
        {
          name: 'Share the invoice with the IRN and QR',
          text: 'Print or send the invoice showing the IRN and signed QR code — this is now the legally valid B2B tax invoice.',
        },
        {
          name: 'Auto-flow to GST returns and e-way bill',
          text: 'The reported invoice auto-populates your GSTR-1, and an e-way bill can be generated from the same data for movement of goods.',
        },
      ],
    },
    sections: [
      {
        h2: 'What is e-invoicing under GST?',
        body: 'E-invoicing (electronic invoicing) does not mean generating an invoice on a government website. It means reporting a B2B invoice you have already created to a government Invoice Registration Portal (IRP) in a standard format, so the portal can authenticate it and issue an Invoice Reference Number (IRN) and a signed QR code. Only an invoice carrying a valid IRN is treated as a legal tax invoice for businesses covered by the rule.',
      },
      {
        h2: 'Who must comply: the turnover threshold',
        body: 'E-invoicing applies based on aggregate annual turnover, which has been lowered in phases since 2020:',
        bullets: [
          'Mandatory for businesses with aggregate turnover above ₹5 crore in any financial year from 2017-18 onwards (effective 1 August 2023).',
          'Applies to B2B supplies, supplies to SEZ, exports, and credit/debit notes.',
          'It does not apply to B2C invoices (though a dynamic QR code applies separately for large B2C suppliers).',
          'Exempt categories include banks and financial institutions, insurers, goods transport agencies, passenger-transport services, cinema/multiplex admission, and SEZ units (not SEZ developers).',
        ],
      },
      {
        h2: 'How e-invoicing works: IRP, IRN and QR code',
        body: 'The flow is: your software creates the invoice, converts it to the e-invoice JSON schema, and sends it to an IRP. The IRP checks for duplicates, validates the structure, generates the unique IRN, digitally signs the payload, and returns a QR code that encodes the key invoice details. The signed invoice then auto-populates GSTR-1 and can feed the e-way bill system — removing duplicate data entry.',
      },
      {
        h2: 'The 30-day reporting time limit',
        body: 'To keep reporting timely, the GST Network applies a time limit for uploading invoices to the IRP. From 1 April 2025, taxpayers with an aggregate annual turnover of ₹10 crore or more must report e-invoices within 30 days of the invoice date; after that window the IRP will reject the invoice. Businesses near the threshold should report promptly rather than batch invoices at month-end.',
      },
      {
        h2: 'Benefits of e-invoicing',
        body: 'Because the invoice is authenticated at source, e-invoicing reduces fake invoices and ITC fraud, removes duplicate data entry across GSTR-1 and the e-way bill, speeds up your buyers’ input tax credit (the data appears in their GSTR-2B), and cuts reconciliation effort at month-end.',
      },
    ],
    productNote:
      'Nidhi Books (by 399Apps) supports e-invoicing and e-way bill generation above the applicable thresholds: it builds the e-invoice JSON, fetches the IRN and QR code from the IRP, and prints them on the invoice — so a ₹5-crore-plus business stays compliant without a separate utility or manual uploads.',
    faq: [
      {
        q: 'What is the turnover limit for e-invoicing under GST?',
        a: 'E-invoicing is mandatory for businesses with aggregate annual turnover above ₹5 crore in any financial year since 2017-18, effective 1 August 2023. The threshold has been reduced in stages from the original ₹500 crore.',
      },
      {
        q: 'Is e-invoicing required for B2C invoices?',
        a: 'No. E-invoicing applies to B2B supplies, supplies to SEZ, exports and credit/debit notes — not to B2C invoices. Large B2C suppliers have a separate dynamic-QR-code requirement instead of IRN-based e-invoicing.',
      },
      {
        q: 'What is an IRN in e-invoicing?',
        a: 'An IRN (Invoice Reference Number) is a unique 64-character hash the Invoice Registration Portal generates for each reported invoice. Along with a digitally signed QR code, it authenticates the invoice as a valid GST tax invoice.',
      },
      {
        q: 'Is there a time limit to generate an e-invoice?',
        a: 'Yes. From 1 April 2025, taxpayers with aggregate annual turnover of ₹10 crore or more must report invoices to the IRP within 30 days of the invoice date, after which the portal rejects them.',
      },
      {
        q: 'Who is exempt from e-invoicing?',
        a: 'Banks and financial institutions, insurers, goods transport agencies, passenger-transport operators, cinema/multiplex admissions and SEZ units are exempt, as are businesses below the ₹5 crore turnover threshold.',
      },
    ],
    related: [
      { label: 'E-invoice — glossary definition', href: '/glossary/#e-invoice' },
      { label: 'How to file GSTR-1', href: '/guides/how-to-file-gstr-1/' },
      { label: 'Best e-invoicing software (India)', href: '/best/e-invoicing-software-india/' },
      { label: 'GST software for traders & wholesalers', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
    ],
  },

  'gst-late-fees-and-interest': {
    slug: 'gst-late-fees-and-interest',
    category: 'GST compliance',
    breadcrumbLeaf: 'GST late fees & interest',
    seo: {
      title:
        'GST Late Fees & Interest: Rates, Caps & How They’re Calculated (2026) | 399Apps',
      description:
        'How GST late fees and interest work — ₹50/day (₹20 nil) late fee, turnover-based caps, 18% interest on late tax, GSTR-9 and GSTR-4 fees, plus a worked example and how to avoid them. Nidhi Books helps you file GSTR-1 and GSTR-3B on time.',
      keywords: [
        'gst late fee',
        'gst late fees and interest',
        'gstr-3b late fee',
        'gst late payment interest',
        'gst late fee calculator',
        'gst penalty for late filing',
      ],
    },
    hero: {
      eyebrow: 'GST compliance guide',
      h1: 'GST late fees and interest, explained',
      directAnswer:
        'If you file a GST return after the due date, you pay a late fee of ₹50 per day (₹20 per day for nil returns), split equally between CGST and SGST, plus 18% annual interest on any tax paid late. Late fees are capped based on your turnover and the type of return, so they do not grow without limit.',
    },
    sections: [
      {
        h2: 'What is the GST late fee?',
        body: 'A GST late fee is a fixed per-day charge for filing a return after its due date, levied under the GST law. It is separate from interest: the late fee is a flat amount per day of delay (regardless of tax due), while interest is charged only on tax that is actually paid late. Both apply together when you miss a deadline with an outstanding liability.',
      },
      {
        h2: 'Late fee rates by return type',
        body: 'For the common monthly/quarterly returns (GSTR-1 and GSTR-3B), the late fee is:',
        bullets: [
          'Returns with tax liability: ₹50 per day (₹25 CGST + ₹25 SGST).',
          'Nil returns: ₹20 per day (₹10 CGST + ₹10 SGST).',
          'Maximum (cap) for GSTR-3B/GSTR-1 is linked to turnover: ₹2,000 for nil/up to ₹1.5 crore, ₹5,000 up to ₹5 crore, and ₹10,000 above ₹5 crore (₹500 each side for nil returns).',
          'GSTR-9 (annual return): ₹200 per day (₹100 + ₹100), capped at a percentage of turnover.',
          'GSTR-4 (composition): ₹50 per day (₹20 for nil), capped at ₹2,000 (₹500 for nil).',
        ],
      },
      {
        h2: 'Interest on late GST payment',
        body: 'Interest applies separately from the late fee, on the tax you pay late:',
        bullets: [
          '18% per annum on the net tax liability paid after the due date, calculated for the number of days of delay.',
          '24% per annum where excess or ineligible input tax credit is claimed and utilised.',
          'Interest is computed on the net cash liability (after ITC set-off), not the gross tax, for delayed GSTR-3B payments.',
        ],
      },
      {
        h2: 'How late fee and interest are calculated: an example',
        body: 'Suppose your GSTR-3B for a month is due on the 20th but you file 10 days late with a net tax liability of ₹40,000. Late fee = 10 days × ₹50 = ₹500 (₹250 CGST + ₹250 SGST). Interest = ₹40,000 × 18% × 10/365 ≈ ₹197. Total extra cost ≈ ₹697 — and your buyers’ ITC and your next return are delayed too. A nil return filed 10 days late would cost only the ₹200 late fee, with no interest.',
      },
      {
        h2: 'How to avoid GST late fees and interest',
        body: 'Track each return’s due date (GSTR-1 on the 11th/13th, GSTR-3B on the 20th/22nd/24th), keep your books reconciled to GSTR-2B so there are no last-minute surprises, file nil returns on time rather than ignoring them, and pay any cash liability before the deadline so interest does not accrue. Using software that flags due dates and pre-fills returns is the simplest safeguard.',
      },
    ],
    productNote:
      'Nidhi Books (by 399Apps) keeps your GSTR-1 and GSTR-3B data ready ahead of each deadline, so on-time filing is a quick review instead of a month-end scramble — the cheapest way to avoid late fees and 18% interest is simply never to miss the due date.',
    faq: [
      {
        q: 'What is the late fee for GSTR-3B?',
        a: 'The GSTR-3B late fee is ₹50 per day (₹25 CGST + ₹25 SGST) for returns with tax, and ₹20 per day (₹10 + ₹10) for nil returns. It is capped by turnover, from ₹2,000 up to ₹10,000.',
      },
      {
        q: 'How much interest is charged on late GST payment?',
        a: 'Interest is 18% per annum on the net tax paid after the due date, calculated day-wise. A higher 24% per annum applies where excess or ineligible input tax credit has been claimed and used.',
      },
      {
        q: 'Is there a late fee for nil GST returns?',
        a: 'Yes, but at a reduced rate of ₹20 per day (₹10 CGST + ₹10 SGST), capped at ₹500 each side. No interest applies to a nil return because there is no unpaid tax — only the late fee.',
      },
      {
        q: 'Is the GST late fee capped?',
        a: 'Yes. For GSTR-1/GSTR-3B the cap is linked to turnover — ₹2,000 (up to ₹1.5 crore), ₹5,000 (up to ₹5 crore) and ₹10,000 (above ₹5 crore) — so the fee does not increase indefinitely with delay.',
      },
      {
        q: 'Can GST late fee or interest be waived?',
        a: 'Late fees and interest are generally payable, but the government periodically announces amnesty schemes that waive or reduce late fees for specified past periods. Interest waivers are rare; check the latest GST notifications for any active relief.',
      },
    ],
    related: [
      { label: 'How to file GSTR-3B', href: '/guides/how-to-file-gstr-3b/' },
      { label: 'How to file GSTR-1', href: '/guides/how-to-file-gstr-1/' },
      { label: 'GSTR-3B — glossary definition', href: '/glossary/#gstr-3b' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
    ],
  },

  'gst-invoice-format': {
    slug: 'gst-invoice-format',
    category: 'GST billing',
    breadcrumbLeaf: 'GST invoice format',
    seo: {
      title:
        'GST Invoice Format: Mandatory Fields, Rules & Free Template (2026) | 399Apps',
      description:
        'The GST invoice format explained — every mandatory field under Rule 46, tax invoice vs bill of supply, time limits to issue, and invoice numbering rules, plus how to make a GST-compliant invoice. Nidhi Books fills it all automatically.',
      keywords: [
        'gst invoice format',
        'gst invoice mandatory fields',
        'tax invoice format under gst',
        'gst bill format',
        'gst invoice rules',
        'how to make gst invoice',
      ],
    },
    hero: {
      eyebrow: 'GST billing guide',
      h1: 'GST invoice format: mandatory fields and rules',
      directAnswer:
        'A GST tax invoice must show the supplier’s and recipient’s name, address and GSTIN, a unique consecutive invoice number (up to 16 characters) and date, the HSN/SAC code, item description, quantity, taxable value, the GST rate and amount split into CGST/SGST or IGST, the place of supply, and the supplier’s signature or digital signature.',
    },
    steps: {
      h2: 'How to make a GST-compliant invoice: step by step',
      intro:
        'Whether you use software or a template, a valid GST invoice needs the same fields in the same logical order.',
      items: [
        {
          name: 'Add your business details and GSTIN',
          text: 'Put your trade name, address and GSTIN at the top, with the title "Tax Invoice".',
        },
        {
          name: 'Assign a unique invoice number and date',
          text: 'Use a consecutive serial number (maximum 16 characters, letters/numbers/hyphen/slash) unique for the financial year, plus the invoice date.',
        },
        {
          name: 'Enter the customer details and place of supply',
          text: 'Add the recipient’s name, address, GSTIN (if registered) and the place of supply — this decides whether you charge CGST+SGST or IGST.',
        },
        {
          name: 'List the items with HSN/SAC',
          text: 'For each line add the description, HSN/SAC code, quantity, unit, rate and taxable value (after any discount).',
        },
        {
          name: 'Apply the correct GST',
          text: 'Charge CGST + SGST for intra-state supplies or IGST for inter-state supplies, showing the rate and amount for each tax head.',
        },
        {
          name: 'Show totals, reverse charge and signature',
          text: 'Add the total taxable value, total tax, invoice total (in figures and words), whether tax is payable on reverse charge, and the authorised signature or digital signature.',
        },
      ],
    },
    sections: [
      {
        h2: 'What is a GST invoice?',
        body: 'A GST invoice (tax invoice) is the document a registered supplier must issue for a taxable supply of goods or services. It records what was sold, to whom, at what value, and how much GST applies — and it is the basis on which the buyer claims input tax credit. The mandatory contents are set out in Rule 46 of the CGST Rules.',
      },
      {
        h2: 'Mandatory fields in a GST invoice (Rule 46)',
        body: 'A compliant tax invoice must contain:',
        bullets: [
          'Supplier’s name, address and GSTIN.',
          'A consecutive invoice number, unique for the financial year (up to 16 characters).',
          'Date of issue.',
          'Recipient’s name, address and GSTIN (or state and place of supply if unregistered and value above ₹50,000).',
          'HSN code for goods or SAC for services.',
          'Description, quantity/unit, and total value of goods or services.',
          'Taxable value after discount, the GST rate, and the tax amount split into CGST, SGST/UTGST or IGST (and cess if any).',
          'Place of supply and the state code for inter-state sales.',
          'Whether GST is payable on reverse charge.',
          'Signature or digital signature of the supplier or authorised person.',
        ],
      },
      {
        h2: 'Tax invoice vs bill of supply',
        body: 'A tax invoice is issued when GST is charged on a taxable supply. A bill of supply is issued instead when no GST is charged — for example by a composition dealer or for exempt/nil-rated goods — and it omits the tax break-up. Charging GST on a bill of supply, or issuing a bill of supply where a tax invoice is required, is a compliance error.',
      },
      {
        h2: 'Time limits to issue a GST invoice',
        body: 'For goods, the invoice must be issued on or before the removal or delivery of the goods. For services, it must be issued within 30 days of supplying the service (45 days for banks, insurers and financial institutions). Issuing invoices late or out of sequence can create GST and reconciliation problems.',
      },
      {
        h2: 'Invoice numbering rules',
        body: 'Invoice numbers must be consecutive, unique for the financial year, and no longer than 16 characters using only letters, numbers, hyphen and slash. You may run multiple series (for example per branch or per type), but each must be unique and unbroken — gaps or duplicates raise questions during scrutiny.',
      },
    ],
    productNote:
      'Nidhi Books (by 399Apps) generates GST-compliant tax invoices automatically — correct invoice numbering, HSN/SAC, place-of-supply-based CGST/SGST or IGST, a UPI QR on the PDF, and e-invoice/IRN where required — so every bill meets Rule 46 without manual checking.',
    faq: [
      {
        q: 'What are the mandatory fields in a GST invoice?',
        a: 'A GST invoice must show the supplier and recipient name, address and GSTIN, a unique consecutive invoice number and date, HSN/SAC, item description and quantity, taxable value, GST rate and amount (CGST/SGST or IGST), place of supply, and the supplier’s signature.',
      },
      {
        q: 'What is the maximum length of a GST invoice number?',
        a: 'A GST invoice number can be up to 16 characters, using letters, numbers, hyphen (-) and slash (/). It must be consecutive and unique for the financial year; you may run multiple series as long as each is unbroken.',
      },
      {
        q: 'What is the difference between a tax invoice and a bill of supply?',
        a: 'A tax invoice is issued when GST is charged on a taxable supply and shows the tax break-up. A bill of supply is issued when no GST is charged — by composition dealers or for exempt supplies — and omits the tax amount.',
      },
      {
        q: 'What is the time limit to issue a GST invoice?',
        a: 'For goods, the invoice must be issued on or before removal or delivery. For services, it must be issued within 30 days of supply (45 days for banks, NBFCs and insurers).',
      },
      {
        q: 'Is a signature mandatory on a GST invoice?',
        a: 'Yes. A GST invoice must carry the physical or digital signature of the supplier or an authorised person. A digital signature or a valid e-invoice QR/IRN satisfies this requirement for electronically issued invoices.',
      },
    ],
    related: [
      { label: 'What is e-invoicing under GST', href: '/guides/what-is-e-invoicing-under-gst/' },
      { label: 'GST — glossary definition', href: '/glossary/#gst' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Cheapest invoicing software with unlimited users?', href: '/answers/cheapest-invoicing-software-unlimited-users/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
    ],
  },
};

export function getGuide(slug: string): Guide | undefined {
  return GUIDES[slug];
}

export const GUIDES_ORDER = [
  'how-to-file-gstr-1',
  'how-to-file-gstr-3b',
  'what-is-e-invoicing-under-gst',
  'gst-late-fees-and-interest',
  'gst-invoice-format',
] as const;

export const GUIDES_HUB = {
  title: 'GST guides: filing GSTR-1 & GSTR-3B, e-invoicing, invoices & late fees',
  metaTitle: 'GST Guides — GSTR-1, GSTR-3B, E-Invoicing & Late Fees (India) | 399Apps',
  metaDescription:
    'Step-by-step GST guides for Indian businesses — how to file GSTR-1 and GSTR-3B, what e-invoicing under GST means, the GST invoice format, and how GST late fees and interest work.',
  lede:
    'Clear, step-by-step guides to GST compliance for Indian small businesses — filing your returns, e-invoicing, invoice format and late fees — written answer-first so you (and AI assistants) get the point fast.',
  keywords: [
    'gst guides india',
    'how to file gst returns',
    'gst compliance guide',
    'gstr-1 gstr-3b e-invoicing',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD: single source of truth → @graph generated from the content above.
// Each guide emits Organization, WebSite, WebPage, Article, (HowTo if steps),
// FAQPage, BreadcrumbList. Apex + trailing slash only; never www.
// ---------------------------------------------------------------------------

const ORG_NODE = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '399Apps',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
};

const WEBSITE_NODE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: '399Apps',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export function buildGuideGraph(slug: string) {
  const g = GUIDES[slug];
  if (!g) throw new Error(`Unknown guide slug: ${slug}`);
  const base = `${SITE_URL}/guides/${slug}/`;

  const graph: Record<string, unknown>[] = [
    ORG_NODE,
    WEBSITE_NODE,
    {
      '@type': 'WebPage',
      '@id': `${base}#webpage`,
      url: base,
      name: g.seo.title,
      description: g.seo.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${base}#breadcrumb` },
      primaryImageOfPage: { '@id': `${SITE_URL}/#logo` },
    },
    {
      '@type': 'Article',
      '@id': `${base}#article`,
      headline: g.hero.h1,
      description: g.hero.directAnswer,
      articleSection: g.category,
      inLanguage: 'en-IN',
      datePublished: GUIDE_UPDATED,
      dateModified: GUIDE_UPDATED,
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${base}#webpage` },
      mainEntityOfPage: { '@id': `${base}#webpage` },
      keywords: g.seo.keywords.join(', '),
    },
    {
      '@type': 'FAQPage',
      '@id': `${base}#faq`,
      isPartOf: { '@id': `${base}#webpage` },
      mainEntity: g.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${base}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides/` },
        { '@type': 'ListItem', position: 3, name: g.breadcrumbLeaf, item: base },
      ],
    },
  ];

  if (g.steps) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${base}#howto`,
      name: g.steps.h2,
      description: g.steps.intro ?? g.hero.directAnswer,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${base}#webpage` },
      step: g.steps.items.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
        url: `${base}#step-${i + 1}`,
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function buildGuidesHubGraph() {
  const base = `${SITE_URL}/guides/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG_NODE,
      WEBSITE_NODE,
      {
        '@type': 'CollectionPage',
        '@id': `${base}#webpage`,
        url: base,
        name: GUIDES_HUB.metaTitle,
        description: GUIDES_HUB.metaDescription,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${base}#breadcrumb` },
        mainEntity: { '@id': `${base}#itemlist` },
      },
      {
        '@type': 'ItemList',
        '@id': `${base}#itemlist`,
        itemListElement: GUIDES_ORDER.map((slug, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/guides/${slug}/`,
          name: GUIDES[slug].breadcrumbLeaf,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: base },
        ],
      },
    ],
  };
}
