import { pickByLang, type Lang } from './shared';

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}

export interface PrivacyCopy {
  seo: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; title: string; updatedLabel: string; updated: string };
  intro: string[];
  sections: PrivacySection[];
  canonicalNote?: string;
  grievance: {
    title: string;
    body: string;
    name: string;
    address: string;
    emailLabel: string;
  };
}

const UPDATED = '2026-06-08';

const en: PrivacyCopy = {
  seo: {
    title: 'Privacy Policy — 399apps',
    description:
      '399apps privacy policy: what we collect, how we use it, how cloud vs self-hosted differ, your rights under the DPDPA, sub-processors, retention, security, and how to reach our grievance officer.',
    keywords: ['399apps privacy policy', 'privacy SaaS India', 'DPDPA compliance', 'business software privacy'],
  },
  hero: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    updated: UPDATED,
  },
  intro: [
    'This Privacy Policy explains how 399apps ("we", "us", "our") — operated by shabuilds (shabuilds.tech) — collects, uses and protects information when you visit 399apps.com or use any of our products: Nidhi Books, Nidhi Inventory and the Books + Inventory bundle.',
    'We sell business software to small and growing businesses, communities and operators — primarily in India, but also internationally. We try to keep this policy short, plain-spoken and honest. If something here is unclear, write to us and we will explain.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      paragraphs: [
        '399apps is a small catalogue of business SaaS — GST-ready accounting and inventory — built and run by shabuilds. We sell our products either as a managed cloud service on 399apps.com, or as a self-hosted licence that you deploy on your own server.',
        'When we say "you" in this policy we mean either a visitor to our website, a customer using one of our products, or — for white-label and self-hosted deployments — an organisation operating a 399apps product under its own brand.',
      ],
    },
    {
      id: 'what-we-collect',
      title: 'What information we collect',
      paragraphs: ['We collect only what we actually need to run the service:'],
      bullets: [
        { label: 'Account & contact details', text: 'Name, work email, company, phone or WhatsApp number, country — collected when you fill the contact form, sign up for a cloud account, request a demo, or write to us.' },
        { label: 'Product data on cloud', text: 'The business data you put into our products on the 399apps cloud — invoices, GST and TDS records, stock items — is stored on our managed infrastructure on your behalf. We treat it as confidential customer data.' },
        { label: 'Product data on self-host', text: 'When you self-host a 399apps product, your business and customer data lives entirely on your server. We do not receive it, do not back it up and cannot access it. Optional anonymous product telemetry (whether a deployment is healthy, version numbers) can be turned off.' },
        { label: 'Payment information', text: 'Cloud subscriptions are billed via UPI, NEFT/RTGS, or via Razorpay/Stripe/Cashfree for cards. We never see or store your full card number; only the cardholder name, last four digits and an opaque token from the payment provider.' },
        { label: 'Usage logs', text: 'Standard server logs — IP address, user agent, pages visited, timestamps — used for security, debugging and aggregate analytics. We do not run any advertising or ad-profiling trackers on our websites.' },
        { label: 'Support conversations', text: 'Emails, WhatsApp messages and support tickets you send us, kept for the period required to help you and to improve the product.' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'How we use your information',
      paragraphs: ['We use the information above only for specific, narrow purposes:'],
      bullets: [
        { label: 'To deliver the products', text: 'Host your cloud workspace, run backups, serve your invoices, send transactional emails (account, password, billing, alerts).' },
        { label: 'To support you', text: 'Respond to questions, debug issues, run guided migrations from Tally / Zoho / QuickBooks when you ask, and help you scope self-host or white-label deployments.' },
        { label: 'To keep things safe', text: 'Detect abuse, prevent fraud, investigate suspicious activity, and meet our security commitments to you.' },
        { label: 'To improve the product', text: 'Aggregate usage analytics to understand what features are used, what is broken and what to build next. We do not profile you for advertising.' },
        { label: 'To meet legal obligations', text: 'GST invoicing, TDS reporting, statutory record-keeping and lawful requests from authorities — only to the extent required.' },
      ],
    },
    {
      id: 'cloud-vs-selfhost',
      title: 'Cloud vs self-hosted — what changes',
      paragraphs: [
        'This is the most important practical distinction in our service.',
        'On the 399apps cloud, your business data is hosted on infrastructure operated by us using Cloudflare and AWS, with the India region as the default. We are the data fiduciary for your account-level data, and a data processor for the customer-records you put into the apps (your customers, members, candidates, vendors).',
        'On self-host, your data never leaves your server. We do not have credentials, we do not back it up, and you decide who in your team has access. Our role is limited to providing the licensed software, version updates, security patches and (optionally) managed support that you have asked for.',
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share data with',
      paragraphs: [
        'We do not sell your data. We never share customer business data with advertisers, brokers or social networks. We only share information with a small set of sub-processors we need to run the service:',
      ],
      bullets: [
        { label: 'Cloudflare', text: 'For DNS, CDN, edge security and hosting of static content.' },
        { label: 'Amazon Web Services (AWS)', text: 'For application hosting, database hosting and storage of cloud customer data, with India region as default.' },
        { label: 'Razorpay / Stripe / Cashfree', text: 'For payment processing — used either by us for cloud subscriptions, or routed to your own account on white-label deployments.' },
        { label: 'Email & transactional providers', text: 'For sending account, billing and support emails (kept to providers with appropriate data-processing terms).' },
        { label: 'PostHog', text: 'Privacy-respecting, cookieless product analytics (page views and feature usage), hosted in the EU. Used to understand how the site and apps are used. No Google Analytics, no Facebook pixel, no advertising networks.' },
      ],
    },
    {
      id: 'rights',
      title: 'Your rights',
      paragraphs: [
        'You have rights over the personal information we hold about you. Under the Digital Personal Data Protection Act, 2023 (DPDPA) and equivalent laws in other jurisdictions, these include:',
      ],
      bullets: [
        { label: 'Access', text: 'Ask for a copy of the personal data we hold about you and what we do with it.' },
        { label: 'Correction', text: 'Update or correct anything inaccurate.' },
        { label: 'Erasure', text: 'Ask us to delete your personal data, subject to records we must keep for legal or tax reasons.' },
        { label: 'Portability', text: 'Get your data in a standard, machine-readable format. Every 399apps app already supports unlimited CSV / PDF exports of the data you have entered.' },
        { label: 'Withdraw consent', text: 'Where we rely on your consent (e.g. marketing emails) you can withdraw it at any time without affecting past lawful processing.' },
        { label: 'Grievance', text: 'Raise a concern with our grievance officer (details at the end of this policy) and, if unresolved, escalate to the relevant data protection authority.' },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      paragraphs: [
        'Account and contact information is kept for as long as you are a customer, and for a reasonable period afterwards to meet legal, billing and audit requirements. Cloud product data is kept while your subscription is active; if you cancel, your data is removed from active systems within 90 days and from backups within a further 30 days.',
        'Anonymous aggregate analytics (e.g. how many invoices were generated last quarter) may be retained without time limit, as it cannot be linked back to you.',
        'On self-host, retention is entirely under your control.',
      ],
    },
    {
      id: 'security',
      title: 'How we keep information safe',
      paragraphs: [
        'We take security seriously because every customer here is running their actual business on our software. Concretely:',
      ],
      bullets: [
        { label: 'Encryption in transit', text: 'All traffic to 399apps.com and our cloud products is served over HTTPS.' },
        { label: 'Encryption at rest', text: 'Cloud customer data is encrypted at rest on managed infrastructure.' },
        { label: 'Daily backups', text: 'Cloud customer data is backed up daily and retained for 30 days.' },
        { label: 'Access controls', text: 'Only a small number of named engineers have production access. Production access is logged and reviewed.' },
        { label: 'Self-host', text: 'The same product code ships as your self-hosted licence, with versioned releases, signed binaries / images, and migration scripts you can review.' },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and tracking',
      paragraphs: [
        'Our website uses only essential first-party cookies — to keep you logged in, remember your language preference and protect against abuse. We do not use third-party advertising cookies, behavioural-profiling pixels or cross-site trackers.',
        'You can disable cookies in your browser; the marketing site will continue to work, but signed-in product sessions will not.',
      ],
    },
    {
      id: 'children',
      title: "Children's data",
      paragraphs: [
        '399apps products are intended for businesses, professional users and adults. We do not knowingly collect personal data from anyone under 18 for our own purposes.',
        'If you use one of our products to handle data about minors, you are responsible for following applicable laws on the collection and use of children\'s data, including obtaining valid consent from parents or guardians where required.',
      ],
    },
    {
      id: 'transfers',
      title: 'International data transfers',
      paragraphs: [
        'Our cloud is India-region by default. For customers outside India, or when we use sub-processors operated from other regions (e.g. Cloudflare edge nodes worldwide), data may be transferred outside India. We use contractual safeguards with these sub-processors to make sure your data remains protected.',
      ],
    },
    {
      id: 'whitelabel',
      title: 'White-label and reseller deployments',
      paragraphs: [
        'When you white-label one of our products under your own brand, you are the data fiduciary for your end-customers. 399apps acts as a data processor for the customer data your platform collects. Your end-customers should look at your privacy policy, not ours.',
        'We will sign a data-processing agreement on request. White-label deployments do not change the security and retention commitments we make in this policy.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy as we add products, change sub-processors or to reflect changes in the law. When we make material changes, we will update the "last updated" date above and, for active customers, send an email to the primary address on the account.',
        'Continued use of our products after the effective date means you accept the updated policy.',
      ],
    },
  ],
  canonicalNote: undefined,
  grievance: {
    title: 'Grievance officer & contact',
    body: 'For any privacy question, access or deletion request, or concern about how we are handling your data — please write to us. We aim to respond within 7 working days.',
    name: 'shabuilds (operator of 399apps)',
    address: 'India',
    emailLabel: 'Email',
  },
};

const hi: PrivacyCopy = {
  seo: {
    title: 'Privacy Policy — 399apps',
    description:
      '399apps ki privacy policy: hum kya collect karte hain, kaise use karte hain, cloud vs self-hosted ka farq, DPDPA ke under aapke rights, sub-processors, retention, security aur grievance officer se kaise mile.',
    keywords: ['399apps privacy policy', 'privacy SaaS India', 'DPDPA compliance', 'business software privacy'],
  },
  hero: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    updated: UPDATED,
  },
  intro: [
    'Yeh Privacy Policy bataati hai ki 399apps ("hum", "humara") — jo shabuilds (shabuilds.tech) chalata hai — 399apps.com pe visit karne pe ya humare products (Nidhi Books, Nidhi Inventory aur Books + Inventory bundle) use karne pe kaise information collect, use aur protect karta hai.',
    'Hum chhote aur badhte hue businesses, communities aur operators ko business software bechte hain — mainly India mein, par internationally bhi. Hum is policy ko chhota, saaf aur honest rakhne ki koshish karte hain. Agar kuch unclear ho, humein likhein, hum samjha denge.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Hum kaun hain',
      paragraphs: [
        '399apps ek chhota business SaaS catalogue hai — GST-ready accounting aur inventory — jo shabuilds banaata aur chalata hai. Hum apne products do tarah se bechte hain: managed cloud service 399apps.com pe, ya ek self-hosted licence jo aap apne server pe deploy karte hain.',
        'Is policy mein jab hum "aap" kehte hain toh iska matlab hai humari website ka visitor, humare kisi product ka cloud customer, ya — white-label aur self-host deployment ke liye — woh organisation jo apne brand ke neeche 399apps product chalata hai.',
      ],
    },
    {
      id: 'what-we-collect',
      title: 'Hum kya collect karte hain',
      paragraphs: ['Service chalane ke liye sirf utna hi collect karte hain jitna sach mein chahiye:'],
      bullets: [
        { label: 'Account aur contact details', text: 'Naam, work email, company, phone ya WhatsApp number, country — jab aap contact form bharte hain, cloud account banate hain, demo request karte hain ya humein likhte hain tab milta hai.' },
        { label: 'Cloud pe product data', text: 'Aap jo business data 399apps cloud pe humare products mein daalte hain — invoices, GST aur TDS records, stock items — woh humari managed infrastructure pe aapke liye store hota hai. Hum isse confidential customer data maante hain.' },
        { label: 'Self-host pe product data', text: 'Jab aap 399apps product self-host karte hain, toh aapka business aur customer data poori tarah aapke server pe rehta hai. Humein nahi milta, hum backup nahi lete, hum access nahi karte. Optional anonymous product telemetry (deployment healthy hai ya nahi, version number) aap off bhi kar sakte hain.' },
        { label: 'Payment information', text: 'Cloud subscription UPI, NEFT/RTGS, ya cards ke liye Razorpay/Stripe/Cashfree ke through bill hoti hai. Hum aapka full card number na dekhte hain na store karte hain; sirf cardholder ka naam, last char digits aur payment provider ka token rakhte hain.' },
        { label: 'Usage logs', text: 'Standard server logs — IP address, user agent, visit kiye gaye pages, timestamps — security, debugging aur aggregate analytics ke liye use hote hain. Hum apni websites pe koi advertising ya ad-profiling trackers nahi chalate.' },
        { label: 'Support baatcheet', text: 'Aap humein jo emails, WhatsApp messages aur support tickets bhejte hain, woh utne time tak rakhte hain jitna aapki madad aur product improvement ke liye chahiye.' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'Aapki information ko hum kaise use karte hain',
      paragraphs: ['Upar di gayi information sirf specific, narrow kaamon ke liye use hoti hai:'],
      bullets: [
        { label: 'Products deliver karne ke liye', text: 'Aapka cloud workspace host karna, backups chalana, invoices serve karna, transactional emails bhejna (account, password, billing, alerts).' },
        { label: 'Aapko support karne ke liye', text: 'Sawaalon ka jawab dena, issues debug karna, Tally / Zoho / QuickBooks se guided migration chalana aur self-host ya white-label deployment scope karne mein madad karna.' },
        { label: 'Safety ke liye', text: 'Abuse detect karna, fraud rokna, suspicious activity investigate karna, aur aapke saath ki gayi security commitments nibhana.' },
        { label: 'Product improve karne ke liye', text: 'Aggregate usage analytics dekhna ki kaunse features use ho rahe hain, kya toot raha hai aur aage kya banana hai. Hum aapka advertising ke liye profile nahi banate.' },
        { label: 'Legal obligations nibhane ke liye', text: 'GST invoicing, TDS reporting, statutory record-keeping aur authorities ki lawful requests — sirf utni hi haad tak jitna zaroori ho.' },
      ],
    },
    {
      id: 'cloud-vs-selfhost',
      title: 'Cloud vs self-hosted — kya farq padta hai',
      paragraphs: [
        'Yeh humari service ka sabse zaroori practical farq hai.',
        '399apps cloud pe aapka business data humari infrastructure pe hosted hota hai Cloudflare aur AWS ka use karke, default India region ke saath. Aapke account-level data ke liye hum data fiduciary hain, aur jo customer-records aap apps mein daalte hain (aapke customers, members, candidates, vendors) unke liye data processor.',
        'Self-host pe aapka data kabhi aapke server se bahar nahi jaata. Humare paas credentials nahi hote, hum backup nahi lete, aur aap decide karte hain ki team mein kaun access karega. Humara role sirf licensed software, version updates, security patches aur (optional) managed support dene tak hai jitna aapne maanga.',
      ],
    },
    {
      id: 'sharing',
      title: 'Hum data kiske saath share karte hain',
      paragraphs: [
        'Hum aapka data bechte nahi. Hum customer business data kabhi advertisers, brokers ya social networks ke saath share nahi karte. Hum sirf chhote sub-processors ke saath information share karte hain jo service chalane ke liye chahiye:',
      ],
      bullets: [
        { label: 'Cloudflare', text: 'DNS, CDN, edge security aur static content hosting ke liye.' },
        { label: 'Amazon Web Services (AWS)', text: 'Application hosting, database hosting aur cloud customer data ke storage ke liye, default India region pe.' },
        { label: 'Razorpay / Stripe / Cashfree', text: 'Payment processing ke liye — hum cloud subscription ke liye use karte hain, ya white-label deployment mein aapke account pe route karte hain.' },
        { label: 'Email aur transactional providers', text: 'Account, billing aur support emails bhejne ke liye (sirf un providers ke saath jinke saath sahi data-processing terms hain).' },
        { label: 'PostHog', text: 'Privacy-respecting, cookieless product analytics (page views aur feature usage), EU mein hosted — site aur apps kaise use hote hain samajhne ke liye. Koi Google Analytics nahi, koi Facebook pixel nahi, koi advertising network nahi.' },
      ],
    },
    {
      id: 'rights',
      title: 'Aapke rights',
      paragraphs: [
        'Aapke paas humare paas rakhi gayi personal information par rights hain. Digital Personal Data Protection Act, 2023 (DPDPA) aur dusre jurisdictions ke equivalent laws ke under, in mein shaamil hain:',
      ],
      bullets: [
        { label: 'Access', text: 'Humare paas aapka kya personal data hai aur hum uska kya karte hain, iski copy maangein.' },
        { label: 'Correction', text: 'Galat ya purani information update ya correct karwayein.' },
        { label: 'Erasure', text: 'Apna personal data delete karne ko kahein, sivay un records ke jo legal ya tax karne se hum rakhne ke liye majboor hain.' },
        { label: 'Portability', text: 'Apna data standard, machine-readable format mein lein. Har 399apps app aapke daale gaye data ke unlimited CSV / PDF exports already support karta hai.' },
        { label: 'Consent waapas lena', text: 'Jahaan hum aapki consent pe depend hote hain (jaise marketing emails) wahaan kabhi bhi consent waapas le sakte hain, par jo processing pehle ho chuki hai woh affect nahi hogi.' },
        { label: 'Grievance', text: 'Humare grievance officer ke saath concern uthayein (detail policy ke end mein) aur agar resolve na ho toh related data protection authority tak escalate karein.' },
      ],
    },
    {
      id: 'retention',
      title: 'Hum information kab tak rakhte hain',
      paragraphs: [
        'Account aur contact information aap customer rahein utni der rakhi jaati hai, aur uske baad bhi ek reasonable time tak legal, billing aur audit requirements ke liye. Cloud product data tab tak rakhte hain jab tak aapki subscription active hai; agar aap cancel karte hain, toh aapka data 90 din mein active systems se aur uske baad 30 din mein backups se hata diya jaata hai.',
        'Anonymous aggregate analytics (jaise pichle quarter mein kitne invoices generate huye) ko hum bina time limit ke rakh sakte hain, kyunki woh aapse trace nahi hote.',
        'Self-host pe retention poori tarah aapke control mein hai.',
      ],
    },
    {
      id: 'security',
      title: 'Information ko surakshit kaise rakhte hain',
      paragraphs: [
        'Hum security ko seriously lete hain kyunki yahaan har customer humare software pe apna asli business chala raha hai. Concretely:',
      ],
      bullets: [
        { label: 'Transit mein encryption', text: '399apps.com aur humare cloud products pe sara traffic HTTPS ke through serve hota hai.' },
        { label: 'Rest pe encryption', text: 'Cloud customer data managed infrastructure pe rest pe encrypted rehta hai.' },
        { label: 'Daily backups', text: 'Cloud customer data ka daily backup hota hai aur 30 din ke liye rakha jaata hai.' },
        { label: 'Access controls', text: 'Sirf gine-chune named engineers ke paas production access hai. Production access logged aur reviewed hota hai.' },
        { label: 'Self-host', text: 'Wahi product code aapke self-hosted licence ke roop mein aata hai, versioned releases, signed binaries / images, aur migration scripts ke saath jinhe aap review kar sakte hain.' },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies aur tracking',
      paragraphs: [
        'Humari website sirf essential first-party cookies use karti hai — aapko logged in rakhne ke liye, aapki language preference yaad rakhne ke liye aur abuse se bachne ke liye. Hum koi third-party advertising cookies, behavioural-profiling pixels ya cross-site trackers use nahi karte.',
        'Aap browser mein cookies disable kar sakte hain; marketing site tab bhi kaam karegi, lekin signed-in product sessions nahi chalengi.',
      ],
    },
    {
      id: 'children',
      title: 'Bachhon ka data',
      paragraphs: [
        '399apps products businesses, professional users aur adults ke liye hain. Hum apne purposes ke liye 18 saal se chhote kisi se personal data knowingly collect nahi karte.',
        'Agar aap humare kisi product ko minors ka data handle karne ke liye use karte hain, toh bachhon ke data ke collection aur use par lagne waale laws follow karna aapki zimmedaari hai, jismein parents ya guardians se valid consent lena bhi shaamil hai jahaan zaroori ho.',
      ],
    },
    {
      id: 'transfers',
      title: 'International data transfers',
      paragraphs: [
        'Humara cloud default India-region pe hai. India ke bahar ke customers ke liye, ya jab hum dusre regions se chalne waale sub-processors (jaise Cloudflare ke worldwide edge nodes) use karte hain, tab data India ke bahar transfer ho sakta hai. Hum in sub-processors ke saath contractual safeguards rakhte hain taaki aapka data protected rahe.',
      ],
    },
    {
      id: 'whitelabel',
      title: 'White-label aur reseller deployments',
      paragraphs: [
        'Jab aap humare kisi product ko apne brand ke neeche white-label karte hain, toh aap apne end-customers ke liye data fiduciary hote hain. 399apps aapke platform ka collect kiya gaya customer data ke liye data processor banta hai. Aapke end-customers ko aapki privacy policy dekhni chahiye, humari nahi.',
        'Hum request pe data-processing agreement sign karenge. White-label deployments humare is policy mein ki gayi security aur retention commitments nahi badaltay.',
      ],
    },
    {
      id: 'changes',
      title: 'Is policy mein badlaav',
      paragraphs: [
        'Jaise hum products add karte hain, sub-processors badalte hain, ya law badalti hai, hum is policy ko update kar sakte hain. Material changes hone par hum upar "last updated" date update karenge aur active customers ko primary account email pe email bhejenge.',
        'Effective date ke baad humare products use karna iska matlab hai ki aap updated policy se sahmat hain.',
      ],
    },
  ],
  canonicalNote:
    'Yeh Privacy Policy ki English version hi authoritative legal document hai. Yeh Hinglish version sirf samajhne ki suvidha ke liye hai; kisi bhi farq ya conflict ki soorat mein English version manegi.',
  grievance: {
    title: 'Grievance officer aur contact',
    body: 'Kisi bhi privacy sawaal, access ya deletion request, ya aapka data hum kaise handle kar rahe hain iski concern ke liye — humein likhein. Hum 7 working days mein jawab dene ki koshish karte hain.',
    name: 'shabuilds (399apps ka operator)',
    address: 'India',
    emailLabel: 'Email',
  },
};

const ta: PrivacyCopy = {
  seo: {
    title: 'Privacy Policy — 399apps',
    description:
      '399apps-oda privacy policy: naanga enna collect pannrom, eppadi use pannrom, cloud vs self-hosted-la enna farq, DPDPA-la unga rights, sub-processors, retention, security matrum grievance officer-a eppadi sandhikrathu.',
    keywords: ['399apps privacy policy', 'privacy SaaS India', 'DPDPA compliance', 'business software privacy'],
  },
  hero: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    updated: UPDATED,
  },
  intro: [
    'Indha Privacy Policy sollra 399apps ("naanga", "engal") — shabuilds (shabuilds.tech) operate pannra — 399apps.com-a paarka varum bodhu illa engaloda products (Nidhi Books, Nidhi Inventory matrum Books + Inventory bundle) use pannumbodhu eppadi information collect, use, protect pannradhu nu.',
    'Naanga chinna aana valarum businesses, communities matrum operators-ku business software vikrom — mostly India-la, aana internationally-yum. Indha policy-a chinna, clear, honest-a vekka prayatchikrom. Edhuvum unclear-a irundha, engaluku ezhuthunga, naanga vilakkitharom.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Naanga yaaru',
      paragraphs: [
        '399apps oru chinna business SaaS catalogue — GST-ready accounting matrum inventory — shabuilds build panni run pannradhu. Naanga products-a rendu vazhi-la vikrom: 399apps.com-la managed cloud service-aa, illa neenga unga sontha server-la deploy panra self-hosted licence-aa.',
        'Indha policy-la "neenga" nu sonna, athan artham engal website-oda visitor, engaloda kisi product-oda cloud customer, illa — white-label matrum self-host deployments-ku — apna brand-la 399apps product run panra organisation.',
      ],
    },
    {
      id: 'what-we-collect',
      title: 'Enna information collect pannrom',
      paragraphs: ['Service run panna evvalavu venumo athu mattum collect pannrom:'],
      bullets: [
        { label: 'Account matrum contact details', text: 'Per, work email, company, phone illa WhatsApp number, country — neenga contact form fill pannumbodhu, cloud account sign up pannumbodhu, demo request pannumbodhu, illa engaluku ezhudhumbodhu kidaikum.' },
        { label: 'Cloud-la product data', text: 'Neenga 399apps cloud-la engaloda products-la podra business data — invoices, GST matrum TDS records, stock items — ellam engaloda managed infrastructure-la unga sarbu store aagudhu. Idha naanga confidential customer data-a karuthurom.' },
        { label: 'Self-host-la product data', text: 'Neenga 399apps product-a self-host pannumbodhu, unga business matrum customer data muzhumayaa unga server-la mattum thaan irukum. Engaluku kidaikadhu, naanga backup edukka maatom, access pannrathum illa. Optional anonymous product telemetry (deployment healthy-aa irukka, version numbers) off pannalaam.' },
        { label: 'Payment information', text: 'Cloud subscriptions UPI, NEFT/RTGS, illa cards-ku Razorpay/Stripe/Cashfree mulamaa bill aagudhu. Naanga unga full card number-a paakavum illa store pannavum illa; cardholder peyar, last naalu digits matrum payment provider-oda opaque token mattum.' },
        { label: 'Usage logs', text: 'Standard server logs — IP address, user agent, paartha pages, timestamps — security, debugging matrum aggregate analytics-ku use aagudhu. Engal websites-la edhuvum advertising illa ad-profiling trackers run pannama irukrom.' },
        { label: 'Support uraiyaadalkal', text: 'Neenga engaluku anuppura emails, WhatsApp messages matrum support tickets, ungaluku help panna matrum product-a improve panna evvalavu venumo athu varai vechirukrom.' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'Unga information-a eppadi use pannrom',
      paragraphs: ['Mela sonna information-a specific, narrow purposes-ku mattum use pannrom:'],
      bullets: [
        { label: 'Products deliver panna', text: 'Unga cloud workspace host pannradhu, backups run pannradhu, invoices serve pannradhu, transactional emails (account, password, billing, alerts) anuppradhu.' },
        { label: 'Ungaluku support panna', text: 'Kelvigaluku badhil sollradhu, issues debug pannradhu, Tally / Zoho / QuickBooks-la irundhu guided migration nadathradhu, matrum self-host illa white-label deployments scope panna utavradhu.' },
        { label: 'Safety-ku', text: 'Abuse identify pannradhu, fraud thaduppadu, suspicious activity investigate pannradhu, matrum ungaluku tharra security commitments nadathradhu.' },
        { label: 'Product improve panna', text: 'Aggregate usage analytics paartha — enna features use aagudhu, enna odachadhu, enna apram build pannanum nu. Advertising-ku unga profile build pannamaatom.' },
        { label: 'Legal obligations nirvethika', text: 'GST invoicing, TDS reporting, statutory record-keeping matrum authorities-la irundhu vara lawful requests — evvalavu thேvayoo athu varai mattum.' },
      ],
    },
    {
      id: 'cloud-vs-selfhost',
      title: 'Cloud vs self-hosted — enna maaridhu',
      paragraphs: [
        'Engaloda service-la idhu thaan mukkiyamana practical farq.',
        '399apps cloud-la, unga business data engaloda infrastructure-la host aagudhu, Cloudflare matrum AWS use panni, default India region-la. Unga account-level data-ku naanga data fiduciary, apps-la neenga podra customer-records (unga customers, members, candidates, vendors)-ku data processor.',
        'Self-host-la, unga data eppovum unga server-a vittu veliye poradhu illa. Engaluku credentials illa, backup edukama, access pannrathum illa. Engal role licensed software, version updates, security patches matrum (optional) managed support tharadhu varai mattum — evvalavu kettudheengalo athu varai.',
      ],
    },
    {
      id: 'sharing',
      title: 'Data-a yaarakooda share pannrom',
      paragraphs: [
        'Naanga unga data-a vikkamaatom. Customer business data-a eppovum advertisers, brokers illa social networks-kooda share pannradhu illa. Service run panna thேvayaana chinna list of sub-processors-kooda mattum information share pannrom:',
      ],
      bullets: [
        { label: 'Cloudflare', text: 'DNS, CDN, edge security matrum static content hosting-ku.' },
        { label: 'Amazon Web Services (AWS)', text: 'Application hosting, database hosting matrum cloud customer data storage-ku, default India region.' },
        { label: 'Razorpay / Stripe / Cashfree', text: 'Payment processing-ku — naanga cloud subscriptions-ku use pannradhu, illa white-label deployment-la unga account-ku route pannradhu.' },
        { label: 'Email matrum transactional providers', text: 'Account, billing matrum support emails anuppa (sariyana data-processing terms irukkura providers-kooda mattum).' },
        { label: 'PostHog', text: 'Privacy-respecting, cookieless product analytics (page views matrum feature usage), EU-la hosted — site matrum apps eppadi use aagudhu nu purinjukka. Google Analytics illa, Facebook pixel illa, advertising networks illa.' },
      ],
    },
    {
      id: 'rights',
      title: 'Unga rights',
      paragraphs: [
        'Naanga vechirukura unga personal information mela ungaluku rights irukku. Digital Personal Data Protection Act, 2023 (DPDPA) matrum vetra jurisdictions-oda equivalent laws-oda keezha, indha rights adangum:',
      ],
      bullets: [
        { label: 'Access', text: 'Engal kitta unga enna personal data irukku, naanga enna pannrom, idhoda copy kekkalaam.' },
        { label: 'Correction', text: 'Thavaru illa pazhaiya information-a update illa correct panna kekkalaam.' },
        { label: 'Erasure', text: 'Unga personal data-a delete panna kekkalaam, legal illa tax karaaranggalukku vekka venduginra records thavira.' },
        { label: 'Portability', text: 'Unga data-a standard, machine-readable format-la edhukolla. Ovvoru 399apps app-um neenga podra data-oda unlimited CSV / PDF exports already support pannudhu.' },
        { label: 'Consent waapas edhukolradhu', text: 'Naanga consent mela depend aagura idangalla (eg. marketing emails) eppovum consent waapas edhukolla mudiyum, pazhaiya lawful processing affect aagaadhu.' },
        { label: 'Grievance', text: 'Engal grievance officer-kooda concern ezhuppunga (vivaram policy-oda kadaisi-la) matrum solve aaga vittaa related data protection authority-kku escalate pannunga.' },
      ],
    },
    {
      id: 'retention',
      title: 'Information evvalavu naal vechirupom',
      paragraphs: [
        'Account matrum contact information neenga customer-a irukura varai matrum apramum oru reasonable period legal, billing matrum audit requirements-ku vechirukapadudhu. Cloud product data unga subscription active-a irukura varai vechirukapadudhu; cancel pannina, unga data 90 naal-la active systems-la irundhu, athan piragu innum 30 naal-la backups-la irundhu remove aagidum.',
        'Anonymous aggregate analytics (eg. pona quarter ethana invoices generate aanadhu) time limit illama vechirukapadalaam, kaaranam adhu unga kitta thiruppittu link aagaadhu.',
        'Self-host-la retention muzhumayaa unga control-la.',
      ],
    },
    {
      id: 'security',
      title: 'Information-a eppadi safe-a vechirukrom',
      paragraphs: [
        'Naanga security-a seriously edhukrom kaaranam inga ovvoru customer-um engal software mela tanga actual business-a run pannraanga. Concretely:',
      ],
      bullets: [
        { label: 'Transit-la encryption', text: '399apps.com matrum engal cloud products-ku ella traffic-um HTTPS mulamaa serve aagudhu.' },
        { label: 'Rest-la encryption', text: 'Cloud customer data managed infrastructure-la rest-la encrypted-a irukku.' },
        { label: 'Daily backups', text: 'Cloud customer data daily backup eduppadu, 30 naal retain aagudhu.' },
        { label: 'Access controls', text: 'Konjam named engineers kitta mattum thaan production access. Production access logged matrum reviewed.' },
        { label: 'Self-host', text: 'Adhe product code unga self-hosted licence-aa varum, versioned releases, signed binaries / images, matrum migration scripts (neenga review pannalaam) -oda.' },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies matrum tracking',
      paragraphs: [
        'Engal website essential first-party cookies mattum use pannudhu — ungalai logged in vekka, unga language preference niyabagam vekka matrum abuse-la irundhu kaakka. Naanga edha third-party advertising cookies, behavioural-profiling pixels illa cross-site trackers use pannamaatom.',
        'Neenga browser-la cookies disable pannalaam; marketing site velai seyyum, aana signed-in product sessions velai seyyaadhu.',
      ],
    },
    {
      id: 'children',
      title: 'Kuzhandhaigaloda data',
      paragraphs: [
        '399apps products businesses, professional users matrum adults-ku. Naanga engal purposes-ku 18 vayasukkulla yaarudaiya personal data-yum knowingly collect pannamaatom.',
        'Neenga engal kisi product-a minors-oda data handle panna use panneengana, kuzhandhaigaloda data collection matrum use mela varum applicable laws follow pannradhu unga zimmedaari, thேvayaana parents illa guardians-la irundhu valid consent vaangurathu inclusive.',
      ],
    },
    {
      id: 'transfers',
      title: 'International data transfers',
      paragraphs: [
        'Engal cloud default India-region. India veliye ulla customers-ku, illa naanga vetra regions-la operate aagra sub-processors (eg. Cloudflare-oda worldwide edge nodes) use pannumbodhu, data India veliye transfer aagalaam. Indha sub-processors-kooda contractual safeguards vechirukrom unga data protected-a irukurathuku.',
      ],
    },
    {
      id: 'whitelabel',
      title: 'White-label matrum reseller deployments',
      paragraphs: [
        'Neenga engal kisi product-a sontha brand-la white-label pannumbodhu, unga end-customers-ku neenga data fiduciary. 399apps unga platform collect panra customer data-ku data processor-aa irukum. Unga end-customers ungaloda privacy policy-a paakanum, engaludhu illa.',
        'Naanga request pannina data-processing agreement sign pannrom. White-label deployments indha policy-la naanga panra security matrum retention commitments-a maathaadhu.',
      ],
    },
    {
      id: 'changes',
      title: 'Indha policy-la maatrangal',
      paragraphs: [
        'Products add aagumbodhu, sub-processors maarumbodhu, illa law maarumbodhu naanga indha policy-a update pannalaam. Material changes-ku mela "last updated" date update pannrom matrum active customers-ku primary account email-ku email anuppurom.',
        'Effective date-ku piragu engal products use pannradhu artham updated policy-a ஏற்றுக்கொள்வது.',
      ],
    },
  ],
  canonicalNote:
    'Indha Privacy Policy-oda English version mattum thaan authoritative legal document. Indha Tanglish version purinjuko vasathi-ku mattum thaan; edha conflict-um irundha English version-um nadakkum.',
  grievance: {
    title: 'Grievance officer matrum contact',
    body: 'Edha privacy kelvi, access illa deletion request, illa unga data eppadi handle pannrom-na concern irundha — engaluku ezhuthunga. 7 working days-la badhil tara prayatchikrom.',
    name: 'shabuilds (399apps-oda operator)',
    address: 'India',
    emailLabel: 'Email',
  },
};

const hindi: PrivacyCopy = {
  seo: {
    title: 'गोपनीयता नीति — 399apps',
    description:
      '399apps की गोपनीयता नीति: हम क्या एकत्र करते हैं, उसका उपयोग कैसे करते हैं, क्लाउड और सेल्फ़-होस्टेड में अंतर, DPDPA के तहत आपके अधिकार, sub-processors, retention, security और हमारे शिकायत अधिकारी से कैसे संपर्क करें।',
    keywords: ['399apps privacy policy', 'privacy SaaS India', 'DPDPA compliance', 'business software privacy'],
  },
  hero: {
    eyebrow: 'क़ानूनी',
    title: 'गोपनीयता नीति',
    updatedLabel: 'अंतिम बार अद्यतन',
    updated: UPDATED,
  },
  intro: [
    'यह गोपनीयता नीति बताती है कि 399apps ("हम", "हमारा") — जिसे shabuilds (shabuilds.tech) चलाता है — 399apps.com पर आने पर या हमारे किसी भी प्रोडक्ट (Nidhi Books, Nidhi Inventory और Books + Inventory बंडल) के इस्तेमाल पर जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।',
    'हम छोटे और बढ़ते businesses, communities और operators को business software बेचते हैं — मुख्य रूप से India में, लेकिन अन्य देशों में भी। हम इस नीति को छोटा, स्पष्ट और ईमानदार रखने की कोशिश करते हैं। अगर कुछ अस्पष्ट हो, हमें लिखें, हम समझा देंगे।',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'हम कौन हैं',
      paragraphs: [
        '399apps business SaaS का एक छोटा catalogue है — GST-ready accounting और inventory — जिसे shabuilds बनाता और चलाता है। हम अपने प्रोडक्ट दो तरह से बेचते हैं: 399apps.com पर managed cloud service के रूप में, या एक self-hosted licence के रूप में जिसे आप अपने सर्वर पर deploy करते हैं।',
        'इस नीति में "आप" का अर्थ हमारी वेबसाइट का visitor, किसी प्रोडक्ट का cloud ग्राहक, या — white-label और self-host deployments के लिए — वह organisation है जो अपने ब्रांड के तहत 399apps प्रोडक्ट चलाता है।',
      ],
    },
    {
      id: 'what-we-collect',
      title: 'हम क्या जानकारी एकत्र करते हैं',
      paragraphs: ['Service चलाने के लिए जितनी ज़रूरत है, सिर्फ़ उतनी ही एकत्र करते हैं:'],
      bullets: [
        { label: 'खाता और संपर्क विवरण', text: 'नाम, work email, कंपनी, फ़ोन या WhatsApp नंबर, देश — जब आप contact form भरते हैं, cloud account बनाते हैं, demo request करते हैं या हमें लिखते हैं तब मिलता है।' },
        { label: 'क्लाउड पर प्रोडक्ट डेटा', text: '399apps cloud पर हमारे प्रोडक्ट में आप जो business data डालते हैं — invoices, GST और TDS records, stock items — वह हमारी managed infrastructure पर आपकी ओर से store होता है। हम इसे गोपनीय customer data मानते हैं।' },
        { label: 'सेल्फ़-होस्ट पर प्रोडक्ट डेटा', text: 'जब आप 399apps प्रोडक्ट को self-host करते हैं, आपका business और customer data पूरी तरह आपके सर्वर पर रहता है। हमें मिलता नहीं, हम बैकअप नहीं लेते, हम access नहीं करते। वैकल्पिक anonymous product telemetry (deployment स्वस्थ है या नहीं, version numbers) बंद की जा सकती है।' },
        { label: 'भुगतान जानकारी', text: 'Cloud subscriptions UPI, NEFT/RTGS, या cards के लिए Razorpay/Stripe/Cashfree के माध्यम से billed होती हैं। हम कभी आपका पूरा कार्ड नंबर नहीं देखते या store करते; केवल cardholder का नाम, अंतिम चार अंक और payment provider का token रखते हैं।' },
        { label: 'Usage logs', text: 'Standard सर्वर लॉग्स — IP address, user agent, visit किए गए पेज, timestamps — security, debugging और aggregate analytics के लिए। हमारी websites पर कोई advertising या ad-profiling tracker नहीं चलता।' },
        { label: 'Support वार्तालाप', text: 'आप जो emails, WhatsApp messages और support tickets हमें भेजते हैं, वे उस अवधि तक रखे जाते हैं जब तक आपकी मदद करने और प्रोडक्ट सुधारने के लिए ज़रूरी हो।' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'हम आपकी जानकारी कैसे इस्तेमाल करते हैं',
      paragraphs: ['ऊपर बताई गई जानकारी सिर्फ़ विशिष्ट, सीमित उद्देश्यों के लिए ही उपयोग की जाती है:'],
      bullets: [
        { label: 'प्रोडक्ट देने के लिए', text: 'आपका cloud workspace host करना, बैकअप चलाना, invoices serve करना, transactional emails (account, password, billing, alerts) भेजना।' },
        { label: 'आपकी सहायता के लिए', text: 'सवालों के जवाब देना, issues debug करना, Tally / Zoho / QuickBooks से guided migration चलाना, और self-host या white-label deployment scope करने में मदद करना।' },
        { label: 'सुरक्षा के लिए', text: 'दुरुपयोग पहचानना, fraud रोकना, संदिग्ध गतिविधि जाँचना, और आपके साथ की गई security प्रतिबद्धताओं को पूरा करना।' },
        { label: 'प्रोडक्ट सुधारने के लिए', text: 'Aggregate usage analytics देखना कि कौनसे features उपयोग हो रहे हैं, क्या टूट रहा है और आगे क्या बनाना है। हम advertising के लिए आपका profile नहीं बनाते।' },
        { label: 'क़ानूनी दायित्व पूरे करने के लिए', text: 'GST invoicing, TDS reporting, statutory record-keeping और प्राधिकरणों से वैध अनुरोध — केवल आवश्यक सीमा तक।' },
      ],
    },
    {
      id: 'cloud-vs-selfhost',
      title: 'क्लाउड vs सेल्फ़-होस्टेड — क्या बदलता है',
      paragraphs: [
        'यह हमारी service में सबसे महत्वपूर्ण व्यावहारिक अंतर है।',
        '399apps cloud पर, आपका business data हमारी infrastructure पर host होता है — Cloudflare और AWS के साथ, default India region पर। आपके account-level data के लिए हम data fiduciary हैं, और जो customer-records आप apps में डालते हैं (आपके customers, members, candidates, vendors) उनके लिए data processor।',
        'सेल्फ़-होस्ट पर, आपका data कभी आपके सर्वर से बाहर नहीं जाता। हमारे पास credentials नहीं होते, हम बैकअप नहीं लेते, और आप तय करते हैं कि team में किसकी access है। हमारी भूमिका सिर्फ़ licensed software, version updates, security patches और (वैकल्पिक) managed support देने तक सीमित है — जितना आपने माँगा है।',
      ],
    },
    {
      id: 'sharing',
      title: 'हम डेटा किसके साथ साझा करते हैं',
      paragraphs: [
        'हम आपका डेटा बेचते नहीं। हम customer business data कभी advertisers, brokers या social networks के साथ साझा नहीं करते। हम केवल छोटे sub-processors के साथ जानकारी साझा करते हैं जो service चलाने के लिए ज़रूरी हैं:',
      ],
      bullets: [
        { label: 'Cloudflare', text: 'DNS, CDN, edge security और static content hosting के लिए।' },
        { label: 'Amazon Web Services (AWS)', text: 'Application hosting, database hosting और cloud customer data के storage के लिए, default India region।' },
        { label: 'Razorpay / Stripe / Cashfree', text: 'Payment processing के लिए — cloud subscriptions के लिए हम उपयोग करते हैं, या white-label deployment पर आपके अपने account पर route होता है।' },
        { label: 'Email और transactional providers', text: 'Account, billing और support emails भेजने के लिए (केवल उन providers के साथ जिनके साथ उचित data-processing terms हैं)।' },
        { label: 'PostHog', text: 'Privacy का सम्मान करने वाली, cookieless product analytics (page views और feature usage), EU में hosted — यह समझने के लिए कि site और apps कैसे उपयोग होते हैं। कोई Google Analytics नहीं, कोई Facebook pixel नहीं, कोई advertising network नहीं।' },
      ],
    },
    {
      id: 'rights',
      title: 'आपके अधिकार',
      paragraphs: [
        'हमारे पास रखी आपकी personal जानकारी पर आपके अधिकार हैं। Digital Personal Data Protection Act, 2023 (DPDPA) और अन्य jurisdictions के समान क़ानूनों के तहत, इनमें शामिल हैं:',
      ],
      bullets: [
        { label: 'पहुँच', text: 'हमारे पास आपका कौनसा personal data है और हम उसका क्या करते हैं, इसकी कॉपी माँगें।' },
        { label: 'सुधार', text: 'गलत या पुरानी जानकारी update या correct करवाएँ।' },
        { label: 'मिटाना', text: 'अपना personal data delete करवाएँ, उन records को छोड़कर जो हमें क़ानूनी या tax कारणों से रखने हैं।' },
        { label: 'पोर्टेबिलिटी', text: 'अपना data standard, machine-readable format में लें। हर 399apps app आपके दर्ज किए गए data के unlimited CSV / PDF exports पहले से support करता है।' },
        { label: 'सहमति वापस लेना', text: 'जहाँ हम आपकी सहमति पर निर्भर हैं (जैसे marketing emails) वहाँ कभी भी सहमति वापस ले सकते हैं, बिना पिछली वैध processing को प्रभावित किए।' },
        { label: 'शिकायत', text: 'हमारे शिकायत अधिकारी से concern उठाएँ (विवरण नीति के अंत में) और न सुलझे तो संबंधित data protection authority तक escalate करें।' },
      ],
    },
    {
      id: 'retention',
      title: 'हम जानकारी कितने समय तक रखते हैं',
      paragraphs: [
        'खाता और संपर्क जानकारी आप customer रहें उतने समय तक रखी जाती है, और उसके बाद भी एक उचित अवधि तक legal, billing और audit ज़रूरतों के लिए। Cloud product data तब तक रखा जाता है जब तक आपकी subscription active है; cancel करने पर, आपका data 90 दिन में active systems से और उसके बाद 30 दिन में बैकअप से हटा दिया जाता है।',
        'गुमनाम aggregate analytics (जैसे पिछले quarter में कितने invoices generate हुए) बिना समय-सीमा के रखी जा सकती है, क्योंकि वह आपसे लिंक नहीं की जा सकती।',
        'सेल्फ़-होस्ट पर retention पूरी तरह आपके नियंत्रण में है।',
      ],
    },
    {
      id: 'security',
      title: 'हम जानकारी सुरक्षित कैसे रखते हैं',
      paragraphs: [
        'हम security को गंभीरता से लेते हैं क्योंकि यहाँ हर customer हमारे software पर अपना वास्तविक business चला रहा है। ठोस रूप से:',
      ],
      bullets: [
        { label: 'Transit में encryption', text: '399apps.com और हमारे cloud products का सारा ट्रैफ़िक HTTPS पर serve होता है।' },
        { label: 'Rest पर encryption', text: 'Cloud customer data managed infrastructure पर rest पर encrypted रहता है।' },
        { label: 'दैनिक बैकअप', text: 'Cloud customer data का daily backup होता है और 30 दिनों तक रखा जाता है।' },
        { label: 'Access नियंत्रण', text: 'सिर्फ़ चुने हुए नामांकित engineers के पास production access है। Production access logged और reviewed होता है।' },
        { label: 'सेल्फ़-होस्ट', text: 'वही product code आपके self-hosted licence के रूप में आता है — versioned releases, signed binaries / images, और review-योग्य migration scripts के साथ।' },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies और tracking',
      paragraphs: [
        'हमारी website केवल essential first-party cookies उपयोग करती है — आपको logged in रखने, आपकी language preference याद रखने और दुरुपयोग से बचाने के लिए। हम कोई third-party advertising cookies, behavioural-profiling pixels या cross-site trackers उपयोग नहीं करते।',
        'आप browser में cookies disable कर सकते हैं; marketing site फिर भी काम करेगी, लेकिन signed-in product sessions नहीं चलेंगे।',
      ],
    },
    {
      id: 'children',
      title: 'बच्चों का डेटा',
      paragraphs: [
        '399apps products businesses, professional users और वयस्कों के लिए हैं। हम अपने उद्देश्यों के लिए 18 साल से कम उम्र के किसी से personal data जानबूझकर एकत्र नहीं करते।',
        'अगर आप हमारे किसी प्रोडक्ट का उपयोग बच्चों का data handle करने के लिए करते हैं, तो बच्चों के data के संग्रह और उपयोग पर लागू क़ानूनों का पालन करना आपकी ज़िम्मेदारी है, जहाँ ज़रूरी हो वहाँ माता-पिता या अभिभावकों से वैध सहमति लेना भी इसमें शामिल है।',
      ],
    },
    {
      id: 'transfers',
      title: 'अंतरराष्ट्रीय data transfers',
      paragraphs: [
        'हमारा cloud default India-region है। India के बाहर के customers के लिए, या जब हम अन्य regions से चलने वाले sub-processors (जैसे Cloudflare के worldwide edge nodes) उपयोग करते हैं, तब data India के बाहर transfer हो सकता है। हम इन sub-processors के साथ contractual सुरक्षा रखते हैं ताकि आपका data protected रहे।',
      ],
    },
    {
      id: 'whitelabel',
      title: 'व्हाइट-लेबल और reseller deployments',
      paragraphs: [
        'जब आप हमारे किसी प्रोडक्ट को अपने ब्रांड के तहत व्हाइट-लेबल करते हैं, तो आप अपने end-customers के लिए data fiduciary होते हैं। आपका platform जो customer data एकत्र करता है, उसके लिए 399apps data processor की भूमिका में होता है। आपके end-customers को आपकी privacy policy देखनी चाहिए, हमारी नहीं।',
        'हम request पर data-processing agreement पर sign करेंगे। White-label deployments इस नीति में हमारी security और retention प्रतिबद्धताओं को नहीं बदलते।',
      ],
    },
    {
      id: 'changes',
      title: 'इस नीति में बदलाव',
      paragraphs: [
        'जैसे-जैसे हम प्रोडक्ट जोड़ते हैं, sub-processors बदलते हैं, या क़ानून बदलते हैं, हम इस नीति को update कर सकते हैं। Material बदलावों पर हम ऊपर "अंतिम बार अद्यतन" date update करेंगे और active customers को primary account email पर email भेजेंगे।',
        'Effective date के बाद हमारे प्रोडक्ट इस्तेमाल करने का अर्थ है कि आप updated नीति से सहमत हैं।',
      ],
    },
  ],
  canonicalNote:
    'इस गोपनीयता नीति का अंग्रेज़ी संस्करण ही आधिकारिक कानूनी दस्तावेज़ है। यह हिन्दी संस्करण केवल समझने की सुविधा के लिए है; किसी भी अंतर या टकराव की स्थिति में अंग्रेज़ी संस्करण मान्य होगा।',
  grievance: {
    title: 'शिकायत अधिकारी और संपर्क',
    body: 'किसी भी गोपनीयता प्रश्न, access या deletion request, या आपका data हम कैसे संभाल रहे हैं इसकी चिंता के लिए — कृपया हमें लिखें। हम 7 कार्यदिवस के भीतर जवाब देने का प्रयास करते हैं।',
    name: 'shabuilds (399apps का operator)',
    address: 'India',
    emailLabel: 'Email',
  },
};

const tamil: PrivacyCopy = {
  seo: {
    title: 'தனியுரிமைக் கொள்கை — 399apps',
    description:
      '399apps-இன் தனியுரிமைக் கொள்கை: நாங்கள் என்ன சேகரிக்கிறோம், எப்படி பயன்படுத்துகிறோம், கிளவுட் மற்றும் செல்ஃப்-ஹோஸ்டட் இடையே வேறுபாடு, DPDPA-வின் கீழ் உங்கள் உரிமைகள், sub-processors, தக்கவைப்பு, பாதுகாப்பு மற்றும் எங்கள் குறை தீர்ப்பு அதிகாரியை எப்படி அணுகுவது.',
    keywords: ['399apps privacy policy', 'privacy SaaS India', 'DPDPA compliance', 'business software privacy'],
  },
  hero: {
    eyebrow: 'சட்ட',
    title: 'தனியுரிமைக் கொள்கை',
    updatedLabel: 'கடைசியாக புதுப்பிக்கப்பட்டது',
    updated: UPDATED,
  },
  intro: [
    'இந்த தனியுரிமைக் கொள்கை விளக்குகிறது 399apps ("நாங்கள்", "எங்கள்") — shabuilds (shabuilds.tech) நிர்வகிக்கிறது — 399apps.com-ஐ பார்வையிடும் போது அல்லது எங்கள் தயாரிப்புகளில் ஒன்றை (Nidhi Books, Nidhi Inventory மற்றும் Books + Inventory பண்டில்) பயன்படுத்தும் போது தகவலை எப்படி சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை.',
    'நாங்கள் சிறிய மற்றும் வளரும் businesses, communities மற்றும் operators-க்கு business software விற்கிறோம் — முதன்மையாக India-வில், ஆனால் சர்வதேச அளவிலும். இந்த கொள்கையை குறுகியதாக, தெளிவாக, நேர்மையாக வைக்க முயற்சிக்கிறோம். எதுவும் தெளிவில்லாமல் இருந்தால், எங்களுக்கு எழுதுங்கள், விளக்குகிறோம்.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'நாங்கள் யார்',
      paragraphs: [
        '399apps என்பது business SaaS-இன் சிறிய தொகுப்பு — GST-ready accounting மற்றும் inventory — shabuilds கட்டி, இயக்குகிறது. நாங்கள் எங்கள் தயாரிப்புகளை இரண்டு வழிகளில் விற்கிறோம்: 399apps.com-ல் managed cloud service ஆக, அல்லது நீங்கள் உங்கள் சர்வரில் deploy செய்யும் self-hosted licence ஆக.',
        'இந்த கொள்கையில் "நீங்கள்" என்றால் எங்கள் வலைதளத்தின் visitor, எங்கள் தயாரிப்புகளில் ஒன்றின் cloud customer, அல்லது — white-label மற்றும் self-host deployments-க்கு — தங்கள் ப்ராண்டின் கீழ் 399apps தயாரிப்பை இயக்கும் organisation.',
      ],
    },
    {
      id: 'what-we-collect',
      title: 'நாங்கள் என்ன தகவல் சேகரிக்கிறோம்',
      paragraphs: ['சேவையை இயக்க எவ்வளவு தேவையோ அவ்வளவே சேகரிக்கிறோம்:'],
      bullets: [
        { label: 'கணக்கு மற்றும் தொடர்பு விவரங்கள்', text: 'பெயர், work email, நிறுவனம், தொலைபேசி அல்லது WhatsApp எண், நாடு — நீங்கள் contact form நிரப்பும் போது, cloud கணக்கு உருவாக்கும் போது, டெமோ கோரும் போது, அல்லது எங்களுக்கு எழுதும் போது கிடைக்கும்.' },
        { label: 'கிளவுடில் தயாரிப்பு டேட்டா', text: '399apps cloud-ல் எங்கள் தயாரிப்புகளில் நீங்கள் வைக்கும் business data — invoices, GST மற்றும் TDS records, stock items — எங்கள் managed infrastructure-ல் உங்களுக்காக சேமிக்கப்படுகிறது. இதை நாங்கள் ரகசிய customer data ஆக கருதுகிறோம்.' },
        { label: 'செல்ஃப்-ஹோஸ்டில் தயாரிப்பு டேட்டா', text: 'நீங்கள் 399apps தயாரிப்பை self-host செய்யும் போது, உங்கள் business மற்றும் customer data முழுமையாக உங்கள் சர்வரில் தங்கியிருக்கும். எங்களுக்கு கிடைக்காது, நாங்கள் backup எடுக்க மாட்டோம், access செய்ய மாட்டோம். விருப்ப அநாமதேய தயாரிப்பு telemetry (deployment ஆரோக்கியமாக உள்ளதா, version எண்கள்) ஆஃப் செய்யலாம்.' },
        { label: 'பேமென்ட் தகவல்', text: 'Cloud subscriptions UPI, NEFT/RTGS, அல்லது cards-க்கு Razorpay/Stripe/Cashfree மூலம் billed. நாங்கள் உங்கள் முழு கார்டு எண்ணை பார்க்கவோ சேமிக்கவோ மாட்டோம்; cardholder பெயர், கடைசி நான்கு இலக்கங்கள் மற்றும் payment provider-இன் opaque token மட்டுமே.' },
        { label: 'பயன்பாடு logs', text: 'Standard சர்வர் logs — IP address, user agent, பார்த்த பக்கங்கள், timestamps — security, debugging மற்றும் aggregate analytics-க்கு. எங்கள் வலைதளங்களில் எந்த advertising அல்லது ad-profiling trackers நாங்கள் இயக்கவில்லை.' },
        { label: 'ஆதரவு உரையாடல்கள்', text: 'நீங்கள் எங்களுக்கு அனுப்பும் emails, WhatsApp messages மற்றும் support tickets, உங்களுக்கு உதவ மற்றும் தயாரிப்பை மேம்படுத்த எவ்வளவு காலம் தேவையோ அவ்வளவு காலம் வைக்கப்படும்.' },
      ],
    },
    {
      id: 'how-we-use',
      title: 'உங்கள் தகவலை எப்படி பயன்படுத்துகிறோம்',
      paragraphs: ['மேலே உள்ள தகவல் குறிப்பிட்ட, குறுகலான நோக்கங்களுக்கு மட்டுமே பயன்படுத்தப்படுகிறது:'],
      bullets: [
        { label: 'தயாரிப்புகளை வழங்க', text: 'உங்கள் cloud workspace-ஐ host செய்யவும், backups இயக்கவும், invoices serve செய்யவும், transactional emails (account, password, billing, alerts) அனுப்பவும்.' },
        { label: 'உங்களுக்கு ஆதரவளிக்க', text: 'கேள்விகளுக்கு பதிலளிப்பது, issues debug செய்வது, Tally / Zoho / QuickBooks-லிருந்து வழிகாட்டப்பட்ட migration நடத்துவது, self-host அல்லது white-label deployment scope செய்ய உதவுவது.' },
        { label: 'பாதுகாப்புக்கு', text: 'துஷ்பிரயோகத்தை அடையாளம் காண, மோசடியை தடுக்க, சந்தேகத்திற்கிடமான செயல்பாட்டை ஆராய, மற்றும் உங்களுக்கு வழங்கப்பட்ட security உறுதிமொழிகளை நிறைவேற்ற.' },
        { label: 'தயாரிப்பு மேம்பாட்டிற்கு', text: 'எந்த features பயன்படுத்தப்படுகின்றன, என்ன உடைந்திருக்கிறது, அடுத்து என்ன கட்ட வேண்டும் என்பதை புரிந்துகொள்ள aggregate usage analytics. நாங்கள் advertising-க்காக உங்கள் profile-ஐ உருவாக்க மாட்டோம்.' },
        { label: 'சட்ட கடமைகளை நிறைவேற்ற', text: 'GST invoicing, TDS reporting, statutory record-keeping மற்றும் அதிகாரிகளிடமிருந்து சட்டபூர்வ கோரிக்கைகள் — தேவையான அளவுக்கு மட்டுமே.' },
      ],
    },
    {
      id: 'cloud-vs-selfhost',
      title: 'கிளவுட் vs செல்ஃப்-ஹோஸ்டட் — என்ன மாறுகிறது',
      paragraphs: [
        'இது எங்கள் சேவையில் மிக முக்கியமான நடைமுறை வேறுபாடு.',
        '399apps cloud-ல், உங்கள் business data எங்களால் இயக்கப்படும் Cloudflare மற்றும் AWS infrastructure-ல் host செய்யப்படுகிறது, India region இயல்புநிலையாக. உங்கள் account-level data-க்கு நாங்கள் data fiduciary, மற்றும் நீங்கள் apps-ல் வைக்கும் customer-records-க்கு (உங்கள் customers, members, candidates, vendors) data processor.',
        'செல்ஃப்-ஹோஸ்டில், உங்கள் data எப்போதும் உங்கள் சர்வரை விட்டு வெளியே செல்வதில்லை. எங்களிடம் credentials இல்லை, நாங்கள் backup எடுப்பதில்லை, யாரிடம் access கொடுப்பீர்கள் என்று நீங்கள் முடிவு செய்கிறீர்கள். எங்கள் பங்கு licensed software, version updates, security patches மற்றும் (விருப்பத்தில்) managed support வழங்குவது மட்டுமே — நீங்கள் கேட்டது போல.',
      ],
    },
    {
      id: 'sharing',
      title: 'டேட்டாவை யாருடன் பகிர்கிறோம்',
      paragraphs: [
        'நாங்கள் உங்கள் data-ஐ விற்பதில்லை. customer business data-ஐ ஒருபோதும் advertisers, brokers அல்லது social networks-உடன் பகிர்வதில்லை. சேவை இயக்க தேவையான சிறிய sub-processors-உடன் மட்டுமே தகவல் பகிர்கிறோம்:',
      ],
      bullets: [
        { label: 'Cloudflare', text: 'DNS, CDN, edge security மற்றும் static content hosting-க்கு.' },
        { label: 'Amazon Web Services (AWS)', text: 'Application hosting, database hosting மற்றும் cloud customer data சேமிப்புக்கு, இயல்புநிலையாக India region.' },
        { label: 'Razorpay / Stripe / Cashfree', text: 'Payment processing-க்கு — cloud subscriptions-க்கு நாங்கள் பயன்படுத்துவது, அல்லது white-label deployment-ல் உங்கள் account-க்கு route செய்வது.' },
        { label: 'Email மற்றும் transactional providers', text: 'Account, billing மற்றும் support emails அனுப்ப (சரியான data-processing terms உள்ள providers-உடன் மட்டுமே).' },
        { label: 'PostHog', text: 'Privacy-respecting, cookieless product analytics (page views மற்றும் feature usage), EU-ல் hosted — site மற்றும் apps எப்படி பயன்படுத்தப்படுகின்றன என்பதை புரிந்துகொள்ள. Google Analytics இல்லை, Facebook pixel இல்லை, advertising networks இல்லை.' },
      ],
    },
    {
      id: 'rights',
      title: 'உங்கள் உரிமைகள்',
      paragraphs: [
        'எங்களிடம் உள்ள உங்கள் personal தகவல் மீது உங்களுக்கு உரிமைகள் உள்ளன. Digital Personal Data Protection Act, 2023 (DPDPA) மற்றும் பிற நாடுகளின் சமமான சட்டங்களின் கீழ், இவை அடங்கும்:',
      ],
      bullets: [
        { label: 'அணுகல்', text: 'எங்களிடம் உங்கள் என்ன personal data உள்ளது, நாங்கள் என்ன செய்கிறோம் என்பதன் copy கேளுங்கள்.' },
        { label: 'திருத்தம்', text: 'தவறான அல்லது பழைய தகவலை update அல்லது correct செய்ய கேளுங்கள்.' },
        { label: 'அழித்தல்', text: 'உங்கள் personal data-ஐ delete செய்ய கேளுங்கள், சட்ட அல்லது வரி காரணங்களுக்காக நாங்கள் வைக்க வேண்டிய records தவிர.' },
        { label: 'நகர்த்தல்', text: 'உங்கள் data-ஐ standard, machine-readable format-ல் பெறுங்கள். ஒவ்வொரு 399apps app-ம் நீங்கள் உள்ளிட்ட data-வின் unlimited CSV / PDF exports-ஐ ஏற்கனவே ஆதரிக்கிறது.' },
        { label: 'சம்மதம் திரும்பப் பெறுதல்', text: 'நாங்கள் உங்கள் சம்மதத்தை சார்ந்திருக்கும் இடங்களில் (உ.ம். marketing emails) எப்போது வேண்டுமானாலும் சம்மதத்தை திரும்பப் பெறலாம், கடந்த சட்டபூர்வ processing-ஐ பாதிக்காமல்.' },
        { label: 'குறைதீர்வு', text: 'எங்கள் குறை தீர்ப்பு அதிகாரியிடம் கவலையை எழுப்புங்கள் (விவரம் கொள்கையின் முடிவில்) மற்றும் தீர்க்கப்படாவிட்டால் தொடர்புடைய data protection அதிகாரத்திற்கு எஸ்கலேட் செய்யுங்கள்.' },
      ],
    },
    {
      id: 'retention',
      title: 'தகவலை எவ்வளவு காலம் வைத்திருக்கிறோம்',
      paragraphs: [
        'கணக்கு மற்றும் தொடர்பு தகவல் நீங்கள் customer-ஆக இருக்கும் வரை வைக்கப்படும், மற்றும் அதன் பின் ஒரு நியாயமான காலம் வரை சட்ட, பில்லிங் மற்றும் audit தேவைகளுக்காக. Cloud product data உங்கள் subscription active-ஆக இருக்கும் வரை வைக்கப்படும்; ரத்து செய்தால், உங்கள் data 90 நாட்களில் active systems-லிருந்து, மற்றும் அதன் பின் 30 நாட்களில் backups-லிருந்து அகற்றப்படும்.',
        'அநாமதேய aggregate analytics (உ.ம். கடந்த காலாண்டில் எத்தனை invoices உருவாக்கப்பட்டன) கால வரம்பு இல்லாமல் வைக்கப்படலாம், ஏனெனில் அது உங்களுடன் இணைக்கப்பட முடியாது.',
        'செல்ஃப்-ஹோஸ்டில் retention முழுமையாக உங்கள் கட்டுப்பாட்டில்.',
      ],
    },
    {
      id: 'security',
      title: 'தகவலை எப்படி பாதுகாக்கிறோம்',
      paragraphs: [
        'நாங்கள் security-ஐ தீவிரமாக எடுத்துக் கொள்கிறோம், ஏனெனில் இங்கு ஒவ்வொரு customer-ம் எங்கள் software-ல் தங்கள் உண்மையான business-ஐ இயக்குகிறார்கள். தெளிவாக:',
      ],
      bullets: [
        { label: 'Transit-ல் encryption', text: '399apps.com மற்றும் எங்கள் cloud products-க்கான அனைத்து traffic-ம் HTTPS மூலம் serve செய்யப்படுகிறது.' },
        { label: 'Rest-ல் encryption', text: 'Cloud customer data managed infrastructure-ல் rest-ல் encrypted-ஆக இருக்கிறது.' },
        { label: 'தினசரி backups', text: 'Cloud customer data தினசரி backup எடுக்கப்படுகிறது மற்றும் 30 நாட்கள் தக்கவைக்கப்படுகிறது.' },
        { label: 'அணுகல் கட்டுப்பாடுகள்', text: 'குறிப்பிட்ட பெயரிடப்பட்ட engineers-க்கு மட்டுமே production access. Production access logged மற்றும் reviewed.' },
        { label: 'செல்ஃப்-ஹோஸ்ட்', text: 'அதே product code உங்கள் self-hosted licence-ஆக வருகிறது — versioned releases, signed binaries / images, மற்றும் நீங்கள் review செய்யக்கூடிய migration scripts உடன்.' },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies மற்றும் tracking',
      paragraphs: [
        'எங்கள் வலைதளம் அத்தியாவசிய first-party cookies-ஐ மட்டுமே பயன்படுத்துகிறது — உங்களை logged in வைக்க, உங்கள் மொழி preference-ஐ நினைவில் வைக்க மற்றும் துஷ்பிரயோகத்திலிருந்து பாதுகாக்க. நாங்கள் எந்த third-party advertising cookies, behavioural-profiling pixels அல்லது cross-site trackers-ஐ பயன்படுத்துவதில்லை.',
        'நீங்கள் browser-ல் cookies-ஐ disable செய்யலாம்; marketing site தொடர்ந்து வேலை செய்யும், ஆனால் signed-in product sessions வேலை செய்யாது.',
      ],
    },
    {
      id: 'children',
      title: 'குழந்தைகளின் டேட்டா',
      paragraphs: [
        '399apps தயாரிப்புகள் businesses, professional users மற்றும் வயதுவந்தோருக்காக. எங்கள் சொந்த நோக்கங்களுக்காக 18 வயதிற்குட்பட்ட எவரிடமிருந்தும் personal data-ஐ தெரிந்தே சேகரிப்பதில்லை.',
        'நீங்கள் எங்கள் தயாரிப்புகளில் ஒன்றை minors-இன் data-ஐ கையாள பயன்படுத்தினால், குழந்தைகளின் data சேகரிப்பு மற்றும் பயன்பாட்டில் பொருந்தும் சட்டங்களை பின்பற்றுவது உங்கள் பொறுப்பு, தேவையான இடங்களில் பெற்றோர் அல்லது பாதுகாவலர்களிடமிருந்து சரியான சம்மதம் பெறுவது உட்பட.',
      ],
    },
    {
      id: 'transfers',
      title: 'சர்வதேச டேட்டா இடமாற்றங்கள்',
      paragraphs: [
        'எங்கள் cloud இயல்புநிலையில் India-region-ல். India-வுக்கு வெளியே உள்ள customers-க்கு, அல்லது நாங்கள் பிற regions-லிருந்து இயக்கப்படும் sub-processors-ஐ (உ.ம். Cloudflare-இன் உலகளாவிய edge nodes) பயன்படுத்தும் போது, data India-வுக்கு வெளியே transfer ஆகலாம். இந்த sub-processors-உடன் ஒப்பந்த பாதுகாப்புகளை வைத்திருக்கிறோம், உங்கள் data பாதுகாக்கப்பட்டிருப்பதை உறுதி செய்ய.',
      ],
    },
    {
      id: 'whitelabel',
      title: 'ஒயிட்-லேபல் மற்றும் reseller deployments',
      paragraphs: [
        'நீங்கள் எங்கள் தயாரிப்புகளில் ஒன்றை உங்கள் ப்ராண்டின் கீழ் ஒயிட்-லேபல் செய்யும் போது, உங்கள் end-customers-க்கு நீங்கள் data fiduciary. உங்கள் platform சேகரிக்கும் customer data-க்கு 399apps data processor-ஆக செயல்படுகிறது. உங்கள் end-customers உங்கள் privacy policy-ஐ பார்க்க வேண்டும், எங்களுடையதை அல்ல.',
        'கோரிக்கையின் பேரில் நாங்கள் data-processing agreement-ஐ கையெழுத்திடுவோம். White-label deployments இந்த கொள்கையில் நாங்கள் செய்த security மற்றும் retention உறுதிமொழிகளை மாற்றாது.',
      ],
    },
    {
      id: 'changes',
      title: 'இந்த கொள்கையில் மாற்றங்கள்',
      paragraphs: [
        'நாங்கள் தயாரிப்புகளை சேர்க்கும் போது, sub-processors-ஐ மாற்றும் போது, அல்லது சட்டத்தில் மாற்றங்கள் ஏற்படும் போது, இந்த கொள்கையை update செய்யலாம். கணிசமான மாற்றங்களை செய்யும் போது, மேலே "கடைசியாக புதுப்பிக்கப்பட்டது" தேதியை update செய்வோம் மற்றும் active customers-க்கு primary account email-க்கு email அனுப்புவோம்.',
        'Effective date-க்குப் பிறகு எங்கள் தயாரிப்புகளை தொடர்ந்து பயன்படுத்துவது என்பது நீங்கள் update செய்யப்பட்ட கொள்கையை ஏற்றுக்கொண்டீர்கள் என்று அர்த்தம்.',
      ],
    },
  ],
  canonicalNote:
    'இந்த தனியுரிமைக் கொள்கையின் ஆங்கில பதிப்பு மட்டுமே அதிகாரப்பூர்வ சட்ட ஆவணம். இந்த தமிழ் பதிப்பு புரிதலுக்கான வசதிக்காக மட்டுமே; ஏதேனும் முரண்பாடு ஏற்பட்டால் ஆங்கில பதிப்பு செல்லுபடியாகும்.',
  grievance: {
    title: 'குறை தீர்ப்பு அதிகாரி மற்றும் தொடர்பு',
    body: 'எந்தவொரு privacy கேள்வி, access அல்லது deletion கோரிக்கை, அல்லது உங்கள் data-ஐ நாங்கள் எப்படி கையாளுகிறோம் என்பது குறித்த கவலைக்காக — எங்களுக்கு எழுதுங்கள். 7 வேலை நாட்களுக்குள் பதிலளிக்க முயற்சிக்கிறோம்.',
    name: 'shabuilds (399apps-இன் operator)',
    address: 'India',
    emailLabel: 'Email',
  },
};

const PRIVACY_COPY: Record<Lang, PrivacyCopy> = { en, hi, ta, hindi, tamil };

export function getPrivacyCopy(lang: Lang): PrivacyCopy {
  return pickByLang(PRIVACY_COPY, lang);
}
