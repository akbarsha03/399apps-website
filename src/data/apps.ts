export type AppPricing = {
  plan: string;
  audience: 'B2B' | 'B2C' | 'B2B / B2C';
  cloud: { yearly: string; note?: string };
  selfHost: { yearly: string; note?: string };
};

export type AppDetailGroup = {
  title: string;
  description?: string;
  items: { title: string; body: string }[];
};

export type AppDetailSection = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  groups: AppDetailGroup[];
  note?: string;
};

export type App = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  oneLiner: string;
  hero: string;
  description: string;
  icon: string;
  accent: string;
  status: 'available' | 'beta' | 'soon';
  features: { title: string; body: string }[];
  audiences: string[];
  industries: string[];
  pricing: AppPricing[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  sections?: AppDetailSection[];
};

// Same yearly pricing for every standalone product in the 399apps catalogue.
// Unlimited users + unlimited exports on every plan.
// Growth includes one free core-workflow customisation.
export const STANDARD_PRICING: AppPricing[] = [
  {
    plan: 'Starter',
    audience: 'B2B / B2C',
    cloud: { yearly: '₹25,000/year', note: 'Unlimited users + exports' },
    selfHost: { yearly: '₹39,000/year', note: 'Unlimited users · single-server licence' },
  },
  {
    plan: 'Growth',
    audience: 'B2B / B2C',
    cloud: { yearly: '₹49,000/year', note: 'Everything in Starter + 1 free core customisation' },
    selfHost: { yearly: '₹79,000/year', note: 'Everything in Starter + 1 free core customisation' },
  },
  {
    plan: 'Scale',
    audience: 'B2B',
    cloud: { yearly: 'Talk to us', note: 'For bigger ambitions — custom scope' },
    selfHost: { yearly: 'Talk to us', note: 'Source access, bespoke build, on-call support' },
  },
];

// Books + Inventory bundle: 10% off the standard plan.
// (Talk-to-us tiers keep their bespoke quote.)
export const BUNDLE_PRICING: AppPricing[] = [
  {
    plan: 'Starter',
    audience: 'B2B / B2C',
    cloud: { yearly: '₹22,500/year', note: 'Books + Inventory · 10% bundle discount' },
    selfHost: { yearly: '₹35,100/year', note: 'Books + Inventory · 10% bundle discount' },
  },
  {
    plan: 'Growth',
    audience: 'B2B / B2C',
    cloud: { yearly: '₹44,100/year', note: '+ 1 free core customisation · 10% bundle discount' },
    selfHost: { yearly: '₹71,100/year', note: '+ 1 free core customisation · 10% bundle discount' },
  },
  {
    plan: 'Scale',
    audience: 'B2B',
    cloud: { yearly: 'Talk to us', note: 'For bigger ambitions — custom scope' },
    selfHost: { yearly: 'Talk to us', note: 'Source access, bespoke build, on-call support' },
  },
];

export const APPS: App[] = [
  {
    slug: 'books',
    name: 'Nidhi Books',
    shortName: 'Books',
    category: 'Accounting & Finance',
    tagline: 'GST-ready accounting for small and growing businesses in India.',
    oneLiner:
      'GST-ready invoicing, TDS-aware payments, P&L and Cash Flow, with audit-grade CSV and PDF exports.',
    hero: 'Run your books without the spreadsheet chaos. GST-compliant invoices, TDS-aware payments, live reports, audit-grade exports.',
    description:
      'Nidhi Books is journal-backed accounting reimagined for the small business owner. Create GST-compliant invoices with HSN/SAC and place-of-supply handling, capture TDS on every applicable payment, reconcile customer and vendor accounts, and pull live P&L, Cash Flow, AR/AP Aging and Sales Register reports. Export GSTR-1 (with B2B, B2C, CDNR and HSN summary), GSTR-3B summary, and TDS reconciliations (26AS / 26Q) as CA-friendly CSV — or take a period-close audit snapshot with a SHA-256 hash. Available on the 399apps cloud or self-hosted with full data ownership.',
    icon: 'book',
    accent: 'from-emerald-500 to-teal-600',
    status: 'available',
    features: [
      { title: 'GST-ready invoicing', body: 'Compliant invoices, quotes and credit notes with HSN/SAC, intra- vs inter-state CGST/SGST/IGST splitting, place-of-supply and UPI QR on the PDF.' },
      { title: 'Journal-backed, no headaches', body: 'Every transaction posts to the ledger. You see the simple form; the journal stays clean and auditable.' },
      { title: 'Live financial reports', body: 'P&L (accrual), Cash Flow, AR / AP Aging buckets, Sales Register and Stock Valuation — recalculated as you type.' },
      { title: 'GSTR-1 + GSTR-3B exports', body: 'B2B, B2C consolidated, Credit/Debit notes to registered customers, HSN-wise summary, and the GSTR-3B 3.1.a outward-supplies block — CSV in CA hand-off format.' },
      { title: 'TDS done properly', body: 'Capture TDS on customer payments (Form 26AS-style) and on vendor bills (Form 26Q). Section-wise summaries across 194C / 194J / 194I and more.' },
      { title: 'Audit-grade exports', body: 'Period-close snapshot: CSV manifest + PDF cover, signed with a SHA-256 hash. Statutory audits get the immutable trail they expect.' },
    ],
    audiences: ['Small businesses', 'CAs and accounting firms', 'D2C brands', 'Service agencies'],
    industries: ['Retail', 'Services', 'Manufacturing', 'Wholesale & distribution'],
    pricing: STANDARD_PRICING,
    sections: [
      {
        id: 'reports-exports',
        eyebrow: 'Reports & exports',
        title: 'Built for the way Indian SMBs actually file taxes.',
        description: 'Specific, CA-friendly outputs that match what your accountant actually asks for at the end of the quarter — not generic dashboards. Everything below is shipping in Nidhi Books today.',
        groups: [
          {
            title: 'GST & statutory reports',
            description: 'Tax-compliant outputs ready to file or hand off to your CA.',
            items: [
              { title: 'GSTR-1 export (CSV)', body: 'Outward supplies — B2B, B2C consolidated (by state × rate), Credit/Debit notes to registered customers, and an HSN-wise summary. Section-headed CSV for direct CA upload.' },
              { title: 'GSTR-3B summary', body: 'Section 3.1.a outward-supplies block with taxable value and CGST/SGST/IGST breakdown for the period.' },
              { title: 'Sales Register', body: 'A chronological list of every invoice and credit note for the period with full tax breakup per row. Filterable by warehouse and period.' },
              { title: 'HSN-wise summary', body: 'Quantity, taxable value and tax by rate aggregated by HSN, using date-aware tax rates so historical periods stay accurate.' },
              { title: 'Place-of-Supply handling', body: 'Intra- vs inter-state detection drives CGST/SGST/IGST splitting on every line, every report.' },
              { title: 'TDS on AR (Form 26AS reconcile)', body: 'TDS withheld by your customers on receipts, grouped by customer and section — line up cleanly with 26AS at year end.' },
              { title: 'TDS on AP (Form 26Q reconcile)', body: 'TDS deducted on vendor bills, grouped by vendor and section — covers 194C, 194J, 194I-LB and more.' },
            ],
          },
          {
            title: 'Operational & financial reports',
            description: 'The numbers you actually run the business on, between filings.',
            items: [
              { title: 'Profit & Loss', body: 'Accrual-basis P&L. Sales minus COGS (from recorded bills) minus operating expenses. GST is excluded as a pass-through.' },
              { title: 'Cash Flow', body: 'Cash-basis movement — inflows from customer payments and vendor refunds, outflows from bill payments, expenses and customer refunds.' },
              { title: 'AR Aging', body: 'Receivables bucketed by days overdue (current, 1–30, 31–60, 61–90, 90+) with per-invoice outstanding amount.' },
              { title: 'AP Aging', body: 'Payables bucketed by days overdue, net of TDS deducted and vendor credit applied.' },
              { title: 'Stock Valuation', body: 'Per-item on-hand quantity, unit cost and total stock value — shared with the Nidhi Inventory module.' },
            ],
          },
          {
            title: 'Exports & data ownership',
            description: 'Get every record out — for CAs, for auditors, for your own systems.',
            items: [
              { title: 'Invoices CSV', body: 'Full invoice list with number, date, due date, customer, status, kind, subtotal, discount, tax and total. Respects every filter on the list page.' },
              { title: 'Payments CSV', body: 'Receipts list with date, customer, method, reference, amount, applied vs unapplied, TDS withheld and TDS section.' },
              { title: 'Customers CSV', body: 'Customer master with display name, company, GSTIN, email, phone, payment term and state.' },
              { title: 'GSTR-1 CSV (CA hand-off)', body: 'Same data as the on-screen GSTR-1, structured with section headers so your CA can drop it straight into their workflow.' },
              { title: 'Invoice PDF (Classic & Compact)', body: 'Per-invoice PDF with two template strategies and an embedded UPI QR for fast payment.' },
              { title: 'Customer-portal PDF', body: 'Share an invoice via a public token — your customer can view and download the PDF without an account.' },
              { title: 'Audit Export (period-close)', body: 'A snapshot CSV manifest plus a PDF cover, signed with a SHA-256 hash. Becomes an immutable record of the closed period.' },
            ],
          },
        ],
        note: 'On the roadmap (not yet shipped): Balance Sheet & Trial Balance, GSTR-2B / GSTR-9, e-invoice IRN, e-way bill, XLSX export and Tally sync. We will only show them here when they are real.',
      },
    ],
    faqs: [
      { q: 'Which GST reports does Nidhi Books actually generate today?', a: 'GSTR-1 (B2B, B2C consolidated, Credit/Debit notes to registered customers, HSN summary) as both an on-screen report and a CA-friendly CSV; the GSTR-3B 3.1.a outward-supplies summary; a Sales Register; TDS-on-AR (Form 26AS reconciliation) and TDS-on-AP (Form 26Q reconciliation). GSTR-2B / GSTR-9 / e-invoice IRN are on the roadmap.' },
      { q: 'How do I export my data?', a: 'Every list view (Invoices, Payments, Customers) exports to CSV with the filters you have applied. GSTR-1 has its own structured CSV with section headers. Invoices download as PDF (Classic or Compact, with UPI QR). For statutory audits we also offer a period-close Audit Export — a CSV manifest plus a PDF cover signed with a SHA-256 hash.' },
      { q: 'Does it handle TDS?', a: 'Yes. You can record TDS withheld on customer receipts (with section codes for 26AS) and TDS deducted on vendor bills (for 26Q). Both produce section-wise summaries you can hand to your CA at year-end.' },
      { q: 'Can I self-host Nidhi Books on my own server?', a: 'Yes. Every plan has a self-hostable equivalent. You get the same product, deployed on your infrastructure with full data ownership.' },
      { q: 'Is the team / user count limited?', a: 'No. Every plan — Starter, Growth and Scale — comes with unlimited users and unlimited exports. We don\'t price per seat.' },
      { q: 'Do you offer migration from Tally / Zoho / QuickBooks?', a: 'We offer guided migration from common accounting tools. Write to us at hello@shabuilds.tech and we will scope it for you.' },
      { q: 'Is my data safe?', a: 'On cloud, your data is encrypted at rest and in transit, backed up daily, and isolated per tenant. On self-host, everything stays on your server.' },
    ],
    keywords: ['GST accounting software', 'GSTR-1 software', 'GSTR-3B software', 'TDS accounting software India', 'Form 26AS reconciliation', 'self-hosted accounting', 'Zoho Books alternative', 'Tally alternative', 'small business accounting India', 'CA-friendly accounting software'],
  },
  {
    slug: 'inventory',
    name: 'Nidhi Inventory',
    shortName: 'Inventory',
    category: 'Inventory & Warehousing',
    tagline: 'Real-time inventory across warehouses, branches and channels.',
    oneLiner:
      'Stock, SKUs, purchase orders, transfers, barcodes — one source of truth for every product you sell.',
    hero: 'Stop reconciling stock at midnight. Get one live view of every SKU across every warehouse.',
    description:
      'Nidhi Inventory is built for businesses that have outgrown spreadsheets and Tally workarounds. Track stock down to the bin level, manage purchase orders and goods-receipts, transfer between branches, scan barcodes, and connect to your sales channels. Pair it with Nidhi Books for a complete back-office.',
    icon: 'inventory',
    accent: 'from-amber-500 to-orange-600',
    status: 'available',
    features: [
      { title: 'Multi-warehouse stock', body: 'Track on-hand, available, reserved and in-transit across every location in real time.' },
      { title: 'Purchase & vendor flows', body: 'Purchase orders, vendor bills, goods receipts and three-way match — all linked.' },
      { title: 'Barcode + batch + serial', body: 'Scan-first workflows with batch tracking, expiry and serial-level traceability.' },
      { title: 'Stock transfers', body: 'Move stock between branches with full audit and approvals.' },
      { title: 'Reorder automation', body: 'Set min/max levels per location and let the system raise PO drafts automatically.' },
      { title: 'API + integrations', body: 'A clean REST API plus connectors for common marketplaces and shipping providers.' },
    ],
    audiences: ['Retailers', 'Distributors', 'D2C brands', 'Manufacturers'],
    industries: ['Retail', 'Wholesale', 'Manufacturing', 'eCommerce', 'FMCG'],
    pricing: STANDARD_PRICING,
    faqs: [
      { q: 'Does Nidhi Inventory work with barcode scanners?', a: 'Yes. Any USB or Bluetooth scanner that emits keystrokes will work, and we expose a scan-first UI on desktop and mobile.' },
      { q: 'Can I integrate it with Amazon, Shopify or my POS?', a: 'We expose a documented REST API. We ship native connectors for popular channels, and we will scope custom integrations on request.' },
      { q: 'How many users and warehouses can I add?', a: 'Unlimited on every plan — Starter, Growth and Scale. Add as many warehouses, branches, users and SKUs as your business needs.' },
      { q: 'I run a warehouse — can you tune the inward flow for my floor process?', a: 'Yes. The Growth plan includes one free core-workflow customisation precisely for cases like this. For example, a one-tap barcode-scan inward flow that maps to how your team actually receives stock. Scope it with us at hello@shabuilds.tech.' },
      { q: 'Is it good for manufacturing?', a: 'For light manufacturing (BOM, kitting, assemblies) yes. For deep MRP needs we will scope a Manufacturing module — talk to us.' },
    ],
    keywords: ['inventory management software', 'warehouse management India', 'self-hosted inventory', 'SKU tracking software', 'Zoho Inventory alternative'],
  },
  {
    slug: 'books-inventory-bundle',
    name: 'Books + Inventory Bundle',
    shortName: 'Books + Inventory',
    category: 'Bundle',
    tagline: 'The complete back-office. Accounting and stock, deeply integrated.',
    oneLiner:
      'Books + Inventory in one subscription — 10% off the standard 399apps plan.',
    hero: 'Run your back-office on a single, well-integrated stack — accounting, stock and reports without the duct tape.',
    description:
      'Most growing businesses end up paying for an accounting tool and an inventory tool, then paying again to integrate them. The 399apps bundle gives you Nidhi Books and Nidhi Inventory deeply integrated out of the box — every invoice updates stock, every purchase updates your books, every transfer is journal-aware. And we take 10% off the standard 399apps plan when you take both together.',
    icon: 'bundle',
    accent: 'from-violet-500 to-fuchsia-600',
    status: 'available',
    features: [
      { title: 'One login, one team', body: 'Shared users, roles and permissions across Books and Inventory.' },
      { title: 'Invoices that move stock', body: 'Every sales invoice deducts from the right warehouse automatically.' },
      { title: 'POs that update books', body: 'Vendor bills, GST and journal entries are created without copy-paste.' },
      { title: 'Unified reporting', body: 'See revenue, margin, stock value and tax liabilities in one dashboard.' },
      { title: '10% bundle discount', body: 'Take both Books and Inventory in one subscription and save 10% on every plan tier — roughly half the cost of running them as two separate apps.' },
      { title: 'Self-host friendly', body: 'Bundle ships as a single deployment on your server.' },
    ],
    audiences: ['Growing SMBs', 'D2C brands', 'Retail chains', 'Distributors'],
    industries: ['Retail', 'Wholesale', 'Manufacturing', 'eCommerce'],
    pricing: BUNDLE_PRICING,
    faqs: [
      { q: 'How much does the bundle save me?', a: 'The bundle is 10% off the standard 399apps plan — for example, ₹22,500/year cloud (Starter) instead of ₹25,000. Compared to running Books and Inventory as two separate subscriptions, the bundle costs roughly half — you save about 55% on Starter cloud.' },
      { q: 'Can I start with one app and add the other later?', a: 'Yes. You can begin with either product and upgrade to the bundle at any time — your data and users migrate automatically, and the difference is pro-rated.' },
      { q: 'Is the bundle a single login?', a: 'Yes. Single login, shared users and roles, and a unified dashboard.' },
      { q: 'How many users does the bundle support?', a: 'Unlimited on every plan. The same "no per-seat" pricing applies to the bundle as to any single 399apps product.' },
    ],
    keywords: ['accounting + inventory bundle', 'ERP for small business India', 'Zoho One alternative', 'self-hosted ERP', 'Tally alternative SaaS'],
  },
  {
    slug: 'matrimonials',
    name: 'Nidhi Matrimonials',
    shortName: 'Matrimonials',
    category: 'Community & Marketplaces',
    tagline: 'Launch your own matrimonial platform in days, not months.',
    oneLiner:
      'A complete matrimonial SaaS — profiles, matching, chat, verification — ready to brand and ship.',
    hero: 'Run a Shaadi-class matrimonial site for your community, caste, region or brand — without burning a year of dev time.',
    description:
      'Nidhi Matrimonials is a battle-ready matrimonial platform you can launch under your own brand. Verified profile workflows, smart matching, chat with privacy guardrails, KYC, photo masking, success-story management, payments and admin moderation — everything a serious matrimony product needs, on cloud or self-hosted.',
    icon: 'heart',
    accent: 'from-rose-500 to-pink-600',
    status: 'available',
    features: [
      { title: 'Verified profiles & KYC', body: 'Email, phone, photo and document verification flows out of the box.' },
      { title: 'Smart matching', body: 'Filter by community, region, education, profession and preferences with saved searches.' },
      { title: 'Privacy-first messaging', body: 'In-app chat with photo masking, contact reveal controls and abuse reporting.' },
      { title: 'Admin moderation', body: 'A serious admin console with bulk actions, fraud signals and content review.' },
      { title: 'Payments & plans', body: 'Razorpay / Stripe-ready subscription plans, coupons and partial refunds.' },
      { title: 'White-label ready', body: 'Your domain, your colours, your copy. We power the engine quietly.' },
    ],
    audiences: ['Community organisations', 'Caste / regional matrimony brands', 'NRI matrimony platforms', 'Niche dating products'],
    industries: ['Matrimonials', 'Community platforms', 'Online dating'],
    pricing: STANDARD_PRICING,
    faqs: [
      { q: 'Can I run Nidhi Matrimonials under my own brand?', a: 'Yes. Every plan supports your own domain, logo, theme and copy. The 399apps brand is invisible to your members.' },
      { q: 'Is there a profile cap on the Starter plan?', a: 'No. Every plan ships with unlimited member profiles and unlimited admin users. We never throttle the catalogue you have built.' },
      { q: 'Can you tailor the verification flow for our community?', a: 'Yes. The Growth plan includes one free core-workflow customisation — for example, a community-specific KYC step or a profile field set tuned to your members. Scope it with us after sign-up.' },
      { q: 'Do you support photo masking and privacy controls?', a: 'Yes. Profiles can mask photos and contact info, and members control reveal on a per-conversation basis.' },
      { q: 'How fast can I go live?', a: 'On the cloud plan, you can be live in under a week. Self-hosted launches typically take 2–4 weeks depending on customisation.' },
    ],
    keywords: ['matrimonial software', 'matrimonial script', 'matrimonial SaaS', 'community matrimony platform', 'Shaadi.com alternative', 'matrimony white label'],
  },
  {
    slug: 'jobportal',
    name: 'Nidhi Job Portal',
    shortName: 'Job Portal',
    category: 'Hiring & Marketplaces',
    tagline: 'Launch a job board for your industry, region or campus.',
    oneLiner:
      'Jobs, employers, candidates, applications and a real ATS — packaged as your own job portal.',
    hero: 'Run a Naukri-class job board for your industry, college network or community — production-ready from day one.',
    description:
      'Nidhi Job Portal is a complete jobs-and-hiring SaaS you can launch under your brand. Employer dashboards, resume parsing, application tracking, candidate search, paid job postings, featured listings, employer verification and a clean candidate experience — everything you need to run a serious job platform.',
    icon: 'briefcase',
    accent: 'from-sky-500 to-blue-600',
    status: 'available',
    features: [
      { title: 'Employer + candidate dashboards', body: 'Distinct, role-aware experiences with everything each side actually needs.' },
      { title: 'Application tracking (ATS)', body: 'Pipelines, stages, comments, scheduling and rejection workflows.' },
      { title: 'Resume parsing & search', body: 'Parse resumes into structured profiles and run rich boolean searches.' },
      { title: 'Paid job postings', body: 'Plans, credits, featured slots, employer verification — all configurable.' },
      { title: 'Notifications', body: 'Email, SMS and WhatsApp-ready hooks for every applicant touchpoint.' },
      { title: 'White-label ready', body: 'Your brand, your industry vocabulary, your terms of use.' },
    ],
    audiences: ['Industry associations', 'Universities & alumni networks', 'Niche job-board operators', 'Recruitment agencies'],
    industries: ['Hiring', 'EdTech', 'HR Tech', 'Community platforms'],
    pricing: STANDARD_PRICING,
    faqs: [
      { q: 'Can I customise the portal for my industry vocabulary?', a: 'Yes. Job categories, skills, taxonomies, application forms, employer fields and emails are all configurable per portal. The Growth plan includes one free deeper customisation — for example, a niche screening flow or an industry-specific candidate score.' },
      { q: 'Is there a cap on jobs, employers or candidates?', a: 'No. Every plan ships with unlimited jobs, unlimited employers, unlimited candidates and unlimited internal users. You pay one yearly fee, not a per-listing one.' },
      { q: 'Does it include an ATS for employers?', a: 'Yes. A simple, modern ATS with pipelines, stages, comments and interview scheduling is included for every employer.' },
      { q: 'Is resume parsing built in?', a: 'Yes. Resumes upload to a structured profile, and recruiters can search by skill, location, experience and more.' },
    ],
    keywords: ['job portal software', 'job board script', 'self-hosted job portal', 'Naukri alternative', 'ATS software India', 'community job board'],
  },
];

export const APP_BY_SLUG = Object.fromEntries(APPS.map((a) => [a.slug, a]));
