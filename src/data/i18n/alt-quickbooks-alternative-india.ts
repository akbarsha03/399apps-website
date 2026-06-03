import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Best QuickBooks Alternative for India & GST 2026 — From ₹399/mo',
    description:
      "QuickBooks pulled back in India and prices in USD. 399Apps is a GST-native, India-first QuickBooks alternative from ₹399/month (first app, unlimited users; +₹99/mo per add-on, prices exclude GST). Migrate your books and keep filing GST. Free trial.",
    keywords: ['quickbooks alternative india', 'quickbooks alternative for gst', 'quickbooks india alternative', 'gst accounting software india'],
  },
  breadcrumbLeaf: 'Best QuickBooks Alternative for India & GST 2026 — From ₹399/mo',
  hero: {
    eyebrow: '399Apps vs QuickBooks',
    h1: 'The Best QuickBooks Alternative for India & GST in 2026',
    lede:
      "The best QuickBooks alternative for Indian businesses is 399Apps — a GST-native, India-first cloud accounting platform from ₹399/month for your first app, with unlimited users (no per-seat fee, no client cap) and every feature included; add more apps or add-ons at ₹99/month each (prices exclude GST). QuickBooks is a world-class global product, but Intuit scaled back QuickBooks in India, its GST/India localization is thin, and its plans are priced in USD — which is expensive once converted to rupees. If you're an Indian SMB that needs proper GST invoicing, GSTR filing support, and INR pricing, an India-built tool serves you better than a global product de-emphasized for this market.",
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatIs: {
    eyebrow: 'Definition',
    h2: 'What is a “QuickBooks alternative for India”?',
    body: [
      "A QuickBooks alternative for India is accounting software that replaces QuickBooks for Indian businesses needing GST compliance and INR-based pricing — especially relevant since Intuit reduced its QuickBooks focus in India. The strongest India alternatives are GST-native cloud tools (399Apps, Zoho Books) and desktop accounting (TallyPrime).",
      'Who looks for one? Indian SMBs on (or evaluating) QuickBooks who need real GST features, businesses facing USD-priced plans that feel expensive in rupees, and users wanting a vendor that actively supports the India market.',
    ],
  },
  glance: {
    eyebrow: 'Comparison',
    h2: '399Apps vs QuickBooks (for India) — at a glance',
    note: "QuickBooks: ~465K organic visits/mo, US-led (Concurate); USD-priced tiers; reduced India focus. 399Apps from ₹399/mo (first app, unlimited users; +₹99/mo per extra app/add-on; prices exclude GST). Verify QuickBooks' current India availability/pricing at publish.",
    table: {
      head: ['', '399Apps', 'QuickBooks'],
      rows: [
        { label: 'Market focus', a: 'India-first, GST-native', b: 'Global (US-led); scaled back in India' },
        { label: 'Pricing currency', a: 'INR — from ₹399/mo, first app; +₹99/mo per add-on; unlimited users; prices exclude GST', b: 'USD-priced tiers (expensive in INR)' },
        { label: 'Users', a: 'Unlimited users — no per-seat fee, no client cap', b: 'Per-seat / tier user limits' },
        { label: 'GST compliance', a: 'GST invoicing, GSTR-ready, e-invoice/e-way bill', b: 'Limited GST/India localization' },
        { label: 'GSTR filing support', a: 'Yes (GSTR-1/3B-ready exports)', b: 'Minimal India GST tooling' },
        { label: 'Deployment', a: 'Cloud + mobile', b: 'Cloud + mobile' },
        { label: 'India support / roadmap', a: 'Active India focus', b: 'De-emphasized India presence' },
        { label: 'Best for', a: 'Indian SMBs needing GST + INR price', b: 'Global/US businesses on US accounting' },
      ],
    },
  },
  whySwitch: {
    eyebrow: 'Reasons to switch',
    h2: 'Why Indian businesses switch from QuickBooks',
    items: [
      "GST is a first-class citizen. QuickBooks' India GST localization is thin; 399Apps is built around GST — compliant invoices, GSTR-1/3B-ready exports, and e-invoice/e-way bill support.",
      "INR pricing, no currency shock. QuickBooks' USD-priced plans are expensive once converted to rupees. 399Apps is from ₹399/month in INR (first app; +₹99/mo per add-on; prices exclude GST) with unlimited users — predictable for Indian budgets.",
      "A vendor that's actually here. With Intuit's reduced India focus, India-specific features and support lag. 399Apps' roadmap is India-first.",
      "No “stranded user” risk. Businesses uneasy about a global tool's India commitment get continuity with a local-market product.",
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Pricing: INR-native vs USD-converted',
    body: [
      'QuickBooks prices its plans in USD for global and US markets, so the rupee cost depends on the exchange rate and tends to feel high for an Indian SMB. 399Apps prices natively in INR: from ₹399/month for your first app, every feature included and unlimited users with no per-seat fee or client cap; add more apps or add-ons at ₹99/month each. Prices exclude GST (added per invoice), billed monthly with annual on request.',
    ],
    note: "QuickBooks' USD tiers convert to a relatively high rupee cost; QuickBooks India availability and pricing verified June 2026. 399Apps from ₹399/mo (first app, prices exclude GST).",
  },
  gstAdvantage: {
    eyebrow: 'India-first',
    h2: 'GST & India advantage',
    lead: 'This is the core reason to switch — QuickBooks largely leaves this space open:',
    items: [
      'GST-compliant invoicing with HSN/SAC, CGST/SGST/IGST, and place-of-supply logic.',
      'GSTR-1 / GSTR-3B-ready exports for filing.',
      'E-invoice & e-way bill support above applicable thresholds.',
      'INR pricing from ₹399/mo (first app; +₹99/mo per add-on; prices exclude GST) with unlimited users — built for Indian cash flows.',
      'India-first product decisions rather than a global backlog where India is a low priority.',
    ],
  },
  migrate: {
    eyebrow: 'Migration',
    h2: 'How to migrate from QuickBooks to 399Apps',
    items: [
      'Export from QuickBooks — customers, vendors, chart of accounts, items/products, and transactions (QuickBooks exports to CSV/Excel; reports to Excel).',
      'Pull open A/R and A/P and trial balance as of your switch date.',
      'Import into 399Apps — contacts, accounts, items via guided import.',
      'Enter opening balances from your QuickBooks trial balance.',
      'Configure GST (GSTIN, tax rates, place of supply) — features QuickBooks may not have set up for India — and run a test GST invoice.',
      'Go live in 399Apps; retain QuickBooks exports as an archive.',
    ],
    note: 'Switching mid-year? Carry forward opening balances on your cut-over date and keep your QuickBooks exports as an archive for prior periods — no data is lost.',
  },
  whenQuickbooks: {
    eyebrow: 'An honest take',
    h2: 'When QuickBooks might still be the better fit',
    body: [
      "Stay on QuickBooks if your business is primarily US/global, your accountant works in QuickBooks, or you need its mature US payroll/tax and ProAdvisor ecosystem and don't need GST. For India-based, GST-filing businesses, an India-native tool like 399Apps is the better fit.",
    ],
  },
  faq: {
    title: 'QuickBooks alternative (India) — frequently asked questions',
    items: [
      { q: 'Is QuickBooks still available in India?', a: 'Intuit has scaled back and de-emphasized QuickBooks in India, with limited GST-localized SMB push. Many Indian businesses now choose India-native GST tools like 399Apps for active local support and GST features.' },
      { q: 'What is the best QuickBooks alternative for GST in India?', a: "399Apps is a strong choice — it is GST-native (compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill) and priced in INR from ₹399/month, versus QuickBooks' thin India GST tooling and USD pricing." },
      { q: 'Why is QuickBooks expensive in India?', a: "QuickBooks' plans are priced in USD for global/US markets, which converts to a relatively high rupee cost for Indian SMBs. 399Apps avoids this with low INR pricing from ₹399/month." },
      { q: 'Does 399Apps support GST filing like Indian compliance needs?', a: 'Yes. 399Apps produces GST-compliant invoices and GSTR-1/3B-ready exports, and supports e-invoicing and e-way bills required under Indian GST.' },
      { q: 'Can I migrate my QuickBooks data to 399Apps?', a: 'Yes. Export customers, vendors, chart of accounts, items and transactions from QuickBooks (CSV/Excel), import them into 399Apps, and enter opening balances from your QuickBooks trial balance on the switch date. Contacts, invoices and ledgers all import; guided migration support is available for large or complex datasets.' },
      { q: 'Is 399Apps cloud-based like QuickBooks Online?', a: 'Yes. 399Apps runs in the cloud (web) and on mobile across devices, like QuickBooks Online — but with GST-native features and INR pricing built for India.' },
      { q: 'Will I lose my historical data if I leave QuickBooks?', a: 'No. Export your QuickBooks data and reports to keep as an archive, and carry forward opening balances into 399Apps. Your history stays accessible in the exports.' },
      { q: 'Is 399Apps a good QuickBooks alternative for a small Indian business?', a: 'Yes — for India-based SMBs needing GST compliance, INR pricing, and an actively supported local product, 399Apps is well-suited. Globally-focused US businesses may still prefer QuickBooks.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Tally alternative',
      'FreshBooks alternative (India)',
      'Cheapest GST software in India',
      'Best accounting software for small business (India)',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Switch from QuickBooks',
    title: 'Try the India-first QuickBooks alternative free',
    body: 'GST-native cloud accounting priced in INR — GST invoices, GSTR-ready exports, e-invoice and e-way bill. From ₹399/month for your first app (prices exclude GST), with unlimited users included.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

export type AltQuickbooksCopy = typeof en;

const hi: AltQuickbooksCopy = {
  seo: {
    title: 'India & GST ke liye Best QuickBooks Alternative 2026 — ₹399/mo se',
    description:
      'QuickBooks ne India me focus kam kar diya aur USD me price karta hai. 399Apps ek GST-native, India-first QuickBooks alternative hai ₹399/month se (first app, unlimited users; +₹99/mo per add-on, prices exclude GST). Apni books migrate karein aur GST filing chalu rakhein. Free trial.',
    keywords: ['quickbooks alternative india', 'quickbooks alternative for gst', 'quickbooks india alternative', 'gst accounting software india'],
  },
  breadcrumbLeaf: 'India & GST ke liye Best QuickBooks Alternative 2026 — ₹399/mo se',
  hero: {
    eyebrow: '399Apps vs QuickBooks',
    h1: '2026 me India & GST ke liye Best QuickBooks Alternative',
    lede:
      "Indian businesses ke liye best QuickBooks alternative hai 399Apps — ek GST-native, India-first cloud accounting platform, first app ₹399/month se, unlimited users (no per-seat fee, no client cap) aur har feature included; aur apps ya add-ons add karein ₹99/month each (prices exclude GST). QuickBooks ek world-class global product hai, par Intuit ne India me QuickBooks scale back kar diya, iska GST/India localization patla hai, aur iske plans USD me priced hain — jo rupees me convert hone par mehenga padta hai. Agar aap ek Indian SMB hain jise proper GST invoicing, GSTR filing support aur INR pricing chahiye, toh ek India-built tool aapke liye us global product se behtar hai jo is market ke liye de-emphasize kar diya gaya hai.",
    note: '14-day free trial · No card required · Kabhi bhi cancel karein',
  },
  whatIs: {
    eyebrow: 'Definition',
    h2: '“QuickBooks alternative for India” kya hota hai?',
    body: [
      'QuickBooks alternative for India ek aisa accounting software hai jo un Indian businesses ke liye QuickBooks ko replace karta hai jinhe GST compliance aur INR-based pricing chahiye — khaaskar isliye relevant kyunki Intuit ne India me QuickBooks focus kam kar diya. Sabse strong India alternatives hain GST-native cloud tools (399Apps, Zoho Books) aur desktop accounting (TallyPrime).',
      'Kaun dhoondta hai ise? Wo Indian SMBs jo QuickBooks pe hain (ya evaluate kar rahe hain) aur jinhe real GST features chahiye, wo businesses jinhe USD-priced plans rupees me mehenge lagte hain, aur wo users jo aisa vendor chahte hain jo India market ko actively support kare.',
    ],
  },
  glance: {
    eyebrow: 'Comparison',
    h2: '399Apps vs QuickBooks (India ke liye) — ek nazar me',
    note: "QuickBooks: ~465K organic visits/mo, US-led (Concurate); USD-priced tiers; India focus kam. 399Apps ₹399/mo se (first app, unlimited users; +₹99/mo per extra app/add-on; prices exclude GST). Publish ke time QuickBooks ki current India availability/pricing verify karein.",
    table: {
      head: ['', '399Apps', 'QuickBooks'],
      rows: [
        { label: 'Market focus', a: 'India-first, GST-native', b: 'Global (US-led); India me scale back' },
        { label: 'Pricing currency', a: 'INR — ₹399/mo se, first app; +₹99/mo per add-on; unlimited users; prices exclude GST', b: 'USD-priced tiers (INR me mehenge)' },
        { label: 'Users', a: 'Unlimited users — no per-seat fee, no client cap', b: 'Per-seat / tier user limits' },
        { label: 'GST compliance', a: 'GST invoicing, GSTR-ready, e-invoice/e-way bill', b: 'Limited GST/India localization' },
        { label: 'GSTR filing support', a: 'Yes (GSTR-1/3B-ready exports)', b: 'Minimal India GST tooling' },
        { label: 'Deployment', a: 'Cloud + mobile', b: 'Cloud + mobile' },
        { label: 'India support / roadmap', a: 'Active India focus', b: 'De-emphasized India presence' },
        { label: 'Best for', a: 'GST + INR price chahne wale Indian SMBs', b: 'US accounting pe Global/US businesses' },
      ],
    },
  },
  whySwitch: {
    eyebrow: 'Reasons to switch',
    h2: 'Indian businesses QuickBooks se kyun switch karte hain',
    items: [
      "GST first-class citizen hai. QuickBooks ka India GST localization patla hai; 399Apps GST ke around bana hai — compliant invoices, GSTR-1/3B-ready exports, aur e-invoice/e-way bill support.",
      'INR pricing, koi currency shock nahi. QuickBooks ke USD-priced plans rupees me convert hone par mehenge hain. 399Apps INR me ₹399/month se hai (first app; +₹99/mo per add-on; prices exclude GST) unlimited users ke saath — Indian budgets ke liye predictable.',
      "Aisa vendor jo sach me yahaan hai. Intuit ke kam India focus ke saath, India-specific features aur support lag karte hain. 399Apps ka roadmap India-first hai.",
      'Koi “stranded user” risk nahi. Jo businesses ek global tool ke India commitment se uneasy hain, unhe ek local-market product ke saath continuity milti hai.',
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Pricing: INR-native vs USD-converted',
    body: [
      'QuickBooks apne plans ko global aur US markets ke liye USD me price karta hai, isliye rupee cost exchange rate pe depend karta hai aur ek Indian SMB ko high lagta hai. 399Apps natively INR me price karta hai: first app ₹399/month se, har feature included aur unlimited users bina kisi per-seat fee ya client cap ke; aur apps ya add-ons add karein ₹99/month each. Prices exclude GST (har invoice pe add hota hai), monthly billed with annual on request.',
    ],
    note: "QuickBooks ke USD tiers relatively high rupee cost me convert hote hain; QuickBooks India availability aur pricing June 2026 me verify ki gayi. 399Apps ₹399/mo se (first app, prices exclude GST).",
  },
  gstAdvantage: {
    eyebrow: 'India-first',
    h2: 'GST & India advantage',
    lead: 'Yahi switch karne ka core reason hai — QuickBooks yeh space zyaadatar khaali chhod deta hai:',
    items: [
      'GST-compliant invoicing HSN/SAC, CGST/SGST/IGST, aur place-of-supply logic ke saath.',
      'GSTR-1 / GSTR-3B-ready exports filing ke liye.',
      'E-invoice & e-way bill support applicable thresholds ke upar.',
      'INR pricing ₹399/mo se (first app; +₹99/mo per add-on; prices exclude GST) unlimited users ke saath — Indian cash flows ke liye bana.',
      'India-first product decisions, na ki ek global backlog jahaan India low priority hai.',
    ],
  },
  migrate: {
    eyebrow: 'Migration',
    h2: 'QuickBooks se 399Apps pe kaise migrate karein',
    items: [
      'QuickBooks se export karein — customers, vendors, chart of accounts, items/products, aur transactions (QuickBooks CSV/Excel me export karta hai; reports Excel me).',
      'Open A/R aur A/P aur trial balance apni switch date ke hisaab se pull karein.',
      '399Apps me import karein — contacts, accounts, items guided import ke through.',
      'Opening balances apne QuickBooks trial balance se enter karein.',
      'GST configure karein (GSTIN, tax rates, place of supply) — features jo QuickBooks ne India ke liye set up nahi kiye honge — aur ek test GST invoice run karein.',
      'Go live karein 399Apps me; QuickBooks exports ko archive ke roop me rakhein.',
    ],
    note: 'Mid-year switch kar rahe hain? Apni cut-over date pe opening balances carry forward karein aur prior periods ke liye apne QuickBooks exports archive ke roop me rakhein — koi data lost nahi hota.',
  },
  whenQuickbooks: {
    eyebrow: 'An honest take',
    h2: 'Jab QuickBooks abhi bhi better fit ho sakta hai',
    body: [
      'QuickBooks pe raho agar aapka business primarily US/global hai, aapka accountant QuickBooks me kaam karta hai, ya aapko iska mature US payroll/tax aur ProAdvisor ecosystem chahiye aur GST ki zaroorat nahi. India-based, GST-filing businesses ke liye, 399Apps jaisa India-native tool better fit hai.',
    ],
  },
  faq: {
    title: 'QuickBooks alternative (India) — frequently asked questions',
    items: [
      { q: 'Kya QuickBooks abhi bhi India me available hai?', a: 'Intuit ne India me QuickBooks scale back aur de-emphasize kar diya hai, limited GST-localized SMB push ke saath. Bahut se Indian businesses ab India-native GST tools jaise 399Apps choose karte hain active local support aur GST features ke liye.' },
      { q: 'India me GST ke liye best QuickBooks alternative kaunsa hai?', a: "399Apps ek strong choice hai — yeh GST-native hai (compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill) aur INR me ₹399/month se priced hai, jabki QuickBooks ka India GST tooling patla aur pricing USD me hai." },
      { q: 'QuickBooks India me mehenga kyun hai?', a: "QuickBooks ke plans global/US markets ke liye USD me priced hain, jo Indian SMBs ke liye relatively high rupee cost me convert hote hain. 399Apps ise avoid karta hai low INR pricing ₹399/month se." },
      { q: 'Kya 399Apps Indian compliance ki tarah GST filing support karta hai?', a: 'Haan. 399Apps GST-compliant invoices aur GSTR-1/3B-ready exports banata hai, aur Indian GST ke under required e-invoicing aur e-way bills support karta hai.' },
      { q: 'Kya main apna QuickBooks data 399Apps me migrate kar sakta hoon?', a: 'Haan. QuickBooks se customers, vendors, chart of accounts, items aur transactions export karein (CSV/Excel), unhe 399Apps me import karein, aur switch date pe apne QuickBooks trial balance se opening balances enter karein. Contacts, invoices aur ledgers sab import hote hain; large ya complex datasets ke liye guided migration support available hai.' },
      { q: 'Kya 399Apps QuickBooks Online ki tarah cloud-based hai?', a: 'Haan. 399Apps cloud (web) me aur mobile pe across devices chalta hai, QuickBooks Online ki tarah — par GST-native features aur INR pricing ke saath jo India ke liye bana hai.' },
      { q: 'Agar main QuickBooks chhodun toh kya apna historical data kho dunga?', a: 'Nahi. Apna QuickBooks data aur reports export karke archive ke roop me rakhein, aur opening balances 399Apps me carry forward karein. Aapki history exports me accessible rehti hai.' },
      { q: 'Kya 399Apps ek chhote Indian business ke liye accha QuickBooks alternative hai?', a: 'Haan — un India-based SMBs ke liye jinhe GST compliance, INR pricing, aur ek actively supported local product chahiye, 399Apps well-suited hai. Globally-focused US businesses abhi bhi QuickBooks prefer kar sakte hain.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Tally alternative',
      'FreshBooks alternative (India)',
      'India me Cheapest GST software',
      'Small business ke liye best accounting software (India)',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'QuickBooks se switch karein',
    title: 'India-first QuickBooks alternative free try karein',
    body: 'GST-native cloud accounting INR me priced — GST invoices, GSTR-ready exports, e-invoice aur e-way bill. First app ₹399/month se (prices exclude GST), unlimited users included ke saath.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const ta: AltQuickbooksCopy = {
  seo: {
    title: 'India & GST-ku Best QuickBooks Alternative 2026 — ₹399/mo-la irundhu',
    description:
      'QuickBooks India-la focus-a kammi panniduchu, USD-la price pannudhu. 399Apps oru GST-native, India-first QuickBooks alternative ₹399/month-la irundhu (first app, unlimited users; +₹99/mo per add-on, prices exclude GST). Unga books-a migrate pannunga, GST filing continue pannunga. Free trial.',
    keywords: ['quickbooks alternative india', 'quickbooks alternative for gst', 'quickbooks india alternative', 'gst accounting software india'],
  },
  breadcrumbLeaf: 'India & GST-ku Best QuickBooks Alternative 2026 — ₹399/mo-la irundhu',
  hero: {
    eyebrow: '399Apps vs QuickBooks',
    h1: '2026-la India & GST-ku Best QuickBooks Alternative',
    lede:
      "Indian businesses-ku best QuickBooks alternative-nu sonna adhu 399Apps — oru GST-native, India-first cloud accounting platform, first app ₹399/month-la irundhu, unlimited users (no per-seat fee, no client cap) ellaa feature-um included; innum apps illa add-ons add pannunga ₹99/month each (prices exclude GST). QuickBooks oru world-class global product, aana Intuit India-la QuickBooks-a scale back panniduchu, adhoda GST/India localization thin-a irukku, plans USD-la price pannirukku — rupees-ku convert pannumbodhu adhu costly. Neenga oru Indian SMB-a irundhu unga-ku proper GST invoicing, GSTR filing support, INR pricing venumna, oru India-built tool inga de-emphasize panna global product-a vida unga-ku better.",
    note: '14-day free trial · No card required · Eppovum cancel pannalaam',
  },
  whatIs: {
    eyebrow: 'Definition',
    h2: '“QuickBooks alternative for India” na enna?',
    body: [
      'QuickBooks alternative for India na, GST compliance-um INR-based pricing-um venum-nu nenakira Indian businesses-ku QuickBooks-a replace pannra accounting software — Intuit India-la QuickBooks focus kammi pannadhaala idhu innum relevant. Romba strong India alternatives na GST-native cloud tools (399Apps, Zoho Books) um desktop accounting (TallyPrime) um.',
      'Yaaru idha thedraanga? QuickBooks-la irukkura (illa evaluate pannra) Indian SMBs, yaarukku real GST features venumo; USD-priced plans rupees-la costly-a theridhra businesses; India market-a actively support pannra oru vendor venum-nu nenakira users.',
    ],
  },
  glance: {
    eyebrow: 'Comparison',
    h2: '399Apps vs QuickBooks (India-ku) — oru paarvai-la',
    note: "QuickBooks: ~465K organic visits/mo, US-led (Concurate); USD-priced tiers; India focus kammi. 399Apps ₹399/mo-la irundhu (first app, unlimited users; +₹99/mo per extra app/add-on; prices exclude GST). Publish panra podhu QuickBooks-oda current India availability/pricing verify pannunga.",
    table: {
      head: ['', '399Apps', 'QuickBooks'],
      rows: [
        { label: 'Market focus', a: 'India-first, GST-native', b: 'Global (US-led); India-la scale back' },
        { label: 'Pricing currency', a: 'INR — ₹399/mo-la irundhu, first app; +₹99/mo per add-on; unlimited users; prices exclude GST', b: 'USD-priced tiers (INR-la costly)' },
        { label: 'Users', a: 'Unlimited users — no per-seat fee, no client cap', b: 'Per-seat / tier user limits' },
        { label: 'GST compliance', a: 'GST invoicing, GSTR-ready, e-invoice/e-way bill', b: 'Limited GST/India localization' },
        { label: 'GSTR filing support', a: 'Yes (GSTR-1/3B-ready exports)', b: 'Minimal India GST tooling' },
        { label: 'Deployment', a: 'Cloud + mobile', b: 'Cloud + mobile' },
        { label: 'India support / roadmap', a: 'Active India focus', b: 'De-emphasized India presence' },
        { label: 'Best for', a: 'GST + INR price venum-nu nenakira Indian SMBs', b: 'US accounting-la irukkura Global/US businesses' },
      ],
    },
  },
  whySwitch: {
    eyebrow: 'Reasons to switch',
    h2: 'Indian businesses QuickBooks-la irundhu yen switch pannraanga',
    items: [
      "GST first-class citizen. QuickBooks-oda India GST localization thin; 399Apps GST-a suthi build aagirukku — compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill support.",
      'INR pricing, currency shock illa. QuickBooks-oda USD-priced plans rupees-ku convert pannumbodhu costly. 399Apps INR-la ₹399/month-la irundhu (first app; +₹99/mo per add-on; prices exclude GST) unlimited users-oda — Indian budgets-ku predictable.',
      "Nejama inga irukkura vendor. Intuit-oda kammi India focus-la, India-specific features-um support-um lag aagudhu. 399Apps-oda roadmap India-first.",
      '“Stranded user” risk illa. Oru global tool-oda India commitment-la uneasy-a irukkura businesses-ku oru local-market product-oda continuity kidaikkudhu.',
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Pricing: INR-native vs USD-converted',
    body: [
      'QuickBooks adhoda plans-a global-um US markets-ku-um USD-la price pannudhu, adhanaala rupee cost exchange rate-a depend pannudhu, oru Indian SMB-ku high-a theriyudhu. 399Apps natively INR-la price pannudhu: first app ₹399/month-la irundhu, ellaa feature-um included-um unlimited users-um per-seat fee illa client cap illaama; innum apps illa add-ons add pannunga ₹99/month each. Prices exclude GST (ovvoru invoice-la add aagudhu), monthly billed, annual on request.',
    ],
    note: "QuickBooks-oda USD tiers relatively high rupee cost-ku convert aagudhu; QuickBooks India availability-um pricing-um June 2026-la verify pannapattadhu. 399Apps ₹399/mo-la irundhu (first app, prices exclude GST).",
  },
  gstAdvantage: {
    eyebrow: 'India-first',
    h2: 'GST & India advantage',
    lead: 'Idhuthaan switch panra core reason — QuickBooks indha space-a perumbaalum khaali-a vittudum:',
    items: [
      'GST-compliant invoicing HSN/SAC, CGST/SGST/IGST, place-of-supply logic-oda.',
      'GSTR-1 / GSTR-3B-ready exports filing-ku.',
      'E-invoice & e-way bill support applicable thresholds-ku mela.',
      'INR pricing ₹399/mo-la irundhu (first app; +₹99/mo per add-on; prices exclude GST) unlimited users-oda — Indian cash flows-ku build aagirukku.',
      'India-first product decisions, India low priority-a irukkura oru global backlog-a illa.',
    ],
  },
  migrate: {
    eyebrow: 'Migration',
    h2: 'QuickBooks-la irundhu 399Apps-ku eppadi migrate panradhu',
    items: [
      'QuickBooks-la irundhu export pannunga — customers, vendors, chart of accounts, items/products, transactions (QuickBooks CSV/Excel-la export pannudhu; reports Excel-la).',
      'Open A/R-um A/P-um trial balance-um unga switch date-oda padi pull pannunga.',
      '399Apps-ku import pannunga — contacts, accounts, items guided import vazhiya.',
      'Opening balances-a unga QuickBooks trial balance-la irundhu enter pannunga.',
      'GST configure pannunga (GSTIN, tax rates, place of supply) — QuickBooks India-ku set up pannaadha features — oru test GST invoice run pannunga.',
      '399Apps-la go live pannunga; QuickBooks exports-a archive-a vechikonga.',
    ],
    note: 'Mid-year switch pannreengala? Unga cut-over date-la opening balances carry forward pannunga, prior periods-ku unga QuickBooks exports-a archive-a vechikonga — entha data-um lost aagaadhu.',
  },
  whenQuickbooks: {
    eyebrow: 'An honest take',
    h2: 'Eppo QuickBooks innum better fit-a irukkalaam',
    body: [
      'QuickBooks-la irunga unga business primarily US/global-a irundha, unga accountant QuickBooks-la work pannina, illa unga-ku adhoda mature US payroll/tax-um ProAdvisor ecosystem-um venum aana GST thevai illaina. India-based, GST-filing businesses-ku, 399Apps maadhiri oru India-native tool better fit.',
    ],
  },
  faq: {
    title: 'QuickBooks alternative (India) — frequently asked questions',
    items: [
      { q: 'QuickBooks innum India-la available-a?', a: 'Intuit India-la QuickBooks-a scale back-um de-emphasize-um panniduchu, limited GST-localized SMB push-oda. Niraya Indian businesses ippo India-native GST tools maadhiri 399Apps-a choose pannraanga active local support-um GST features-um-ku.' },
      { q: 'India-la GST-ku best QuickBooks alternative edhu?', a: "399Apps oru strong choice — adhu GST-native (compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill) um INR-la ₹399/month-la irundhu priced-um, QuickBooks-oda thin India GST tooling-um USD pricing-um-a vida." },
      { q: 'QuickBooks India-la yen costly?', a: "QuickBooks-oda plans global/US markets-ku USD-la priced, adhu Indian SMBs-ku relatively high rupee cost-ku convert aagudhu. 399Apps idha avoid pannudhu low INR pricing ₹399/month-la irundhu." },
      { q: '399Apps Indian compliance maadhiri GST filing support pannudhaa?', a: 'Aamaa. 399Apps GST-compliant invoices-um GSTR-1/3B-ready exports-um produce pannudhu, Indian GST-la required e-invoicing-um e-way bills-um support pannudhu.' },
      { q: 'En QuickBooks data-va 399Apps-ku migrate pannalaama?', a: 'Aamaa. QuickBooks-la irundhu customers, vendors, chart of accounts, items, transactions export pannunga (CSV/Excel), avanga 399Apps-ku import pannunga, switch date-la unga QuickBooks trial balance-la irundhu opening balances enter pannunga. Contacts, invoices, ledgers ellaam import aagum; large illa complex datasets-ku guided migration support available.' },
      { q: '399Apps QuickBooks Online maadhiri cloud-based-a?', a: 'Aamaa. 399Apps cloud (web)-la-um mobile-la across devices-um run aagudhu, QuickBooks Online maadhiri — aana GST-native features-um INR pricing-um India-ku build aagirukku.' },
      { q: 'QuickBooks-a vittaa en historical data-va izhappenaa?', a: 'Illa. Unga QuickBooks data-um reports-um export panni archive-a vechikonga, opening balances-a 399Apps-ku carry forward pannunga. Unga history exports-la accessible-a irukkum.' },
      { q: '399Apps oru chinna Indian business-ku nalla QuickBooks alternative-a?', a: 'Aamaa — GST compliance, INR pricing, oru actively supported local product venum-nu nenakira India-based SMBs-ku, 399Apps well-suited. Globally-focused US businesses innum QuickBooks prefer pannalaam.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Tally alternative',
      'FreshBooks alternative (India)',
      'India-la Cheapest GST software',
      'Small business-ku best accounting software (India)',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'QuickBooks-la irundhu switch pannunga',
    title: 'India-first QuickBooks alternative-a free try pannunga',
    body: 'GST-native cloud accounting INR-la priced — GST invoices, GSTR-ready exports, e-invoice-um e-way bill-um. First app ₹399/month-la irundhu (prices exclude GST), unlimited users included-oda.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const hindi: AltQuickbooksCopy = {
  seo: {
    title: 'India & GST के लिए Best QuickBooks Alternative 2026 — ₹399/mo से',
    description:
      'QuickBooks ने India में focus कम कर दिया और USD में price करता है। 399Apps एक GST-native, India-first QuickBooks विकल्प है ₹399/month से (first app, unlimited users; +₹99/mo per add-on, prices exclude GST)। अपनी books माइग्रेट करें और GST filing जारी रखें। मुफ़्त ट्रायल।',
    keywords: ['quickbooks alternative india', 'quickbooks alternative for gst', 'quickbooks india alternative', 'gst accounting software india'],
  },
  breadcrumbLeaf: 'India & GST के लिए Best QuickBooks Alternative 2026 — ₹399/mo से',
  hero: {
    eyebrow: '399Apps vs QuickBooks',
    h1: '2026 में India & GST के लिए सबसे अच्छा QuickBooks विकल्प',
    lede:
      "Indian businesses के लिए सबसे अच्छा QuickBooks विकल्प है 399Apps — एक GST-native, India-first cloud लेखांकन सॉफ़्टवेयर, पहले app के लिए ₹399/month से, असीमित उपयोगकर्ता (कोई प्रति-यूज़र शुल्क नहीं, कोई client cap नहीं) और हर feature शामिल; और apps या add-ons जोड़ें ₹99/month each (prices exclude GST)। QuickBooks एक world-class global product है, पर Intuit ने India में QuickBooks scale back कर दिया, इसका GST/India localization पतला है, और इसके plans USD में priced हैं — जो rupees में convert होने पर महँगा पड़ता है। अगर आप एक Indian SMB हैं जिसे proper GST invoicing, GSTR filing support और INR pricing चाहिए, तो एक India-built tool आपके लिए उस global product से बेहतर है जो इस market के लिए de-emphasize कर दिया गया है।",
    note: '14-day मुफ़्त ट्रायल · कोई card नहीं चाहिए · कभी भी cancel करें',
  },
  whatIs: {
    eyebrow: 'Definition',
    h2: '“QuickBooks alternative for India” क्या होता है?',
    body: [
      'QuickBooks alternative for India एक ऐसा लेखांकन सॉफ़्टवेयर है जो उन Indian businesses के लिए QuickBooks को replace करता है जिन्हें GST compliance और INR-based pricing चाहिए — खासकर इसलिए relevant क्योंकि Intuit ने India में QuickBooks focus कम कर दिया। सबसे मज़बूत India विकल्प हैं GST-native cloud tools (399Apps, Zoho Books) और desktop लेखांकन (TallyPrime)।',
      'इसे कौन ढूँढता है? वे Indian SMBs जो QuickBooks पर हैं (या evaluate कर रहे हैं) और जिन्हें real GST features चाहिए, वे businesses जिन्हें USD-priced plans rupees में महँगे लगते हैं, और वे users जो ऐसा vendor चाहते हैं जो India market को actively support करे।',
    ],
  },
  glance: {
    eyebrow: 'Comparison',
    h2: '399Apps vs QuickBooks (India के लिए) — एक नज़र में',
    note: "QuickBooks: ~465K organic visits/mo, US-led (Concurate); USD-priced tiers; India focus कम। 399Apps ₹399/mo से (first app, unlimited users; +₹99/mo per extra app/add-on; prices exclude GST)। Publish के समय QuickBooks की current India availability/pricing verify करें।",
    table: {
      head: ['', '399Apps', 'QuickBooks'],
      rows: [
        { label: 'Market focus', a: 'India-first, GST-native', b: 'Global (US-led); India में scale back' },
        { label: 'Pricing currency', a: 'INR — ₹399/mo से, first app; +₹99/mo per add-on; असीमित उपयोगकर्ता; prices exclude GST', b: 'USD-priced tiers (INR में महँगे)' },
        { label: 'Users', a: 'असीमित उपयोगकर्ता — कोई प्रति-यूज़र शुल्क नहीं, कोई client cap नहीं', b: 'Per-seat / tier user limits' },
        { label: 'GST compliance', a: 'GST invoicing, GSTR-ready, e-invoice/e-way bill', b: 'Limited GST/India localization' },
        { label: 'GSTR filing support', a: 'Yes (GSTR-1/3B-ready exports)', b: 'Minimal India GST tooling' },
        { label: 'Deployment', a: 'Cloud + mobile', b: 'Cloud + mobile' },
        { label: 'India support / roadmap', a: 'Active India focus', b: 'De-emphasized India presence' },
        { label: 'Best for', a: 'GST + INR price चाहने वाले Indian SMBs', b: 'US accounting पर Global/US businesses' },
      ],
    },
  },
  whySwitch: {
    eyebrow: 'Reasons to switch',
    h2: 'Indian businesses QuickBooks से क्यों switch करते हैं',
    items: [
      "GST first-class citizen है। QuickBooks का India GST localization पतला है; 399Apps GST के around बना है — compliant invoices, GSTR-1/3B-ready exports, और e-invoice/e-way bill support।",
      'INR pricing, कोई currency shock नहीं। QuickBooks के USD-priced plans rupees में convert होने पर महँगे हैं। 399Apps INR में ₹399/month से है (first app; +₹99/mo per add-on; prices exclude GST) असीमित उपयोगकर्ता के साथ — Indian budgets के लिए predictable।',
      "एक vendor जो सच में यहाँ है। Intuit के कम India focus के साथ, India-specific features और support lag करते हैं। 399Apps का roadmap India-first है।",
      'कोई “stranded user” risk नहीं। जो businesses एक global tool के India commitment से uneasy हैं, उन्हें एक local-market product के साथ continuity मिलती है।',
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Pricing: INR-native vs USD-converted',
    body: [
      'QuickBooks अपने plans को global और US markets के लिए USD में price करता है, इसलिए rupee cost exchange rate पर depend करता है और एक Indian SMB को high लगता है। 399Apps natively INR में price करता है: पहले app के लिए ₹399/month से, हर feature शामिल और असीमित उपयोगकर्ता बिना किसी प्रति-यूज़र शुल्क या client cap के; और apps या add-ons जोड़ें ₹99/month each। Prices exclude GST (हर invoice पर add होता है), monthly billed, annual on request।',
    ],
    note: "QuickBooks के USD tiers relatively high rupee cost में convert होते हैं; QuickBooks India availability और pricing June 2026 में verify की गई। 399Apps ₹399/mo से (first app, prices exclude GST)।",
  },
  gstAdvantage: {
    eyebrow: 'India-first',
    h2: 'GST & India advantage',
    lead: 'यही switch करने का core reason है — QuickBooks यह space अधिकतर खाली छोड़ देता है:',
    items: [
      'GST-compliant invoicing HSN/SAC, CGST/SGST/IGST, और place-of-supply logic के साथ।',
      'GSTR-1 / GSTR-3B-ready exports filing के लिए।',
      'E-invoice & e-way bill support applicable thresholds के ऊपर।',
      'INR pricing ₹399/mo से (first app; +₹99/mo per add-on; prices exclude GST) असीमित उपयोगकर्ता के साथ — Indian cash flows के लिए बना।',
      'India-first product decisions, न कि एक global backlog जहाँ India low priority है।',
    ],
  },
  migrate: {
    eyebrow: 'Migration',
    h2: 'QuickBooks से 399Apps पर कैसे माइग्रेट करें',
    items: [
      'QuickBooks से export करें — customers, vendors, chart of accounts, items/products, और transactions (QuickBooks CSV/Excel में export करता है; reports Excel में)।',
      'Open A/R और A/P और trial balance अपनी switch date के अनुसार pull करें।',
      '399Apps में import करें — contacts, accounts, items guided import के ज़रिए।',
      'Opening balances अपने QuickBooks trial balance से enter करें।',
      'GST configure करें (GSTIN, tax rates, place of supply) — features जो QuickBooks ने India के लिए set up नहीं किए होंगे — और एक test GST invoice run करें।',
      '399Apps में go live करें; QuickBooks exports को archive के रूप में रखें।',
    ],
    note: 'Mid-year switch कर रहे हैं? अपनी cut-over date पर opening balances carry forward करें और prior periods के लिए अपने QuickBooks exports archive के रूप में रखें — कोई data lost नहीं होता।',
  },
  whenQuickbooks: {
    eyebrow: 'An honest take',
    h2: 'जब QuickBooks अभी भी better fit हो सकता है',
    body: [
      'QuickBooks पर रहें अगर आपका business primarily US/global है, आपका accountant QuickBooks में काम करता है, या आपको इसका mature US payroll/tax और ProAdvisor ecosystem चाहिए और GST की ज़रूरत नहीं। India-based, GST-filing businesses के लिए, 399Apps जैसा India-native tool better fit है।',
    ],
  },
  faq: {
    title: 'QuickBooks alternative (India) — frequently asked questions',
    items: [
      { q: 'क्या QuickBooks अभी भी India में available है?', a: 'Intuit ने India में QuickBooks scale back और de-emphasize कर दिया है, limited GST-localized SMB push के साथ। बहुत से Indian businesses अब India-native GST tools जैसे 399Apps choose करते हैं active local support और GST features के लिए।' },
      { q: 'India में GST के लिए सबसे अच्छा QuickBooks विकल्प कौन-सा है?', a: "399Apps एक strong choice है — यह GST-native है (compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill) और INR में ₹399/month से priced है, जबकि QuickBooks का India GST tooling पतला और pricing USD में है।" },
      { q: 'QuickBooks India में महँगा क्यों है?', a: "QuickBooks के plans global/US markets के लिए USD में priced हैं, जो Indian SMBs के लिए relatively high rupee cost में convert होते हैं। 399Apps इसे avoid करता है low INR pricing ₹399/month से।" },
      { q: 'क्या 399Apps Indian compliance की तरह GST filing support करता है?', a: 'हाँ। 399Apps GST-compliant invoices और GSTR-1/3B-ready exports बनाता है, और Indian GST के under required e-invoicing और e-way bills support करता है।' },
      { q: 'क्या मैं अपना QuickBooks data 399Apps में माइग्रेट कर सकता हूँ?', a: 'हाँ। QuickBooks से customers, vendors, chart of accounts, items और transactions export करें (CSV/Excel), उन्हें 399Apps में import करें, और switch date पर अपने QuickBooks trial balance से opening balances enter करें। Contacts, invoices और ledgers सब import होते हैं; large या complex datasets के लिए guided माइग्रेशन support available है।' },
      { q: 'क्या 399Apps QuickBooks Online की तरह cloud-based है?', a: 'हाँ। 399Apps cloud (web) में और mobile पर across devices चलता है, QuickBooks Online की तरह — पर GST-native features और INR pricing के साथ जो India के लिए बना है।' },
      { q: 'अगर मैं QuickBooks छोड़ूँ तो क्या अपना historical data खो दूँगा?', a: 'नहीं। अपना QuickBooks data और reports export करके archive के रूप में रखें, और opening balances 399Apps में carry forward करें। आपकी history exports में accessible रहती है।' },
      { q: 'क्या 399Apps एक छोटे Indian business के लिए अच्छा QuickBooks विकल्प है?', a: 'हाँ — उन India-based SMBs के लिए जिन्हें GST compliance, INR pricing, और एक actively supported local product चाहिए, 399Apps well-suited है। Globally-focused US businesses अभी भी QuickBooks prefer कर सकते हैं।' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Tally alternative',
      'FreshBooks alternative (India)',
      'India में Cheapest GST software',
      'Small business के लिए best accounting software (India)',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'QuickBooks से switch करें',
    title: 'India-first QuickBooks विकल्प मुफ़्त try करें',
    body: 'GST-native cloud लेखांकन INR में priced — GST invoices, GSTR-ready exports, e-invoice और e-way bill। पहले app के लिए ₹399/month से (prices exclude GST), असीमित उपयोगकर्ता included के साथ।',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const tamil: AltQuickbooksCopy = {
  seo: {
    title: 'India & GST-க்கு Best QuickBooks Alternative 2026 — ₹399/mo முதல்',
    description:
      'QuickBooks India-வில் focus-ஐ குறைத்துவிட்டது, USD-ல் price செய்கிறது. 399Apps ஒரு GST-native, India-first QuickBooks மாற்று ₹399/month முதல் (first app, unlimited users; +₹99/mo per add-on, prices exclude GST). உங்கள் books-ஐ இடம்பெயர்த்து GST filing தொடரவும். இலவச சோதனை.',
    keywords: ['quickbooks alternative india', 'quickbooks alternative for gst', 'quickbooks india alternative', 'gst accounting software india'],
  },
  breadcrumbLeaf: 'India & GST-க்கு Best QuickBooks Alternative 2026 — ₹399/mo முதல்',
  hero: {
    eyebrow: '399Apps vs QuickBooks',
    h1: '2026-ல் India & GST-க்கு சிறந்த QuickBooks மாற்று',
    lede:
      "Indian businesses-க்கு சிறந்த QuickBooks மாற்று 399Apps — ஒரு GST-native, India-first cloud கணக்கியல் மென்பொருள், முதல் app-க்கு ₹399/month முதல், வரம்பற்ற பயனர்கள் (ஒரு-பயனர் கட்டணம் இல்லை, client cap இல்லை) மற்றும் ஒவ்வொரு feature-ம் உள்ளடக்கப்பட்டது; மேலும் apps அல்லது add-ons சேர்க்கவும் ₹99/month each (prices exclude GST). QuickBooks ஒரு world-class global product, ஆனால் Intuit India-வில் QuickBooks-ஐ scale back செய்தது, அதன் GST/India localization மெல்லியதாக உள்ளது, மற்றும் அதன் plans USD-ல் priced — rupees-க்கு convert செய்யும்போது அது விலை அதிகம். நீங்கள் proper GST invoicing, GSTR filing support, INR pricing தேவைப்படும் ஒரு Indian SMB எனில், இந்த market-க்கு de-emphasize செய்யப்பட்ட global product-ஐ விட ஒரு India-built tool உங்களுக்கு சிறந்தது.",
    note: '14-day இலவச சோதனை · card தேவையில்லை · எப்போது வேண்டுமானாலும் cancel செய்யவும்',
  },
  whatIs: {
    eyebrow: 'Definition',
    h2: '“QuickBooks alternative for India” என்றால் என்ன?',
    body: [
      'QuickBooks alternative for India என்பது GST compliance மற்றும் INR-based pricing தேவைப்படும் Indian businesses-க்கு QuickBooks-ஐ replace செய்யும் கணக்கியல் மென்பொருள் — Intuit India-வில் QuickBooks focus-ஐ குறைத்ததால் இது இன்னும் relevant. மிகவும் வலுவான India மாற்றுகள் GST-native cloud tools (399Apps, Zoho Books) மற்றும் desktop கணக்கியல் (TallyPrime).',
      'இதை யார் தேடுகிறார்கள்? QuickBooks-ல் உள்ள (அல்லது evaluate செய்யும்) Indian SMBs, யாருக்கு real GST features தேவையோ; USD-priced plans rupees-ல் விலை அதிகமாக தோன்றும் businesses; India market-ஐ actively support செய்யும் ஒரு vendor வேண்டும் என்று நினைக்கும் users.',
    ],
  },
  glance: {
    eyebrow: 'Comparison',
    h2: '399Apps vs QuickBooks (India-க்கு) — ஒரு பார்வையில்',
    note: "QuickBooks: ~465K organic visits/mo, US-led (Concurate); USD-priced tiers; India focus குறைவு. 399Apps ₹399/mo முதல் (first app, unlimited users; +₹99/mo per extra app/add-on; prices exclude GST). Publish செய்யும்போது QuickBooks-இன் current India availability/pricing verify செய்யவும்.",
    table: {
      head: ['', '399Apps', 'QuickBooks'],
      rows: [
        { label: 'Market focus', a: 'India-first, GST-native', b: 'Global (US-led); India-வில் scale back' },
        { label: 'Pricing currency', a: 'INR — ₹399/mo முதல், first app; +₹99/mo per add-on; வரம்பற்ற பயனர்கள்; prices exclude GST', b: 'USD-priced tiers (INR-ல் விலை அதிகம்)' },
        { label: 'Users', a: 'வரம்பற்ற பயனர்கள் — ஒரு-பயனர் கட்டணம் இல்லை, client cap இல்லை', b: 'Per-seat / tier user limits' },
        { label: 'GST compliance', a: 'GST invoicing, GSTR-ready, e-invoice/e-way bill', b: 'Limited GST/India localization' },
        { label: 'GSTR filing support', a: 'Yes (GSTR-1/3B-ready exports)', b: 'Minimal India GST tooling' },
        { label: 'Deployment', a: 'Cloud + mobile', b: 'Cloud + mobile' },
        { label: 'India support / roadmap', a: 'Active India focus', b: 'De-emphasized India presence' },
        { label: 'Best for', a: 'GST + INR price தேவைப்படும் Indian SMBs', b: 'US accounting-ல் உள்ள Global/US businesses' },
      ],
    },
  },
  whySwitch: {
    eyebrow: 'Reasons to switch',
    h2: 'Indian businesses QuickBooks-லிருந்து ஏன் switch செய்கிறார்கள்',
    items: [
      "GST first-class citizen. QuickBooks-இன் India GST localization மெல்லியது; 399Apps GST-ஐ சுற்றி build செய்யப்பட்டது — compliant invoices, GSTR-1/3B-ready exports, மற்றும் e-invoice/e-way bill support.",
      'INR pricing, currency shock இல்லை. QuickBooks-இன் USD-priced plans rupees-க்கு convert செய்யும்போது விலை அதிகம். 399Apps INR-ல் ₹399/month முதல் (first app; +₹99/mo per add-on; prices exclude GST) வரம்பற்ற பயனர்களுடன் — Indian budgets-க்கு predictable.',
      "உண்மையில் இங்கே இருக்கும் ஒரு vendor. Intuit-இன் குறைந்த India focus-உடன், India-specific features-ம் support-ம் lag ஆகின்றன. 399Apps-இன் roadmap India-first.",
      '“stranded user” risk இல்லை. ஒரு global tool-இன் India commitment குறித்து uneasy-ஆக இருக்கும் businesses-க்கு ஒரு local-market product-உடன் continuity கிடைக்கிறது.',
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Pricing: INR-native vs USD-converted',
    body: [
      'QuickBooks அதன் plans-ஐ global மற்றும் US markets-க்கு USD-ல் price செய்கிறது, எனவே rupee cost exchange rate-ஐ depend செய்கிறது, ஒரு Indian SMB-க்கு high-ஆக தோன்றுகிறது. 399Apps natively INR-ல் price செய்கிறது: முதல் app-க்கு ₹399/month முதல், ஒவ்வொரு feature-ம் உள்ளடக்கப்பட்டது மற்றும் வரம்பற்ற பயனர்கள் ஒரு-பயனர் கட்டணம் அல்லது client cap இல்லாமல்; மேலும் apps அல்லது add-ons சேர்க்கவும் ₹99/month each. Prices exclude GST (ஒவ்வொரு invoice-ல் add ஆகிறது), monthly billed, annual on request.',
    ],
    note: "QuickBooks-இன் USD tiers relatively high rupee cost-க்கு convert ஆகின்றன; QuickBooks India availability மற்றும் pricing June 2026-ல் verify செய்யப்பட்டது. 399Apps ₹399/mo முதல் (first app, prices exclude GST).",
  },
  gstAdvantage: {
    eyebrow: 'India-first',
    h2: 'GST & India advantage',
    lead: 'இதுதான் switch செய்வதற்கான core reason — QuickBooks இந்த space-ஐ பெரும்பாலும் காலியாக விட்டுவிடுகிறது:',
    items: [
      'GST-compliant invoicing HSN/SAC, CGST/SGST/IGST, மற்றும் place-of-supply logic-உடன்.',
      'GSTR-1 / GSTR-3B-ready exports filing-க்கு.',
      'E-invoice & e-way bill support applicable thresholds-க்கு மேல்.',
      'INR pricing ₹399/mo முதல் (first app; +₹99/mo per add-on; prices exclude GST) வரம்பற்ற பயனர்களுடன் — Indian cash flows-க்கு build செய்யப்பட்டது.',
      'India-first product decisions, India low priority-ஆக இருக்கும் ஒரு global backlog அல்ல.',
    ],
  },
  migrate: {
    eyebrow: 'Migration',
    h2: 'QuickBooks-லிருந்து 399Apps-க்கு எப்படி இடம்பெயர்வது',
    items: [
      'QuickBooks-லிருந்து export செய்யவும் — customers, vendors, chart of accounts, items/products, மற்றும் transactions (QuickBooks CSV/Excel-ல் export செய்கிறது; reports Excel-ல்).',
      'Open A/R மற்றும் A/P மற்றும் trial balance-ஐ உங்கள் switch date-இன் படி pull செய்யவும்.',
      '399Apps-க்கு import செய்யவும் — contacts, accounts, items guided import மூலம்.',
      'Opening balances-ஐ உங்கள் QuickBooks trial balance-லிருந்து enter செய்யவும்.',
      'GST configure செய்யவும் (GSTIN, tax rates, place of supply) — QuickBooks India-க்கு set up செய்யாத features — மற்றும் ஒரு test GST invoice run செய்யவும்.',
      '399Apps-ல் go live செய்யவும்; QuickBooks exports-ஐ archive-ஆக வைத்திருங்கள்.',
    ],
    note: 'Mid-year switch செய்கிறீர்களா? உங்கள் cut-over date-ல் opening balances carry forward செய்யவும், prior periods-க்கு உங்கள் QuickBooks exports-ஐ archive-ஆக வைத்திருங்கள் — எந்த data-வும் lost ஆகாது.',
  },
  whenQuickbooks: {
    eyebrow: 'An honest take',
    h2: 'எப்போது QuickBooks இன்னும் better fit-ஆக இருக்கலாம்',
    body: [
      'QuickBooks-ல் இருங்கள் உங்கள் business primarily US/global எனில், உங்கள் accountant QuickBooks-ல் வேலை செய்தால், அல்லது உங்களுக்கு அதன் mature US payroll/tax மற்றும் ProAdvisor ecosystem தேவை மற்றும் GST தேவையில்லை எனில். India-based, GST-filing businesses-க்கு, 399Apps போன்ற ஒரு India-native tool better fit.',
    ],
  },
  faq: {
    title: 'QuickBooks alternative (India) — frequently asked questions',
    items: [
      { q: 'QuickBooks இன்னும் India-வில் available-ஆ?', a: 'Intuit India-வில் QuickBooks-ஐ scale back மற்றும் de-emphasize செய்துவிட்டது, limited GST-localized SMB push-உடன். பல Indian businesses இப்போது India-native GST tools போன்ற 399Apps-ஐ choose செய்கின்றன active local support மற்றும் GST features-க்கு.' },
      { q: 'India-வில் GST-க்கு சிறந்த QuickBooks மாற்று எது?', a: "399Apps ஒரு strong choice — அது GST-native (compliant invoices, GSTR-1/3B-ready exports, e-invoice/e-way bill) மற்றும் INR-ல் ₹399/month முதல் priced, QuickBooks-இன் மெல்லிய India GST tooling மற்றும் USD pricing-ஐ விட." },
      { q: 'QuickBooks India-வில் ஏன் விலை அதிகம்?', a: "QuickBooks-இன் plans global/US markets-க்கு USD-ல் priced, அது Indian SMBs-க்கு relatively high rupee cost-க்கு convert ஆகிறது. 399Apps இதை avoid செய்கிறது low INR pricing ₹399/month முதல்." },
      { q: '399Apps Indian compliance போல GST filing support செய்கிறதா?', a: 'ஆம். 399Apps GST-compliant invoices மற்றும் GSTR-1/3B-ready exports உருவாக்குகிறது, மற்றும் Indian GST-இன் கீழ் required e-invoicing மற்றும் e-way bills support செய்கிறது.' },
      { q: 'என் QuickBooks data-ஐ 399Apps-க்கு இடம்பெயர்க்க முடியுமா?', a: 'ஆம். QuickBooks-லிருந்து customers, vendors, chart of accounts, items மற்றும் transactions export செய்யவும் (CSV/Excel), அவற்றை 399Apps-க்கு import செய்யவும், மற்றும் switch date-ல் உங்கள் QuickBooks trial balance-லிருந்து opening balances enter செய்யவும். Contacts, invoices மற்றும் ledgers அனைத்தும் import ஆகின்றன; large அல்லது complex datasets-க்கு guided இடம்பெயர்வு support available.' },
      { q: '399Apps QuickBooks Online போல cloud-based-ஆ?', a: 'ஆம். 399Apps cloud (web)-ல் மற்றும் mobile-ல் across devices run ஆகிறது, QuickBooks Online போல — ஆனால் GST-native features மற்றும் INR pricing-உடன் India-க்கு build செய்யப்பட்டது.' },
      { q: 'QuickBooks-ஐ விட்டால் என் historical data-ஐ இழப்பேனா?', a: 'இல்லை. உங்கள் QuickBooks data மற்றும் reports-ஐ export செய்து archive-ஆக வைத்திருங்கள், மற்றும் opening balances-ஐ 399Apps-க்கு carry forward செய்யவும். உங்கள் history exports-ல் accessible-ஆக இருக்கும்.' },
      { q: '399Apps ஒரு சிறிய Indian business-க்கு நல்ல QuickBooks மாற்றா?', a: 'ஆம் — GST compliance, INR pricing, மற்றும் ஒரு actively supported local product தேவைப்படும் India-based SMBs-க்கு, 399Apps well-suited. Globally-focused US businesses இன்னும் QuickBooks prefer செய்யலாம்.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Tally alternative',
      'FreshBooks alternative (India)',
      'India-வில் Cheapest GST software',
      'Small business-க்கு best accounting software (India)',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'QuickBooks-லிருந்து switch செய்யவும்',
    title: 'India-first QuickBooks மாற்றை இலவசமாக try செய்யவும்',
    body: 'GST-native cloud கணக்கியல் INR-ல் priced — GST invoices, GSTR-ready exports, e-invoice மற்றும் e-way bill. முதல் app-க்கு ₹399/month முதல் (prices exclude GST), வரம்பற்ற பயனர்கள் included-உடன்.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const ALT_QUICKBOOKS_COPY: Record<Lang, AltQuickbooksCopy> = { en, hi, ta, hindi, tamil };

export function getAltQuickbooksCopy(lang: Lang): AltQuickbooksCopy {
  return pickByLang(ALT_QUICKBOOKS_COPY, lang);
}
