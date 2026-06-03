import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Best E-Invoicing Software in India (2026) | Compared',
    description:
      'The best e-invoicing software in India for 2026 — compared on IRN/QR generation, e-way bills, GST returns, price and users.',
    keywords: [
      'best e-invoicing software india',
      'e-invoicing software india',
      'gst e-invoice software',
      'irn generation software',
      'e invoice software for small business',
    ],
  },
  breadcrumb: { leaf: 'E-invoicing software in India' },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'Best E-Invoicing Software in India (2026)',
    lede: 'The best e-invoicing software in India in 2026 is Nidhi Books at ₹399/month with unlimited users — it generates IRN/QR e-invoices, e-way bills and GST returns from one tool. Zoho Books suits automation-heavy teams and TallyPrime fits desktop accountants, but cost more to scale. With e-invoicing now mandatory above ₹5 crore turnover, flat-cost software that bundles it with accounting wins.',
    trustNote: '14-day free trial · No card required · Cancel anytime',
  },
  whoNeeds: {
    eyebrow: 'Who needs it',
    h2: 'Do you need e-invoicing software?',
    body: 'As of 2026, e-invoicing is mandatory for businesses with aggregate annual turnover above ₹5 crore for B2B and export invoices. The threshold has fallen steadily (from ₹500 crore in 2020 down to ₹5 crore), so the number of businesses in scope keeps growing. E-invoicing software prepares your invoice in the required schema, registers it with the Invoice Registration Portal (IRP), and returns an IRN (Invoice Reference Number) and a signed QR code — automatically, as you bill.',
  },
  howToChoose: {
    eyebrow: 'How to judge',
    h2: 'How to choose e-invoicing software',
    body: 'Look for built-in IRP integration (IRN/QR generated in the background, not a manual upload), e-way bill generation from the same invoice, GSTR-1/3B-ready data so e-invoices flow into returns, and per-user pricing as you add staff. Bonus if e-invoicing sits inside full accounting — so you aren’t running a separate IRP tool alongside your books.',
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'Best e-invoicing software in India (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Entry price'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Flat-cost e-invoicing + e-way bill + accounting, unlimited users', price: 'From ₹399/month' },
        { rank: '2', software: 'Zoho Books', bestFor: 'E-invoicing with deep automation', price: 'Free under ₹25 lakh; ₹899/mo paid' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Desktop e-invoicing for accountants', price: '₹22,500 one-time' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile-first e-invoicing & billing', price: 'Free mobile; ~₹3,399/yr paid' },
      ],
    },
    note: 'Prices as of June 2026; verify current. All prices exclude 18% GST. Nidhi Books: from ₹399/month (first app, unlimited users; +₹99/mo per add-on).',
  },
  compare: {
    eyebrow: 'Price & feature comparison',
    h2: 'Nidhi Books vs Zoho, Tally, Vyapar & QuickBooks',
    table: {
      head: [' ', 'Nidhi Books', 'Zoho Books', 'TallyPrime', 'Vyapar', 'QuickBooks'],
      rows: [
        { label: 'Entry price', nidhi: 'From ₹399/mo', zoho: 'Free / ₹899/mo', tally: '₹22,500 one-time', vyapar: 'Free / ~₹3,399/yr', quickbooks: 'Discontinued in India' },
        { label: 'Users', nidhi: 'Unlimited', zoho: 'Plan-capped', tally: 'Per-user (Gold)', vyapar: 'Per-device', quickbooks: '—' },
        { label: 'E-invoice (IRN/QR)', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'E-way bill', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'GSTR-1 / 3B returns', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Lighter', quickbooks: '—' },
        { label: 'Cloud + daily backups', nidhi: 'Yes', zoho: 'Yes', tally: 'Desktop-first', vyapar: 'Desktop/Mobile', quickbooks: '—' },
      ],
    },
    note: 'Prices as of June 2026; verify current. All prices exclude 18% GST. E-invoicing mandate: turnover above ₹5 crore (2026). QuickBooks India closed to new subscriptions (service ended 30 April 2023).',
    honestTake: 'The honest take: if you’re a small firm that just crossed the threshold, Zoho Books or Vyapar can get you compliant cheaply, and desktop practices may stay on TallyPrime. But if you want e-invoicing, e-way bills, returns and full accounting on one flat bill with unlimited users, Nidhi Books from ₹399/month is the best-value e-invoicing software for a growing Indian business.',
  },
  faq: {
    title: 'Best e-invoicing software in India — frequently asked questions',
    items: [
      { q: 'What is the best e-invoicing software in India in 2026?', a: 'Nidhi Books (399Apps) for value — it generates IRN/QR e-invoices, e-way bills and GST returns from ₹399/month with unlimited users (prices exclude GST). Zoho Books and TallyPrime are strong for automation-heavy and desktop-first setups respectively.' },
      { q: 'Who needs to use e-invoicing in India?', a: 'As of 2026, e-invoicing (IRN/QR via the IRP) is mandatory for businesses with aggregate annual turnover above ₹5 crore for B2B and export invoices. The threshold has fallen over time, so the number of businesses in scope keeps growing.' },
      { q: 'How does e-invoicing software work?', a: 'E-invoicing software prepares your invoice in the required schema, sends it to the Invoice Registration Portal (IRP), and receives back an IRN (Invoice Reference Number) and a signed QR code, which are added to the invoice. Good software does this in the background as you bill and keeps the data return-ready.' },
      { q: 'Is e-invoicing the same as e-way bill?', a: 'No. E-invoicing registers a B2B/export invoice with the IRP to get an IRN and QR code; an e-way bill authorises movement of goods above a value threshold. Many tools, including Nidhi Books, generate both from the same invoice data.' },
      { q: 'What is the cheapest e-invoicing software in India?', a: 'Nidhi Books is among the cheapest full options at ₹399/month with unlimited users and e-invoicing included (prices exclude GST). Vyapar has a low-cost tier, while Zoho Books is free under ₹25 lakh turnover — though most businesses needing e-invoicing are above the ₹5 crore mandate.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      { label: "All buyer's guides", href: '/best/' },
      { label: 'Best GST software (India)', href: '/best/gst-software-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Best accounting software for small business', href: '/best/accounting-software-small-business-india/' },
      { label: 'Tally alternative', href: '/tally-alternative/' },
      { label: 'Nidhi Books — GST accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'E-invoicing software from ₹399/month',
    body: 'IRN/QR e-invoices, e-way bills, GST returns and full accounting — unlimited users, no per-seat fees. The Cloud plan starts from ₹399/month for your first app (prices exclude GST).',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

export type BestEInvoicingCopy = typeof en;

const hi: BestEInvoicingCopy = {
  seo: {
    title: 'India mein Best E-Invoicing Software (2026) | Compared',
    description:
      'India ka best e-invoicing software 2026 ke liye — IRN/QR generation, e-way bills, GST returns, price aur users pe compare kiya gaya.',
    keywords: [
      'best e-invoicing software india',
      'e-invoicing software india',
      'gst e-invoice software',
      'irn generation software',
      'e invoice software for small business',
    ],
  },
  breadcrumb: { leaf: 'India mein E-invoicing software' },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'India mein Best E-Invoicing Software (2026)',
    lede: 'India mein 2026 ka best e-invoicing software hai Nidhi Books ₹399/month pe unlimited users ke saath — yeh IRN/QR e-invoices, e-way bills aur GST returns ek hi tool se generate karta hai. Zoho Books automation-heavy teams ke liye theek hai aur TallyPrime desktop accountants ke liye fit hai, lekin scale karne pe zyada mehenga padta hai. Ab jab e-invoicing ₹5 crore turnover se upar mandatory hai, woh flat-cost software jeetta hai jo ise accounting ke saath bundle karta hai.',
    trustNote: '14-day free trial · No card required · Cancel anytime',
  },
  whoNeeds: {
    eyebrow: 'Who needs it',
    h2: 'Kya aapko e-invoicing software chahiye?',
    body: '2026 tak, e-invoicing un businesses ke liye mandatory hai jinka aggregate annual turnover ₹5 crore se upar hai — B2B aur export invoices ke liye. Threshold lagaatar gira hai (2020 mein ₹500 crore se ₹5 crore tak), isliye scope mein aane wale businesses ki sankhya badhti ja rahi hai. E-invoicing software aapke invoice ko required schema mein taiyaar karta hai, use Invoice Registration Portal (IRP) ke saath register karta hai, aur ek IRN (Invoice Reference Number) aur signed QR code wapas deta hai — automatically, jaise aap bill karte hain.',
  },
  howToChoose: {
    eyebrow: 'How to judge',
    h2: 'E-invoicing software kaise choose karein',
    body: 'Built-in IRP integration dhoondein (IRN/QR background mein generate ho, manual upload nahi), usi invoice se e-way bill generation, GSTR-1/3B-ready data taaki e-invoices returns mein flow karein, aur staff add karne pe per-user pricing. Bonus agar e-invoicing full accounting ke andar baithta hai — taaki aap apni books ke saath ek alag IRP tool na chalaayein.',
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'India mein best e-invoicing software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Entry price'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Flat-cost e-invoicing + e-way bill + accounting, unlimited users', price: 'From ₹399/month' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Deep automation ke saath e-invoicing', price: 'Free under ₹25 lakh; ₹899/mo paid' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants ke liye desktop e-invoicing', price: '₹22,500 one-time' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile-first e-invoicing & billing', price: 'Free mobile; ~₹3,399/yr paid' },
      ],
    },
    note: 'Prices June 2026 tak; current verify karein. Sab prices 18% GST exclude karte hain. Nidhi Books: from ₹399/month (first app, unlimited users; +₹99/mo per add-on).',
  },
  compare: {
    eyebrow: 'Price & feature comparison',
    h2: 'Nidhi Books vs Zoho, Tally, Vyapar & QuickBooks',
    table: {
      head: [' ', 'Nidhi Books', 'Zoho Books', 'TallyPrime', 'Vyapar', 'QuickBooks'],
      rows: [
        { label: 'Entry price', nidhi: 'From ₹399/mo', zoho: 'Free / ₹899/mo', tally: '₹22,500 one-time', vyapar: 'Free / ~₹3,399/yr', quickbooks: 'India mein discontinued' },
        { label: 'Users', nidhi: 'Unlimited', zoho: 'Plan-capped', tally: 'Per-user (Gold)', vyapar: 'Per-device', quickbooks: '—' },
        { label: 'E-invoice (IRN/QR)', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'E-way bill', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'GSTR-1 / 3B returns', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Lighter', quickbooks: '—' },
        { label: 'Cloud + daily backups', nidhi: 'Yes', zoho: 'Yes', tally: 'Desktop-first', vyapar: 'Desktop/Mobile', quickbooks: '—' },
      ],
    },
    note: 'Prices June 2026 tak; current verify karein. Sab prices 18% GST exclude karte hain. E-invoicing mandate: turnover ₹5 crore se upar (2026). QuickBooks India naye subscriptions ke liye band (service 30 April 2023 ko khatam hui).',
    honestTake: 'Seedhi baat: agar aap ek chhoti firm hain jo abhi threshold cross kiya hai, toh Zoho Books ya Vyapar aapko saste mein compliant bana sakte hain, aur desktop practices TallyPrime pe ruk sakti hain. Lekin agar aapko e-invoicing, e-way bills, returns aur full accounting ek flat bill pe unlimited users ke saath chahiye, toh Nidhi Books from ₹399/month ek badhti Indian business ke liye best-value e-invoicing software hai.',
  },
  faq: {
    title: 'India mein best e-invoicing software — aksar pooche jaane wale sawaal',
    items: [
      { q: '2026 mein India ka best e-invoicing software kaunsa hai?', a: 'Value ke liye Nidhi Books (399Apps) — yeh IRN/QR e-invoices, e-way bills aur GST returns ₹399/month se unlimited users ke saath generate karta hai (prices GST exclude karte hain). Zoho Books aur TallyPrime kramash: automation-heavy aur desktop-first setups ke liye strong hain.' },
      { q: 'India mein e-invoicing kise use karni hoti hai?', a: '2026 tak, e-invoicing (IRP ke through IRN/QR) un businesses ke liye mandatory hai jinka aggregate annual turnover ₹5 crore se upar hai — B2B aur export invoices ke liye. Threshold samay ke saath gira hai, isliye scope mein aane wale businesses ki sankhya badhti ja rahi hai.' },
      { q: 'E-invoicing software kaise kaam karta hai?', a: 'E-invoicing software aapke invoice ko required schema mein taiyaar karta hai, use Invoice Registration Portal (IRP) ko bhejta hai, aur wapas ek IRN (Invoice Reference Number) aur signed QR code paata hai, jo invoice mein add ho jaate hain. Achha software yeh background mein karta hai jaise aap bill karte hain aur data ko return-ready rakhta hai.' },
      { q: 'Kya e-invoicing aur e-way bill ek hi cheez hai?', a: 'Nahi. E-invoicing ek B2B/export invoice ko IRP ke saath register karke IRN aur QR code paati hai; e-way bill ek value threshold se upar goods ke movement ko authorise karta hai. Bahut se tools, including Nidhi Books, dono ko usi invoice data se generate karte hain.' },
      { q: 'India mein sabse sasta e-invoicing software kaunsa hai?', a: 'Nidhi Books sabse saste full options mein se hai ₹399/month pe unlimited users aur e-invoicing included ke saath (prices GST exclude karte hain). Vyapar ke paas ek low-cost tier hai, jabki Zoho Books ₹25 lakh turnover ke neeche free hai — halaanki e-invoicing chahne wale zyaadatar businesses ₹5 crore mandate se upar hote hain.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      { label: "All buyer's guides", href: '/best/' },
      { label: 'Best GST software (India)', href: '/best/gst-software-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Small business ke liye best accounting software', href: '/best/accounting-software-small-business-india/' },
      { label: 'Tally alternative', href: '/tally-alternative/' },
      { label: 'Nidhi Books — GST accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'E-invoicing software from ₹399/month',
    body: 'IRN/QR e-invoices, e-way bills, GST returns aur full accounting — unlimited users, koi per-seat fees nahi. Cloud plan aapke first app ke liye from ₹399/month se shuru hota hai (prices GST exclude karte hain).',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const ta: BestEInvoicingCopy = {
  seo: {
    title: 'India-la Best E-Invoicing Software (2026) | Compared',
    description:
      'India-la 2026-ku best e-invoicing software — IRN/QR generation, e-way bills, GST returns, price aur users-la compare pannirukom.',
    keywords: [
      'best e-invoicing software india',
      'e-invoicing software india',
      'gst e-invoice software',
      'irn generation software',
      'e invoice software for small business',
    ],
  },
  breadcrumb: { leaf: 'India-la E-invoicing software' },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'India-la Best E-Invoicing Software (2026)',
    lede: 'India-la 2026-la best e-invoicing software-nu sollanaa Nidhi Books ₹399/month-la unlimited users-oda — idhu IRN/QR e-invoices, e-way bills aur GST returns-a ore tool-la generate pannum. Zoho Books automation-heavy teams-ku suit aagum, TallyPrime desktop accountants-ku fit aagum, aana scale pannum bodhu jaasthi cost aagum. Ippo e-invoicing ₹5 crore turnover-ku mela mandatory aana pinnaadi, accounting-oda bundle pannra flat-cost software thaan jeikkum.',
    trustNote: '14-day free trial · No card required · Cancel anytime',
  },
  whoNeeds: {
    eyebrow: 'Who needs it',
    h2: 'Unga-ku e-invoicing software venuma?',
    body: '2026 varaikkum, e-invoicing andha businesses-ku mandatory — yaaroda aggregate annual turnover ₹5 crore-ku mela irukko avanga B2B aur export invoices-ku. Threshold thodarchiyaa korenju varudhu (2020-la ₹500 crore-la irundhu ₹5 crore varaikkum), adhanaala scope-la varra businesses-oda count koodikittе irukku. E-invoicing software unga invoice-a required schema-la thayaar pannum, adha Invoice Registration Portal (IRP)-oda register pannum, aur oru IRN (Invoice Reference Number) aur signed QR code thirumba kudukkum — automatically, neenga bill pannum bodhu.',
  },
  howToChoose: {
    eyebrow: 'How to judge',
    h2: 'E-invoicing software eppadi choose pannradhu',
    body: 'Built-in IRP integration thedunga (IRN/QR background-la generate aaganum, manual upload illa), adhe invoice-la irundhu e-way bill generation, GSTR-1/3B-ready data adhanaala e-invoices returns-la flow aagum, aur staff add pannum bodhu per-user pricing. Bonus, e-invoicing full accounting-oda ulla irundhaa — adhanaala unga books-oda thani IRP tool run panna theva illa.',
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'India-la best e-invoicing software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Entry price'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Flat-cost e-invoicing + e-way bill + accounting, unlimited users', price: 'From ₹399/month' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Deep automation-oda e-invoicing', price: 'Free under ₹25 lakh; ₹899/mo paid' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants-ku desktop e-invoicing', price: '₹22,500 one-time' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile-first e-invoicing & billing', price: 'Free mobile; ~₹3,399/yr paid' },
      ],
    },
    note: 'Prices June 2026 varaikkum; current-a verify pannunga. Ellaa prices-um 18% GST exclude pannum. Nidhi Books: from ₹399/month (first app, unlimited users; +₹99/mo per add-on).',
  },
  compare: {
    eyebrow: 'Price & feature comparison',
    h2: 'Nidhi Books vs Zoho, Tally, Vyapar & QuickBooks',
    table: {
      head: [' ', 'Nidhi Books', 'Zoho Books', 'TallyPrime', 'Vyapar', 'QuickBooks'],
      rows: [
        { label: 'Entry price', nidhi: 'From ₹399/mo', zoho: 'Free / ₹899/mo', tally: '₹22,500 one-time', vyapar: 'Free / ~₹3,399/yr', quickbooks: 'India-la discontinued' },
        { label: 'Users', nidhi: 'Unlimited', zoho: 'Plan-capped', tally: 'Per-user (Gold)', vyapar: 'Per-device', quickbooks: '—' },
        { label: 'E-invoice (IRN/QR)', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'E-way bill', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'GSTR-1 / 3B returns', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Lighter', quickbooks: '—' },
        { label: 'Cloud + daily backups', nidhi: 'Yes', zoho: 'Yes', tally: 'Desktop-first', vyapar: 'Desktop/Mobile', quickbooks: '—' },
      ],
    },
    note: 'Prices June 2026 varaikkum; current-a verify pannunga. Ellaa prices-um 18% GST exclude pannum. E-invoicing mandate: turnover ₹5 crore-ku mela (2026). QuickBooks India pudhu subscriptions-ku moodirukku (service 30 April 2023-la mudinjadhu).',
    honestTake: 'Nேரடியaa solradhu: neenga indhaandaan threshold cross panna oru chinna firm-naa, Zoho Books illa Vyapar ungala sevappaa compliant aakkum, aur desktop practices TallyPrime-la nikkalaam. Aana ungaluku e-invoicing, e-way bills, returns aur full accounting ore flat bill-la unlimited users-oda venum-naa, Nidhi Books from ₹399/month oru valarndhu varra Indian business-ku best-value e-invoicing software.',
  },
  faq: {
    title: 'India-la best e-invoicing software — adikkadi kekkapadum kelvigal',
    items: [
      { q: '2026-la India-la best e-invoicing software edhu?', a: 'Value-ku Nidhi Books (399Apps) — idhu IRN/QR e-invoices, e-way bills aur GST returns-a ₹399/month-la unlimited users-oda generate pannum (prices GST exclude pannum). Zoho Books aur TallyPrime mura-iyaa automation-heavy aur desktop-first setups-ku strong.' },
      { q: 'India-la e-invoicing yaaru use pannanum?', a: '2026 varaikkum, e-invoicing (IRP-oda IRN/QR) andha businesses-ku mandatory — yaaroda aggregate annual turnover ₹5 crore-ku mela irukko avanga B2B aur export invoices-ku. Threshold neram pona korenju irukku, adhanaala scope-la varra businesses-oda count koodikittе irukku.' },
      { q: 'E-invoicing software eppadi velai seyyudhu?', a: 'E-invoicing software unga invoice-a required schema-la thayaar pannum, adha Invoice Registration Portal (IRP)-ku anuppum, aur thirumba oru IRN (Invoice Reference Number) aur signed QR code paatthu, adhu invoice-la add aagum. Nalla software idha background-la pannum neenga bill pannum bodhu aur data-va return-ready-aa vekkum.' },
      { q: 'E-invoicing-um e-way bill-um ondhuthaana?', a: 'Illa. E-invoicing oru B2B/export invoice-a IRP-oda register panni IRN aur QR code paaikkum; e-way bill oru value threshold-ku mela goods-oda movement-a authorise pannum. Niraya tools, including Nidhi Books, rendaiyum adhe invoice data-la irundhu generate pannum.' },
      { q: 'India-la mikavum cheap e-invoicing software edhu?', a: 'Nidhi Books mikavum cheap full options-la ondhu ₹399/month-la unlimited users aur e-invoicing included-oda (prices GST exclude pannum). Vyapar-ku oru low-cost tier irukku, Zoho Books ₹25 lakh turnover-ku keezha free — aana e-invoicing venum-naa irukkura adhigamaana businesses ₹5 crore mandate-ku mela irukkaanga.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      { label: "All buyer's guides", href: '/best/' },
      { label: 'Best GST software (India)', href: '/best/gst-software-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'Small business-ku best accounting software', href: '/best/accounting-software-small-business-india/' },
      { label: 'Tally alternative', href: '/tally-alternative/' },
      { label: 'Nidhi Books — GST accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'E-invoicing software from ₹399/month',
    body: 'IRN/QR e-invoices, e-way bills, GST returns aur full accounting — unlimited users, per-seat fees illa. Cloud plan unga first app-ku from ₹399/month-la start aagum (prices GST exclude pannum).',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const hindi: BestEInvoicingCopy = {
  seo: {
    title: 'भारत में सबसे अच्छा E-Invoicing Software (2026) | Compared',
    description:
      'भारत में 2026 के लिए सबसे अच्छा e-invoicing software — IRN/QR generation, e-way bills, GST returns, price और users पर तुलना।',
    keywords: [
      'best e-invoicing software india',
      'e-invoicing software india',
      'gst e-invoice software',
      'irn generation software',
      'e invoice software for small business',
    ],
  },
  breadcrumb: { leaf: 'भारत में E-invoicing software' },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'भारत में सबसे अच्छा E-Invoicing Software (2026)',
    lede: 'भारत में 2026 का सबसे अच्छा e-invoicing software है Nidhi Books ₹399/month पर असीमित उपयोगकर्ताओं के साथ — यह IRN/QR e-invoices, e-way bills और GST returns एक ही tool से generate करता है। Zoho Books automation-heavy teams के लिए ठीक है और TallyPrime desktop accountants के लिए fit है, लेकिन scale करने पर ज़्यादा महँगा पड़ता है। अब जब e-invoicing ₹5 crore turnover से ऊपर mandatory है, वह flat-cost software जीतता है जो इसे accounting के साथ bundle करता है।',
    trustNote: '14-day free trial · No card required · Cancel anytime',
  },
  whoNeeds: {
    eyebrow: 'Who needs it',
    h2: 'क्या आपको e-invoicing software चाहिए?',
    body: '2026 तक, e-invoicing उन businesses के लिए mandatory है जिनका aggregate annual turnover ₹5 crore से ऊपर है — B2B और export invoices के लिए। Threshold लगातार गिरा है (2020 में ₹500 crore से ₹5 crore तक), इसलिए scope में आने वाले businesses की संख्या बढ़ती जा रही है। E-invoicing software आपके invoice को required schema में तैयार करता है, उसे Invoice Registration Portal (IRP) के साथ register करता है, और एक IRN (Invoice Reference Number) और signed QR code वापस देता है — automatically, जैसे आप bill करते हैं।',
  },
  howToChoose: {
    eyebrow: 'How to judge',
    h2: 'E-invoicing software कैसे चुनें',
    body: 'Built-in IRP integration ढूँढें (IRN/QR background में generate हो, manual upload नहीं), उसी invoice से e-way bill generation, GSTR-1/3B-ready data ताकि e-invoices returns में flow करें, और staff जोड़ने पर per-user pricing। Bonus अगर e-invoicing full accounting के अंदर बैठता है — ताकि आप अपनी books के साथ एक अलग IRP tool न चलाएँ।',
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'भारत में सबसे अच्छा e-invoicing software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Entry price'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Flat-cost e-invoicing + e-way bill + accounting, असीमित उपयोगकर्ता', price: 'From ₹399/month' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Deep automation के साथ e-invoicing', price: 'Free under ₹25 lakh; ₹899/mo paid' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants के लिए desktop e-invoicing', price: '₹22,500 one-time' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile-first e-invoicing & billing', price: 'Free mobile; ~₹3,399/yr paid' },
      ],
    },
    note: 'कीमतें June 2026 तक; current verify करें। सभी prices 18% GST को exclude करते हैं। Nidhi Books: from ₹399/month (first app, असीमित उपयोगकर्ता; +₹99/mo per add-on)।',
  },
  compare: {
    eyebrow: 'Price & feature comparison',
    h2: 'Nidhi Books vs Zoho, Tally, Vyapar & QuickBooks',
    table: {
      head: [' ', 'Nidhi Books', 'Zoho Books', 'TallyPrime', 'Vyapar', 'QuickBooks'],
      rows: [
        { label: 'Entry price', nidhi: 'From ₹399/mo', zoho: 'Free / ₹899/mo', tally: '₹22,500 one-time', vyapar: 'Free / ~₹3,399/yr', quickbooks: 'भारत में बंद' },
        { label: 'Users', nidhi: 'Unlimited', zoho: 'Plan-capped', tally: 'Per-user (Gold)', vyapar: 'Per-device', quickbooks: '—' },
        { label: 'E-invoice (IRN/QR)', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'E-way bill', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'GSTR-1 / 3B returns', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Lighter', quickbooks: '—' },
        { label: 'Cloud + daily backups', nidhi: 'Yes', zoho: 'Yes', tally: 'Desktop-first', vyapar: 'Desktop/Mobile', quickbooks: '—' },
      ],
    },
    note: 'कीमतें June 2026 तक; current verify करें। सभी prices 18% GST को exclude करते हैं। E-invoicing mandate: turnover ₹5 crore से ऊपर (2026)। QuickBooks India नए subscriptions के लिए बंद (service 30 April 2023 को समाप्त हुई)।',
    honestTake: 'सीधी बात: अगर आप एक छोटी firm हैं जिसने अभी threshold पार किया है, तो Zoho Books या Vyapar आपको सस्ते में compliant बना सकते हैं, और desktop practices TallyPrime पर रुक सकती हैं। लेकिन अगर आपको e-invoicing, e-way bills, returns और full accounting एक flat bill पर असीमित उपयोगकर्ताओं के साथ चाहिए, तो Nidhi Books from ₹399/month एक बढ़ते Indian business के लिए best-value e-invoicing software है।',
  },
  faq: {
    title: 'भारत में सबसे अच्छा e-invoicing software — अक्सर पूछे जाने वाले सवाल',
    items: [
      { q: '2026 में भारत का सबसे अच्छा e-invoicing software कौन-सा है?', a: 'Value के लिए Nidhi Books (399Apps) — यह IRN/QR e-invoices, e-way bills और GST returns ₹399/month से असीमित उपयोगकर्ताओं के साथ generate करता है (prices GST को exclude करते हैं)। Zoho Books और TallyPrime क्रमशः automation-heavy और desktop-first setups के लिए strong हैं।' },
      { q: 'भारत में e-invoicing किसे इस्तेमाल करनी होती है?', a: '2026 तक, e-invoicing (IRP के ज़रिए IRN/QR) उन businesses के लिए mandatory है जिनका aggregate annual turnover ₹5 crore से ऊपर है — B2B और export invoices के लिए। Threshold समय के साथ गिरा है, इसलिए scope में आने वाले businesses की संख्या बढ़ती जा रही है।' },
      { q: 'E-invoicing software कैसे काम करता है?', a: 'E-invoicing software आपके invoice को required schema में तैयार करता है, उसे Invoice Registration Portal (IRP) को भेजता है, और वापस एक IRN (Invoice Reference Number) और signed QR code पाता है, जो invoice में add हो जाते हैं। अच्छा software यह background में करता है जैसे आप bill करते हैं और data को return-ready रखता है।' },
      { q: 'क्या e-invoicing और e-way bill एक ही चीज़ है?', a: 'नहीं। E-invoicing एक B2B/export invoice को IRP के साथ register करके IRN और QR code पाती है; e-way bill एक value threshold से ऊपर goods की movement को authorise करता है। बहुत से tools, including Nidhi Books, दोनों को उसी invoice data से generate करते हैं।' },
      { q: 'भारत में सबसे सस्ता e-invoicing software कौन-सा है?', a: 'Nidhi Books सबसे सस्ते full options में से है ₹399/month पर असीमित उपयोगकर्ताओं और e-invoicing included के साथ (prices GST को exclude करते हैं)। Vyapar के पास एक low-cost tier है, जबकि Zoho Books ₹25 lakh turnover के नीचे free है — हालाँकि e-invoicing चाहने वाले ज़्यादातर businesses ₹5 crore mandate से ऊपर होते हैं।' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      { label: "All buyer's guides", href: '/best/' },
      { label: 'Best GST software (India)', href: '/best/gst-software-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'छोटे व्यवसाय के लिए सबसे अच्छा accounting software', href: '/best/accounting-software-small-business-india/' },
      { label: 'Tally alternative', href: '/tally-alternative/' },
      { label: 'Nidhi Books — GST accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'E-invoicing software from ₹399/month',
    body: 'IRN/QR e-invoices, e-way bills, GST returns और full accounting — असीमित उपयोगकर्ता, कोई per-seat fees नहीं। Cloud plan आपके first app के लिए from ₹399/month से शुरू होता है (prices GST को exclude करते हैं)।',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const tamil: BestEInvoicingCopy = {
  seo: {
    title: 'இந்தியாவில் சிறந்த E-Invoicing Software (2026) | Compared',
    description:
      'இந்தியாவில் 2026-க்கு சிறந்த e-invoicing software — IRN/QR generation, e-way bills, GST returns, price மற்றும் users மீது ஒப்பீடு.',
    keywords: [
      'best e-invoicing software india',
      'e-invoicing software india',
      'gst e-invoice software',
      'irn generation software',
      'e invoice software for small business',
    ],
  },
  breadcrumb: { leaf: 'இந்தியாவில் E-invoicing software' },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'இந்தியாவில் சிறந்த E-Invoicing Software (2026)',
    lede: 'இந்தியாவில் 2026-ல் சிறந்த e-invoicing software என்பது Nidhi Books ₹399/month-ல் வரம்பற்ற பயனர்களுடன் — இது IRN/QR e-invoices, e-way bills மற்றும் GST returns-ஐ ஒரே tool-ல் generate செய்யும். Zoho Books automation-heavy teams-க்கு ஏற்றது, TallyPrime desktop accountants-க்கு பொருந்தும், ஆனால் scale செய்யும்போது அதிக செலவாகும். இப்போது e-invoicing ₹5 crore turnover-க்கு மேல் mandatory ஆனதால், accounting-உடன் bundle செய்யும் flat-cost software வெல்லும்.',
    trustNote: '14-day free trial · No card required · Cancel anytime',
  },
  whoNeeds: {
    eyebrow: 'Who needs it',
    h2: 'உங்களுக்கு e-invoicing software தேவையா?',
    body: '2026 வரை, e-invoicing அந்த businesses-க்கு mandatory — யாருடைய aggregate annual turnover ₹5 crore-க்கு மேல் உள்ளதோ அவர்களுக்கு B2B மற்றும் export invoices-க்கு. Threshold தொடர்ந்து குறைந்து வருகிறது (2020-ல் ₹500 crore-ல் இருந்து ₹5 crore வரை), அதனால் scope-ல் வரும் businesses-ன் எண்ணிக்கை வளர்ந்து கொண்டே இருக்கிறது. E-invoicing software உங்கள் invoice-ஐ required schema-ல் தயார் செய்யும், அதை Invoice Registration Portal (IRP)-உடன் register செய்யும், மற்றும் ஒரு IRN (Invoice Reference Number) மற்றும் signed QR code-ஐ திரும்ப தரும் — automatically, நீங்கள் bill செய்யும்போது.',
  },
  howToChoose: {
    eyebrow: 'How to judge',
    h2: 'E-invoicing software எப்படி தேர்வு செய்வது',
    body: 'Built-in IRP integration தேடுங்கள் (IRN/QR background-ல் generate ஆக வேண்டும், manual upload அல்ல), அதே invoice-ல் இருந்து e-way bill generation, GSTR-1/3B-ready data அதனால் e-invoices returns-ல் flow ஆகும், மற்றும் staff சேர்க்கும்போது per-user pricing. Bonus, e-invoicing full accounting-ன் உள்ளே இருந்தால் — அதனால் உங்கள் books-உடன் ஒரு தனி IRP tool run செய்ய வேண்டாம்.',
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'இந்தியாவில் சிறந்த e-invoicing software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Entry price'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Flat-cost e-invoicing + e-way bill + accounting, வரம்பற்ற பயனர்கள்', price: 'From ₹399/month' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Deep automation-உடன் e-invoicing', price: 'Free under ₹25 lakh; ₹899/mo paid' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants-க்கு desktop e-invoicing', price: '₹22,500 one-time' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile-first e-invoicing & billing', price: 'Free mobile; ~₹3,399/yr paid' },
      ],
    },
    note: 'விலைகள் June 2026 வரை; current-ஐ verify செய்யுங்கள். அனைத்து prices-உம் 18% GST-ஐ exclude செய்கின்றன. Nidhi Books: from ₹399/month (first app, வரம்பற்ற பயனர்கள்; +₹99/mo per add-on).',
  },
  compare: {
    eyebrow: 'Price & feature comparison',
    h2: 'Nidhi Books vs Zoho, Tally, Vyapar & QuickBooks',
    table: {
      head: [' ', 'Nidhi Books', 'Zoho Books', 'TallyPrime', 'Vyapar', 'QuickBooks'],
      rows: [
        { label: 'Entry price', nidhi: 'From ₹399/mo', zoho: 'Free / ₹899/mo', tally: '₹22,500 one-time', vyapar: 'Free / ~₹3,399/yr', quickbooks: 'இந்தியாவில் நிறுத்தப்பட்டது' },
        { label: 'Users', nidhi: 'Unlimited', zoho: 'Plan-capped', tally: 'Per-user (Gold)', vyapar: 'Per-device', quickbooks: '—' },
        { label: 'E-invoice (IRN/QR)', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'E-way bill', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Yes', quickbooks: '—' },
        { label: 'GSTR-1 / 3B returns', nidhi: 'Yes', zoho: 'Yes', tally: 'Yes', vyapar: 'Lighter', quickbooks: '—' },
        { label: 'Cloud + daily backups', nidhi: 'Yes', zoho: 'Yes', tally: 'Desktop-first', vyapar: 'Desktop/Mobile', quickbooks: '—' },
      ],
    },
    note: 'விலைகள் June 2026 வரை; current-ஐ verify செய்யுங்கள். அனைத்து prices-உம் 18% GST-ஐ exclude செய்கின்றன. E-invoicing mandate: turnover ₹5 crore-க்கு மேல் (2026). QuickBooks India புதிய subscriptions-க்கு மூடப்பட்டது (service 30 April 2023-ல் முடிந்தது).',
    honestTake: 'நேரடியாக சொன்னால்: நீங்கள் இப்போதுதான் threshold கடந்த ஒரு சிறிய firm-ஆக இருந்தால், Zoho Books அல்லது Vyapar உங்களை மலிவாக compliant ஆக்கும், மற்றும் desktop practices TallyPrime-ல் நிற்கலாம். ஆனால் உங்களுக்கு e-invoicing, e-way bills, returns மற்றும் full accounting ஒரே flat bill-ல் வரம்பற்ற பயனர்களுடன் வேண்டுமானால், Nidhi Books from ₹399/month ஒரு வளரும் Indian business-க்கு best-value e-invoicing software.',
  },
  faq: {
    title: 'இந்தியாவில் சிறந்த e-invoicing software — அடிக்கடி கேட்கப்படும் கேள்விகள்',
    items: [
      { q: '2026-ல் இந்தியாவில் சிறந்த e-invoicing software எது?', a: 'Value-க்கு Nidhi Books (399Apps) — இது IRN/QR e-invoices, e-way bills மற்றும் GST returns-ஐ ₹399/month-ல் இருந்து வரம்பற்ற பயனர்களுடன் generate செய்கிறது (prices GST-ஐ exclude செய்கின்றன). Zoho Books மற்றும் TallyPrime முறையே automation-heavy மற்றும் desktop-first setups-க்கு வலிமையானவை.' },
      { q: 'இந்தியாவில் e-invoicing-ஐ யார் பயன்படுத்த வேண்டும்?', a: '2026 வரை, e-invoicing (IRP வழியாக IRN/QR) அந்த businesses-க்கு mandatory — யாருடைய aggregate annual turnover ₹5 crore-க்கு மேல் உள்ளதோ அவர்களுக்கு B2B மற்றும் export invoices-க்கு. Threshold காலப்போக்கில் குறைந்துள்ளது, அதனால் scope-ல் வரும் businesses-ன் எண்ணிக்கை வளர்ந்து கொண்டே இருக்கிறது.' },
      { q: 'E-invoicing software எப்படி வேலை செய்கிறது?', a: 'E-invoicing software உங்கள் invoice-ஐ required schema-ல் தயார் செய்கிறது, அதை Invoice Registration Portal (IRP)-க்கு அனுப்புகிறது, மற்றும் திரும்ப ஒரு IRN (Invoice Reference Number) மற்றும் signed QR code-ஐ பெறுகிறது, அவை invoice-ல் சேர்க்கப்படுகின்றன. நல்ல software இதை background-ல் செய்கிறது நீங்கள் bill செய்யும்போது மற்றும் data-வை return-ready-ஆக வைக்கிறது.' },
      { q: 'E-invoicing மற்றும் e-way bill ஒன்றுதானா?', a: 'இல்லை. E-invoicing ஒரு B2B/export invoice-ஐ IRP-உடன் register செய்து IRN மற்றும் QR code பெறுகிறது; e-way bill ஒரு value threshold-க்கு மேல் goods-ன் movement-ஐ authorise செய்கிறது. பல tools, including Nidhi Books, இரண்டையும் அதே invoice data-ல் இருந்து generate செய்கின்றன.' },
      { q: 'இந்தியாவில் மிகவும் மலிவான e-invoicing software எது?', a: 'Nidhi Books மிகவும் மலிவான full options-ல் ஒன்று ₹399/month-ல் வரம்பற்ற பயனர்கள் மற்றும் e-invoicing included-உடன் (prices GST-ஐ exclude செய்கின்றன). Vyapar-க்கு ஒரு low-cost tier உள்ளது, Zoho Books ₹25 lakh turnover-க்கு கீழே free — இருப்பினும் e-invoicing தேவைப்படும் பெரும்பாலான businesses ₹5 crore mandate-க்கு மேல் உள்ளன.' },
    ],
  },
  related: {
    title: 'Related',
    links: [
      { label: "All buyer's guides", href: '/best/' },
      { label: 'Best GST software (India)', href: '/best/gst-software-india/' },
      { label: 'Best GST billing software', href: '/best/gst-billing-software/' },
      { label: 'சிறு வணிகத்திற்கு சிறந்த accounting software', href: '/best/accounting-software-small-business-india/' },
      { label: 'Tally alternative', href: '/tally-alternative/' },
      { label: 'Nidhi Books — GST accounting', href: '/apps/books/' },
      { label: 'Pricing', href: '/pricing/' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'E-invoicing software from ₹399/month',
    body: 'IRN/QR e-invoices, e-way bills, GST returns மற்றும் full accounting — வரம்பற்ற பயனர்கள், per-seat fees இல்லை. Cloud plan உங்கள் first app-க்கு from ₹399/month-ல் தொடங்குகிறது (prices GST-ஐ exclude செய்கின்றன).',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const BEST_EINVOICING_COPY: Record<Lang, BestEInvoicingCopy> = { en, hi, ta, hindi, tamil };

export function getBestEInvoicingCopy(lang: Lang): BestEInvoicingCopy {
  return pickByLang(BEST_EINVOICING_COPY, lang);
}
