// Multilingual config for 399apps.
// en = English (canonical), hi = Hinglish (Romanised Hindi + English),
// ta = Tanglish (Romanised Tamil + English).
// Brand names, product names and technical terms (GST, cloud, Docker…)
// stay in English on purpose — that's how the audience actually speaks.

export type Lang = 'en' | 'hi' | 'ta';

export const DEFAULT_LANG: Lang = 'en';

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'Hinglish', short: 'HI' },
  { code: 'ta', label: 'Tanglish', short: 'TA' },
];

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'hi' || value === 'ta';
}

// Build a path for a given language by swapping the leading /hi or /ta prefix.
// localizedPath('/', 'hi') -> '/hi'   localizedPath('/hi', 'en') -> '/'
export function localizedPath(path: string, lang: Lang): string {
  const stripped = path.replace(/^\/(hi|ta)(?=\/|$)/, '') || '/';
  if (lang === DEFAULT_LANG) return stripped;
  return stripped === '/' ? `/${lang}` : `/${lang}${stripped}`;
}

const en = {
  header: {
    nav: {
      apps: 'Apps',
      pricing: 'Pricing',
      selfHosting: 'Self-Hosting',
      whiteLabel: 'White Label',
      contact: 'Contact',
    },
    talkToSales: 'Talk to sales',
    getDemo: 'Get a demo',
    languageLabel: 'Language',
  },
  seo: {
    title: '399apps — Affordable Business SaaS. Cloud or Self-Hosted.',
    description:
      'A clean app store of affordable business software — accounting, inventory, matrimonials, job portal. ₹399/month for your first app on the cloud, ₹99/month for each additional app or add-on, unlimited users — or self-host on your own server. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 first app · ₹99 each add-on',
    titleLead: 'An app store of',
    titleHighlight: 'honest business software.',
    lede: 'Run your accounting, stock, matrimony or job-board on a tight, well-built SaaS — on our cloud, or fully self-hosted on your own server.',
    ctaBrowse: 'Browse apps',
    ctaDemo: 'Get a free demo',
    badges: ['14-day cloud trial', 'Self-host on your server', 'White-label ready', 'GST-friendly'],
  },
  stats: [
    { value: '5', label: 'Products shipping' },
    { value: '₹399', valueSuffix: '/mo', label: 'First app · then ₹99 each' },
    { value: 'Unlimited', label: 'Users + exports, every plan' },
    { value: '100%', label: 'Data ownership on self-host' },
  ],
  apps: {
    eyebrow: 'The 399apps catalogue',
    title: 'Pick an app. Plug it in. Go.',
    lede: 'Each product is small enough to grok in a day and serious enough to run a business on.',
  },
  modes: {
    eyebrow: 'Two ways to run it',
    title: 'Cloud convenience, or your-server control.',
    lede: 'Every app on 399apps ships in both shapes. Start on the cloud and move later, or self-host from day one — same product, same support.',
    selfHostCta: 'Self-host details',
    compareCta: 'Compare modes',
    cloud: {
      title: 'Cloud',
      body: 'Zero-ops. Multi-tenant. Daily backups, region-pinned, monitored 24×7. Fastest path to live.',
      features: ['Live in minutes', 'Auto-updates', 'India data region default'],
    },
    selfHost: {
      title: 'Self-host',
      body: 'Same product, your server. Full data ownership, your domain, your backups, your compliance posture.',
      features: ['Custom-quoted licence', 'Docker / bare metal', 'Optional managed support'],
    },
  },
  why: {
    eyebrow: 'Why 399apps',
    title: 'Built like an engineer would build it.',
    lede: 'No salesy bloat. No ten-tab dashboards. Just the workflows your business actually uses, made fast.',
    cards: [
      { icon: 'sparkle', t: 'Small surface, real depth', b: 'Each app is small enough to grok in a day, deep enough to run a business on.' },
      { icon: 'rupee', t: '₹399 first app, ₹99 after', b: 'Your first app is ₹399/month; every extra app or add-on is ₹99 — for your whole team, unlimited users, never per seat.' },
      { icon: 'shield', t: 'Your data is yours', b: 'Encrypted on cloud. Fully self-hostable. Exportable any time, in standard formats.' },
      { icon: 'cloud', t: 'Cloud-native infra', b: 'Hosted on Cloudflare + AWS, region-pinned to India by default. 99.9% target.' },
      { icon: 'server', t: 'Self-host without pain', b: 'Single-binary or Docker deploys. Backups, upgrades and migrations are first-class.' },
      { icon: 'globe', t: 'White-label ready', b: 'Run any product under your own brand — domain, logo, colours, copy, the whole thing.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    description: 'Quick answers about pricing, hosting, white-label and how 399apps works in practice.',
    items: [
      { q: 'What is 399apps?', a: '399apps is a small, opinionated app store of business SaaS — Nidhi Books (accounting), Nidhi Inventory (stock), a Books + Inventory bundle, Nidhi Matrimonials and Nidhi Job Portal. Every product is available on our cloud or fully self-hostable on your server.' },
      { q: 'How much does 399apps cost?', a: 'Your first app is ₹399/month on the 399apps cloud. Every additional app or add-on is ₹99/month. So Books alone is ₹399, Books + Inventory is ₹498, and so on — always with unlimited users and unlimited exports, no per-seat charges. Self-hosted and enterprise deployments are custom-quoted — just talk to us.' },
      { q: 'Cloud or self-hosted — which should I pick?', a: 'Pick cloud if you want zero-ops, daily backups and the fastest path to live. Pick self-host if you have a compliance, data-locality or cost-per-scale reason to keep things in-house — we ship the same product as a single-server licence.' },
      { q: 'Do you offer white-label?', a: 'Yes. Every product can be rebranded under your domain, logo and colours. Talk to us about white-label deployments for community matrimonials, niche job boards or industry-specific Books / Inventory roll-outs.' },
      { q: 'Is there a free trial?', a: 'Yes. Every cloud product has a 14-day trial — no card required. Self-hosted plans come with a 7-day evaluation licence.' },
      { q: 'Who builds and maintains 399apps?', a: '399apps is built, deployed and maintained by shabuilds (shabuilds.tech) — a small, focused product studio that ships software like real engineers, not like a typical agency.' },
      { q: 'Where is the data hosted?', a: 'Cloud data is hosted on Cloudflare and AWS infrastructure with India-region defaults. On self-host, your data never leaves your server.' },
    ],
  },
  finalCta: {
    eyebrow: 'Talk to a human',
    title: 'Not sure which app fits? Let us scope it with you.',
    body: 'A 20-minute call. We will understand your business, recommend the right product (or tell you we are not a fit), and quote honestly.',
    primaryLabel: 'Get a demo',
    secondaryLabel: 'See pricing',
  },
};

export type Copy = typeof en;

const hi: Copy = {
  header: {
    nav: {
      apps: 'Apps',
      pricing: 'Pricing',
      selfHosting: 'Self-Hosting',
      whiteLabel: 'White Label',
      contact: 'Contact',
    },
    talkToSales: 'Sales se baat karein',
    getDemo: 'Demo lein',
    languageLabel: 'Bhasha',
  },
  seo: {
    title: '399apps — Affordable Business Software. Cloud ya Self-Hosted.',
    description:
      'Affordable business software ka ek saaf app store — accounting, inventory, matrimony, job portal. Pehla app cloud pe ₹399/month, har additional app ya add-on ₹99/month, unlimited users — ya apne server pe self-host karein. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 pehla app · ₹99 har add-on',
    titleLead: 'Imaandaar business software ka',
    titleHighlight: 'ek app store.',
    lede: 'Apna accounting, stock, matrimony ya job-board ek solid, achhe banaye SaaS pe chalayein — hamare cloud pe, ya apne server pe poori tarah self-hosted.',
    ctaBrowse: 'Apps dekhein',
    ctaDemo: 'Free demo lein',
    badges: ['14-din ka cloud trial', 'Apne server pe self-host', 'White-label ready', 'GST-friendly'],
  },
  stats: [
    { value: '5', label: 'Apps live' },
    { value: '₹399', valueSuffix: '/mo', label: 'Pehla app · phir ₹99 each' },
    { value: 'Unlimited', label: 'Users + exports, har plan' },
    { value: '100%', label: 'Self-host pe data ownership' },
  ],
  apps: {
    eyebrow: '399apps ka catalogue',
    title: 'App chuno. Plug karo. Chalu.',
    lede: 'Har product itna simple ki ek din mein samajh aa jaye, aur itna serious ki business chala sakein.',
  },
  modes: {
    eyebrow: 'Do tarike',
    title: 'Cloud ki aasaani, ya apne server ka control.',
    lede: '399apps ka har app dono roop mein aata hai. Cloud pe shuru karein aur baad mein move karein, ya day one se self-host — same product, same support.',
    selfHostCta: 'Self-host details',
    compareCta: 'Compare karein',
    cloud: {
      title: 'Cloud',
      body: 'Zero-ops. Daily backups, India region, 24×7 monitored. Live jaane ka sabse fast tareeka.',
      features: ['Minutes mein live', 'Auto-updates', 'India data region default'],
    },
    selfHost: {
      title: 'Self-host',
      body: 'Same product, aapka server. Poora data ownership, aapka domain, aapke backups, aapki compliance.',
      features: ['Custom-quoted licence', 'Docker / bare metal', 'Optional managed support'],
    },
  },
  why: {
    eyebrow: '399apps kyun',
    title: 'Ek engineer ki tarah banaya gaya.',
    lede: 'Koi salesy bloat nahi. Koi das-tab dashboard nahi. Sirf wahi workflows jo aapka business sach mein use karta hai, fast banaye.',
    cards: [
      { icon: 'sparkle', t: 'Chhota surface, asli depth', b: 'Har app itna simple ki ek din mein samajh aaye, itna deep ki business chal jaye.' },
      { icon: 'rupee', t: '₹399 pehla app, ₹99 baaki', b: 'Pehla app ₹399/month; har extra app ya add-on ₹99 — poori team ke liye, unlimited users, kabhi per seat nahi.' },
      { icon: 'shield', t: 'Aapka data aapka hai', b: 'Cloud pe encrypted. Poori tarah self-hostable. Kabhi bhi standard format mein export karo.' },
      { icon: 'cloud', t: 'Cloud-native infra', b: 'Cloudflare + AWS pe hosted, default India region. 99.9% target.' },
      { icon: 'server', t: 'Self-host bina dard ke', b: 'Single-binary ya Docker deploys. Backups, upgrades aur migrations first-class hain.' },
      { icon: 'globe', t: 'White-label ready', b: 'Koi bhi product apne brand pe chalao — domain, logo, colours, copy, sab kuch.' },
    ],
  },
  faq: {
    title: 'Aksar pooche jaane waale sawaal',
    description: 'Pricing, hosting, white-label aur 399apps kaise kaam karta hai — iske quick jawaab.',
    items: [
      { q: '399apps kya hai?', a: '399apps business SaaS ka ek chhota, opinionated app store hai — Nidhi Books (accounting), Nidhi Inventory (stock), Books + Inventory bundle, Nidhi Matrimonials aur Nidhi Job Portal. Har product hamare cloud pe ya aapke server pe self-hostable hai.' },
      { q: '399apps ki cost kya hai?', a: 'Pehla app 399apps cloud pe ₹399/month. Har additional app ya add-on ₹99/month. Toh sirf Books ₹399, Books + Inventory ₹498, aise hi aage — hamesha unlimited users aur unlimited exports ke saath, koi per-seat charge nahi. Self-hosted aur enterprise deployments custom-quoted hain — bas humse baat karein.' },
      { q: 'Cloud ya self-hosted — kaunsa chunein?', a: 'Cloud chunein agar aapko zero-ops, daily backups aur sabse fast live jaana hai. Self-host chunein agar compliance, data-locality ya scale-cost ki wajah se cheezein in-house rakhni hain — hum same product single-server licence ke roop mein dete hain.' },
      { q: 'Kya white-label milta hai?', a: 'Haan. Har product aapke domain, logo aur colours pe rebrand ho sakta hai. Community matrimony, niche job board ya industry-specific Books / Inventory roll-out ke liye white-label deployment ki baat karein.' },
      { q: 'Kya free trial hai?', a: 'Haan. Har cloud product pe 14-din ka trial — koi card nahi chahiye. Self-hosted plans ke saath 7-din ka evaluation licence aata hai.' },
      { q: '399apps kaun banata aur maintain karta hai?', a: '399apps ko shabuilds (shabuilds.tech) banata, deploy aur maintain karta hai — ek chhota, focused product studio jo software ek asli engineer ki tarah ship karta hai, typical agency ki tarah nahi.' },
      { q: 'Data kahaan host hota hai?', a: 'Cloud data Cloudflare aur AWS pe host hota hai, default India-region. Self-host pe aapka data kabhi aapke server se bahar nahi jaata.' },
    ],
  },
  finalCta: {
    eyebrow: 'Insaan se baat karein',
    title: 'Pata nahi kaunsa app sahi hai? Aaiye saath mein scope karte hain.',
    body: '20-minute ki call. Hum aapka business samjhenge, sahi product recommend karenge (ya saaf bata denge ki fit nahi hain), aur honestly quote karenge.',
    primaryLabel: 'Demo lein',
    secondaryLabel: 'Pricing dekhein',
  },
};

const ta: Copy = {
  header: {
    nav: {
      apps: 'Apps',
      pricing: 'Pricing',
      selfHosting: 'Self-Hosting',
      whiteLabel: 'White Label',
      contact: 'Contact',
    },
    talkToSales: 'Sales kitta pesunga',
    getDemo: 'Demo paarunga',
    languageLabel: 'Mozhi',
  },
  seo: {
    title: '399apps — Affordable Business Software. Cloud illa Self-Hosted.',
    description:
      'Affordable business software-oda clean app store — accounting, inventory, matrimony, job portal. Mudhal app cloud-la ₹399/month, ovvoru additional app illa add-on ₹99/month, unlimited users — illa unga sontha server-la self-host pannunga. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 mudhal app · ₹99 ovvoru add-on',
    titleLead: 'Honest business software-oda',
    titleHighlight: 'oru app store.',
    lede: 'Unga accounting, stock, matrimony illa job-board-a oru solid, nalla build panna SaaS-la run pannunga — engaloda cloud-la, illa unga sontha server-la fully self-hosted-a.',
    ctaBrowse: 'Apps-a paarunga',
    ctaDemo: 'Free demo paarunga',
    badges: ['14-naal cloud trial', 'Unga server-la self-host', 'White-label ready', 'GST-friendly'],
  },
  stats: [
    { value: '5', label: 'Apps live' },
    { value: '₹399', valueSuffix: '/mo', label: 'Mudhal app · apram ₹99 each' },
    { value: 'Unlimited', label: 'Users + exports, ellaa plan-um' },
    { value: '100%', label: 'Self-host-la data ownership' },
  ],
  apps: {
    eyebrow: '399apps catalogue',
    title: 'App select pannunga. Plug pannunga. Po.',
    lede: 'Ovvoru product-um oru naal-la puriyura maadhiri simple, aana business nadatha podhuma serious.',
  },
  modes: {
    eyebrow: 'Rendu vazhi',
    title: 'Cloud convenience, illa unga server control.',
    lede: '399apps-oda ovvoru app-um rendu maadhiri varum. Cloud-la start panni apram move pannunga, illa day one-la irundhu self-host — same product, same support.',
    selfHostCta: 'Self-host details',
    compareCta: 'Compare pannunga',
    cloud: {
      title: 'Cloud',
      body: 'Zero-ops. Daily backups, India region, 24×7 monitoring. Live aaga fastest vazhi.',
      features: ['Niminisangal-la live', 'Auto-updates', 'India data region default'],
    },
    selfHost: {
      title: 'Self-host',
      body: 'Same product, unga server. Full data ownership, unga domain, unga backups, unga compliance.',
      features: ['Custom-quoted licence', 'Docker / bare metal', 'Optional managed support'],
    },
  },
  why: {
    eyebrow: 'Yen 399apps',
    title: 'Oru engineer maadhiri build pannirukom.',
    lede: 'Salesy bloat illa. Pathu-tab dashboard illa. Unga business unmaiyaa use panra workflows mattum, fast-a.',
    cards: [
      { icon: 'sparkle', t: 'Chinna surface, real depth', b: 'Ovvoru app-um oru naal-la puriyura maadhiri simple, business nadatha podhuma deep.' },
      { icon: 'rupee', t: '₹399 mudhal app, ₹99 apram', b: 'Mudhal app ₹399/month; ovvoru extra app illa add-on ₹99 — unga full team-ku, unlimited users, eppovum per seat illa.' },
      { icon: 'shield', t: 'Unga data unga sondham', b: 'Cloud-la encrypted. Fully self-hostable. Eppovum standard format-la export pannalaam.' },
      { icon: 'cloud', t: 'Cloud-native infra', b: 'Cloudflare + AWS-la hosted, default India region. 99.9% target.' },
      { icon: 'server', t: 'Self-host vali illama', b: 'Single-binary illa Docker deploys. Backups, upgrades, migrations ellaam first-class.' },
      { icon: 'globe', t: 'White-label ready', b: 'Edha product-aiyum unga brand-la run pannunga — domain, logo, colours, copy, ellaame.' },
    ],
  },
  faq: {
    title: 'Adikkadi kekkura kelvigal',
    description: 'Pricing, hosting, white-label, matrum 399apps eppadi velai seyyudhu — quick badhilgal.',
    items: [
      { q: '399apps-na enna?', a: '399apps-na business SaaS-oda oru chinna, opinionated app store — Nidhi Books (accounting), Nidhi Inventory (stock), Books + Inventory bundle, Nidhi Matrimonials matrum Nidhi Job Portal. Ovvoru product-um engaloda cloud-la illa unga server-la self-hostable.' },
      { q: '399apps cost evvalavu?', a: 'Mudhal app 399apps cloud-la ₹399/month. Ovvoru additional app illa add-on ₹99/month. So Books mattum ₹399, Books + Inventory ₹498, apdiye thodarum — eppovum unlimited users matrum unlimited exports, per-seat charge illa. Self-hosted matrum enterprise deployments custom-quoted — enga kitta pesunga.' },
      { q: 'Cloud illa self-hosted — edhu select pannanum?', a: 'Zero-ops, daily backups, fastest live vேண்டumna cloud select pannunga. Compliance, data-locality illa scale-cost reason irundha self-host select pannunga — naanga same product-a single-server licence-a kudukrom.' },
      { q: 'White-label kidaikuma?', a: 'Aamaa. Ovvoru product-aiyum unga domain, logo, colours-la rebrand pannalaam. Community matrimony, niche job board illa industry-specific Books / Inventory roll-out-ku white-label deployment pathi pesunga.' },
      { q: 'Free trial irukka?', a: 'Aamaa. Ovvoru cloud product-kum 14-naal trial — card thேvai illa. Self-hosted plans-oda 7-naal evaluation licence varum.' },
      { q: '399apps-a yaaru build panni maintain pannradhu?', a: '399apps-a shabuilds (shabuilds.tech) build panni, deploy panni, maintain pannudhu — oru chinna, focused product studio, software-a real engineers maadhiri ship pannudhu, typical agency maadhiri illa.' },
      { q: 'Data enge host aagudhu?', a: 'Cloud data Cloudflare matrum AWS-la host aagudhu, default India-region. Self-host-la unga data eppovum unga server-a vittu veliye poradhu illa.' },
    ],
  },
  finalCta: {
    eyebrow: 'Oru manushan kitta pesunga',
    title: 'Edha app correct-nu theriyala? Naanga unga kooda scope pannrom.',
    body: '20-nimisha call. Unga business-a purinjikidrom, correct product recommend pannrom (illa fit illa-nu honest-a sollidrom), honest-a quote pannrom.',
    primaryLabel: 'Demo paarunga',
    secondaryLabel: 'Pricing paarunga',
  },
};

export const I18N: Record<Lang, Copy> = { en, hi, ta };

export function getTranslations(lang: Lang): Copy {
  return I18N[lang] ?? I18N[DEFAULT_LANG];
}

// Home-page structured data (WebSite + FAQPage) built from the localized copy.
export function getHomeJsonLd(lang: Lang, siteUrl: string) {
  const t = getTranslations(lang);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '399apps',
      url: siteUrl,
      inLanguage: lang,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: t.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}
