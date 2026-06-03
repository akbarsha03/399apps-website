// Wave-4 industry use-case cluster (APPAA-64).
// Net-new page type: "GST/billing software for {industry}" money pages with the
// strongest purchase intent of any cluster. English-first, data-driven, with a
// single source of truth that also generates the JSON-LD @graph (Product/
// SoftwareApplication + Offer, FAQPage, BreadcrumbList, WebPage).
//
// Product ground truth (do NOT invent industry-specific modules):
//   - 2 real apps: Nidhi Books (GST billing + accounting) and Nidhi Inventory
//     (multi-warehouse stock, barcode + batch + expiry + serial, PO/GRN,
//     reorder automation). + a bundle.
//   - Pricing: from ₹399/mo for the first app; +₹99/mo per additional app/add-on;
//     unlimited users (never per seat); prices exclude GST.
//   - 14-day free trial. Migration is CSV/Excel import with guided support
//     (assisted, not one-click). No self-serve signup — CTA is /contact/.

const SITE_URL = 'https://399apps.com';
export const USECASE_PRICE_ANCHOR =
  'from ₹399/mo (first app; +₹99/mo per add-on, GST extra)';

export type UseCasePain = { pain: string; solution: string };
export type UseCaseFaq = { q: string; a: string };
export type RelatedLink = { label: string; href: string };

export type UseCase = {
  slug: string;
  industry: string;
  breadcrumbLeaf: string;
  seo: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; h1: string; verdict: string; trustNote: string };
  apps: string[];
  definition: { h2: string; body: string; body2?: string };
  pains: { h2: string; intro: string; items: UseCasePain[] };
  why: { h2: string; intro: string; items: string[] };
  honestNote?: string;
  pricing: { h2: string; body: string };
  faq: UseCaseFaq[];
  related: RelatedLink[];
};

export const USECASES: Record<string, UseCase> = {
  'gst-billing-software-for-retail-shops': {
    slug: 'gst-billing-software-for-retail-shops',
    industry: 'retail, kirana & general stores',
    breadcrumbLeaf: 'GST billing software for retail shops',
    seo: {
      title:
        'GST Billing Software for Retail & Kirana Shops — from ₹399/mo, Unlimited Users | 399Apps',
      description:
        'Best GST billing software for retail, kirana and general stores in India. 399Apps pairs Nidhi Books (GST invoices, daily reports) with Nidhi Inventory (barcode stock, reorder alerts) — from ₹399/mo, unlimited users, prices exclude GST. Free 14-day trial.',
      keywords: [
        'gst billing software for retail shops',
        'billing software for kirana store',
        'billing software for general store',
        'retail shop billing software india',
        'gst invoice software for shops',
        'supermarket billing software india',
      ],
    },
    hero: {
      eyebrow: 'For retail & kirana stores',
      h1: 'GST billing software for retail & kirana shops — fast counter billing, real stock, from ₹399/mo',
      verdict:
        'For a retail or kirana store, 399Apps is the best-value GST billing software: Nidhi Books creates GST-compliant invoices with barcode-friendly billing, customer dues (khata) and daily reports, while Nidhi Inventory tracks stock across counters with reorder alerts — from ₹399/mo (first app; +₹99/mo per add-on, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'What is the best billing software for a retail or kirana store?',
      body: 'The best billing software for a retail or kirana store is a GST-ready tool that bills fast at the counter, keeps stock accurate, and produces clean GST returns at month end — without per-user fees as you add staff. 399Apps delivers this with two apps: Nidhi Books for GST billing and accounting, and Nidhi Inventory for barcode-driven stock across products and counters.',
      body2:
        'Shopkeepers usually look for one when handwritten bills and notebooks can no longer keep up with GST, when stock keeps running out (or piling up), or when they want to add a counter assistant without paying extra per user.',
    },
    pains: {
      h2: 'Retail pains → what 399Apps actually does',
      intro:
        'Every capability below ships today in Nidhi Books or Nidhi Inventory — no invented retail modules.',
      items: [
        { pain: 'Slow, error-prone counter billing', solution: 'Nidhi Books issues GST-compliant invoices with HSN/SAC, CGST/SGST/IGST splitting and a UPI QR on the PDF — quick to raise at the counter.' },
        { pain: 'Stock runs out or dead stock piles up', solution: 'Nidhi Inventory tracks on-hand stock per location and raises reorder PO drafts automatically from your min/max levels.' },
        { pain: 'Hundreds of SKUs and barcodes', solution: 'Barcode-first workflows — any USB/Bluetooth scanner that emits keystrokes works, with SKU-level tracking across the catalogue.' },
        { pain: 'GST returns are a month-end scramble', solution: 'Nidhi Books exports GSTR-1 (B2B, B2C, HSN summary) and a GSTR-3B summary as CA-ready CSV.' },
        { pain: 'Customer dues / khata to track', solution: 'Customer ledgers and AR Aging buckets show exactly who owes what and for how long.' },
        { pain: 'Adding a counter assistant costs more', solution: 'Unlimited users are included — staff and your accountant share the same books with no per-seat fee.' },
      ],
    },
    why: {
      h2: 'Why retail shops choose 399Apps',
      intro: 'Flat, predictable pricing with full accounting and stock in one cloud system.',
      items: [
        'GST-native: compliant invoices, GSTR-1/3B-ready exports, place-of-supply handling.',
        'Stock + billing together — Nidhi Books and Nidhi Inventory share one item list and stock valuation.',
        'Unlimited users, never per seat — add counter staff at no extra cost.',
        'Cloud (web) + mobile with daily backups, so the shop owner sees numbers from anywhere.',
        'Flat price: from ₹399/mo for your first app; each extra app or add-on is just ₹99/mo (prices exclude GST).',
      ],
    },
    pricing: {
      h2: 'Pricing for retail & kirana shops',
      body: 'Start with Nidhi Books at ₹399/mo for your first app (unlimited users, every feature included). Add Nidhi Inventory for barcode stock and reorder alerts at +₹99/mo. Prices exclude GST, which is added per invoice based on your billing location. No per-seat charges as you add counter staff.',
    },
    faq: [
      { q: 'Which is the best billing software for a kirana store in India?', a: '399Apps is a strong choice: Nidhi Books gives GST-compliant billing and daily reports, Nidhi Inventory handles barcode stock and reorder alerts, and it includes unlimited users from ₹399/mo for your first app (+₹99/mo per add-on, prices exclude GST).' },
      { q: 'Does 399Apps support barcode billing for retail?', a: 'Yes. Nidhi Inventory is barcode-first — any USB or Bluetooth scanner that emits keystrokes works, with a scan-first UI on desktop and mobile and SKU-level tracking.' },
      { q: 'Can I track customer dues (khata) for my shop?', a: 'Yes. Nidhi Books keeps customer ledgers and AR Aging buckets (current, 1–30, 31–60, 61–90, 90+ days) so you can see exactly who owes what.' },
      { q: 'How much does retail billing software cost on 399Apps?', a: 'From ₹399/month for your first app with unlimited users; add Nidhi Inventory or another add-on at +₹99/month each. Prices exclude GST. There are no per-user fees.' },
      { q: 'Does it handle GST returns for my store?', a: 'Yes. Nidhi Books exports GSTR-1 (B2B, B2C consolidated, HSN-wise summary) and a GSTR-3B outward-supplies summary as CA-ready CSV.' },
    ],
    related: [
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Billing software for pharmacy & medical store', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'GST software for traders & wholesalers', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-pharmacy-medical-store': {
    slug: 'billing-software-for-pharmacy-medical-store',
    industry: 'pharmacies & medical stores',
    breadcrumbLeaf: 'Billing software for pharmacy & medical store',
    seo: {
      title:
        'Billing Software for Pharmacy & Medical Store — Batch + Expiry, GST Billing | 399Apps',
      description:
        'GST billing software for pharmacies and medical stores. 399Apps pairs Nidhi Inventory (batch + expiry tracking, barcode, reorder alerts) with Nidhi Books (GST invoices, GSTR-ready returns) — from ₹399/mo, unlimited users, prices exclude GST. Free 14-day trial.',
      keywords: [
        'billing software for pharmacy',
        'billing software for medical store',
        'gst software for pharmacy',
        'medical store billing software india',
        'pharmacy inventory software with expiry',
        'chemist billing software',
      ],
    },
    hero: {
      eyebrow: 'For pharmacies & medical stores',
      h1: 'Billing software for pharmacy & medical stores — batch, expiry and GST billing from ₹399/mo',
      verdict:
        'For a pharmacy or medical store, 399Apps pairs Nidhi Inventory — with batch and expiry tracking, barcode billing and reorder alerts — with Nidhi Books for GST-compliant invoices and GSTR-ready returns. From ₹399/mo (first app; +₹99/mo per add-on, GST extra), unlimited users, so every counter and pharmacist works from one live stock.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Inventory', 'Nidhi Books'],
    definition: {
      h2: 'What is the best billing software for a pharmacy or medical store?',
      body: 'The best billing software for a pharmacy or medical store handles batch and expiry tracking, bills fast with barcodes, applies the right GST rate per medicine, and reorders fast-moving stock before it runs out. 399Apps does this with Nidhi Inventory for batch/expiry stock control and Nidhi Books for GST-compliant billing and returns.',
      body2:
        'Pharmacies look for one when expiry losses pile up, when stock across racks is hard to track, or when GST billing and reorder need to be in one system the whole counter can use.',
    },
    pains: {
      h2: 'Pharmacy pains → what 399Apps actually does',
      intro:
        'Batch, expiry and barcode tracking are real Nidhi Inventory capabilities — nothing below is invented.',
      items: [
        { pain: 'Losses from expired / near-expiry medicines', solution: 'Nidhi Inventory tracks stock at batch level with expiry, so you can spot and clear near-expiry stock before it is a write-off.' },
        { pain: 'Hard to find stock across racks and strips', solution: 'Barcode + batch + serial tracking with multi-location stock gives a live, scan-first view of on-hand quantity.' },
        { pain: 'Different GST rates on medicines (5% / 12% / 18%)', solution: 'Nidhi Books uses date-aware tax rates with HSN, so each product carries the correct CGST/SGST/IGST on every invoice.' },
        { pain: 'Fast movers run out', solution: 'Reorder automation raises PO drafts from your min/max levels per item, so best-sellers stay in stock.' },
        { pain: 'Sales returns and credit notes', solution: 'Nidhi Books issues GST credit notes that flow into your GSTR-1 export correctly.' },
        { pain: 'Month-end GST filing', solution: 'GSTR-1 and GSTR-3B summaries export as CA-ready CSV from Nidhi Books.' },
      ],
    },
    why: {
      h2: 'Why pharmacies choose 399Apps',
      intro: 'Batch/expiry stock control and GST billing in one flat-priced cloud system.',
      items: [
        'Batch + expiry tracking so you control near-expiry losses, not chase them.',
        'Barcode-first billing — any keystroke-emitting USB/Bluetooth scanner works.',
        'GST-native invoices with date-aware rates, HSN and GSTR-ready exports.',
        'Reorder automation keeps fast-moving medicines on the shelf.',
        'Unlimited users from ₹399/mo for the first app (+₹99/mo per add-on, prices exclude GST).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps gives you GST billing plus batch/expiry inventory — it is not a dedicated drug-licence or Schedule-H statutory-register product. If you need a specific regulatory register, keep that workflow and use 399Apps for GST billing, stock and accounts.',
    pricing: {
      h2: 'Pricing for pharmacies & medical stores',
      body: 'Start with Nidhi Inventory for batch/expiry and barcode stock, or Nidhi Books for GST billing — your first app is ₹399/mo with unlimited users. Add the second app at +₹99/mo so billing and stock share one item list. Prices exclude GST. No per-seat fees for counter staff or pharmacists.',
    },
    faq: [
      { q: 'Does 399Apps track batch and expiry for a pharmacy?', a: 'Yes. Nidhi Inventory supports batch tracking with expiry (and serial-level traceability), so you can monitor near-expiry stock and clear it before it becomes a write-off.' },
      { q: 'Can it handle different GST rates on medicines?', a: 'Yes. Nidhi Books applies date-aware tax rates per item with HSN, so each medicine carries the correct GST (5%, 12% or 18%) on every invoice and in your returns.' },
      { q: 'Does 399Apps support barcode billing for a medical store?', a: 'Yes. Nidhi Inventory is barcode-first — any USB or Bluetooth scanner that emits keystrokes works, with a scan-first UI on desktop and mobile.' },
      { q: 'Is 399Apps a drug-licence or Schedule-H compliance product?', a: 'No. 399Apps provides GST billing plus batch/expiry inventory and accounts. It is not a dedicated drug-licence or statutory-register tool, so keep any specific regulatory register workflow alongside it.' },
      { q: 'How much does pharmacy billing software cost on 399Apps?', a: 'From ₹399/month for your first app with unlimited users; add the second app (Books or Inventory) at +₹99/month. Prices exclude GST, and there are no per-user fees.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'GST billing software for retail shops', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'GST software for traders & wholesalers', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Inventory — stock, batch & expiry', href: '/apps/inventory/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-restaurants-cafes': {
    slug: 'billing-software-for-restaurants-cafes',
    industry: 'restaurants & cafés',
    breadcrumbLeaf: 'Billing software for restaurants & cafés',
    seo: {
      title:
        'Billing & GST Software for Restaurants & Cafés — from ₹399/mo | 399Apps',
      description:
        'GST billing and accounting for restaurants and cafés. 399Apps issues GST-compliant food bills (CGST/SGST, HSN/SAC) and GSTR-ready returns with Nidhi Books, and tracks ingredient stock with Nidhi Inventory — from ₹399/mo, unlimited users. Note: GST billing + books, not a table/KOT POS.',
      keywords: [
        'billing software for restaurants',
        'gst software for restaurants',
        'cafe billing software india',
        'restaurant accounting software india',
        'gst billing for food business',
        'restaurant gst invoice software',
      ],
    },
    hero: {
      eyebrow: 'For restaurants & cafés',
      h1: 'GST billing & accounting for restaurants and cafés — from ₹399/mo, unlimited users',
      verdict:
        'For restaurants and cafés, 399Apps handles the billing-and-books side: Nidhi Books issues GST-compliant food bills (CGST/SGST, HSN/SAC) and files GSTR-ready returns, while Nidhi Inventory tracks ingredient and supplies stock. From ₹399/mo (first app; +₹99/mo per add-on, GST extra), unlimited users. Note: it is GST billing and accounting, not a dedicated table or KOT POS.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'What is the best GST billing software for a restaurant or café?',
      body: 'The best GST billing software for a restaurant or café produces compliant food bills with the right GST rate, tracks ingredient and supplies stock, records supplier bills, and gives you clean daily sales and accounts. 399Apps does the billing and books with Nidhi Books, and tracks kitchen and bar stock with Nidhi Inventory.',
      body2:
        'Owners look for one when handwritten bills can no longer keep up with GST, when ingredient stock and wastage are invisible, or when they want clean accounts across one or several outlets.',
    },
    pains: {
      h2: 'Restaurant & café pains → what 399Apps actually does',
      intro:
        'These are real Nidhi Books / Nidhi Inventory capabilities framed for F&B — we do not pretend to be a table-ordering POS.',
      items: [
        { pain: 'GST on food & beverages (5% vs 18%, with/without ITC)', solution: 'Nidhi Books applies date-aware tax rates with HSN/SAC, so each bill carries the correct CGST/SGST split.' },
        { pain: 'Ingredient and supplies stock / wastage are invisible', solution: 'Nidhi Inventory tracks stock per item and location with reorder alerts, so you see what is on hand and what to buy.' },
        { pain: 'Supplier bills and dues pile up', solution: 'Purchase orders, vendor bills and AP Aging in Nidhi Inventory and Nidhi Books keep supplier payments under control.' },
        { pain: 'No clear daily sales or profit picture', solution: 'Sales Register, Profit & Loss and Cash Flow reports recalc as you record bills.' },
        { pain: 'Two or more outlets to track', solution: 'Multi-location stock plus unlimited users let every outlet and the owner work in one set of books.' },
        { pain: 'Adding staff increases software cost', solution: 'Unlimited users are included — no per-seat fee for cashiers, managers or your accountant.' },
      ],
    },
    why: {
      h2: 'Why restaurants & cafés choose 399Apps',
      intro: 'Compliant F&B billing plus real accounts and stock at a flat price.',
      items: [
        'GST-compliant food bills with date-aware rates, HSN/SAC and CGST/SGST splitting.',
        'GSTR-1 and GSTR-3B-ready CSV exports for your CA.',
        'Ingredient and supplies stock tracking with reorder alerts via Nidhi Inventory.',
        'Daily sales, P&L and cash flow you can read at a glance.',
        'Unlimited users from ₹399/mo for the first app (+₹99/mo per add-on, prices exclude GST).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps is GST billing, accounting and inventory — not a dedicated restaurant POS with table management, KOT printing or order screens. If you already use a POS for table ordering, run it for the floor and use 399Apps for compliant GST billing, stock and books.',
    pricing: {
      h2: 'Pricing for restaurants & cafés',
      body: 'Start with Nidhi Books at ₹399/mo for your first app (unlimited users, every feature included). Add Nidhi Inventory for ingredient and supplies stock at +₹99/mo. Prices exclude GST, which is added per invoice based on your billing location. No per-seat fees as you add cashiers or managers.',
    },
    faq: [
      { q: 'Can 399Apps issue GST-compliant restaurant bills?', a: 'Yes. Nidhi Books creates GST-compliant food bills with date-aware tax rates, HSN/SAC and CGST/SGST splitting, and exports GSTR-1 and GSTR-3B summaries for filing.' },
      { q: 'Is 399Apps a restaurant POS with table and KOT management?', a: 'No. 399Apps is GST billing, accounting and inventory — not a dedicated table/KOT POS. Many restaurants run a POS for ordering and use 399Apps for compliant billing, stock and accounts.' },
      { q: 'Can it track ingredient stock for my kitchen?', a: 'Yes. Nidhi Inventory tracks stock per item and location with reorder alerts, so you can keep tabs on ingredients and supplies and reduce stock-outs.' },
      { q: 'Does it work for multiple outlets?', a: 'Yes. Multi-location stock plus unlimited users let several outlets and the owner work in one set of books with no per-seat fee.' },
      { q: 'How much does restaurant billing software cost on 399Apps?', a: 'From ₹399/month for your first app with unlimited users; add Nidhi Inventory at +₹99/month. Prices exclude GST, and there are no per-user charges.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'GST billing software for retail shops', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Billing software for pharmacy & medical store', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'gst-software-for-traders-wholesalers': {
    slug: 'gst-software-for-traders-wholesalers',
    industry: 'traders, wholesalers & distributors',
    breadcrumbLeaf: 'GST software for traders & wholesalers',
    seo: {
      title:
        'GST Software for Traders & Wholesalers — Multi-item Invoicing + Stock | 399Apps',
      description:
        'GST software for traders, wholesalers and distributors. 399Apps handles high-volume multi-item B2B invoices, e-invoice/e-way bill and GSTR-ready exports with Nidhi Books, plus stock, POs and transfers across godowns with Nidhi Inventory — from ₹399/mo, unlimited users, prices exclude GST.',
      keywords: [
        'gst software for traders',
        'billing software for wholesalers',
        'gst billing software for distributors',
        'wholesale billing software india',
        'distribution billing software with inventory',
        'b2b gst invoice software india',
      ],
    },
    hero: {
      eyebrow: 'For traders, wholesalers & distributors',
      h1: 'GST software for traders & wholesalers — high-volume invoicing and stock from ₹399/mo',
      verdict:
        'For traders, wholesalers and distributors, 399Apps is built for high-volume GST invoicing: Nidhi Books handles multi-item B2B invoices, e-invoice and e-way bill, and GSTR-ready exports, while Nidhi Inventory tracks stock, purchase orders and transfers across godowns. From ₹399/mo (first app; +₹99/mo per add-on, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'What is the best GST software for traders and wholesalers?',
      body: 'The best GST software for traders and wholesalers handles high-volume, multi-item B2B invoices, applies correct inter-state IGST, supports e-invoice and e-way bill, and keeps stock accurate across godowns. 399Apps does the GST invoicing and accounts with Nidhi Books and the stock, purchase orders and transfers with Nidhi Inventory.',
      body2:
        'Traders and distributors look for one when invoice volume outgrows manual billing, when e-way bills slow down dispatch, or when stock and outstanding across godowns and retailers become hard to track.',
    },
    pains: {
      h2: 'Trader & wholesaler pains → what 399Apps actually does',
      intro:
        'Multi-item invoicing, e-invoice/e-way bill and multi-warehouse stock are all real capabilities — nothing below is invented.',
      items: [
        { pain: 'Bulk, multi-item B2B invoices', solution: 'Nidhi Books raises multi-line GST invoices with HSN, place-of-supply and correct CGST/SGST/IGST on every line.' },
        { pain: 'Inter-state sales need IGST', solution: 'Place-of-supply detection drives intra- vs inter-state tax automatically, so IGST is applied correctly.' },
        { pain: 'E-invoice and e-way bill slow dispatch', solution: 'Nidhi Books supports e-invoice and e-way bill above the applicable thresholds so movement is not held up.' },
        { pain: 'Stock spread across godowns', solution: 'Nidhi Inventory tracks on-hand, available, reserved and in-transit stock per location, with branch-to-branch transfers and audit.' },
        { pain: 'Buying from manufacturers', solution: 'Purchase orders, goods receipts and three-way match keep procurement clean and matched to vendor bills.' },
        { pain: 'Outstanding from retailers and dealers', solution: 'AR Aging and customer ledgers in Nidhi Books show exactly who owes what across your buyers.' },
      ],
    },
    why: {
      h2: 'Why traders & wholesalers choose 399Apps',
      intro: 'High-volume GST invoicing and multi-godown stock at a flat price.',
      items: [
        'Multi-item B2B invoices with HSN, place-of-supply and automatic CGST/SGST/IGST.',
        'E-invoice and e-way bill support above thresholds so dispatch keeps moving.',
        'Multi-warehouse stock with transfers, POs, GRN and three-way match.',
        'GSTR-1 and GSTR-3B-ready CSV exports plus AR/AP Aging for outstanding control.',
        'Unlimited users from ₹399/mo for the first app (+₹99/mo per add-on, prices exclude GST).',
      ],
    },
    pricing: {
      h2: 'Pricing for traders & wholesalers',
      body: 'Start with Nidhi Books at ₹399/mo for your first app (unlimited users, every feature included), then add Nidhi Inventory for multi-godown stock, POs and transfers at +₹99/mo. Prices exclude GST, which is added per invoice based on your billing location. No per-seat fees as you add billing or dispatch staff.',
    },
    faq: [
      { q: 'Is 399Apps good GST software for a wholesale or distribution business?', a: 'Yes. Nidhi Books handles high-volume multi-item B2B invoices with HSN, place-of-supply and IGST, plus e-invoice and e-way bill, while Nidhi Inventory tracks stock and transfers across godowns — from ₹399/mo, unlimited users (prices exclude GST).' },
      { q: 'Does 399Apps support e-invoice and e-way bill for traders?', a: 'Yes. Nidhi Books supports e-invoice and e-way bill above the applicable thresholds, so bulk dispatch is not held up at the GST step.' },
      { q: 'Can it track stock across multiple godowns?', a: 'Yes. Nidhi Inventory tracks on-hand, available, reserved and in-transit stock per location, with branch-to-branch transfers, purchase orders, goods receipts and three-way match.' },
      { q: 'Does it handle inter-state IGST automatically?', a: 'Yes. Place-of-supply detection drives intra- vs inter-state tax, so CGST/SGST or IGST is applied correctly on every invoice line and in your GST returns.' },
      { q: 'How much does GST software for traders cost on 399Apps?', a: 'From ₹399/month for your first app with unlimited users; add Nidhi Inventory at +₹99/month. Prices exclude GST, and there are no per-user fees.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'GST billing software for retail shops', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Billing software for pharmacy & medical store', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD: single source of truth → @graph built from the content above.
// Emits Organization, WebSite, WebPage, SoftwareApplication (+Offer), FAQPage,
// BreadcrumbList — the same shape the alternative cluster uses (alt-jsonld.ts).
// ---------------------------------------------------------------------------

const ORG_NODE = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '399Apps',
  url: `${SITE_URL}/`,
};

const WEBSITE_NODE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: '399Apps',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export function buildUseCaseGraph(slug: string) {
  const uc = USECASES[slug];
  if (!uc) throw new Error(`Unknown use-case slug: ${slug}`);
  const base = `${SITE_URL}/${slug}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG_NODE,
      WEBSITE_NODE,
      {
        '@type': 'WebPage',
        '@id': `${base}#webpage`,
        url: base,
        name: uc.seo.title,
        description: uc.seo.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${base}#software` },
        breadcrumb: { '@id': `${base}#breadcrumb` },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${base}#software`,
        name: '399Apps',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'GST Billing & Accounting Software',
        operatingSystem: 'Web, Android, iOS',
        inLanguage: ['en-IN', 'hi-IN', 'ta-IN'],
        description: `GST billing, accounting and inventory software for ${uc.industry} in India — Nidhi Books (GST invoices, GSTR-ready exports, ledgers) and Nidhi Inventory (barcode stock, batch/expiry, purchase orders). From ₹399/month for your first app with unlimited users; +₹99/month per additional app or add-on (prices exclude GST).`,
        url: base,
        provider: { '@id': `${SITE_URL}/#organization` },
        offers: {
          '@type': 'Offer',
          price: '399',
          priceCurrency: 'INR',
          description:
            'Entry/from price: ₹399/month covers your first app with unlimited users; each additional app or add-on is ₹99/month. Prices exclude GST (added per invoice based on billing location).',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/pricing/`,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '399',
            priceCurrency: 'INR',
            billingDuration: 'P1M',
            unitText: 'MONTH',
            valueAddedTaxIncluded: false,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${base}#faq`,
        isPartOf: { '@id': `${base}#webpage` },
        mainEntity: uc.faq.map((f) => ({
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
          { '@type': 'ListItem', position: 2, name: uc.breadcrumbLeaf, item: base },
        ],
      },
    ],
  };
}
