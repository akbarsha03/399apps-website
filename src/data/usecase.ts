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

import { localizedPath, HTML_LANG_ATTR, type Lang } from './i18n/shared';

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
        'Simple, predictable pricing: from ₹399/mo for your first app; each extra app or add-on is just ₹99/mo (prices exclude GST).',
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
      { label: 'Billing software for restaurants & cafés', href: '/billing-software-for-restaurants-cafes/' },
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
      { label: 'Billing software for restaurants & cafés', href: '/billing-software-for-restaurants-cafes/' },
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
      { label: 'GST software for traders & wholesalers', href: '/gst-software-for-traders-wholesalers/' },
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
      { label: 'Billing software for restaurants & cafés', href: '/billing-software-for-restaurants-cafes/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Localized industry use-case content (mirrors the alt-cluster i18n pattern).
// Same keys & array lengths as the English USECASES record above — only the
// human-readable values are translated. Brand/product names (Nidhi Books,
// Nidhi Inventory), slugs, related[].href and seo.keywords stay English.
// Button micro-labels stay English in the component, like the alt cluster.
// hi = Hinglish (Romanised Hindi + English), ta = Tanglish (Romanised Tamil),
// hindi = Devanagari, tamil = Tamil script.
// ---------------------------------------------------------------------------

const USECASES_HI: Record<string, UseCase> = {
  'gst-billing-software-for-retail-shops': {
    slug: 'gst-billing-software-for-retail-shops',
    industry: 'retail, kirana aur general stores',
    breadcrumbLeaf: 'Retail shops ke liye GST billing software',
    seo: {
      title:
        'Retail & Kirana Shops ke liye GST Billing Software — ₹399/mo se, Unlimited Users | 399Apps',
      description:
        'India mein retail, kirana aur general stores ke liye best GST billing software. 399Apps Nidhi Books (GST invoices, daily reports) ko Nidhi Inventory (barcode stock, reorder alerts) ke saath jodta hai — ₹399/mo se, unlimited users, prices GST exclude karti hain. Free 14-day trial.',
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
      eyebrow: 'Retail & kirana stores ke liye',
      h1: 'Retail & kirana shops ke liye GST billing software — fast counter billing, real stock, ₹399/mo se',
      verdict:
        'Retail ya kirana store ke liye 399Apps best-value GST billing software hai: Nidhi Books barcode-friendly billing, customer dues (khata) aur daily reports ke saath GST-compliant invoices banata hai, aur Nidhi Inventory counters ke across stock track karta hai reorder alerts ke saath — ₹399/mo se (pehla app; har add-on +₹99/mo, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Retail ya kirana store ke liye best billing software kaunsa hai?',
      body: 'Retail ya kirana store ke liye best billing software ek aisa GST-ready tool hai jo counter pe fast bill banata hai, stock accurate rakhta hai, aur mahine ke end mein clean GST returns deta hai — bina per-user fees ke jaise-jaise aap staff add karte hain. 399Apps yeh do apps se deta hai: GST billing aur accounting ke liye Nidhi Books, aur products aur counters ke across barcode-driven stock ke liye Nidhi Inventory.',
      body2:
        'Shopkeepers aam taur pe ek tab dhoondte hain jab handwritten bills aur notebooks GST ke saath nahi chal paate, jab stock baar-baar khatam ho jaata hai (ya pile up ho jaata hai), ya jab woh ek counter assistant add karna chahte hain bina per user extra diye.',
    },
    pains: {
      h2: 'Retail pains → 399Apps asal mein kya karta hai',
      intro:
        'Neeche di gayi har capability aaj Nidhi Books ya Nidhi Inventory mein ship hoti hai — koi invented retail modules nahi.',
      items: [
        { pain: 'Slow, error-prone counter billing', solution: 'Nidhi Books HSN/SAC, CGST/SGST/IGST splitting aur PDF pe UPI QR ke saath GST-compliant invoices banata hai — counter pe jaldi raise karne layak.' },
        { pain: 'Stock khatam ho jaata hai ya dead stock pile up ho jaata hai', solution: 'Nidhi Inventory har location ka on-hand stock track karta hai aur aapke min/max levels se automatically reorder PO drafts raise karta hai.' },
        { pain: 'Saikdo SKUs aur barcodes', solution: 'Barcode-first workflows — koi bhi USB/Bluetooth scanner jo keystrokes emit karta hai chalta hai, poore catalogue mein SKU-level tracking ke saath.' },
        { pain: 'GST returns mahine-end ki bhaag-daud hai', solution: 'Nidhi Books GSTR-1 (B2B, B2C, HSN summary) aur ek GSTR-3B summary CA-ready CSV ke roop mein export karta hai.' },
        { pain: 'Customer dues / khata track karna', solution: 'Customer ledgers aur AR Aging buckets bilkul dikhate hain kaun kitna aur kitne time se owe karta hai.' },
        { pain: 'Counter assistant add karne mein zyaada kharcha', solution: 'Unlimited users included hain — staff aur aapka accountant ek hi books share karte hain bina per-seat fee ke.' },
      ],
    },
    why: {
      h2: 'Retail shops 399Apps kyun chunti hain',
      intro: 'Flat, predictable pricing ek hi cloud system mein full accounting aur stock ke saath.',
      items: [
        'GST-native: compliant invoices, GSTR-1/3B-ready exports, place-of-supply handling.',
        'Stock + billing saath — Nidhi Books aur Nidhi Inventory ek hi item list aur stock valuation share karte hain.',
        'Unlimited users, kabhi per seat nahi — counter staff add karein bina extra cost ke.',
        'Cloud (web) + mobile daily backups ke saath, taaki shop owner kahin se bhi numbers dekh sake.',
        'Flat price: pehle app ke liye ₹399/mo se; har extra app ya add-on sirf ₹99/mo (prices GST exclude karti hain).',
      ],
    },
    pricing: {
      h2: 'Retail & kirana shops ke liye pricing',
      body: 'Nidhi Books se shuru karein pehle app ke liye ₹399/mo pe (unlimited users, har feature included). Barcode stock aur reorder alerts ke liye Nidhi Inventory add karein +₹99/mo pe. Prices GST exclude karti hain, jo aapki billing location ke hisaab se per invoice add hota hai. Counter staff add karne pe koi per-seat charges nahi.',
    },
    faq: [
      { q: 'India mein kirana store ke liye best billing software kaunsa hai?', a: '399Apps ek strong choice hai: Nidhi Books GST-compliant billing aur daily reports deta hai, Nidhi Inventory barcode stock aur reorder alerts handle karta hai, aur isme pehle app ke liye ₹399/mo se unlimited users included hain (har add-on +₹99/mo, prices GST exclude karti hain).' },
      { q: 'Kya 399Apps retail ke liye barcode billing support karta hai?', a: 'Haan. Nidhi Inventory barcode-first hai — koi bhi USB ya Bluetooth scanner jo keystrokes emit karta hai chalta hai, desktop aur mobile pe scan-first UI aur SKU-level tracking ke saath.' },
      { q: 'Kya main apni shop ke liye customer dues (khata) track kar sakta hoon?', a: 'Haan. Nidhi Books customer ledgers aur AR Aging buckets (current, 1–30, 31–60, 61–90, 90+ days) rakhta hai taaki aap bilkul dekh sakein kaun kitna owe karta hai.' },
      { q: '399Apps pe retail billing software ka kitna kharcha hai?', a: 'Pehle app ke liye ₹399/month se unlimited users ke saath; Nidhi Inventory ya koi doosra add-on +₹99/month each pe add karein. Prices GST exclude karti hain. Koi per-user fees nahi.' },
      { q: 'Kya yeh meri store ke liye GST returns handle karta hai?', a: 'Haan. Nidhi Books GSTR-1 (B2B, B2C consolidated, HSN-wise summary) aur ek GSTR-3B outward-supplies summary CA-ready CSV ke roop mein export karta hai.' },
    ],
    related: [
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Pharmacy & medical store ke liye billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Traders & wholesalers ke liye GST software', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-pharmacy-medical-store': {
    slug: 'billing-software-for-pharmacy-medical-store',
    industry: 'pharmacies aur medical stores',
    breadcrumbLeaf: 'Pharmacy & medical store ke liye billing software',
    seo: {
      title:
        'Pharmacy & Medical Store ke liye Billing Software — Batch + Expiry, GST Billing | 399Apps',
      description:
        'Pharmacies aur medical stores ke liye GST billing software. 399Apps Nidhi Inventory (batch + expiry tracking, barcode, reorder alerts) ko Nidhi Books (GST invoices, GSTR-ready returns) ke saath jodta hai — ₹399/mo se, unlimited users, prices GST exclude karti hain. Free 14-day trial.',
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
      eyebrow: 'Pharmacies & medical stores ke liye',
      h1: 'Pharmacy & medical stores ke liye billing software — batch, expiry aur GST billing ₹399/mo se',
      verdict:
        'Pharmacy ya medical store ke liye 399Apps Nidhi Inventory — batch aur expiry tracking, barcode billing aur reorder alerts ke saath — ko Nidhi Books ke saath jodta hai GST-compliant invoices aur GSTR-ready returns ke liye. ₹399/mo se (pehla app; har add-on +₹99/mo, GST extra), unlimited users, taaki har counter aur pharmacist ek hi live stock se kaam kare.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Inventory', 'Nidhi Books'],
    definition: {
      h2: 'Pharmacy ya medical store ke liye best billing software kaunsa hai?',
      body: 'Pharmacy ya medical store ke liye best billing software batch aur expiry tracking handle karta hai, barcodes se fast bill banata hai, har medicine pe sahi GST rate lagata hai, aur fast-moving stock khatam hone se pehle reorder karta hai. 399Apps yeh Nidhi Inventory se batch/expiry stock control aur Nidhi Books se GST-compliant billing aur returns ke saath karta hai.',
      body2:
        'Pharmacies ek tab dhoondte hain jab expiry losses pile up ho jaate hain, jab racks ke across stock track karna mushkil hota hai, ya jab GST billing aur reorder ek hi system mein hone chahiye jo poora counter use kar sake.',
    },
    pains: {
      h2: 'Pharmacy pains → 399Apps asal mein kya karta hai',
      intro:
        'Batch, expiry aur barcode tracking asli Nidhi Inventory capabilities hain — neeche kuch bhi invented nahi.',
      items: [
        { pain: 'Expired / near-expiry medicines se losses', solution: 'Nidhi Inventory stock ko batch level pe expiry ke saath track karta hai, taaki aap near-expiry stock ko write-off banne se pehle spot aur clear kar sakein.' },
        { pain: 'Racks aur strips ke across stock dhoondhna mushkil', solution: 'Barcode + batch + serial tracking multi-location stock ke saath on-hand quantity ka live, scan-first view deta hai.' },
        { pain: 'Medicines pe alag GST rates (5% / 12% / 18%)', solution: 'Nidhi Books HSN ke saath date-aware tax rates use karta hai, taaki har product har invoice pe sahi CGST/SGST/IGST le.' },
        { pain: 'Fast movers khatam ho jaate hain', solution: 'Reorder automation har item ke min/max levels se PO drafts raise karta hai, taaki best-sellers stock mein rahein.' },
        { pain: 'Sales returns aur credit notes', solution: 'Nidhi Books GST credit notes banata hai jo aapke GSTR-1 export mein sahi se flow hote hain.' },
        { pain: 'Mahine-end GST filing', solution: 'GSTR-1 aur GSTR-3B summaries Nidhi Books se CA-ready CSV ke roop mein export hote hain.' },
      ],
    },
    why: {
      h2: 'Pharmacies 399Apps kyun chunti hain',
      intro: 'Batch/expiry stock control aur GST billing ek hi flat-priced cloud system mein.',
      items: [
        'Batch + expiry tracking taaki aap near-expiry losses ko control karein, peeche na bhaagein.',
        'Barcode-first billing — koi bhi keystroke-emitting USB/Bluetooth scanner chalta hai.',
        'GST-native invoices date-aware rates, HSN aur GSTR-ready exports ke saath.',
        'Reorder automation fast-moving medicines ko shelf pe rakhta hai.',
        'Unlimited users pehle app ke liye ₹399/mo se (har add-on +₹99/mo, prices GST exclude karti hain).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps aapko GST billing plus batch/expiry inventory deta hai — yeh ek dedicated drug-licence ya Schedule-H statutory-register product nahi hai. Agar aapko ek specific regulatory register chahiye, toh us workflow ko rakhein aur GST billing, stock aur accounts ke liye 399Apps use karein.',
    pricing: {
      h2: 'Pharmacies & medical stores ke liye pricing',
      body: 'Nidhi Inventory se shuru karein batch/expiry aur barcode stock ke liye, ya Nidhi Books se GST billing ke liye — aapka pehla app ₹399/mo hai unlimited users ke saath. Doosra app +₹99/mo pe add karein taaki billing aur stock ek hi item list share karein. Prices GST exclude karti hain. Counter staff ya pharmacists ke liye koi per-seat fees nahi.',
    },
    faq: [
      { q: 'Kya 399Apps pharmacy ke liye batch aur expiry track karta hai?', a: 'Haan. Nidhi Inventory batch tracking ko expiry ke saath (aur serial-level traceability) support karta hai, taaki aap near-expiry stock monitor kar sakein aur use write-off banne se pehle clear kar sakein.' },
      { q: 'Kya yeh medicines pe alag GST rates handle kar sakta hai?', a: 'Haan. Nidhi Books HSN ke saath per item date-aware tax rates lagata hai, taaki har medicine har invoice pe aur aapke returns mein sahi GST (5%, 12% ya 18%) le.' },
      { q: 'Kya 399Apps medical store ke liye barcode billing support karta hai?', a: 'Haan. Nidhi Inventory barcode-first hai — koi bhi USB ya Bluetooth scanner jo keystrokes emit karta hai chalta hai, desktop aur mobile pe scan-first UI ke saath.' },
      { q: 'Kya 399Apps ek drug-licence ya Schedule-H compliance product hai?', a: 'Nahi. 399Apps GST billing plus batch/expiry inventory aur accounts deta hai. Yeh ek dedicated drug-licence ya statutory-register tool nahi hai, isliye koi specific regulatory register workflow iske saath rakhein.' },
      { q: '399Apps pe pharmacy billing software ka kitna kharcha hai?', a: 'Pehle app ke liye ₹399/month se unlimited users ke saath; doosra app (Books ya Inventory) +₹99/month pe add karein. Prices GST exclude karti hain, aur koi per-user fees nahi.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'Retail shops ke liye GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Traders & wholesalers ke liye GST software', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Inventory — stock, batch & expiry', href: '/apps/inventory/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-restaurants-cafes': {
    slug: 'billing-software-for-restaurants-cafes',
    industry: 'restaurants aur cafés',
    breadcrumbLeaf: 'Restaurants & cafés ke liye billing software',
    seo: {
      title:
        'Restaurants & Cafés ke liye Billing & GST Software — ₹399/mo se | 399Apps',
      description:
        'Restaurants aur cafés ke liye GST billing aur accounting. 399Apps Nidhi Books se GST-compliant food bills (CGST/SGST, HSN/SAC) aur GSTR-ready returns banata hai, aur Nidhi Inventory se ingredient stock track karta hai — ₹399/mo se, unlimited users. Note: yeh GST billing + books hai, table/KOT POS nahi.',
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
      eyebrow: 'Restaurants & cafés ke liye',
      h1: 'Restaurants aur cafés ke liye GST billing & accounting — ₹399/mo se, unlimited users',
      verdict:
        'Restaurants aur cafés ke liye 399Apps billing-and-books wala side handle karta hai: Nidhi Books GST-compliant food bills (CGST/SGST, HSN/SAC) banata hai aur GSTR-ready returns file karta hai, aur Nidhi Inventory ingredient aur supplies stock track karta hai. ₹399/mo se (pehla app; har add-on +₹99/mo, GST extra), unlimited users. Note: yeh GST billing aur accounting hai, dedicated table ya KOT POS nahi.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Restaurant ya café ke liye best GST billing software kaunsa hai?',
      body: 'Restaurant ya café ke liye best GST billing software sahi GST rate ke saath compliant food bills banata hai, ingredient aur supplies stock track karta hai, supplier bills record karta hai, aur aapko clean daily sales aur accounts deta hai. 399Apps billing aur books Nidhi Books se karta hai, aur kitchen aur bar stock Nidhi Inventory se track karta hai.',
      body2:
        'Owners ek tab dhoondte hain jab handwritten bills GST ke saath nahi chal paate, jab ingredient stock aur wastage invisible hote hain, ya jab woh ek ya kai outlets ke across clean accounts chahte hain.',
    },
    pains: {
      h2: 'Restaurant & café pains → 399Apps asal mein kya karta hai',
      intro:
        'Yeh asli Nidhi Books / Nidhi Inventory capabilities hain jo F&B ke liye framed hain — hum table-ordering POS hone ka dikhawa nahi karte.',
      items: [
        { pain: 'Food & beverages pe GST (5% vs 18%, with/without ITC)', solution: 'Nidhi Books HSN/SAC ke saath date-aware tax rates lagata hai, taaki har bill sahi CGST/SGST split le.' },
        { pain: 'Ingredient aur supplies stock / wastage invisible hain', solution: 'Nidhi Inventory har item aur location ka stock reorder alerts ke saath track karta hai, taaki aap dekhein kya on hand hai aur kya khareedna hai.' },
        { pain: 'Supplier bills aur dues pile up ho jaate hain', solution: 'Nidhi Inventory aur Nidhi Books mein purchase orders, vendor bills aur AP Aging supplier payments ko control mein rakhte hain.' },
        { pain: 'Koi clear daily sales ya profit picture nahi', solution: 'Sales Register, Profit & Loss aur Cash Flow reports jaise hi aap bills record karte hain recalc hote hain.' },
        { pain: 'Do ya zyaada outlets track karne hain', solution: 'Multi-location stock plus unlimited users har outlet aur owner ko ek hi set of books mein kaam karne dete hain.' },
        { pain: 'Staff add karne se software cost badhti hai', solution: 'Unlimited users included hain — cashiers, managers ya aapke accountant ke liye koi per-seat fee nahi.' },
      ],
    },
    why: {
      h2: 'Restaurants & cafés 399Apps kyun chunte hain',
      intro: 'Compliant F&B billing plus real accounts aur stock ek flat price pe.',
      items: [
        'GST-compliant food bills date-aware rates, HSN/SAC aur CGST/SGST splitting ke saath.',
        'Aapke CA ke liye GSTR-1 aur GSTR-3B-ready CSV exports.',
        'Nidhi Inventory ke through ingredient aur supplies stock tracking reorder alerts ke saath.',
        'Daily sales, P&L aur cash flow jo aap ek nazar mein padh sakein.',
        'Unlimited users pehle app ke liye ₹399/mo se (har add-on +₹99/mo, prices GST exclude karti hain).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps GST billing, accounting aur inventory hai — table management, KOT printing ya order screens wala dedicated restaurant POS nahi. Agar aap pehle se table ordering ke liye ek POS use karte hain, toh use floor ke liye chalayein aur compliant GST billing, stock aur books ke liye 399Apps use karein.',
    pricing: {
      h2: 'Restaurants & cafés ke liye pricing',
      body: 'Nidhi Books se shuru karein pehle app ke liye ₹399/mo pe (unlimited users, har feature included). Ingredient aur supplies stock ke liye Nidhi Inventory add karein +₹99/mo pe. Prices GST exclude karti hain, jo aapki billing location ke hisaab se per invoice add hota hai. Cashiers ya managers add karne pe koi per-seat fees nahi.',
    },
    faq: [
      { q: 'Kya 399Apps GST-compliant restaurant bills issue kar sakta hai?', a: 'Haan. Nidhi Books date-aware tax rates, HSN/SAC aur CGST/SGST splitting ke saath GST-compliant food bills banata hai, aur filing ke liye GSTR-1 aur GSTR-3B summaries export karta hai.' },
      { q: 'Kya 399Apps table aur KOT management wala restaurant POS hai?', a: 'Nahi. 399Apps GST billing, accounting aur inventory hai — dedicated table/KOT POS nahi. Bahut restaurants ordering ke liye POS chalate hain aur compliant billing, stock aur accounts ke liye 399Apps use karte hain.' },
      { q: 'Kya yeh meri kitchen ke liye ingredient stock track kar sakta hai?', a: 'Haan. Nidhi Inventory har item aur location ka stock reorder alerts ke saath track karta hai, taaki aap ingredients aur supplies pe nazar rakhein aur stock-outs kam karein.' },
      { q: 'Kya yeh multiple outlets ke liye kaam karta hai?', a: 'Haan. Multi-location stock plus unlimited users kai outlets aur owner ko ek hi set of books mein kaam karne dete hain bina per-seat fee ke.' },
      { q: '399Apps pe restaurant billing software ka kitna kharcha hai?', a: 'Pehle app ke liye ₹399/month se unlimited users ke saath; Nidhi Inventory +₹99/month pe add karein. Prices GST exclude karti hain, aur koi per-user charges nahi.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Retail shops ke liye GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Pharmacy & medical store ke liye billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'gst-software-for-traders-wholesalers': {
    slug: 'gst-software-for-traders-wholesalers',
    industry: 'traders, wholesalers aur distributors',
    breadcrumbLeaf: 'Traders & wholesalers ke liye GST software',
    seo: {
      title:
        'Traders & Wholesalers ke liye GST Software — Multi-item Invoicing + Stock | 399Apps',
      description:
        'Traders, wholesalers aur distributors ke liye GST software. 399Apps Nidhi Books se high-volume multi-item B2B invoices, e-invoice/e-way bill aur GSTR-ready exports handle karta hai, plus Nidhi Inventory se godowns ke across stock, POs aur transfers — ₹399/mo se, unlimited users, prices GST exclude karti hain.',
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
      eyebrow: 'Traders, wholesalers & distributors ke liye',
      h1: 'Traders & wholesalers ke liye GST software — high-volume invoicing aur stock ₹399/mo se',
      verdict:
        'Traders, wholesalers aur distributors ke liye 399Apps high-volume GST invoicing ke liye bana hai: Nidhi Books multi-item B2B invoices, e-invoice aur e-way bill, aur GSTR-ready exports handle karta hai, aur Nidhi Inventory godowns ke across stock, purchase orders aur transfers track karta hai. ₹399/mo se (pehla app; har add-on +₹99/mo, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Traders aur wholesalers ke liye best GST software kaunsa hai?',
      body: 'Traders aur wholesalers ke liye best GST software high-volume, multi-item B2B invoices handle karta hai, sahi inter-state IGST lagata hai, e-invoice aur e-way bill support karta hai, aur godowns ke across stock accurate rakhta hai. 399Apps GST invoicing aur accounts Nidhi Books se aur stock, purchase orders aur transfers Nidhi Inventory se karta hai.',
      body2:
        'Traders aur distributors ek tab dhoondte hain jab invoice volume manual billing se bada ho jaata hai, jab e-way bills dispatch ko slow karte hain, ya jab godowns aur retailers ke across stock aur outstanding track karna mushkil ho jaata hai.',
    },
    pains: {
      h2: 'Trader & wholesaler pains → 399Apps asal mein kya karta hai',
      intro:
        'Multi-item invoicing, e-invoice/e-way bill aur multi-warehouse stock sab asli capabilities hain — neeche kuch bhi invented nahi.',
      items: [
        { pain: 'Bulk, multi-item B2B invoices', solution: 'Nidhi Books har line pe HSN, place-of-supply aur sahi CGST/SGST/IGST ke saath multi-line GST invoices raise karta hai.' },
        { pain: 'Inter-state sales ko IGST chahiye', solution: 'Place-of-supply detection intra- vs inter-state tax automatically drive karta hai, taaki IGST sahi se apply ho.' },
        { pain: 'E-invoice aur e-way bill dispatch ko slow karte hain', solution: 'Nidhi Books applicable thresholds ke upar e-invoice aur e-way bill support karta hai taaki movement na ruke.' },
        { pain: 'Stock godowns ke across phaila hua', solution: 'Nidhi Inventory har location ka on-hand, available, reserved aur in-transit stock track karta hai, branch-to-branch transfers aur audit ke saath.' },
        { pain: 'Manufacturers se khareedna', solution: 'Purchase orders, goods receipts aur three-way match procurement ko clean aur vendor bills se matched rakhte hain.' },
        { pain: 'Retailers aur dealers se outstanding', solution: 'Nidhi Books mein AR Aging aur customer ledgers bilkul dikhate hain aapke buyers ke across kaun kitna owe karta hai.' },
      ],
    },
    why: {
      h2: 'Traders & wholesalers 399Apps kyun chunte hain',
      intro: 'High-volume GST invoicing aur multi-godown stock ek flat price pe.',
      items: [
        'Multi-item B2B invoices HSN, place-of-supply aur automatic CGST/SGST/IGST ke saath.',
        'E-invoice aur e-way bill support thresholds ke upar taaki dispatch chalta rahe.',
        'Multi-warehouse stock transfers, POs, GRN aur three-way match ke saath.',
        'GSTR-1 aur GSTR-3B-ready CSV exports plus outstanding control ke liye AR/AP Aging.',
        'Unlimited users pehle app ke liye ₹399/mo se (har add-on +₹99/mo, prices GST exclude karti hain).',
      ],
    },
    pricing: {
      h2: 'Traders & wholesalers ke liye pricing',
      body: 'Nidhi Books se shuru karein pehle app ke liye ₹399/mo pe (unlimited users, har feature included), phir multi-godown stock, POs aur transfers ke liye Nidhi Inventory add karein +₹99/mo pe. Prices GST exclude karti hain, jo aapki billing location ke hisaab se per invoice add hota hai. Billing ya dispatch staff add karne pe koi per-seat fees nahi.',
    },
    faq: [
      { q: 'Kya 399Apps ek wholesale ya distribution business ke liye achha GST software hai?', a: 'Haan. Nidhi Books HSN, place-of-supply aur IGST ke saath high-volume multi-item B2B invoices handle karta hai, plus e-invoice aur e-way bill, aur Nidhi Inventory godowns ke across stock aur transfers track karta hai — ₹399/mo se, unlimited users (prices GST exclude karti hain).' },
      { q: 'Kya 399Apps traders ke liye e-invoice aur e-way bill support karta hai?', a: 'Haan. Nidhi Books applicable thresholds ke upar e-invoice aur e-way bill support karta hai, taaki bulk dispatch GST step pe na ruke.' },
      { q: 'Kya yeh multiple godowns ke across stock track kar sakta hai?', a: 'Haan. Nidhi Inventory har location ka on-hand, available, reserved aur in-transit stock track karta hai, branch-to-branch transfers, purchase orders, goods receipts aur three-way match ke saath.' },
      { q: 'Kya yeh inter-state IGST automatically handle karta hai?', a: 'Haan. Place-of-supply detection intra- vs inter-state tax drive karta hai, taaki har invoice line pe aur aapke GST returns mein CGST/SGST ya IGST sahi se apply ho.' },
      { q: '399Apps pe traders ke liye GST software ka kitna kharcha hai?', a: 'Pehle app ke liye ₹399/month se unlimited users ke saath; Nidhi Inventory +₹99/month pe add karein. Prices GST exclude karti hain, aur koi per-user fees nahi.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'Retail shops ke liye GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Pharmacy & medical store ke liye billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

const USECASES_TA: Record<string, UseCase> = {
  'gst-billing-software-for-retail-shops': {
    slug: 'gst-billing-software-for-retail-shops',
    industry: 'retail, kirana aur general stores',
    breadcrumbLeaf: 'Retail shops-ku GST billing software',
    seo: {
      title:
        'Retail & Kirana Shops-ku GST Billing Software — ₹399/mo-la irundhu, Unlimited Users | 399Apps',
      description:
        'India-la retail, kirana aur general stores-ku best GST billing software. 399Apps Nidhi Books (GST invoices, daily reports)-a Nidhi Inventory (barcode stock, reorder alerts)-oda serkkudhu — ₹399/mo-la irundhu, unlimited users, prices GST exclude pannudhu. Free 14-day trial.',
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
      eyebrow: 'Retail & kirana stores-ku',
      h1: 'Retail & kirana shops-ku GST billing software — fast counter billing, real stock, ₹399/mo-la irundhu',
      verdict:
        'Retail illa kirana store-ku 399Apps best-value GST billing software: Nidhi Books barcode-friendly billing, customer dues (khata) aur daily reports-oda GST-compliant invoices create pannudhu, Nidhi Inventory counters-oda across stock-a reorder alerts-oda track pannudhu — ₹399/mo-la irundhu (mudhal app; ovvoru add-on +₹99/mo, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Retail illa kirana store-ku best billing software edhu?',
      body: 'Retail illa kirana store-ku best billing software-nu sollranadhu oru GST-ready tool, edhu counter-la fast bill pannudhu, stock accurate-a vechikkudhu, aur maasa mudhivula clean GST returns kudukudhu — staff add pannumbodhu per-user fees illaama. 399Apps idha rendu apps-oda kudukudhu: GST billing-um accounting-um-ku Nidhi Books, aur products-um counters-um across barcode-driven stock-ku Nidhi Inventory.',
      body2:
        'Shopkeepers usually onnu thedraanga eppo handwritten bills-um notebooks-um GST-oda chala mudiyaadho, eppo stock thirumba thirumba theendipogudho (illa pile up aagudho), illa eppo oru counter assistant-a per user extra kuduppadhu illaama add panna virumbraangalo.',
    },
    pains: {
      h2: 'Retail pains → 399Apps nejama enna pannudhu',
      intro:
        'Keezha irukkura ovvoru capability-um indha Nidhi Books illa Nidhi Inventory-la innaiku ship aagudhu — invented retail modules edhuvum illa.',
      items: [
        { pain: 'Slow, error-prone counter billing', solution: 'Nidhi Books HSN/SAC, CGST/SGST/IGST splitting aur PDF-la UPI QR-oda GST-compliant invoices kudukudhu — counter-la fast-a raise panna laam.' },
        { pain: 'Stock theendipogudhu illa dead stock pile up aagudhu', solution: 'Nidhi Inventory ovvoru location-oda on-hand stock-a track pannudhu aur unga min/max levels-la irundhu automatic-a reorder PO drafts raise pannudhu.' },
        { pain: 'Nooraikkanakkana SKUs aur barcodes', solution: 'Barcode-first workflows — keystrokes emit pannra edhuvana USB/Bluetooth scanner velai seyyum, mottha catalogue-um across SKU-level tracking-oda.' },
        { pain: 'GST returns oru maasa-mudhivu odaattam', solution: 'Nidhi Books GSTR-1 (B2B, B2C, HSN summary)-um oru GSTR-3B summary-yum CA-ready CSV-a export pannudhu.' },
        { pain: 'Customer dues / khata track pannradhu', solution: 'Customer ledgers-um AR Aging buckets-um sariyaa kaatudhu yaaru evlo aur evlo neram owe pannraanga-nu.' },
        { pain: 'Counter assistant add panna jaasthi selavu', solution: 'Unlimited users included — staff-um unga accountant-um ore books-a share pannraanga, per-seat fee illaama.' },
      ],
    },
    why: {
      h2: 'Retail shops yen 399Apps-a thernthedukkraanga',
      intro: 'Flat, predictable pricing ore cloud system-la full accounting-um stock-um-oda.',
      items: [
        'GST-native: compliant invoices, GSTR-1/3B-ready exports, place-of-supply handling.',
        'Stock + billing serndhu — Nidhi Books-um Nidhi Inventory-um ore item list-um stock valuation-um share pannudhu.',
        'Unlimited users, eppovum per seat illa — counter staff-a extra cost illaama add pannunga.',
        'Cloud (web) + mobile daily backups-oda, shop owner enga irundhaalum numbers-a paarka.',
        'Flat price: mudhal app-ku ₹399/mo-la irundhu; ovvoru extra app illa add-on verum ₹99/mo (prices GST exclude pannudhu).',
      ],
    },
    pricing: {
      h2: 'Retail & kirana shops-ku pricing',
      body: 'Nidhi Books-la start pannunga mudhal app-ku ₹399/mo-la (unlimited users, ella feature-um included). Barcode stock-um reorder alerts-um-ku Nidhi Inventory add pannunga +₹99/mo-la. Prices GST exclude pannudhu, adhu unga billing location-a poruthu per invoice add aagudhu. Counter staff add pannumbodhu per-seat charges illa.',
    },
    faq: [
      { q: 'India-la kirana store-ku best billing software edhu?', a: '399Apps oru strong choice: Nidhi Books GST-compliant billing-um daily reports-um kudukudhu, Nidhi Inventory barcode stock-um reorder alerts-um handle pannudhu, aur idhula mudhal app-ku ₹399/mo-la irundhu unlimited users included (ovvoru add-on +₹99/mo, prices GST exclude pannudhu).' },
      { q: '399Apps retail-ku barcode billing support pannudha?', a: 'Aamaa. Nidhi Inventory barcode-first — keystrokes emit pannra edhuvana USB illa Bluetooth scanner velai seyyum, desktop-um mobile-um scan-first UI-um SKU-level tracking-um-oda.' },
      { q: 'En shop-ku customer dues (khata) track panna mudiyuma?', a: 'Aamaa. Nidhi Books customer ledgers-um AR Aging buckets-um (current, 1–30, 31–60, 61–90, 90+ days) vechikkudhu, neenga sariyaa paarka mudiyum yaaru evlo owe pannraanga-nu.' },
      { q: '399Apps-la retail billing software evlo selavu?', a: 'Mudhal app-ku ₹399/month-la irundhu unlimited users-oda; Nidhi Inventory illa veara add-on +₹99/month each-la add pannunga. Prices GST exclude pannudhu. Per-user fees edhuvum illa.' },
      { q: 'Idhu en store-ku GST returns handle pannudha?', a: 'Aamaa. Nidhi Books GSTR-1 (B2B, B2C consolidated, HSN-wise summary)-um oru GSTR-3B outward-supplies summary-yum CA-ready CSV-a export pannudhu.' },
    ],
    related: [
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Pharmacy & medical store-ku billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Traders & wholesalers-ku GST software', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-pharmacy-medical-store': {
    slug: 'billing-software-for-pharmacy-medical-store',
    industry: 'pharmacies aur medical stores',
    breadcrumbLeaf: 'Pharmacy & medical store-ku billing software',
    seo: {
      title:
        'Pharmacy & Medical Store-ku Billing Software — Batch + Expiry, GST Billing | 399Apps',
      description:
        'Pharmacies aur medical stores-ku GST billing software. 399Apps Nidhi Inventory (batch + expiry tracking, barcode, reorder alerts)-a Nidhi Books (GST invoices, GSTR-ready returns)-oda serkkudhu — ₹399/mo-la irundhu, unlimited users, prices GST exclude pannudhu. Free 14-day trial.',
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
      eyebrow: 'Pharmacies & medical stores-ku',
      h1: 'Pharmacy & medical stores-ku billing software — batch, expiry aur GST billing ₹399/mo-la irundhu',
      verdict:
        'Pharmacy illa medical store-ku 399Apps Nidhi Inventory-a — batch-um expiry tracking, barcode billing-um reorder alerts-um-oda — Nidhi Books-oda serkkudhu GST-compliant invoices-um GSTR-ready returns-um-ku. ₹399/mo-la irundhu (mudhal app; ovvoru add-on +₹99/mo, GST extra), unlimited users, ovvoru counter-um pharmacist-um ore live stock-la velai seyya.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Inventory', 'Nidhi Books'],
    definition: {
      h2: 'Pharmacy illa medical store-ku best billing software edhu?',
      body: 'Pharmacy illa medical store-ku best billing software batch-um expiry tracking-um handle pannudhu, barcodes-oda fast-a bill pannudhu, ovvoru medicine-kkum sariyaana GST rate apply pannudhu, aur fast-moving stock theendipogadhukku munnaadi reorder pannudhu. 399Apps idha Nidhi Inventory-oda batch/expiry stock control-um Nidhi Books-oda GST-compliant billing-um returns-um pannudhu.',
      body2:
        'Pharmacies onnu thedraanga eppo expiry losses pile up aagudho, eppo racks across stock track pannradhu kashtamo, illa eppo GST billing-um reorder-um ore system-la irukkanumo mottha counter-um use pannra madhiri.',
    },
    pains: {
      h2: 'Pharmacy pains → 399Apps nejama enna pannudhu',
      intro:
        'Batch, expiry-um barcode tracking-um asli Nidhi Inventory capabilities — keezha edhuvum invented illa.',
      items: [
        { pain: 'Expired / near-expiry medicines-la irundhu losses', solution: 'Nidhi Inventory stock-a batch level-la expiry-oda track pannudhu, neenga near-expiry stock-a write-off aagadhukku munnaadi spot panni clear panna mudiyum.' },
        { pain: 'Racks-um strips-um across stock thedaradhu kashtam', solution: 'Barcode + batch + serial tracking multi-location stock-oda on-hand quantity-oda live, scan-first view kudukudhu.' },
        { pain: 'Medicines-la veera veera GST rates (5% / 12% / 18%)', solution: 'Nidhi Books HSN-oda date-aware tax rates use pannudhu, ovvoru product-um ovvoru invoice-la sariyaana CGST/SGST/IGST sumandhu varum.' },
        { pain: 'Fast movers theendipogudhu', solution: 'Reorder automation ovvoru item-oda min/max levels-la irundhu PO drafts raise pannudhu, best-sellers stock-la irukka.' },
        { pain: 'Sales returns-um credit notes-um', solution: 'Nidhi Books GST credit notes kudukudhu, adhu unga GSTR-1 export-la sariyaa flow aagum.' },
        { pain: 'Maasa-mudhivu GST filing', solution: 'GSTR-1-um GSTR-3B summaries-um Nidhi Books-la irundhu CA-ready CSV-a export aagudhu.' },
      ],
    },
    why: {
      h2: 'Pharmacies yen 399Apps-a thernthedukkraanga',
      intro: 'Batch/expiry stock control-um GST billing-um ore flat-priced cloud system-la.',
      items: [
        'Batch + expiry tracking, neenga near-expiry losses-a control pannunga, adha thedi odaadeenga.',
        'Barcode-first billing — keystroke-emit pannra edhuvana USB/Bluetooth scanner velai seyyum.',
        'GST-native invoices date-aware rates, HSN-um GSTR-ready exports-um-oda.',
        'Reorder automation fast-moving medicines-a shelf-la vechikkudhu.',
        'Unlimited users mudhal app-ku ₹399/mo-la irundhu (ovvoru add-on +₹99/mo, prices GST exclude pannudhu).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps unga-ku GST billing plus batch/expiry inventory kudukudhu — idhu oru dedicated drug-licence illa Schedule-H statutory-register product illa. Unga-ku oru specific regulatory register venum-na, andha workflow-a vechikkonga aur GST billing, stock-um accounts-um-ku 399Apps use pannunga.',
    pricing: {
      h2: 'Pharmacies & medical stores-ku pricing',
      body: 'Nidhi Inventory-la start pannunga batch/expiry-um barcode stock-um-ku, illa Nidhi Books-la GST billing-ku — unga mudhal app ₹399/mo unlimited users-oda. Rendaavadhu app +₹99/mo-la add pannunga, billing-um stock-um ore item list share panna. Prices GST exclude pannudhu. Counter staff illa pharmacists-ku per-seat fees illa.',
    },
    faq: [
      { q: '399Apps pharmacy-ku batch-um expiry-um track pannudha?', a: 'Aamaa. Nidhi Inventory batch tracking-a expiry-oda (aur serial-level traceability) support pannudhu, neenga near-expiry stock-a monitor panni adha write-off aagadhukku munnaadi clear panna mudiyum.' },
      { q: 'Idhu medicines-la veera veera GST rates handle pannuma?', a: 'Aamaa. Nidhi Books HSN-oda per item date-aware tax rates apply pannudhu, ovvoru medicine-um ovvoru invoice-la-um unga returns-la-um sariyaana GST (5%, 12% illa 18%) sumandhu varum.' },
      { q: '399Apps medical store-ku barcode billing support pannudha?', a: 'Aamaa. Nidhi Inventory barcode-first — keystrokes emit pannra edhuvana USB illa Bluetooth scanner velai seyyum, desktop-um mobile-um scan-first UI-oda.' },
      { q: '399Apps oru drug-licence illa Schedule-H compliance product-a?', a: 'Illa. 399Apps GST billing plus batch/expiry inventory-um accounts-um kudukudhu. Idhu oru dedicated drug-licence illa statutory-register tool illa, adhanaala edha specific regulatory register workflow-um idhoda serthu vechikkonga.' },
      { q: '399Apps-la pharmacy billing software evlo selavu?', a: 'Mudhal app-ku ₹399/month-la irundhu unlimited users-oda; rendaavadhu app (Books illa Inventory) +₹99/month-la add pannunga. Prices GST exclude pannudhu, aur per-user fees illa.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'Retail shops-ku GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Traders & wholesalers-ku GST software', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Inventory — stock, batch & expiry', href: '/apps/inventory/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-restaurants-cafes': {
    slug: 'billing-software-for-restaurants-cafes',
    industry: 'restaurants aur cafés',
    breadcrumbLeaf: 'Restaurants & cafés-ku billing software',
    seo: {
      title:
        'Restaurants & Cafés-ku Billing & GST Software — ₹399/mo-la irundhu | 399Apps',
      description:
        'Restaurants aur cafés-ku GST billing-um accounting-um. 399Apps Nidhi Books-oda GST-compliant food bills (CGST/SGST, HSN/SAC)-um GSTR-ready returns-um kudukudhu, aur Nidhi Inventory-oda ingredient stock track pannudhu — ₹399/mo-la irundhu, unlimited users. Note: idhu GST billing + books, table/KOT POS illa.',
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
      eyebrow: 'Restaurants & cafés-ku',
      h1: 'Restaurants aur cafés-ku GST billing & accounting — ₹399/mo-la irundhu, unlimited users',
      verdict:
        'Restaurants aur cafés-ku 399Apps billing-and-books side-a handle pannudhu: Nidhi Books GST-compliant food bills (CGST/SGST, HSN/SAC) kudukudhu aur GSTR-ready returns file pannudhu, Nidhi Inventory ingredient-um supplies stock-um track pannudhu. ₹399/mo-la irundhu (mudhal app; ovvoru add-on +₹99/mo, GST extra), unlimited users. Note: idhu GST billing-um accounting-um, dedicated table illa KOT POS illa.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Restaurant illa café-ku best GST billing software edhu?',
      body: 'Restaurant illa café-ku best GST billing software sariyaana GST rate-oda compliant food bills kudukudhu, ingredient-um supplies stock-um track pannudhu, supplier bills record pannudhu, aur unga-ku clean daily sales-um accounts-um kudukudhu. 399Apps billing-um books-um Nidhi Books-oda pannudhu, aur kitchen-um bar stock-um Nidhi Inventory-oda track pannudhu.',
      body2:
        'Owners onnu thedraanga eppo handwritten bills GST-oda chala mudiyaadho, eppo ingredient stock-um wastage-um invisible-a irukkudho, illa eppo onnu illa pala outlets across clean accounts venumo.',
    },
    pains: {
      h2: 'Restaurant & café pains → 399Apps nejama enna pannudhu',
      intro:
        'Idhellam asli Nidhi Books / Nidhi Inventory capabilities, F&B-ku framed pannappattadhu — naanga table-ordering POS-nu nadikkala.',
      items: [
        { pain: 'Food & beverages-la GST (5% vs 18%, with/without ITC)', solution: 'Nidhi Books HSN/SAC-oda date-aware tax rates apply pannudhu, ovvoru bill-um sariyaana CGST/SGST split sumandhu varum.' },
        { pain: 'Ingredient-um supplies stock / wastage-um invisible-a irukku', solution: 'Nidhi Inventory ovvoru item-um location-um stock-a reorder alerts-oda track pannudhu, enna on hand iruku-nu aur enna vaanganum-nu paarunga.' },
        { pain: 'Supplier bills-um dues-um pile up aagudhu', solution: 'Nidhi Inventory-la-um Nidhi Books-la-um purchase orders, vendor bills-um AP Aging-um supplier payments-a control-la vechikkudhu.' },
        { pain: 'Clear-a daily sales illa profit picture illa', solution: 'Sales Register, Profit & Loss-um Cash Flow reports-um neenga bills record pannumbodhu recalc aagudhu.' },
        { pain: 'Rendu illa adhigam outlets track panna', solution: 'Multi-location stock plus unlimited users ovvoru outlet-um owner-um ore set of books-la velai seyya vidum.' },
        { pain: 'Staff add panna software cost jaasthi aagudhu', solution: 'Unlimited users included — cashiers, managers illa unga accountant-ku per-seat fee illa.' },
      ],
    },
    why: {
      h2: 'Restaurants & cafés yen 399Apps-a thernthedukkraanga',
      intro: 'Compliant F&B billing plus real accounts-um stock-um oru flat price-la.',
      items: [
        'GST-compliant food bills date-aware rates, HSN/SAC-um CGST/SGST splitting-um-oda.',
        'Unga CA-ku GSTR-1-um GSTR-3B-ready CSV exports-um.',
        'Nidhi Inventory-oda ingredient-um supplies stock tracking reorder alerts-oda.',
        'Daily sales, P&L-um cash flow-um neenga ore paarvaila padikka.',
        'Unlimited users mudhal app-ku ₹399/mo-la irundhu (ovvoru add-on +₹99/mo, prices GST exclude pannudhu).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps GST billing, accounting-um inventory-um — table management, KOT printing illa order screens-oda dedicated restaurant POS illa. Neenga already table ordering-ku oru POS use panna, adha floor-ku chalayinga aur compliant GST billing, stock-um books-um-ku 399Apps use pannunga.',
    pricing: {
      h2: 'Restaurants & cafés-ku pricing',
      body: 'Nidhi Books-la start pannunga mudhal app-ku ₹399/mo-la (unlimited users, ella feature-um included). Ingredient-um supplies stock-um-ku Nidhi Inventory add pannunga +₹99/mo-la. Prices GST exclude pannudhu, adhu unga billing location-a poruthu per invoice add aagudhu. Cashiers illa managers add pannumbodhu per-seat fees illa.',
    },
    faq: [
      { q: '399Apps GST-compliant restaurant bills issue pannuma?', a: 'Aamaa. Nidhi Books date-aware tax rates, HSN/SAC-um CGST/SGST splitting-um-oda GST-compliant food bills kudukudhu, aur filing-ku GSTR-1-um GSTR-3B summaries-um export pannudhu.' },
      { q: '399Apps table-um KOT management-um-oda restaurant POS-a?', a: 'Illa. 399Apps GST billing, accounting-um inventory-um — dedicated table/KOT POS illa. Nariya restaurants ordering-ku POS chalaikkraanga aur compliant billing, stock-um accounts-um-ku 399Apps use pannraanga.' },
      { q: 'Idhu en kitchen-ku ingredient stock track pannuma?', a: 'Aamaa. Nidhi Inventory ovvoru item-um location-um stock-a reorder alerts-oda track pannudhu, neenga ingredients-um supplies-um pe nazar vechi stock-outs-a kammi panna.' },
      { q: 'Idhu multiple outlets-ku velai seyyuma?', a: 'Aamaa. Multi-location stock plus unlimited users pala outlets-um owner-um ore set of books-la velai seyya vidum per-seat fee illaama.' },
      { q: '399Apps-la restaurant billing software evlo selavu?', a: 'Mudhal app-ku ₹399/month-la irundhu unlimited users-oda; Nidhi Inventory +₹99/month-la add pannunga. Prices GST exclude pannudhu, aur per-user charges illa.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Retail shops-ku GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Pharmacy & medical store-ku billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'gst-software-for-traders-wholesalers': {
    slug: 'gst-software-for-traders-wholesalers',
    industry: 'traders, wholesalers aur distributors',
    breadcrumbLeaf: 'Traders & wholesalers-ku GST software',
    seo: {
      title:
        'Traders & Wholesalers-ku GST Software — Multi-item Invoicing + Stock | 399Apps',
      description:
        'Traders, wholesalers aur distributors-ku GST software. 399Apps Nidhi Books-oda high-volume multi-item B2B invoices, e-invoice/e-way bill-um GSTR-ready exports-um handle pannudhu, plus Nidhi Inventory-oda godowns across stock, POs-um transfers-um — ₹399/mo-la irundhu, unlimited users, prices GST exclude pannudhu.',
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
      eyebrow: 'Traders, wholesalers & distributors-ku',
      h1: 'Traders & wholesalers-ku GST software — high-volume invoicing-um stock-um ₹399/mo-la irundhu',
      verdict:
        'Traders, wholesalers aur distributors-ku 399Apps high-volume GST invoicing-ku build pannappattadhu: Nidhi Books multi-item B2B invoices, e-invoice-um e-way bill-um, aur GSTR-ready exports handle pannudhu, Nidhi Inventory godowns across stock, purchase orders-um transfers-um track pannudhu. ₹399/mo-la irundhu (mudhal app; ovvoru add-on +₹99/mo, GST extra), unlimited users.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'Traders-um wholesalers-um-ku best GST software edhu?',
      body: 'Traders-um wholesalers-um-ku best GST software high-volume, multi-item B2B invoices handle pannudhu, sariyaana inter-state IGST apply pannudhu, e-invoice-um e-way bill-um support pannudhu, aur godowns across stock accurate-a vechikkudhu. 399Apps GST invoicing-um accounts-um Nidhi Books-oda aur stock, purchase orders-um transfers-um Nidhi Inventory-oda pannudhu.',
      body2:
        'Traders-um distributors-um onnu thedraanga eppo invoice volume manual billing-a vida periya aagudho, eppo e-way bills dispatch-a slow pannudho, illa eppo godowns-um retailers-um across stock-um outstanding-um track pannradhu kashtam aagudho.',
    },
    pains: {
      h2: 'Trader & wholesaler pains → 399Apps nejama enna pannudhu',
      intro:
        'Multi-item invoicing, e-invoice/e-way bill-um multi-warehouse stock-um ellam asli capabilities — keezha edhuvum invented illa.',
      items: [
        { pain: 'Bulk, multi-item B2B invoices', solution: 'Nidhi Books ovvoru line-la-um HSN, place-of-supply-um sariyaana CGST/SGST/IGST-um-oda multi-line GST invoices raise pannudhu.' },
        { pain: 'Inter-state sales-ku IGST venum', solution: 'Place-of-supply detection intra- vs inter-state tax-a automatic-a drive pannudhu, IGST sariyaa apply aagudhu.' },
        { pain: 'E-invoice-um e-way bill-um dispatch-a slow pannudhu', solution: 'Nidhi Books applicable thresholds mela e-invoice-um e-way bill-um support pannudhu, movement nikkaadhu.' },
        { pain: 'Stock godowns across paranthu kidakku', solution: 'Nidhi Inventory ovvoru location-oda on-hand, available, reserved-um in-transit stock-um track pannudhu, branch-to-branch transfers-um audit-um-oda.' },
        { pain: 'Manufacturers-la irundhu vaanguradhu', solution: 'Purchase orders, goods receipts-um three-way match-um procurement-a clean-a aur vendor bills-oda matched-a vechikkudhu.' },
        { pain: 'Retailers-um dealers-um-la irundhu outstanding', solution: 'Nidhi Books-la AR Aging-um customer ledgers-um sariyaa kaatudhu unga buyers across yaaru evlo owe pannraanga-nu.' },
      ],
    },
    why: {
      h2: 'Traders & wholesalers yen 399Apps-a thernthedukkraanga',
      intro: 'High-volume GST invoicing-um multi-godown stock-um oru flat price-la.',
      items: [
        'Multi-item B2B invoices HSN, place-of-supply-um automatic CGST/SGST/IGST-um-oda.',
        'E-invoice-um e-way bill support thresholds mela, dispatch nagarndhu konde irukka.',
        'Multi-warehouse stock transfers, POs, GRN-um three-way match-um-oda.',
        'GSTR-1-um GSTR-3B-ready CSV exports-um plus outstanding control-ku AR/AP Aging-um.',
        'Unlimited users mudhal app-ku ₹399/mo-la irundhu (ovvoru add-on +₹99/mo, prices GST exclude pannudhu).',
      ],
    },
    pricing: {
      h2: 'Traders & wholesalers-ku pricing',
      body: 'Nidhi Books-la start pannunga mudhal app-ku ₹399/mo-la (unlimited users, ella feature-um included), apram multi-godown stock, POs-um transfers-um-ku Nidhi Inventory add pannunga +₹99/mo-la. Prices GST exclude pannudhu, adhu unga billing location-a poruthu per invoice add aagudhu. Billing illa dispatch staff add pannumbodhu per-seat fees illa.',
    },
    faq: [
      { q: '399Apps oru wholesale illa distribution business-ku nalla GST software-a?', a: 'Aamaa. Nidhi Books HSN, place-of-supply-um IGST-um-oda high-volume multi-item B2B invoices handle pannudhu, plus e-invoice-um e-way bill-um, aur Nidhi Inventory godowns across stock-um transfers-um track pannudhu — ₹399/mo-la irundhu, unlimited users (prices GST exclude pannudhu).' },
      { q: '399Apps traders-ku e-invoice-um e-way bill-um support pannudha?', a: 'Aamaa. Nidhi Books applicable thresholds mela e-invoice-um e-way bill-um support pannudhu, bulk dispatch GST step-la nikkaadhu.' },
      { q: 'Idhu multiple godowns across stock track pannuma?', a: 'Aamaa. Nidhi Inventory ovvoru location-oda on-hand, available, reserved-um in-transit stock-um track pannudhu, branch-to-branch transfers, purchase orders, goods receipts-um three-way match-um-oda.' },
      { q: 'Idhu inter-state IGST-a automatic-a handle pannuma?', a: 'Aamaa. Place-of-supply detection intra- vs inter-state tax-a drive pannudhu, ovvoru invoice line-la-um unga GST returns-la-um CGST/SGST illa IGST sariyaa apply aagudhu.' },
      { q: '399Apps-la traders-ku GST software evlo selavu?', a: 'Mudhal app-ku ₹399/month-la irundhu unlimited users-oda; Nidhi Inventory +₹99/month-la add pannunga. Prices GST exclude pannudhu, aur per-user fees illa.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'Retail shops-ku GST billing software', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'Pharmacy & medical store-ku billing software', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

const USECASES_HINDI: Record<string, UseCase> = {
  'gst-billing-software-for-retail-shops': {
    slug: 'gst-billing-software-for-retail-shops',
    industry: 'रिटेल, किराना और जनरल स्टोर',
    breadcrumbLeaf: 'रिटेल दुकानों के लिए GST बिलिंग सॉफ़्टवेयर',
    seo: {
      title:
        'रिटेल और किराना दुकानों के लिए GST बिलिंग सॉफ़्टवेयर — ₹399/mo से, असीमित उपयोगकर्ता | 399Apps',
      description:
        'India में रिटेल, किराना और जनरल स्टोर के लिए सबसे अच्छा GST बिलिंग सॉफ़्टवेयर। 399Apps Nidhi Books (GST invoices, daily reports) को Nidhi Inventory (barcode stock, reorder alerts) के साथ जोड़ता है — ₹399/mo से, असीमित उपयोगकर्ता, prices GST exclude करती हैं। मुफ़्त 14-day trial।',
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
      eyebrow: 'रिटेल और किराना स्टोर के लिए',
      h1: 'रिटेल और किराना दुकानों के लिए GST बिलिंग सॉफ़्टवेयर — तेज़ काउंटर बिलिंग, असली stock, ₹399/mo से',
      verdict:
        'रिटेल या किराना स्टोर के लिए 399Apps सबसे अच्छा-value GST बिलिंग सॉफ़्टवेयर है: Nidhi Books barcode-friendly billing, customer dues (खाता) और daily reports के साथ GST-compliant invoices बनाता है, और Nidhi Inventory counters के across stock track करता है reorder alerts के साथ — ₹399/mo से (पहला app; हर add-on +₹99/mo, GST extra), असीमित उपयोगकर्ता।',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'रिटेल या किराना स्टोर के लिए सबसे अच्छा बिलिंग सॉफ़्टवेयर कौनसा है?',
      body: 'रिटेल या किराना स्टोर के लिए सबसे अच्छा बिलिंग सॉफ़्टवेयर एक ऐसा GST-ready टूल है जो काउंटर पर तेज़ी से बिल बनाता है, stock सटीक रखता है, और महीने के अंत में clean GST returns देता है — बिना per-user fees के जैसे-जैसे आप staff जोड़ते हैं। 399Apps यह दो apps से देता है: GST billing और accounting के लिए Nidhi Books, और products और counters के across barcode-driven stock के लिए Nidhi Inventory।',
      body2:
        'दुकानदार आमतौर पर एक तब ढूँढते हैं जब handwritten bills और notebooks GST के साथ नहीं चल पाते, जब stock बार-बार खत्म हो जाता है (या pile up हो जाता है), या जब वे एक counter assistant जोड़ना चाहते हैं बिना per user extra दिए।',
    },
    pains: {
      h2: 'रिटेल pains → 399Apps असल में क्या करता है',
      intro:
        'नीचे दी गई हर capability आज Nidhi Books या Nidhi Inventory में ship होती है — कोई invented retail modules नहीं।',
      items: [
        { pain: 'धीमी, error-prone काउंटर बिलिंग', solution: 'Nidhi Books HSN/SAC, CGST/SGST/IGST splitting और PDF पर UPI QR के साथ GST-compliant invoices बनाता है — काउंटर पर जल्दी raise करने लायक।' },
        { pain: 'Stock खत्म हो जाता है या dead stock pile up हो जाता है', solution: 'Nidhi Inventory हर location का on-hand stock track करता है और आपके min/max levels से automatically reorder PO drafts raise करता है।' },
        { pain: 'सैकड़ों SKUs और barcodes', solution: 'Barcode-first workflows — कोई भी USB/Bluetooth scanner जो keystrokes emit करता है चलता है, पूरे catalogue में SKU-level tracking के साथ।' },
        { pain: 'GST returns महीने-end की भागदौड़ है', solution: 'Nidhi Books GSTR-1 (B2B, B2C, HSN summary) और एक GSTR-3B summary CA-ready CSV के रूप में export करता है।' },
        { pain: 'Customer dues / खाता track करना', solution: 'Customer ledgers और AR Aging buckets बिलकुल दिखाते हैं कौन कितना और कितने समय से owe करता है।' },
        { pain: 'Counter assistant जोड़ने में ज़्यादा खर्चा', solution: 'असीमित उपयोगकर्ता included हैं — staff और आपका accountant एक ही books share करते हैं बिना per-seat fee के।' },
      ],
    },
    why: {
      h2: 'रिटेल दुकानें 399Apps क्यों चुनती हैं',
      intro: 'Flat, predictable pricing एक ही cloud system में full accounting और stock के साथ।',
      items: [
        'GST-native: compliant invoices, GSTR-1/3B-ready exports, place-of-supply handling।',
        'Stock + billing साथ — Nidhi Books और Nidhi Inventory एक ही item list और stock valuation share करते हैं।',
        'असीमित उपयोगकर्ता, कभी per seat नहीं — counter staff जोड़ें बिना extra cost के।',
        'Cloud (web) + mobile daily backups के साथ, ताकि दुकान मालिक कहीं से भी numbers देख सके।',
        'Flat price: पहले app के लिए ₹399/mo से; हर extra app या add-on सिर्फ़ ₹99/mo (prices GST exclude करती हैं)।',
      ],
    },
    pricing: {
      h2: 'रिटेल और किराना दुकानों के लिए pricing',
      body: 'Nidhi Books से शुरू करें पहले app के लिए ₹399/mo पर (असीमित उपयोगकर्ता, हर feature included)। Barcode stock और reorder alerts के लिए Nidhi Inventory जोड़ें +₹99/mo पर। Prices GST exclude करती हैं, जो आपकी billing location के अनुसार per invoice जोड़ा जाता है। Counter staff जोड़ने पर कोई per-seat charges नहीं।',
    },
    faq: [
      { q: 'India में किराना स्टोर के लिए सबसे अच्छा बिलिंग सॉफ़्टवेयर कौनसा है?', a: '399Apps एक strong choice है: Nidhi Books GST-compliant billing और daily reports देता है, Nidhi Inventory barcode stock और reorder alerts handle करता है, और इसमें पहले app के लिए ₹399/mo से असीमित उपयोगकर्ता included हैं (हर add-on +₹99/mo, prices GST exclude करती हैं)।' },
      { q: 'क्या 399Apps रिटेल के लिए barcode billing support करता है?', a: 'हाँ। Nidhi Inventory barcode-first है — कोई भी USB या Bluetooth scanner जो keystrokes emit करता है चलता है, desktop और mobile पर scan-first UI और SKU-level tracking के साथ।' },
      { q: 'क्या मैं अपनी दुकान के लिए customer dues (खाता) track कर सकता हूँ?', a: 'हाँ। Nidhi Books customer ledgers और AR Aging buckets (current, 1–30, 31–60, 61–90, 90+ days) रखता है ताकि आप बिलकुल देख सकें कौन कितना owe करता है।' },
      { q: '399Apps पर रिटेल बिलिंग सॉफ़्टवेयर का कितना खर्चा है?', a: 'पहले app के लिए ₹399/month से असीमित उपयोगकर्ताओं के साथ; Nidhi Inventory या कोई दूसरा add-on +₹99/month each पर जोड़ें। Prices GST exclude करती हैं। कोई per-user fees नहीं।' },
      { q: 'क्या यह मेरी दुकान के लिए GST returns handle करता है?', a: 'हाँ। Nidhi Books GSTR-1 (B2B, B2C consolidated, HSN-wise summary) और एक GSTR-3B outward-supplies summary CA-ready CSV के रूप में export करता है।' },
    ],
    related: [
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'ट्रेडर्स और थोक विक्रेताओं के लिए GST सॉफ़्टवेयर', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-pharmacy-medical-store': {
    slug: 'billing-software-for-pharmacy-medical-store',
    industry: 'फार्मेसी और मेडिकल स्टोर',
    breadcrumbLeaf: 'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर',
    seo: {
      title:
        'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर — Batch + Expiry, GST Billing | 399Apps',
      description:
        'फार्मेसियों और मेडिकल स्टोर के लिए GST बिलिंग सॉफ़्टवेयर। 399Apps Nidhi Inventory (batch + expiry tracking, barcode, reorder alerts) को Nidhi Books (GST invoices, GSTR-ready returns) के साथ जोड़ता है — ₹399/mo से, असीमित उपयोगकर्ता, prices GST exclude करती हैं। मुफ़्त 14-day trial।',
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
      eyebrow: 'फार्मेसियों और मेडिकल स्टोर के लिए',
      h1: 'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर — batch, expiry और GST billing ₹399/mo से',
      verdict:
        'फार्मेसी या मेडिकल स्टोर के लिए 399Apps Nidhi Inventory को — batch और expiry tracking, barcode billing और reorder alerts के साथ — Nidhi Books के साथ जोड़ता है GST-compliant invoices और GSTR-ready returns के लिए। ₹399/mo से (पहला app; हर add-on +₹99/mo, GST extra), असीमित उपयोगकर्ता, ताकि हर counter और pharmacist एक ही live stock से काम करे।',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Inventory', 'Nidhi Books'],
    definition: {
      h2: 'फार्मेसी या मेडिकल स्टोर के लिए सबसे अच्छा बिलिंग सॉफ़्टवेयर कौनसा है?',
      body: 'फार्मेसी या मेडिकल स्टोर के लिए सबसे अच्छा बिलिंग सॉफ़्टवेयर batch और expiry tracking handle करता है, barcodes से तेज़ी से बिल बनाता है, हर medicine पर सही GST rate लगाता है, और fast-moving stock खत्म होने से पहले reorder करता है। 399Apps यह Nidhi Inventory से batch/expiry stock control और Nidhi Books से GST-compliant billing और returns के साथ करता है।',
      body2:
        'फार्मेसियाँ एक तब ढूँढती हैं जब expiry losses pile up हो जाते हैं, जब racks के across stock track करना मुश्किल होता है, या जब GST billing और reorder एक ही system में होने चाहिए जो पूरा counter use कर सके।',
    },
    pains: {
      h2: 'फार्मेसी pains → 399Apps असल में क्या करता है',
      intro:
        'Batch, expiry और barcode tracking असली Nidhi Inventory capabilities हैं — नीचे कुछ भी invented नहीं।',
      items: [
        { pain: 'Expired / near-expiry medicines से losses', solution: 'Nidhi Inventory stock को batch level पर expiry के साथ track करता है, ताकि आप near-expiry stock को write-off बनने से पहले spot और clear कर सकें।' },
        { pain: 'Racks और strips के across stock ढूँढना मुश्किल', solution: 'Barcode + batch + serial tracking multi-location stock के साथ on-hand quantity का live, scan-first view देता है।' },
        { pain: 'Medicines पर अलग GST rates (5% / 12% / 18%)', solution: 'Nidhi Books HSN के साथ date-aware tax rates use करता है, ताकि हर product हर invoice पर सही CGST/SGST/IGST ले।' },
        { pain: 'Fast movers खत्म हो जाते हैं', solution: 'Reorder automation हर item के min/max levels से PO drafts raise करता है, ताकि best-sellers stock में रहें।' },
        { pain: 'Sales returns और credit notes', solution: 'Nidhi Books GST credit notes बनाता है जो आपके GSTR-1 export में सही से flow होते हैं।' },
        { pain: 'महीने-end GST filing', solution: 'GSTR-1 और GSTR-3B summaries Nidhi Books से CA-ready CSV के रूप में export होते हैं।' },
      ],
    },
    why: {
      h2: 'फार्मेसियाँ 399Apps क्यों चुनती हैं',
      intro: 'Batch/expiry stock control और GST billing एक ही flat-priced cloud system में।',
      items: [
        'Batch + expiry tracking ताकि आप near-expiry losses को control करें, उनके पीछे न भागें।',
        'Barcode-first billing — कोई भी keystroke-emitting USB/Bluetooth scanner चलता है।',
        'GST-native invoices date-aware rates, HSN और GSTR-ready exports के साथ।',
        'Reorder automation fast-moving medicines को shelf पर रखता है।',
        'असीमित उपयोगकर्ता पहले app के लिए ₹399/mo से (हर add-on +₹99/mo, prices GST exclude करती हैं)।',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps आपको GST billing plus batch/expiry inventory देता है — यह एक dedicated drug-licence या Schedule-H statutory-register product नहीं है। अगर आपको एक specific regulatory register चाहिए, तो उस workflow को रखें और GST billing, stock और accounts के लिए 399Apps use करें।',
    pricing: {
      h2: 'फार्मेसियों और मेडिकल स्टोर के लिए pricing',
      body: 'Nidhi Inventory से शुरू करें batch/expiry और barcode stock के लिए, या Nidhi Books से GST billing के लिए — आपका पहला app ₹399/mo है असीमित उपयोगकर्ताओं के साथ। दूसरा app +₹99/mo पर जोड़ें ताकि billing और stock एक ही item list share करें। Prices GST exclude करती हैं। Counter staff या pharmacists के लिए कोई per-seat fees नहीं।',
    },
    faq: [
      { q: 'क्या 399Apps फार्मेसी के लिए batch और expiry track करता है?', a: 'हाँ। Nidhi Inventory batch tracking को expiry के साथ (और serial-level traceability) support करता है, ताकि आप near-expiry stock monitor कर सकें और उसे write-off बनने से पहले clear कर सकें।' },
      { q: 'क्या यह medicines पर अलग GST rates handle कर सकता है?', a: 'हाँ। Nidhi Books HSN के साथ per item date-aware tax rates लगाता है, ताकि हर medicine हर invoice पर और आपके returns में सही GST (5%, 12% या 18%) ले।' },
      { q: 'क्या 399Apps मेडिकल स्टोर के लिए barcode billing support करता है?', a: 'हाँ। Nidhi Inventory barcode-first है — कोई भी USB या Bluetooth scanner जो keystrokes emit करता है चलता है, desktop और mobile पर scan-first UI के साथ।' },
      { q: 'क्या 399Apps एक drug-licence या Schedule-H compliance product है?', a: 'नहीं। 399Apps GST billing plus batch/expiry inventory और accounts देता है। यह एक dedicated drug-licence या statutory-register tool नहीं है, इसलिए कोई specific regulatory register workflow इसके साथ रखें।' },
      { q: '399Apps पर फार्मेसी बिलिंग सॉफ़्टवेयर का कितना खर्चा है?', a: 'पहले app के लिए ₹399/month से असीमित उपयोगकर्ताओं के साथ; दूसरा app (Books या Inventory) +₹99/month पर जोड़ें। Prices GST exclude करती हैं, और कोई per-user fees नहीं।' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'रिटेल दुकानों के लिए GST बिलिंग सॉफ़्टवेयर', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'ट्रेडर्स और थोक विक्रेताओं के लिए GST सॉफ़्टवेयर', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Inventory — stock, batch & expiry', href: '/apps/inventory/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-restaurants-cafes': {
    slug: 'billing-software-for-restaurants-cafes',
    industry: 'रेस्टोरेंट और कैफ़े',
    breadcrumbLeaf: 'रेस्टोरेंट और कैफ़े के लिए बिलिंग सॉफ़्टवेयर',
    seo: {
      title:
        'रेस्टोरेंट और कैफ़े के लिए बिलिंग और GST सॉफ़्टवेयर — ₹399/mo से | 399Apps',
      description:
        'रेस्टोरेंट और कैफ़े के लिए GST billing और accounting। 399Apps Nidhi Books से GST-compliant food bills (CGST/SGST, HSN/SAC) और GSTR-ready returns बनाता है, और Nidhi Inventory से ingredient stock track करता है — ₹399/mo से, असीमित उपयोगकर्ता। Note: यह GST billing + books है, table/KOT POS नहीं।',
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
      eyebrow: 'रेस्टोरेंट और कैफ़े के लिए',
      h1: 'रेस्टोरेंट और कैफ़े के लिए GST billing और accounting — ₹399/mo से, असीमित उपयोगकर्ता',
      verdict:
        'रेस्टोरेंट और कैफ़े के लिए 399Apps billing-and-books वाला side handle करता है: Nidhi Books GST-compliant food bills (CGST/SGST, HSN/SAC) बनाता है और GSTR-ready returns file करता है, और Nidhi Inventory ingredient और supplies stock track करता है। ₹399/mo से (पहला app; हर add-on +₹99/mo, GST extra), असीमित उपयोगकर्ता। Note: यह GST billing और accounting है, dedicated table या KOT POS नहीं।',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'रेस्टोरेंट या कैफ़े के लिए सबसे अच्छा GST बिलिंग सॉफ़्टवेयर कौनसा है?',
      body: 'रेस्टोरेंट या कैफ़े के लिए सबसे अच्छा GST बिलिंग सॉफ़्टवेयर सही GST rate के साथ compliant food bills बनाता है, ingredient और supplies stock track करता है, supplier bills record करता है, और आपको clean daily sales और accounts देता है। 399Apps billing और books Nidhi Books से करता है, और kitchen और bar stock Nidhi Inventory से track करता है।',
      body2:
        'मालिक एक तब ढूँढते हैं जब handwritten bills GST के साथ नहीं चल पाते, जब ingredient stock और wastage invisible होते हैं, या जब वे एक या कई outlets के across clean accounts चाहते हैं।',
    },
    pains: {
      h2: 'रेस्टोरेंट और कैफ़े pains → 399Apps असल में क्या करता है',
      intro:
        'ये असली Nidhi Books / Nidhi Inventory capabilities हैं जो F&B के लिए framed हैं — हम table-ordering POS होने का दिखावा नहीं करते।',
      items: [
        { pain: 'Food & beverages पर GST (5% vs 18%, with/without ITC)', solution: 'Nidhi Books HSN/SAC के साथ date-aware tax rates लगाता है, ताकि हर bill सही CGST/SGST split ले।' },
        { pain: 'Ingredient और supplies stock / wastage invisible हैं', solution: 'Nidhi Inventory हर item और location का stock reorder alerts के साथ track करता है, ताकि आप देखें क्या on hand है और क्या खरीदना है।' },
        { pain: 'Supplier bills और dues pile up हो जाते हैं', solution: 'Nidhi Inventory और Nidhi Books में purchase orders, vendor bills और AP Aging supplier payments को control में रखते हैं।' },
        { pain: 'कोई clear daily sales या profit picture नहीं', solution: 'Sales Register, Profit & Loss और Cash Flow reports जैसे ही आप bills record करते हैं recalc होते हैं।' },
        { pain: 'दो या ज़्यादा outlets track करने हैं', solution: 'Multi-location stock plus असीमित उपयोगकर्ता हर outlet और मालिक को एक ही set of books में काम करने देते हैं।' },
        { pain: 'Staff जोड़ने से software cost बढ़ती है', solution: 'असीमित उपयोगकर्ता included हैं — cashiers, managers या आपके accountant के लिए कोई per-seat fee नहीं।' },
      ],
    },
    why: {
      h2: 'रेस्टोरेंट और कैफ़े 399Apps क्यों चुनते हैं',
      intro: 'Compliant F&B billing plus real accounts और stock एक flat price पर।',
      items: [
        'GST-compliant food bills date-aware rates, HSN/SAC और CGST/SGST splitting के साथ।',
        'आपके CA के लिए GSTR-1 और GSTR-3B-ready CSV exports।',
        'Nidhi Inventory के through ingredient और supplies stock tracking reorder alerts के साथ।',
        'Daily sales, P&L और cash flow जो आप एक नज़र में पढ़ सकें।',
        'असीमित उपयोगकर्ता पहले app के लिए ₹399/mo से (हर add-on +₹99/mo, prices GST exclude करती हैं)।',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps GST billing, accounting और inventory है — table management, KOT printing या order screens वाला dedicated restaurant POS नहीं। अगर आप पहले से table ordering के लिए एक POS use करते हैं, तो उसे floor के लिए चलाएँ और compliant GST billing, stock और books के लिए 399Apps use करें।',
    pricing: {
      h2: 'रेस्टोरेंट और कैफ़े के लिए pricing',
      body: 'Nidhi Books से शुरू करें पहले app के लिए ₹399/mo पर (असीमित उपयोगकर्ता, हर feature included)। Ingredient और supplies stock के लिए Nidhi Inventory जोड़ें +₹99/mo पर। Prices GST exclude करती हैं, जो आपकी billing location के अनुसार per invoice जोड़ा जाता है। Cashiers या managers जोड़ने पर कोई per-seat fees नहीं।',
    },
    faq: [
      { q: 'क्या 399Apps GST-compliant restaurant bills issue कर सकता है?', a: 'हाँ। Nidhi Books date-aware tax rates, HSN/SAC और CGST/SGST splitting के साथ GST-compliant food bills बनाता है, और filing के लिए GSTR-1 और GSTR-3B summaries export करता है।' },
      { q: 'क्या 399Apps table और KOT management वाला restaurant POS है?', a: 'नहीं। 399Apps GST billing, accounting और inventory है — dedicated table/KOT POS नहीं। बहुत रेस्टोरेंट ordering के लिए POS चलाते हैं और compliant billing, stock और accounts के लिए 399Apps use करते हैं।' },
      { q: 'क्या यह मेरी kitchen के लिए ingredient stock track कर सकता है?', a: 'हाँ। Nidhi Inventory हर item और location का stock reorder alerts के साथ track करता है, ताकि आप ingredients और supplies पर नज़र रखें और stock-outs कम करें।' },
      { q: 'क्या यह multiple outlets के लिए काम करता है?', a: 'हाँ। Multi-location stock plus असीमित उपयोगकर्ता कई outlets और मालिक को एक ही set of books में काम करने देते हैं बिना per-seat fee के।' },
      { q: '399Apps पर restaurant बिलिंग सॉफ़्टवेयर का कितना खर्चा है?', a: 'पहले app के लिए ₹399/month से असीमित उपयोगकर्ताओं के साथ; Nidhi Inventory +₹99/month पर जोड़ें। Prices GST exclude करती हैं, और कोई per-user charges नहीं।' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'रिटेल दुकानों के लिए GST बिलिंग सॉफ़्टवेयर', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'gst-software-for-traders-wholesalers': {
    slug: 'gst-software-for-traders-wholesalers',
    industry: 'ट्रेडर्स, थोक विक्रेता और distributors',
    breadcrumbLeaf: 'ट्रेडर्स और थोक विक्रेताओं के लिए GST सॉफ़्टवेयर',
    seo: {
      title:
        'ट्रेडर्स और थोक विक्रेताओं के लिए GST सॉफ़्टवेयर — Multi-item Invoicing + Stock | 399Apps',
      description:
        'ट्रेडर्स, थोक विक्रेताओं और distributors के लिए GST सॉफ़्टवेयर। 399Apps Nidhi Books से high-volume multi-item B2B invoices, e-invoice/e-way bill और GSTR-ready exports handle करता है, plus Nidhi Inventory से godowns के across stock, POs और transfers — ₹399/mo से, असीमित उपयोगकर्ता, prices GST exclude करती हैं।',
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
      eyebrow: 'ट्रेडर्स, थोक विक्रेता और distributors के लिए',
      h1: 'ट्रेडर्स और थोक विक्रेताओं के लिए GST सॉफ़्टवेयर — high-volume invoicing और stock ₹399/mo से',
      verdict:
        'ट्रेडर्स, थोक विक्रेताओं और distributors के लिए 399Apps high-volume GST invoicing के लिए बना है: Nidhi Books multi-item B2B invoices, e-invoice और e-way bill, और GSTR-ready exports handle करता है, और Nidhi Inventory godowns के across stock, purchase orders और transfers track करता है। ₹399/mo से (पहला app; हर add-on +₹99/mo, GST extra), असीमित उपयोगकर्ता।',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'ट्रेडर्स और थोक विक्रेताओं के लिए सबसे अच्छा GST सॉफ़्टवेयर कौनसा है?',
      body: 'ट्रेडर्स और थोक विक्रेताओं के लिए सबसे अच्छा GST सॉफ़्टवेयर high-volume, multi-item B2B invoices handle करता है, सही inter-state IGST लगाता है, e-invoice और e-way bill support करता है, और godowns के across stock सटीक रखता है। 399Apps GST invoicing और accounts Nidhi Books से और stock, purchase orders और transfers Nidhi Inventory से करता है।',
      body2:
        'ट्रेडर्स और distributors एक तब ढूँढते हैं जब invoice volume manual billing से बड़ा हो जाता है, जब e-way bills dispatch को slow करते हैं, या जब godowns और retailers के across stock और outstanding track करना मुश्किल हो जाता है।',
    },
    pains: {
      h2: 'ट्रेडर और थोक विक्रेता pains → 399Apps असल में क्या करता है',
      intro:
        'Multi-item invoicing, e-invoice/e-way bill और multi-warehouse stock सब असली capabilities हैं — नीचे कुछ भी invented नहीं।',
      items: [
        { pain: 'Bulk, multi-item B2B invoices', solution: 'Nidhi Books हर line पर HSN, place-of-supply और सही CGST/SGST/IGST के साथ multi-line GST invoices raise करता है।' },
        { pain: 'Inter-state sales को IGST चाहिए', solution: 'Place-of-supply detection intra- vs inter-state tax automatically drive करता है, ताकि IGST सही से apply हो।' },
        { pain: 'E-invoice और e-way bill dispatch को slow करते हैं', solution: 'Nidhi Books applicable thresholds के ऊपर e-invoice और e-way bill support करता है ताकि movement न रुके।' },
        { pain: 'Stock godowns के across फैला हुआ', solution: 'Nidhi Inventory हर location का on-hand, available, reserved और in-transit stock track करता है, branch-to-branch transfers और audit के साथ।' },
        { pain: 'Manufacturers से खरीदना', solution: 'Purchase orders, goods receipts और three-way match procurement को clean और vendor bills से matched रखते हैं।' },
        { pain: 'Retailers और dealers से outstanding', solution: 'Nidhi Books में AR Aging और customer ledgers बिलकुल दिखाते हैं आपके buyers के across कौन कितना owe करता है।' },
      ],
    },
    why: {
      h2: 'ट्रेडर्स और थोक विक्रेता 399Apps क्यों चुनते हैं',
      intro: 'High-volume GST invoicing और multi-godown stock एक flat price पर।',
      items: [
        'Multi-item B2B invoices HSN, place-of-supply और automatic CGST/SGST/IGST के साथ।',
        'E-invoice और e-way bill support thresholds के ऊपर ताकि dispatch चलता रहे।',
        'Multi-warehouse stock transfers, POs, GRN और three-way match के साथ।',
        'GSTR-1 और GSTR-3B-ready CSV exports plus outstanding control के लिए AR/AP Aging।',
        'असीमित उपयोगकर्ता पहले app के लिए ₹399/mo से (हर add-on +₹99/mo, prices GST exclude करती हैं)।',
      ],
    },
    pricing: {
      h2: 'ट्रेडर्स और थोक विक्रेताओं के लिए pricing',
      body: 'Nidhi Books से शुरू करें पहले app के लिए ₹399/mo पर (असीमित उपयोगकर्ता, हर feature included), फिर multi-godown stock, POs और transfers के लिए Nidhi Inventory जोड़ें +₹99/mo पर। Prices GST exclude करती हैं, जो आपकी billing location के अनुसार per invoice जोड़ा जाता है। Billing या dispatch staff जोड़ने पर कोई per-seat fees नहीं।',
    },
    faq: [
      { q: 'क्या 399Apps एक wholesale या distribution business के लिए अच्छा GST सॉफ़्टवेयर है?', a: 'हाँ। Nidhi Books HSN, place-of-supply और IGST के साथ high-volume multi-item B2B invoices handle करता है, plus e-invoice और e-way bill, और Nidhi Inventory godowns के across stock और transfers track करता है — ₹399/mo से, असीमित उपयोगकर्ता (prices GST exclude करती हैं)।' },
      { q: 'क्या 399Apps ट्रेडर्स के लिए e-invoice और e-way bill support करता है?', a: 'हाँ। Nidhi Books applicable thresholds के ऊपर e-invoice और e-way bill support करता है, ताकि bulk dispatch GST step पर न रुके।' },
      { q: 'क्या यह multiple godowns के across stock track कर सकता है?', a: 'हाँ। Nidhi Inventory हर location का on-hand, available, reserved और in-transit stock track करता है, branch-to-branch transfers, purchase orders, goods receipts और three-way match के साथ।' },
      { q: 'क्या यह inter-state IGST automatically handle करता है?', a: 'हाँ। Place-of-supply detection intra- vs inter-state tax drive करता है, ताकि हर invoice line पर और आपके GST returns में CGST/SGST या IGST सही से apply हो।' },
      { q: '399Apps पर ट्रेडर्स के लिए GST सॉफ़्टवेयर का कितना खर्चा है?', a: 'पहले app के लिए ₹399/month से असीमित उपयोगकर्ताओं के साथ; Nidhi Inventory +₹99/month पर जोड़ें। Prices GST exclude करती हैं, और कोई per-user fees नहीं।' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'रिटेल दुकानों के लिए GST बिलिंग सॉफ़्टवेयर', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'फार्मेसी और मेडिकल स्टोर के लिए बिलिंग सॉफ़्टवेयर', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

const USECASES_TAMIL: Record<string, UseCase> = {
  'gst-billing-software-for-retail-shops': {
    slug: 'gst-billing-software-for-retail-shops',
    industry: 'சில்லறை, மளிகை மற்றும் பொது கடைகள்',
    breadcrumbLeaf: 'சில்லறை கடைகளுக்கான GST பில்லிங் மென்பொருள்',
    seo: {
      title:
        'சில்லறை & மளிகை கடைகளுக்கான GST பில்லிங் மென்பொருள் — ₹399/mo முதல், வரம்பற்ற பயனர்கள் | 399Apps',
      description:
        'India-வில் சில்லறை, மளிகை மற்றும் பொது கடைகளுக்கான சிறந்த GST பில்லிங் மென்பொருள். 399Apps Nidhi Books (GST invoices, daily reports)-ஐ Nidhi Inventory (barcode stock, reorder alerts)-உடன் இணைக்கிறது — ₹399/mo முதல், வரம்பற்ற பயனர்கள், விலைகள் GST-ஐ விலக்குகின்றன. இலவச 14-day trial.',
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
      eyebrow: 'சில்லறை & மளிகை கடைகளுக்கு',
      h1: 'சில்லறை & மளிகை கடைகளுக்கான GST பில்லிங் மென்பொருள் — வேகமான கவுண்டர் பில்லிங், உண்மையான stock, ₹399/mo முதல்',
      verdict:
        'சில்லறை அல்லது மளிகை கடைக்கு 399Apps சிறந்த-value GST பில்லிங் மென்பொருள்: Nidhi Books barcode-friendly billing, customer dues (கடன்) மற்றும் daily reports-உடன் GST-compliant invoices உருவாக்குகிறது, மேலும் Nidhi Inventory counters முழுவதும் stock-ஐ reorder alerts-உடன் கண்காணிக்கிறது — ₹399/mo முதல் (முதல் app; ஒவ்வொரு add-on-க்கும் +₹99/mo, GST தனி), வரம்பற்ற பயனர்கள்.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'சில்லறை அல்லது மளிகை கடைக்கான சிறந்த பில்லிங் மென்பொருள் எது?',
      body: 'சில்லறை அல்லது மளிகை கடைக்கான சிறந்த பில்லிங் மென்பொருள் என்பது ஒரு GST-ready கருவி, இது கவுண்டரில் வேகமாக பில் போடுகிறது, stock-ஐ துல்லியமாக வைக்கிறது, மற்றும் மாத இறுதியில் சுத்தமான GST returns தருகிறது — நீங்கள் staff சேர்க்கும்போது per-user fees இல்லாமல். 399Apps இதை இரண்டு apps-உடன் தருகிறது: GST billing மற்றும் accounting-க்கு Nidhi Books, மற்றும் products மற்றும் counters முழுவதும் barcode-driven stock-க்கு Nidhi Inventory.',
      body2:
        'கடை உரிமையாளர்கள் பொதுவாக ஒன்றைத் தேடுகிறார்கள் — கையால் எழுதிய bills மற்றும் notebooks GST-உடன் ஈடுகொடுக்க முடியாதபோது, stock மீண்டும் மீண்டும் தீர்ந்துபோகும்போது (அல்லது குவியும்போது), அல்லது ஒரு counter assistant-ஐ per user கூடுதலாக செலுத்தாமல் சேர்க்க விரும்பும்போது.',
    },
    pains: {
      h2: 'சில்லறை pains → 399Apps உண்மையில் என்ன செய்கிறது',
      intro:
        'கீழே உள்ள ஒவ்வொரு capability-யும் இன்று Nidhi Books அல்லது Nidhi Inventory-ல் ship ஆகிறது — invented retail modules எதுவும் இல்லை.',
      items: [
        { pain: 'மெதுவான, error-prone கவுண்டர் பில்லிங்', solution: 'Nidhi Books HSN/SAC, CGST/SGST/IGST splitting மற்றும் PDF-ல் UPI QR-உடன் GST-compliant invoices உருவாக்குகிறது — கவுண்டரில் விரைவாக raise செய்ய ஏற்றது.' },
        { pain: 'Stock தீர்ந்துபோகிறது அல்லது dead stock குவிகிறது', solution: 'Nidhi Inventory ஒவ்வொரு location-இன் on-hand stock-ஐ கண்காணிக்கிறது மற்றும் உங்கள் min/max levels-லிருந்து தானாகவே reorder PO drafts raise செய்கிறது.' },
        { pain: 'நூற்றுக்கணக்கான SKUs மற்றும் barcodes', solution: 'Barcode-first workflows — keystrokes emit செய்யும் எந்த USB/Bluetooth scanner-ம் வேலை செய்யும், முழு catalogue முழுவதும் SKU-level tracking-உடன்.' },
        { pain: 'GST returns மாத-இறுதி ஓட்டம்', solution: 'Nidhi Books GSTR-1 (B2B, B2C, HSN summary) மற்றும் ஒரு GSTR-3B summary-ஐ CA-ready CSV-ஆக export செய்கிறது.' },
        { pain: 'Customer dues / கடன் கண்காணிப்பது', solution: 'Customer ledgers மற்றும் AR Aging buckets யார் எவ்வளவு, எவ்வளவு காலமாக owe செய்கிறார்கள் என்பதை சரியாக காட்டுகின்றன.' },
        { pain: 'Counter assistant சேர்ப்பது அதிக செலவு', solution: 'வரம்பற்ற பயனர்கள் included — staff மற்றும் உங்கள் accountant ஒரே books-ஐ பகிர்கிறார்கள், per-seat fee இல்லாமல்.' },
      ],
    },
    why: {
      h2: 'சில்லறை கடைகள் ஏன் 399Apps-ஐ தேர்வு செய்கின்றன',
      intro: 'Flat, predictable pricing ஒரே cloud system-ல் முழு accounting மற்றும் stock-உடன்.',
      items: [
        'GST-native: compliant invoices, GSTR-1/3B-ready exports, place-of-supply handling.',
        'Stock + billing ஒன்றாக — Nidhi Books மற்றும் Nidhi Inventory ஒரே item list மற்றும் stock valuation-ஐ பகிர்கின்றன.',
        'வரம்பற்ற பயனர்கள், ஒருபோதும் per seat இல்லை — counter staff-ஐ கூடுதல் செலவு இல்லாமல் சேர்க்கவும்.',
        'Cloud (web) + mobile daily backups-உடன், கடை உரிமையாளர் எங்கிருந்தும் numbers பார்க்க.',
        'Flat price: முதல் app-க்கு ₹399/mo முதல்; ஒவ்வொரு கூடுதல் app அல்லது add-on வெறும் ₹99/mo (விலைகள் GST-ஐ விலக்குகின்றன).',
      ],
    },
    pricing: {
      h2: 'சில்லறை & மளிகை கடைகளுக்கான pricing',
      body: 'Nidhi Books-ல் தொடங்குங்கள் முதல் app-க்கு ₹399/mo-ல் (வரம்பற்ற பயனர்கள், ஒவ்வொரு feature-ம் included). Barcode stock மற்றும் reorder alerts-க்கு Nidhi Inventory சேர்க்கவும் +₹99/mo-ல். விலைகள் GST-ஐ விலக்குகின்றன, அது உங்கள் billing location-ஐ பொறுத்து per invoice சேர்க்கப்படுகிறது. Counter staff சேர்க்கும்போது per-seat charges இல்லை.',
    },
    faq: [
      { q: 'India-வில் மளிகை கடைக்கான சிறந்த பில்லிங் மென்பொருள் எது?', a: '399Apps ஒரு strong choice: Nidhi Books GST-compliant billing மற்றும் daily reports தருகிறது, Nidhi Inventory barcode stock மற்றும் reorder alerts handle செய்கிறது, மேலும் இதில் முதல் app-க்கு ₹399/mo முதல் வரம்பற்ற பயனர்கள் included (ஒவ்வொரு add-on-க்கும் +₹99/mo, விலைகள் GST-ஐ விலக்குகின்றன).' },
      { q: '399Apps சில்லறைக்கு barcode billing support செய்கிறதா?', a: 'ஆம். Nidhi Inventory barcode-first — keystrokes emit செய்யும் எந்த USB அல்லது Bluetooth scanner-ம் வேலை செய்யும், desktop மற்றும் mobile-ல் scan-first UI மற்றும் SKU-level tracking-உடன்.' },
      { q: 'என் கடைக்கு customer dues (கடன்) கண்காணிக்க முடியுமா?', a: 'ஆம். Nidhi Books customer ledgers மற்றும் AR Aging buckets (current, 1–30, 31–60, 61–90, 90+ days) வைக்கிறது, யார் எவ்வளவு owe செய்கிறார்கள் என்பதை நீங்கள் சரியாக பார்க்கலாம்.' },
      { q: '399Apps-ல் சில்லறை பில்லிங் மென்பொருள் எவ்வளவு செலவு?', a: 'முதல் app-க்கு ₹399/month முதல் வரம்பற்ற பயனர்களுடன்; Nidhi Inventory அல்லது வேறு add-on-ஐ +₹99/month each-ல் சேர்க்கவும். விலைகள் GST-ஐ விலக்குகின்றன. per-user fees இல்லை.' },
      { q: 'இது என் கடைக்கு GST returns handle செய்கிறதா?', a: 'ஆம். Nidhi Books GSTR-1 (B2B, B2C consolidated, HSN-wise summary) மற்றும் ஒரு GSTR-3B outward-supplies summary-ஐ CA-ready CSV-ஆக export செய்கிறது.' },
    ],
    related: [
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'மருந்தகம் & மருத்துவ கடைக்கான பில்லிங் மென்பொருள்', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான GST மென்பொருள்', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-pharmacy-medical-store': {
    slug: 'billing-software-for-pharmacy-medical-store',
    industry: 'மருந்தகங்கள் மற்றும் மருத்துவ கடைகள்',
    breadcrumbLeaf: 'மருந்தகம் & மருத்துவ கடைக்கான பில்லிங் மென்பொருள்',
    seo: {
      title:
        'மருந்தகம் & மருத்துவ கடைக்கான பில்லிங் மென்பொருள் — Batch + Expiry, GST Billing | 399Apps',
      description:
        'மருந்தகங்கள் மற்றும் மருத்துவ கடைகளுக்கான GST பில்லிங் மென்பொருள். 399Apps Nidhi Inventory (batch + expiry tracking, barcode, reorder alerts)-ஐ Nidhi Books (GST invoices, GSTR-ready returns)-உடன் இணைக்கிறது — ₹399/mo முதல், வரம்பற்ற பயனர்கள், விலைகள் GST-ஐ விலக்குகின்றன. இலவச 14-day trial.',
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
      eyebrow: 'மருந்தகங்கள் & மருத்துவ கடைகளுக்கு',
      h1: 'மருந்தகம் & மருத்துவ கடைகளுக்கான பில்லிங் மென்பொருள் — batch, expiry மற்றும் GST billing ₹399/mo முதல்',
      verdict:
        'மருந்தகம் அல்லது மருத்துவ கடைக்கு 399Apps Nidhi Inventory-ஐ — batch மற்றும் expiry tracking, barcode billing மற்றும் reorder alerts-உடன் — Nidhi Books-உடன் இணைக்கிறது GST-compliant invoices மற்றும் GSTR-ready returns-க்கு. ₹399/mo முதல் (முதல் app; ஒவ்வொரு add-on-க்கும் +₹99/mo, GST தனி), வரம்பற்ற பயனர்கள், ஒவ்வொரு counter மற்றும் pharmacist ஒரே live stock-ல் வேலை செய்ய.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Inventory', 'Nidhi Books'],
    definition: {
      h2: 'மருந்தகம் அல்லது மருத்துவ கடைக்கான சிறந்த பில்லிங் மென்பொருள் எது?',
      body: 'மருந்தகம் அல்லது மருத்துவ கடைக்கான சிறந்த பில்லிங் மென்பொருள் batch மற்றும் expiry tracking handle செய்கிறது, barcodes-உடன் வேகமாக பில் போடுகிறது, ஒவ்வொரு medicine-க்கும் சரியான GST rate apply செய்கிறது, மற்றும் fast-moving stock தீர்வதற்கு முன் reorder செய்கிறது. 399Apps இதை Nidhi Inventory-உடன் batch/expiry stock control மற்றும் Nidhi Books-உடன் GST-compliant billing மற்றும் returns-உடன் செய்கிறது.',
      body2:
        'மருந்தகங்கள் ஒன்றைத் தேடுகின்றன — expiry losses குவியும்போது, racks முழுவதும் stock கண்காணிப்பது கடினமாக இருக்கும்போது, அல்லது GST billing மற்றும் reorder ஒரே system-ல் இருக்க வேண்டும் என்று முழு counter-ம் பயன்படுத்தும்படி இருக்கும்போது.',
    },
    pains: {
      h2: 'மருந்தக pains → 399Apps உண்மையில் என்ன செய்கிறது',
      intro:
        'Batch, expiry மற்றும் barcode tracking உண்மையான Nidhi Inventory capabilities — கீழே எதுவும் invented இல்லை.',
      items: [
        { pain: 'Expired / near-expiry medicines-லிருந்து losses', solution: 'Nidhi Inventory stock-ஐ batch level-ல் expiry-உடன் கண்காணிக்கிறது, நீங்கள் near-expiry stock-ஐ write-off ஆவதற்கு முன் spot செய்து clear செய்யலாம்.' },
        { pain: 'Racks மற்றும் strips முழுவதும் stock கண்டுபிடிப்பது கடினம்', solution: 'Barcode + batch + serial tracking multi-location stock-உடன் on-hand quantity-இன் live, scan-first view தருகிறது.' },
        { pain: 'Medicines-ல் வெவ்வேறு GST rates (5% / 12% / 18%)', solution: 'Nidhi Books HSN-உடன் date-aware tax rates use செய்கிறது, ஒவ்வொரு product-ம் ஒவ்வொரு invoice-ல் சரியான CGST/SGST/IGST சுமக்கிறது.' },
        { pain: 'Fast movers தீர்ந்துபோகின்றன', solution: 'Reorder automation ஒவ்வொரு item-இன் min/max levels-லிருந்து PO drafts raise செய்கிறது, best-sellers stock-ல் இருக்க.' },
        { pain: 'Sales returns மற்றும் credit notes', solution: 'Nidhi Books GST credit notes உருவாக்குகிறது, அவை உங்கள் GSTR-1 export-ல் சரியாக flow ஆகின்றன.' },
        { pain: 'மாத-இறுதி GST filing', solution: 'GSTR-1 மற்றும் GSTR-3B summaries Nidhi Books-லிருந்து CA-ready CSV-ஆக export ஆகின்றன.' },
      ],
    },
    why: {
      h2: 'மருந்தகங்கள் ஏன் 399Apps-ஐ தேர்வு செய்கின்றன',
      intro: 'Batch/expiry stock control மற்றும் GST billing ஒரே flat-priced cloud system-ல்.',
      items: [
        'Batch + expiry tracking, நீங்கள் near-expiry losses-ஐ control செய்யுங்கள், அவற்றை துரத்தாதீர்கள்.',
        'Barcode-first billing — keystroke-emit செய்யும் எந்த USB/Bluetooth scanner-ம் வேலை செய்யும்.',
        'GST-native invoices date-aware rates, HSN மற்றும் GSTR-ready exports-உடன்.',
        'Reorder automation fast-moving medicines-ஐ shelf-ல் வைக்கிறது.',
        'வரம்பற்ற பயனர்கள் முதல் app-க்கு ₹399/mo முதல் (ஒவ்வொரு add-on-க்கும் +₹99/mo, விலைகள் GST-ஐ விலக்குகின்றன).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps உங்களுக்கு GST billing plus batch/expiry inventory தருகிறது — இது ஒரு dedicated drug-licence அல்லது Schedule-H statutory-register product அல்ல. உங்களுக்கு ஒரு specific regulatory register தேவைப்பட்டால், அந்த workflow-ஐ வைத்துக்கொள்ளுங்கள் மற்றும் GST billing, stock மற்றும் accounts-க்கு 399Apps use செய்யுங்கள்.',
    pricing: {
      h2: 'மருந்தகங்கள் & மருத்துவ கடைகளுக்கான pricing',
      body: 'Nidhi Inventory-ல் தொடங்குங்கள் batch/expiry மற்றும் barcode stock-க்கு, அல்லது Nidhi Books-ல் GST billing-க்கு — உங்கள் முதல் app ₹399/mo வரம்பற்ற பயனர்களுடன். இரண்டாவது app-ஐ +₹99/mo-ல் சேர்க்கவும், billing மற்றும் stock ஒரே item list பகிர. விலைகள் GST-ஐ விலக்குகின்றன. Counter staff அல்லது pharmacists-க்கு per-seat fees இல்லை.',
    },
    faq: [
      { q: '399Apps மருந்தகத்திற்கு batch மற்றும் expiry கண்காணிக்கிறதா?', a: 'ஆம். Nidhi Inventory batch tracking-ஐ expiry-உடன் (மற்றும் serial-level traceability) support செய்கிறது, நீங்கள் near-expiry stock-ஐ monitor செய்து அதை write-off ஆவதற்கு முன் clear செய்யலாம்.' },
      { q: 'இது medicines-ல் வெவ்வேறு GST rates handle செய்ய முடியுமா?', a: 'ஆம். Nidhi Books HSN-உடன் per item date-aware tax rates apply செய்கிறது, ஒவ்வொரு medicine-ம் ஒவ்வொரு invoice-லும் உங்கள் returns-லும் சரியான GST (5%, 12% அல்லது 18%) சுமக்கிறது.' },
      { q: '399Apps மருத்துவ கடைக்கு barcode billing support செய்கிறதா?', a: 'ஆம். Nidhi Inventory barcode-first — keystrokes emit செய்யும் எந்த USB அல்லது Bluetooth scanner-ம் வேலை செய்யும், desktop மற்றும் mobile-ல் scan-first UI-உடன்.' },
      { q: '399Apps ஒரு drug-licence அல்லது Schedule-H compliance product-ஆ?', a: 'இல்லை. 399Apps GST billing plus batch/expiry inventory மற்றும் accounts தருகிறது. இது ஒரு dedicated drug-licence அல்லது statutory-register tool அல்ல, எனவே எந்த specific regulatory register workflow-ம் இதனுடன் வைத்துக்கொள்ளுங்கள்.' },
      { q: '399Apps-ல் மருந்தக பில்லிங் மென்பொருள் எவ்வளவு செலவு?', a: 'முதல் app-க்கு ₹399/month முதல் வரம்பற்ற பயனர்களுடன்; இரண்டாவது app (Books அல்லது Inventory)-ஐ +₹99/month-ல் சேர்க்கவும். விலைகள் GST-ஐ விலக்குகின்றன, மற்றும் per-user fees இல்லை.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'சில்லறை கடைகளுக்கான GST பில்லிங் மென்பொருள்', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான GST மென்பொருள்', href: '/gst-software-for-traders-wholesalers/' },
      { label: 'Nidhi Inventory — stock, batch & expiry', href: '/apps/inventory/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'billing-software-for-restaurants-cafes': {
    slug: 'billing-software-for-restaurants-cafes',
    industry: 'உணவகங்கள் மற்றும் கஃபேக்கள்',
    breadcrumbLeaf: 'உணவகங்கள் & கஃபேக்களுக்கான பில்லிங் மென்பொருள்',
    seo: {
      title:
        'உணவகங்கள் & கஃபேக்களுக்கான பில்லிங் & GST மென்பொருள் — ₹399/mo முதல் | 399Apps',
      description:
        'உணவகங்கள் மற்றும் கஃபேக்களுக்கான GST billing மற்றும் accounting. 399Apps Nidhi Books-உடன் GST-compliant food bills (CGST/SGST, HSN/SAC) மற்றும் GSTR-ready returns உருவாக்குகிறது, மற்றும் Nidhi Inventory-உடன் ingredient stock கண்காணிக்கிறது — ₹399/mo முதல், வரம்பற்ற பயனர்கள். Note: இது GST billing + books, table/KOT POS அல்ல.',
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
      eyebrow: 'உணவகங்கள் & கஃபேக்களுக்கு',
      h1: 'உணவகங்கள் & கஃபேக்களுக்கான GST billing & accounting — ₹399/mo முதல், வரம்பற்ற பயனர்கள்',
      verdict:
        'உணவகங்கள் மற்றும் கஃபேக்களுக்கு 399Apps billing-and-books பக்கத்தை handle செய்கிறது: Nidhi Books GST-compliant food bills (CGST/SGST, HSN/SAC) உருவாக்குகிறது மற்றும் GSTR-ready returns file செய்கிறது, மற்றும் Nidhi Inventory ingredient மற்றும் supplies stock கண்காணிக்கிறது. ₹399/mo முதல் (முதல் app; ஒவ்வொரு add-on-க்கும் +₹99/mo, GST தனி), வரம்பற்ற பயனர்கள். Note: இது GST billing மற்றும் accounting, dedicated table அல்லது KOT POS அல்ல.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'உணவகம் அல்லது கஃபேக்கான சிறந்த GST பில்லிங் மென்பொருள் எது?',
      body: 'உணவகம் அல்லது கஃபேக்கான சிறந்த GST பில்லிங் மென்பொருள் சரியான GST rate-உடன் compliant food bills உருவாக்குகிறது, ingredient மற்றும் supplies stock கண்காணிக்கிறது, supplier bills record செய்கிறது, மற்றும் உங்களுக்கு clean daily sales மற்றும் accounts தருகிறது. 399Apps billing மற்றும் books-ஐ Nidhi Books-உடன் செய்கிறது, மற்றும் kitchen மற்றும் bar stock-ஐ Nidhi Inventory-உடன் கண்காணிக்கிறது.',
      body2:
        'உரிமையாளர்கள் ஒன்றைத் தேடுகின்றனர் — கையால் எழுதிய bills GST-உடன் ஈடுகொடுக்க முடியாதபோது, ingredient stock மற்றும் wastage invisible-ஆக இருக்கும்போது, அல்லது ஒன்று அல்லது பல outlets முழுவதும் clean accounts விரும்பும்போது.',
    },
    pains: {
      h2: 'உணவகம் & கஃபே pains → 399Apps உண்மையில் என்ன செய்கிறது',
      intro:
        'இவை உண்மையான Nidhi Books / Nidhi Inventory capabilities, F&B-க்கு framed செய்யப்பட்டவை — நாங்கள் table-ordering POS என்று நடிக்கவில்லை.',
      items: [
        { pain: 'Food & beverages-ல் GST (5% vs 18%, with/without ITC)', solution: 'Nidhi Books HSN/SAC-உடன் date-aware tax rates apply செய்கிறது, ஒவ்வொரு bill-ம் சரியான CGST/SGST split சுமக்கிறது.' },
        { pain: 'Ingredient மற்றும் supplies stock / wastage invisible-ஆக உள்ளன', solution: 'Nidhi Inventory ஒவ்வொரு item மற்றும் location-இன் stock-ஐ reorder alerts-உடன் கண்காணிக்கிறது, என்ன on hand உள்ளது மற்றும் என்ன வாங்க வேண்டும் என்பதை பாருங்கள்.' },
        { pain: 'Supplier bills மற்றும் dues குவிகின்றன', solution: 'Nidhi Inventory மற்றும் Nidhi Books-ல் purchase orders, vendor bills மற்றும் AP Aging supplier payments-ஐ control-ல் வைக்கின்றன.' },
        { pain: 'தெளிவான daily sales அல்லது profit picture இல்லை', solution: 'Sales Register, Profit & Loss மற்றும் Cash Flow reports நீங்கள் bills record செய்யும்போது recalc ஆகின்றன.' },
        { pain: 'இரண்டு அல்லது அதிக outlets கண்காணிக்க', solution: 'Multi-location stock plus வரம்பற்ற பயனர்கள் ஒவ்வொரு outlet மற்றும் உரிமையாளரை ஒரே set of books-ல் வேலை செய்ய அனுமதிக்கின்றன.' },
        { pain: 'Staff சேர்ப்பதால் software cost அதிகரிக்கிறது', solution: 'வரம்பற்ற பயனர்கள் included — cashiers, managers அல்லது உங்கள் accountant-க்கு per-seat fee இல்லை.' },
      ],
    },
    why: {
      h2: 'உணவகங்கள் & கஃபேக்கள் ஏன் 399Apps-ஐ தேர்வு செய்கின்றன',
      intro: 'Compliant F&B billing plus real accounts மற்றும் stock ஒரு flat price-ல்.',
      items: [
        'GST-compliant food bills date-aware rates, HSN/SAC மற்றும் CGST/SGST splitting-உடன்.',
        'உங்கள் CA-க்கு GSTR-1 மற்றும் GSTR-3B-ready CSV exports.',
        'Nidhi Inventory மூலம் ingredient மற்றும் supplies stock tracking reorder alerts-உடன்.',
        'Daily sales, P&L மற்றும் cash flow நீங்கள் ஒரே பார்வையில் படிக்கலாம்.',
        'வரம்பற்ற பயனர்கள் முதல் app-க்கு ₹399/mo முதல் (ஒவ்வொரு add-on-க்கும் +₹99/mo, விலைகள் GST-ஐ விலக்குகின்றன).',
      ],
    },
    honestNote:
      'Honest scope note: 399Apps GST billing, accounting மற்றும் inventory — table management, KOT printing அல்லது order screens-உடன் dedicated restaurant POS அல்ல. நீங்கள் ஏற்கனவே table ordering-க்கு ஒரு POS use செய்தால், அதை floor-க்கு இயக்குங்கள் மற்றும் compliant GST billing, stock மற்றும் books-க்கு 399Apps use செய்யுங்கள்.',
    pricing: {
      h2: 'உணவகங்கள் & கஃபேக்களுக்கான pricing',
      body: 'Nidhi Books-ல் தொடங்குங்கள் முதல் app-க்கு ₹399/mo-ல் (வரம்பற்ற பயனர்கள், ஒவ்வொரு feature-ம் included). Ingredient மற்றும் supplies stock-க்கு Nidhi Inventory சேர்க்கவும் +₹99/mo-ல். விலைகள் GST-ஐ விலக்குகின்றன, அது உங்கள் billing location-ஐ பொறுத்து per invoice சேர்க்கப்படுகிறது. Cashiers அல்லது managers சேர்க்கும்போது per-seat fees இல்லை.',
    },
    faq: [
      { q: '399Apps GST-compliant restaurant bills issue செய்ய முடியுமா?', a: 'ஆம். Nidhi Books date-aware tax rates, HSN/SAC மற்றும் CGST/SGST splitting-உடன் GST-compliant food bills உருவாக்குகிறது, மற்றும் filing-க்கு GSTR-1 மற்றும் GSTR-3B summaries export செய்கிறது.' },
      { q: '399Apps table மற்றும் KOT management-உடன் restaurant POS-ஆ?', a: 'இல்லை. 399Apps GST billing, accounting மற்றும் inventory — dedicated table/KOT POS அல்ல. பல restaurants ordering-க்கு POS இயக்குகின்றன மற்றும் compliant billing, stock மற்றும் accounts-க்கு 399Apps use செய்கின்றன.' },
      { q: 'இது என் kitchen-க்கு ingredient stock கண்காணிக்க முடியுமா?', a: 'ஆம். Nidhi Inventory ஒவ்வொரு item மற்றும் location-இன் stock-ஐ reorder alerts-உடன் கண்காணிக்கிறது, நீங்கள் ingredients மற்றும் supplies-ஐ கண்காணித்து stock-outs குறைக்கலாம்.' },
      { q: 'இது multiple outlets-க்கு வேலை செய்கிறதா?', a: 'ஆம். Multi-location stock plus வரம்பற்ற பயனர்கள் பல outlets மற்றும் உரிமையாளரை ஒரே set of books-ல் வேலை செய்ய அனுமதிக்கின்றன per-seat fee இல்லாமல்.' },
      { q: '399Apps-ல் restaurant பில்லிங் மென்பொருள் எவ்வளவு செலவு?', a: 'முதல் app-க்கு ₹399/month முதல் வரம்பற்ற பயனர்களுடன்; Nidhi Inventory-ஐ +₹99/month-ல் சேர்க்கவும். விலைகள் GST-ஐ விலக்குகின்றன, மற்றும் per-user charges இல்லை.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best billing software for small business (India)', href: '/best/billing-software-small-business-india/' },
      { label: 'சில்லறை கடைகளுக்கான GST பில்லிங் மென்பொருள்', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'மருந்தகம் & மருத்துவ கடைக்கான பில்லிங் மென்பொருள்', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },

  'gst-software-for-traders-wholesalers': {
    slug: 'gst-software-for-traders-wholesalers',
    industry: 'வியாபாரிகள், மொத்த விற்பனையாளர்கள் மற்றும் distributors',
    breadcrumbLeaf: 'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான GST மென்பொருள்',
    seo: {
      title:
        'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான GST மென்பொருள் — Multi-item Invoicing + Stock | 399Apps',
      description:
        'வியாபாரிகள், மொத்த விற்பனையாளர்கள் மற்றும் distributors-க்கான GST மென்பொருள். 399Apps Nidhi Books-உடன் high-volume multi-item B2B invoices, e-invoice/e-way bill மற்றும் GSTR-ready exports handle செய்கிறது, plus Nidhi Inventory-உடன் godowns முழுவதும் stock, POs மற்றும் transfers — ₹399/mo முதல், வரம்பற்ற பயனர்கள், விலைகள் GST-ஐ விலக்குகின்றன.',
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
      eyebrow: 'வியாபாரிகள், மொத்த விற்பனையாளர்கள் & distributors-க்கு',
      h1: 'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான GST மென்பொருள் — high-volume invoicing மற்றும் stock ₹399/mo முதல்',
      verdict:
        'வியாபாரிகள், மொத்த விற்பனையாளர்கள் மற்றும் distributors-க்கு 399Apps high-volume GST invoicing-க்கு கட்டமைக்கப்பட்டது: Nidhi Books multi-item B2B invoices, e-invoice மற்றும் e-way bill, மற்றும் GSTR-ready exports handle செய்கிறது, மற்றும் Nidhi Inventory godowns முழுவதும் stock, purchase orders மற்றும் transfers கண்காணிக்கிறது. ₹399/mo முதல் (முதல் app; ஒவ்வொரு add-on-க்கும் +₹99/mo, GST தனி), வரம்பற்ற பயனர்கள்.',
      trustNote: '14-day free trial · No card required · Unlimited users included',
    },
    apps: ['Nidhi Books', 'Nidhi Inventory'],
    definition: {
      h2: 'வியாபாரிகள் மற்றும் மொத்த விற்பனையாளர்களுக்கான சிறந்த GST மென்பொருள் எது?',
      body: 'வியாபாரிகள் மற்றும் மொத்த விற்பனையாளர்களுக்கான சிறந்த GST மென்பொருள் high-volume, multi-item B2B invoices handle செய்கிறது, சரியான inter-state IGST apply செய்கிறது, e-invoice மற்றும் e-way bill support செய்கிறது, மற்றும் godowns முழுவதும் stock-ஐ துல்லியமாக வைக்கிறது. 399Apps GST invoicing மற்றும் accounts-ஐ Nidhi Books-உடன் மற்றும் stock, purchase orders மற்றும் transfers-ஐ Nidhi Inventory-உடன் செய்கிறது.',
      body2:
        'வியாபாரிகள் மற்றும் distributors ஒன்றைத் தேடுகின்றனர் — invoice volume manual billing-ஐ விட பெரிதாகும்போது, e-way bills dispatch-ஐ slow செய்யும்போது, அல்லது godowns மற்றும் retailers முழுவதும் stock மற்றும் outstanding கண்காணிப்பது கடினமாகும்போது.',
    },
    pains: {
      h2: 'வியாபாரி & மொத்த விற்பனையாளர் pains → 399Apps உண்மையில் என்ன செய்கிறது',
      intro:
        'Multi-item invoicing, e-invoice/e-way bill மற்றும் multi-warehouse stock அனைத்தும் உண்மையான capabilities — கீழே எதுவும் invented இல்லை.',
      items: [
        { pain: 'Bulk, multi-item B2B invoices', solution: 'Nidhi Books ஒவ்வொரு line-லும் HSN, place-of-supply மற்றும் சரியான CGST/SGST/IGST-உடன் multi-line GST invoices raise செய்கிறது.' },
        { pain: 'Inter-state sales-க்கு IGST தேவை', solution: 'Place-of-supply detection intra- vs inter-state tax-ஐ automatically drive செய்கிறது, IGST சரியாக apply ஆகிறது.' },
        { pain: 'E-invoice மற்றும் e-way bill dispatch-ஐ slow செய்கின்றன', solution: 'Nidhi Books applicable thresholds-க்கு மேல் e-invoice மற்றும் e-way bill support செய்கிறது, movement நிற்காது.' },
        { pain: 'Stock godowns முழுவதும் பரவியுள்ளது', solution: 'Nidhi Inventory ஒவ்வொரு location-இன் on-hand, available, reserved மற்றும் in-transit stock-ஐ கண்காணிக்கிறது, branch-to-branch transfers மற்றும் audit-உடன்.' },
        { pain: 'Manufacturers-லிருந்து வாங்குவது', solution: 'Purchase orders, goods receipts மற்றும் three-way match procurement-ஐ clean-ஆக மற்றும் vendor bills-உடன் matched-ஆக வைக்கின்றன.' },
        { pain: 'Retailers மற்றும் dealers-லிருந்து outstanding', solution: 'Nidhi Books-ல் AR Aging மற்றும் customer ledgers உங்கள் buyers முழுவதும் யார் எவ்வளவு owe செய்கிறார்கள் என்பதை சரியாக காட்டுகின்றன.' },
      ],
    },
    why: {
      h2: 'வியாபாரிகள் & மொத்த விற்பனையாளர்கள் ஏன் 399Apps-ஐ தேர்வு செய்கின்றன',
      intro: 'High-volume GST invoicing மற்றும் multi-godown stock ஒரு flat price-ல்.',
      items: [
        'Multi-item B2B invoices HSN, place-of-supply மற்றும் automatic CGST/SGST/IGST-உடன்.',
        'E-invoice மற்றும் e-way bill support thresholds-க்கு மேல் dispatch நகர்ந்துகொண்டே இருக்க.',
        'Multi-warehouse stock transfers, POs, GRN மற்றும் three-way match-உடன்.',
        'GSTR-1 மற்றும் GSTR-3B-ready CSV exports plus outstanding control-க்கு AR/AP Aging.',
        'வரம்பற்ற பயனர்கள் முதல் app-க்கு ₹399/mo முதல் (ஒவ்வொரு add-on-க்கும் +₹99/mo, விலைகள் GST-ஐ விலக்குகின்றன).',
      ],
    },
    pricing: {
      h2: 'வியாபாரிகள் & மொத்த விற்பனையாளர்களுக்கான pricing',
      body: 'Nidhi Books-ல் தொடங்குங்கள் முதல் app-க்கு ₹399/mo-ல் (வரம்பற்ற பயனர்கள், ஒவ்வொரு feature-ம் included), பிறகு multi-godown stock, POs மற்றும் transfers-க்கு Nidhi Inventory சேர்க்கவும் +₹99/mo-ல். விலைகள் GST-ஐ விலக்குகின்றன, அது உங்கள் billing location-ஐ பொறுத்து per invoice சேர்க்கப்படுகிறது. Billing அல்லது dispatch staff சேர்க்கும்போது per-seat fees இல்லை.',
    },
    faq: [
      { q: '399Apps ஒரு wholesale அல்லது distribution business-க்கு நல்ல GST மென்பொருளா?', a: 'ஆம். Nidhi Books HSN, place-of-supply மற்றும் IGST-உடன் high-volume multi-item B2B invoices handle செய்கிறது, plus e-invoice மற்றும் e-way bill, மற்றும் Nidhi Inventory godowns முழுவதும் stock மற்றும் transfers கண்காணிக்கிறது — ₹399/mo முதல், வரம்பற்ற பயனர்கள் (விலைகள் GST-ஐ விலக்குகின்றன).' },
      { q: '399Apps வியாபாரிகளுக்கு e-invoice மற்றும் e-way bill support செய்கிறதா?', a: 'ஆம். Nidhi Books applicable thresholds-க்கு மேல் e-invoice மற்றும் e-way bill support செய்கிறது, bulk dispatch GST step-ல் நிற்காது.' },
      { q: 'இது multiple godowns முழுவதும் stock கண்காணிக்க முடியுமா?', a: 'ஆம். Nidhi Inventory ஒவ்வொரு location-இன் on-hand, available, reserved மற்றும் in-transit stock-ஐ கண்காணிக்கிறது, branch-to-branch transfers, purchase orders, goods receipts மற்றும் three-way match-உடன்.' },
      { q: 'இது inter-state IGST-ஐ automatically handle செய்கிறதா?', a: 'ஆம். Place-of-supply detection intra- vs inter-state tax-ஐ drive செய்கிறது, ஒவ்வொரு invoice line-லும் உங்கள் GST returns-லும் CGST/SGST அல்லது IGST சரியாக apply ஆகிறது.' },
      { q: '399Apps-ல் வியாபாரிகளுக்கு GST மென்பொருள் எவ்வளவு செலவு?', a: 'முதல் app-க்கு ₹399/month முதல் வரம்பற்ற பயனர்களுடன்; Nidhi Inventory-ஐ +₹99/month-ல் சேர்க்கவும். விலைகள் GST-ஐ விலக்குகின்றன, மற்றும் per-user fees இல்லை.' },
    ],
    related: [
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best inventory management software (India)', href: '/best/inventory-management-software-india/' },
      { label: 'சில்லறை கடைகளுக்கான GST பில்லிங் மென்பொருள்', href: '/gst-billing-software-for-retail-shops/' },
      { label: 'மருந்தகம் & மருத்துவ கடைக்கான பில்லிங் மென்பொருள்', href: '/billing-software-for-pharmacy-medical-store/' },
      { label: 'Nidhi Books — GST billing & accounting', href: '/apps/books/' },
      { label: 'Nidhi Inventory — stock management', href: '/apps/inventory/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
};

const USECASES_BY_LANG: Record<Lang, Record<string, UseCase>> = {
  en: USECASES,
  hi: USECASES_HI,
  ta: USECASES_TA,
  hindi: USECASES_HINDI,
  tamil: USECASES_TAMIL,
};

export function getUseCase(slug: string, lang: Lang = 'en'): UseCase {
  return (USECASES_BY_LANG[lang] ?? USECASES)[slug];
}

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

export function buildUseCaseGraph(slug: string, lang: Lang = 'en') {
  const uc = getUseCase(slug, lang);
  if (!uc) throw new Error(`Unknown use-case slug: ${slug}`);
  const locPath = localizedPath('/' + slug + '/', lang);
  const base = `${SITE_URL}${locPath}`;

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
        inLanguage: HTML_LANG_ATTR[lang],
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
