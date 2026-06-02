import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: '399apps — Affordable Business SaaS. Cloud or Self-Hosted.',
    description:
      'A clean app store of affordable business software — GST-ready accounting and inventory. ₹399/month for your first app on the cloud, ₹99/month for each additional app or add-on, unlimited users — or self-host on your own server. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 first app · ₹99 each add-on',
    titleLead: 'An app store of',
    titleHighlight: 'honest business software.',
    lede: 'Run your accounting and stock on a tight, well-built SaaS — on our cloud, or fully self-hosted on your own server.',
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
      { q: 'What is 399apps?', a: '399apps is a small, opinionated app store of business SaaS — Nidhi Books (accounting), Nidhi Inventory (stock) and a Books + Inventory bundle. Every product is available on our cloud or fully self-hostable on your server.' },
      { q: 'How much does 399apps cost?', a: 'Your first app is ₹399/month on the 399apps cloud. Every additional app or add-on is ₹99/month. So Books alone is ₹399, Books + Inventory is ₹498, and so on — always with unlimited users and unlimited exports, no per-seat charges. Self-hosted and enterprise deployments are custom-quoted — just talk to us.' },
      { q: 'Cloud or self-hosted — which should I pick?', a: 'Pick cloud if you want zero-ops, daily backups and the fastest path to live. Pick self-host if you have a compliance, data-locality or cost-per-scale reason to keep things in-house — we ship the same product as a single-server licence.' },
      { q: 'Do you offer white-label?', a: 'Yes. Every product can be rebranded under your domain, logo and colours. Talk to us about white-label deployments for accountants, resellers or industry-specific Books / Inventory roll-outs.' },
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

export type LandingCopy = typeof en;

const hi: LandingCopy = {
  seo: {
    title: '399apps — Affordable Business Software. Cloud ya Self-Hosted.',
    description:
      'Affordable business software ka ek saaf app store — GST-ready accounting aur inventory. Pehla app cloud pe ₹399/month, har additional app ya add-on ₹99/month, unlimited users — ya apne server pe self-host karein. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 pehla app · ₹99 har add-on',
    titleLead: 'Imaandaar business software ka',
    titleHighlight: 'ek app store.',
    lede: 'Apna accounting aur stock ek solid, achhe banaye SaaS pe chalayein — hamare cloud pe, ya apne server pe poori tarah self-hosted.',
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
      { q: '399apps kya hai?', a: '399apps business SaaS ka ek chhota, opinionated app store hai — Nidhi Books (accounting), Nidhi Inventory (stock) aur Books + Inventory bundle. Har product hamare cloud pe ya aapke server pe self-hostable hai.' },
      { q: '399apps ki cost kya hai?', a: 'Pehla app 399apps cloud pe ₹399/month. Har additional app ya add-on ₹99/month. Toh sirf Books ₹399, Books + Inventory ₹498, aise hi aage — hamesha unlimited users aur unlimited exports ke saath, koi per-seat charge nahi. Self-hosted aur enterprise deployments custom-quoted hain — bas humse baat karein.' },
      { q: 'Cloud ya self-hosted — kaunsa chunein?', a: 'Cloud chunein agar aapko zero-ops, daily backups aur sabse fast live jaana hai. Self-host chunein agar compliance, data-locality ya scale-cost ki wajah se cheezein in-house rakhni hain — hum same product single-server licence ke roop mein dete hain.' },
      { q: 'Kya white-label milta hai?', a: 'Haan. Har product aapke domain, logo aur colours pe rebrand ho sakta hai. Accountants, resellers ya industry-specific Books / Inventory roll-out ke liye white-label deployment ki baat karein.' },
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

const ta: LandingCopy = {
  seo: {
    title: '399apps — Affordable Business Software. Cloud illa Self-Hosted.',
    description:
      'Affordable business software-oda clean app store — GST-ready accounting matrum inventory. Mudhal app cloud-la ₹399/month, ovvoru additional app illa add-on ₹99/month, unlimited users — illa unga sontha server-la self-host pannunga. White-label ready.',
  },
  hero: {
    eyebrow: '₹399 mudhal app · ₹99 ovvoru add-on',
    titleLead: 'Honest business software-oda',
    titleHighlight: 'oru app store.',
    lede: 'Unga accounting matrum stock-a oru solid, nalla build panna SaaS-la run pannunga — engaloda cloud-la, illa unga sontha server-la fully self-hosted-a.',
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
      { q: '399apps-na enna?', a: '399apps-na business SaaS-oda oru chinna, opinionated app store — Nidhi Books (accounting), Nidhi Inventory (stock) matrum Books + Inventory bundle. Ovvoru product-um engaloda cloud-la illa unga server-la self-hostable.' },
      { q: '399apps cost evvalavu?', a: 'Mudhal app 399apps cloud-la ₹399/month. Ovvoru additional app illa add-on ₹99/month. So Books mattum ₹399, Books + Inventory ₹498, apdiye thodarum — eppovum unlimited users matrum unlimited exports, per-seat charge illa. Self-hosted matrum enterprise deployments custom-quoted — enga kitta pesunga.' },
      { q: 'Cloud illa self-hosted — edhu select pannanum?', a: 'Zero-ops, daily backups, fastest live vேண்டumna cloud select pannunga. Compliance, data-locality illa scale-cost reason irundha self-host select pannunga — naanga same product-a single-server licence-a kudukrom.' },
      { q: 'White-label kidaikuma?', a: 'Aamaa. Ovvoru product-aiyum unga domain, logo, colours-la rebrand pannalaam. Accountants, resellers illa industry-specific Books / Inventory roll-out-ku white-label deployment pathi pesunga.' },
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

const hindi: LandingCopy = {
  seo: {
    title: '399apps — किफ़ायती बिज़नेस सॉफ़्टवेयर। क्लाउड या सेल्फ़-होस्टेड।',
    description:
      'किफ़ायती बिज़नेस सॉफ़्टवेयर का एक साफ़-सुथरा ऐप स्टोर — GST-रेडी अकाउंटिंग और इन्वेंटरी। पहला ऐप क्लाउड पर ₹399/महीना, हर अतिरिक्त ऐप या ऐड-ऑन ₹99/महीना, अनलिमिटेड यूज़र्स — या अपने सर्वर पर सेल्फ़-होस्ट करें। व्हाइट-लेबल रेडी।',
  },
  hero: {
    eyebrow: '₹399 पहला ऐप · ₹99 हर ऐड-ऑन',
    titleLead: 'ईमानदार बिज़नेस सॉफ़्टवेयर का',
    titleHighlight: 'एक ऐप स्टोर।',
    lede: 'अपनी अकाउंटिंग और स्टॉक एक मज़बूत, अच्छे बने SaaS पर चलाएँ — हमारे क्लाउड पर, या अपने सर्वर पर पूरी तरह सेल्फ़-होस्टेड।',
    ctaBrowse: 'ऐप्स देखें',
    ctaDemo: 'फ़्री डेमो लें',
    badges: ['14-दिन का क्लाउड ट्रायल', 'अपने सर्वर पर सेल्फ़-होस्ट', 'व्हाइट-लेबल रेडी', 'GST-फ्रेंडली'],
  },
  stats: [
    { value: '5', label: 'ऐप्स लाइव' },
    { value: '₹399', valueSuffix: '/mo', label: 'पहला ऐप · फिर ₹99 हर एक' },
    { value: 'अनलिमिटेड', label: 'यूज़र्स + एक्सपोर्ट्स, हर प्लान' },
    { value: '100%', label: 'सेल्फ़-होस्ट पर डेटा ओनरशिप' },
  ],
  apps: {
    eyebrow: '399apps कैटलॉग',
    title: 'ऐप चुनें। प्लग करें। शुरू।',
    lede: 'हर प्रोडक्ट इतना सरल कि एक दिन में समझ आ जाए, और इतना सक्षम कि उस पर बिज़नेस चला सकें।',
  },
  modes: {
    eyebrow: 'दो तरीके',
    title: 'क्लाउड की आसानी, या अपने सर्वर का कंट्रोल।',
    lede: '399apps का हर ऐप दोनों रूपों में आता है। क्लाउड पर शुरू करें और बाद में मूव करें, या पहले दिन से सेल्फ़-होस्ट — वही प्रोडक्ट, वही सपोर्ट।',
    selfHostCta: 'सेल्फ़-होस्ट जानकारी',
    compareCta: 'तुलना करें',
    cloud: {
      title: 'क्लाउड',
      body: 'ज़ीरो-ऑप्स। डेली बैकअप, India रीजन, 24×7 मॉनिटर्ड। लाइव होने का सबसे तेज़ तरीका।',
      features: ['मिनटों में लाइव', 'ऑटो-अपडेट्स', 'India डेटा रीजन डिफ़ॉल्ट'],
    },
    selfHost: {
      title: 'सेल्फ़-होस्ट',
      body: 'वही प्रोडक्ट, आपका सर्वर। पूरा डेटा ओनरशिप, आपका डोमेन, आपके बैकअप, आपकी कंप्लायंस।',
      features: ['कस्टम-कोटेड लाइसेंस', 'Docker / बेयर मेटल', 'वैकल्पिक मैनेज्ड सपोर्ट'],
    },
  },
  why: {
    eyebrow: '399apps क्यों',
    title: 'जैसे एक इंजीनियर बनाता।',
    lede: 'कोई सेल्सी दिखावा नहीं। कोई दस-टैब डैशबोर्ड नहीं। सिर्फ़ वही वर्कफ़्लो जो आपका बिज़नेस सच में इस्तेमाल करता है, तेज़ बनाए।',
    cards: [
      { icon: 'sparkle', t: 'छोटा सरफेस, असली गहराई', b: 'हर ऐप इतना सरल कि एक दिन में समझ आए, इतना गहरा कि बिज़नेस चल जाए।' },
      { icon: 'rupee', t: '₹399 पहला ऐप, ₹99 बाकी', b: 'पहला ऐप ₹399/महीना; हर अतिरिक्त ऐप या ऐड-ऑन ₹99 — पूरी टीम के लिए, अनलिमिटेड यूज़र्स, कभी per-seat नहीं।' },
      { icon: 'shield', t: 'आपका डेटा आपका है', b: 'क्लाउड पर एन्क्रिप्टेड। पूरी तरह सेल्फ़-होस्टेबल। कभी भी स्टैंडर्ड फ़ॉर्मेट में एक्सपोर्ट करें।' },
      { icon: 'cloud', t: 'क्लाउड-नेटिव इंफ्रा', b: 'Cloudflare + AWS पर होस्टेड, डिफ़ॉल्ट India रीजन। 99.9% टारगेट।' },
      { icon: 'server', t: 'बिना दर्द सेल्फ़-होस्ट', b: 'सिंगल-बाइनरी या Docker डिप्लॉय। बैकअप, अपग्रेड और माइग्रेशन first-class हैं।' },
      { icon: 'globe', t: 'व्हाइट-लेबल रेडी', b: 'कोई भी प्रोडक्ट अपने ब्रांड पर चलाएँ — डोमेन, लोगो, रंग, कॉपी, सब कुछ।' },
    ],
  },
  faq: {
    title: 'अक्सर पूछे जाने वाले सवाल',
    description: 'प्राइसिंग, होस्टिंग, व्हाइट-लेबल और 399apps कैसे काम करता है — इसके त्वरित जवाब।',
    items: [
      { q: '399apps क्या है?', a: '399apps बिज़नेस SaaS का एक छोटा, सुलझा हुआ ऐप स्टोर है — Nidhi Books (अकाउंटिंग), Nidhi Inventory (स्टॉक) और Books + Inventory बंडल। हर प्रोडक्ट हमारे क्लाउड पर या आपके सर्वर पर सेल्फ़-होस्टेबल है।' },
      { q: '399apps की कीमत क्या है?', a: 'पहला ऐप 399apps क्लाउड पर ₹399/महीना। हर अतिरिक्त ऐप या ऐड-ऑन ₹99/महीना। तो अकेले Books ₹399, Books + Inventory ₹498, और ऐसे ही आगे — हमेशा अनलिमिटेड यूज़र्स और अनलिमिटेड एक्सपोर्ट्स के साथ, कोई per-seat चार्ज नहीं। सेल्फ़-होस्टेड और एंटरप्राइज़ डिप्लॉयमेंट कस्टम-कोटेड हैं — बस हमसे बात करें।' },
      { q: 'क्लाउड या सेल्फ़-होस्टेड — कौन-सा चुनें?', a: 'क्लाउड चुनें अगर आपको ज़ीरो-ऑप्स, डेली बैकअप और सबसे तेज़ लाइव होना है। सेल्फ़-होस्ट चुनें अगर कंप्लायंस, डेटा-लोकैलिटी या स्केल-कॉस्ट की वजह से चीज़ें इन-हाउस रखनी हैं — हम वही प्रोडक्ट सिंगल-सर्वर लाइसेंस के रूप में देते हैं।' },
      { q: 'क्या व्हाइट-लेबल मिलता है?', a: 'हाँ। हर प्रोडक्ट आपके डोमेन, लोगो और रंगों पर रीब्रांड हो सकता है। अकाउंटेंट्स, रीसेलर्स या इंडस्ट्री-स्पेसिफ़िक Books / Inventory रोल-आउट के लिए व्हाइट-लेबल डिप्लॉयमेंट की बात करें।' },
      { q: 'क्या फ़्री ट्रायल है?', a: 'हाँ। हर क्लाउड प्रोडक्ट पर 14-दिन का ट्रायल — कोई कार्ड नहीं चाहिए। सेल्फ़-होस्टेड प्लान के साथ 7-दिन का इवैल्यूएशन लाइसेंस आता है।' },
      { q: '399apps को कौन बनाता और मेंटेन करता है?', a: '399apps को shabuilds (shabuilds.tech) बनाता, डिप्लॉय और मेंटेन करता है — एक छोटा, फ़ोकस्ड प्रोडक्ट स्टूडियो जो सॉफ़्टवेयर एक असली इंजीनियर की तरह शिप करता है, आम एजेंसी की तरह नहीं।' },
      { q: 'डेटा कहाँ होस्ट होता है?', a: 'क्लाउड डेटा Cloudflare और AWS पर होस्ट होता है, डिफ़ॉल्ट India-रीजन। सेल्फ़-होस्ट पर आपका डेटा कभी आपके सर्वर से बाहर नहीं जाता।' },
    ],
  },
  finalCta: {
    eyebrow: 'इंसान से बात करें',
    title: 'पता नहीं कौन-सा ऐप सही है? आइए साथ में तय करते हैं।',
    body: '20-मिनट की कॉल। हम आपका बिज़नेस समझेंगे, सही प्रोडक्ट सुझाएँगे (या साफ़ बता देंगे कि फ़िट नहीं हैं), और ईमानदारी से कोट करेंगे।',
    primaryLabel: 'डेमो लें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
};

const tamil: LandingCopy = {
  seo: {
    title: '399apps — மலிவான பிசினஸ் சாஃப்ட்வேர். கிளவுட் அல்லது செல்ஃப்-ஹோஸ்டட்.',
    description:
      'மலிவான பிசினஸ் சாஃப்ட்வேரின் ஒரு சுத்தமான ஆப் ஸ்டோர் — GST-ரெடி அக்கவுண்டிங் மற்றும் இன்வென்டரி. முதல் ஆப் கிளவுடில் ₹399/மாதம், ஒவ்வொரு கூடுதல் ஆப் அல்லது ஆட்-ஆன் ₹99/மாதம், அன்லிமிடெட் யூசர்கள் — அல்லது உங்கள் சர்வரில் செல்ஃப்-ஹோஸ்ட் செய்யுங்கள். ஒயிட்-லேபல் ரெடி.',
  },
  hero: {
    eyebrow: '₹399 முதல் ஆப் · ₹99 ஒவ்வொரு ஆட்-ஆன்',
    titleLead: 'நேர்மையான பிசினஸ் சாஃப்ட்வேரின்',
    titleHighlight: 'ஒரு ஆப் ஸ்டோர்.',
    lede: 'உங்கள் அக்கவுண்டிங் மற்றும் ஸ்டாக்கை ஒரு உறுதியான, நன்றாக கட்டப்பட்ட SaaS-ல் இயக்குங்கள் — எங்கள் கிளவுடில், அல்லது உங்கள் சர்வரில் முழுமையாக செல்ஃப்-ஹோஸ்டட்.',
    ctaBrowse: 'ஆப்ஸ் பாருங்கள்',
    ctaDemo: 'ஃப்ரீ டெமோ பாருங்கள்',
    badges: ['14-நாள் கிளவுட் ட்ரையல்', 'உங்கள் சர்வரில் செல்ஃப்-ஹோஸ்ட்', 'ஒயிட்-லேபல் ரெடி', 'GST-ஃப்ரெண்ட்லி'],
  },
  stats: [
    { value: '5', label: 'ஆப்ஸ் லைவ்' },
    { value: '₹399', valueSuffix: '/mo', label: 'முதல் ஆப் · பிறகு ₹99 ஒவ்வொன்றும்' },
    { value: 'அன்லிமிடெட்', label: 'யூசர்கள் + எக்ஸ்போர்ட்ஸ், எல்லா பிளானிலும்' },
    { value: '100%', label: 'செல்ஃப்-ஹோஸ்டில் டேட்டா ஓனர்ஷிப்' },
  ],
  apps: {
    eyebrow: '399apps கேடலாக்',
    title: 'ஆப் தேர்ந்தெடுங்கள். ப்ளக் செய்யுங்கள். தொடங்குங்கள்.',
    lede: 'ஒவ்வொரு புராடக்ட்டும் ஒரு நாளில் புரிஞ்சுக்கிற அளவுக்கு எளிமை, பிசினஸ் நடத்த முடிஞ்ச அளவுக்கு வலிமை.',
  },
  modes: {
    eyebrow: 'ரெண்டு வழிகள்',
    title: 'கிளவுட் வசதி, அல்லது உங்கள் சர்வர் கட்டுப்பாடு.',
    lede: '399apps-இன் ஒவ்வொரு ஆப்பும் ரெண்டு வடிவத்திலும் வரும். கிளவுடில் ஆரம்பித்து பிறகு மாறுங்கள், அல்லது முதல் நாளிலிருந்தே செல்ஃப்-ஹோஸ்ட் — அதே புராடக்ட், அதே சப்போர்ட்.',
    selfHostCta: 'செல்ஃப்-ஹோஸ்ட் விவரம்',
    compareCta: 'ஒப்பிடுங்கள்',
    cloud: {
      title: 'கிளவுட்',
      body: 'ஜீரோ-ஆப்ஸ். டெய்லி பேக்அப், India ரீஜன், 24×7 மானிட்டரிங். லைவ் ஆக வேகமான வழி.',
      features: ['நிமிடங்களில் லைவ்', 'ஆட்டோ-அப்டேட்ஸ்', 'India டேட்டா ரீஜன் டிஃபால்ட்'],
    },
    selfHost: {
      title: 'செல்ஃப்-ஹோஸ்ட்',
      body: 'அதே புராடக்ட், உங்கள் சர்வர். முழு டேட்டா ஓனர்ஷிப், உங்கள் டொமைன், உங்கள் பேக்அப், உங்கள் காம்ப்ளையன்ஸ்.',
      features: ['கஸ்டம்-கோட்டட் லைசன்ஸ்', 'Docker / பேர் மெட்டல்', 'ஆப்ஷனல் மேனேஜ்டு சப்போர்ட்'],
    },
  },
  why: {
    eyebrow: 'ஏன் 399apps',
    title: 'ஒரு இன்ஜினியர் கட்டுற மாதிரி.',
    lede: 'சேல்ஸி ஆடம்பரம் இல்லை. பத்து-டேப் டாஷ்போர்டு இல்லை. உங்கள் பிசினஸ் உண்மையா யூஸ் பண்ற வொர்க்ஃப்ளோக்கள் மட்டும், வேகமா.',
    cards: [
      { icon: 'sparkle', t: 'சின்ன சர்ஃபேஸ், உண்மையான ஆழம்', b: 'ஒவ்வொரு ஆப்பும் ஒரு நாளில் புரியற அளவு எளிமை, பிசினஸ் நடத்த முடிஞ்ச அளவு ஆழம்.' },
      { icon: 'rupee', t: '₹399 முதல் ஆப், ₹99 மீதி', b: 'முதல் ஆப் ₹399/மாதம்; ஒவ்வொரு கூடுதல் ஆப் அல்லது ஆட்-ஆன் ₹99 — உங்கள் முழு டீம்-க்கு, அன்லிமிடெட் யூசர்கள், எப்பவும் per-seat இல்லை.' },
      { icon: 'shield', t: 'உங்கள் டேட்டா உங்க சொந்தம்', b: 'கிளவுடில் என்க்ரிப்டட். முழுமையா செல்ஃப்-ஹோஸ்டபிள். எப்பவும் ஸ்டாண்டர்ட் ஃபார்மட்-ல எக்ஸ்போர்ட் பண்ணலாம்.' },
      { icon: 'cloud', t: 'கிளவுட்-நேட்டிவ் இன்ஃப்ரா', b: 'Cloudflare + AWS-ல ஹோஸ்டட், டிஃபால்ட் India ரீஜன். 99.9% டார்கெட்.' },
      { icon: 'server', t: 'வலி இல்லாம செல்ஃப்-ஹோஸ்ட்', b: 'சிங்கிள்-பைனரி அல்லது Docker டிப்ளாய். பேக்அப், அப்கிரேட், மைக்ரேஷன் எல்லாம் first-class.' },
      { icon: 'globe', t: 'ஒயிட்-லேபல் ரெடி', b: 'எந்த புராடக்ட்டையும் உங்க ப்ராண்ட்-ல இயக்குங்க — டொமைன், லோகோ, கலர்ஸ், காப்பி, எல்லாமே.' },
    ],
  },
  faq: {
    title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    description: 'ப்ரைசிங், ஹோஸ்டிங், ஒயிட்-லேபல், மற்றும் 399apps எப்படி வேலை செய்யுது — விரைவான பதில்கள்.',
    items: [
      { q: '399apps-னா என்ன?', a: '399apps-னா பிசினஸ் SaaS-ஓட ஒரு சின்ன, தெளிவான ஆப் ஸ்டோர் — Nidhi Books (அக்கவுண்டிங்), Nidhi Inventory (ஸ்டாக்) மற்றும் Books + Inventory பண்டில். ஒவ்வொரு புராடக்ட்டும் எங்க கிளவுடில் அல்லது உங்க சர்வரில் செல்ஃப்-ஹோஸ்டபிள்.' },
      { q: '399apps விலை எவ்வளவு?', a: 'முதல் ஆப் 399apps கிளவுடில் ₹399/மாதம். ஒவ்வொரு கூடுதல் ஆப் அல்லது ஆட்-ஆன் ₹99/மாதம். அதனால Books மட்டும் ₹399, Books + Inventory ₹498, அப்படியே தொடரும் — எப்பவும் அன்லிமிடெட் யூசர்கள் மற்றும் அன்லிமிடெட் எக்ஸ்போர்ட்ஸ்-ஓட, per-seat சார்ஜ் இல்லை. செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் டிப்ளாய்மென்ட் கஸ்டம்-கோட்டட் — எங்க கிட்ட பேசுங்க.' },
      { q: 'கிளவுட் அல்லது செல்ஃப்-ஹோஸ்டட் — எது தேர்ந்தெடுக்கணும்?', a: 'ஜீரோ-ஆப்ஸ், டெய்லி பேக்அப், வேகமா லைவ் ஆகணும்னா கிளவுட் தேர்ந்தெடுங்க. காம்ப்ளையன்ஸ், டேட்டா-லொக்காலிட்டி அல்லது ஸ்கேல்-காஸ்ட் காரணத்துக்கு இன்-ஹவுஸ்-ல வைக்கணும்னா செல்ஃப்-ஹோஸ்ட் தேர்ந்தெடுங்க — நாங்க அதே புராடக்ட்டை சிங்கிள்-சர்வர் லைசன்ஸ்-ஆ தரோம்.' },
      { q: 'ஒயிட்-லேபல் கிடைக்குமா?', a: 'ஆமா. ஒவ்வொரு புராடக்ட்டையும் உங்க டொமைன், லோகோ, கலர்ஸ்-ல ரீப்ராண்ட் பண்ணலாம். அக்கவுண்டெண்ட்ஸ், ரீசெல்லர்ஸ் அல்லது இண்டஸ்ட்ரி-ஸ்பெசிஃபிக் Books / Inventory ரோல்-அவுட்-க்கு ஒயிட்-லேபல் டிப்ளாய்மென்ட் பத்தி பேசுங்க.' },
      { q: 'ஃப்ரீ ட்ரையல் இருக்கா?', a: 'ஆமா. ஒவ்வொரு கிளவுட் புராடக்ட்-க்கும் 14-நாள் ட்ரையல் — கார்டு தேவை இல்லை. செல்ஃப்-ஹோஸ்டட் பிளான்ஸ்-ஓட 7-நாள் இவால்யுவேஷன் லைசன்ஸ் வரும்.' },
      { q: '399apps-ஐ யாரு உருவாக்கி மெயின்டெயின் பண்றாங்க?', a: '399apps-ஐ shabuilds (shabuilds.tech) உருவாக்கி, டிப்ளாய் பண்ணி, மெயின்டெயின் பண்றாங்க — ஒரு சின்ன, ஃபோகஸ்டு புராடக்ட் ஸ்டுடியோ, சாஃப்ட்வேரை உண்மையான இன்ஜினியர்கள் மாதிரி ஷிப் பண்றாங்க, சாதாரண ஏஜென்சி மாதிரி இல்லை.' },
      { q: 'டேட்டா எங்க ஹோஸ்ட் ஆகுது?', a: 'கிளவுட் டேட்டா Cloudflare மற்றும் AWS-ல ஹோஸ்ட் ஆகுது, டிஃபால்ட் India-ரீஜன். செல்ஃப்-ஹோஸ்ட்-ல உங்க டேட்டா எப்பவும் உங்க சர்வரை விட்டு வெளியே போகாது.' },
    ],
  },
  finalCta: {
    eyebrow: 'ஒரு மனிதரிடம் பேசுங்கள்',
    title: 'எந்த ஆப் சரியானது தெரியலையா? நாங்க உங்களோட சேர்ந்து தீர்மானிக்கிறோம்.',
    body: '20-நிமிட கால். உங்க பிசினஸ்-ஐ புரிஞ்சுக்கிறோம், சரியான புராடக்ட் பரிந்துரைக்கிறோம் (அல்லது ஃபிட் இல்லைனு நேர்மையா சொல்றோம்), நேர்மையா கோட் பண்றோம்.',
    primaryLabel: 'டெமோ பாருங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
};

const LANDING: Record<Lang, LandingCopy> = { en, hi, ta, hindi, tamil };

export function getLandingCopy(lang: Lang): LandingCopy {
  return pickByLang(LANDING, lang);
}

// Home-page structured data (WebSite + FAQPage) built from the localized copy.
export function getHomeJsonLd(lang: Lang, siteUrl: string) {
  const t = getLandingCopy(lang);
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
