export type Plan = {
  id: 'cloud' | 'selfhost' | 'enterprise';
  name: string;
  price: string;
  period: string;
  priceNote?: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

// Simple land-and-expand cloud pricing. Self-host and enterprise are bespoke.
export const PRICING = {
  base: '₹399',
  extra: '₹99',
  period: '/month',
};

export const PLANS: Plan[] = [
  {
    id: 'cloud',
    name: 'Cloud',
    price: '₹399',
    period: '/month',
    priceNote: 'for your first app',
    blurb: 'Fully managed on the 399apps cloud. Add more apps or add-ons at ₹99/month each — the maths always stays clear.',
    features: [
      '+ ₹99/month per additional app',
      '+ ₹99/month per add-on',
      'Unlimited users — never priced per seat',
      'Unlimited exports, every feature included',
      'Daily backups, India data region',
    ],
    cta: { label: 'Start now', href: '/contact?intent=cloud' },
    featured: true,
  },
  {
    id: 'selfhost',
    name: 'Self-hosted',
    price: 'Custom',
    period: '',
    blurb: 'Run the same product on your own server with full data ownership.',
    features: [
      'Your infrastructure, your data',
      'Single-server or HA deployment',
      'Optional managed support',
      'Source access on request',
    ],
    cta: { label: 'Talk to us', href: '/contact?intent=selfhost' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    blurb: 'Bigger scale, white-label, deep customisation and SLAs.',
    features: [
      'White-label under your brand',
      'Custom workflows & integrations',
      'SSO, audit logs, custom SLA',
      'Dedicated support',
    ],
    cta: { label: 'Talk to us', href: '/contact?intent=enterprise' },
  },
];

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
  faqs: { q: string; a: string }[];
  keywords: string[];
  sections?: AppDetailSection[];
};

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
      { q: 'Is the team / user count limited?', a: 'No. The ₹399/month cloud plan comes with unlimited users and unlimited exports. We never price per seat.' },
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
    faqs: [
      { q: 'Does Nidhi Inventory work with barcode scanners?', a: 'Yes. Any USB or Bluetooth scanner that emits keystrokes will work, and we expose a scan-first UI on desktop and mobile.' },
      { q: 'Can I integrate it with Amazon, Shopify or my POS?', a: 'We expose a documented REST API. We ship native connectors for popular channels, and we will scope custom integrations on request.' },
      { q: 'How many users and warehouses can I add?', a: 'Unlimited on the ₹399/month cloud plan. Add as many warehouses, branches, users and SKUs as your business needs — the price doesn\'t change.' },
      { q: 'I run a warehouse — can you tune the inward flow for my floor process?', a: 'Yes. Workflow customisations like a one-tap barcode-scan inward flow tailored to how your team receives stock are part of a self-hosted or enterprise engagement. Scope it with us at hello@shabuilds.tech.' },
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
      'Books + Inventory, working as one — ₹399 + ₹99 = ₹498/month on the cloud.',
    hero: 'Run your back-office on a single, well-integrated stack — accounting, stock and reports without the duct tape.',
    description:
      'Most growing businesses end up paying for an accounting tool and an inventory tool, then paying again to integrate them. The 399apps bundle gives you Nidhi Books and Nidhi Inventory deeply integrated out of the box — every invoice updates stock, every purchase updates your books, every transfer is journal-aware. On the cloud it is ₹399/month for Books plus ₹99/month to add Inventory — ₹498/month for both, with unlimited users.',
    icon: 'bundle',
    accent: 'from-violet-500 to-fuchsia-600',
    status: 'available',
    features: [
      { title: 'One login, one team', body: 'Shared users, roles and permissions across Books and Inventory.' },
      { title: 'Invoices that move stock', body: 'Every sales invoice deducts from the right warehouse automatically.' },
      { title: 'POs that update books', body: 'Vendor bills, GST and journal entries are created without copy-paste.' },
      { title: 'Unified reporting', body: 'See revenue, margin, stock value and tax liabilities in one dashboard.' },
      { title: 'Simple add-on price', body: 'Books is ₹399/month; add Inventory for ₹99/month. ₹498/month for both, deeply integrated, with unlimited users.' },
      { title: 'Self-host friendly', body: 'Bundle ships as a single deployment on your server.' },
    ],
    audiences: ['Growing SMBs', 'D2C brands', 'Retail chains', 'Distributors'],
    industries: ['Retail', 'Wholesale', 'Manufacturing', 'eCommerce'],
    faqs: [
      { q: 'How is the bundle priced?', a: 'Books is your base app at ₹399/month, and Inventory is added at ₹99/month — ₹498/month for the pair on the cloud, deeply integrated, with unlimited users. Self-hosted and enterprise deployments are custom-quoted.' },
      { q: 'Can I start with one app and add the other later?', a: 'Yes. Start with Books at ₹399/month and add Inventory for ₹99/month whenever you are ready — your data and users carry over automatically.' },
      { q: 'Is the bundle a single login?', a: 'Yes. Single login, shared users and roles, and a unified dashboard.' },
      { q: 'How many users does the bundle support?', a: 'Unlimited. The "no per-seat" cloud pricing applies to the bundle exactly as it does to any single app.' },
    ],
    keywords: ['accounting + inventory bundle', 'ERP for small business India', 'Zoho One alternative', 'self-hosted ERP', 'Tally alternative SaaS'],
  },
];

export const APP_BY_SLUG = Object.fromEntries(APPS.map((a) => [a.slug, a]));
