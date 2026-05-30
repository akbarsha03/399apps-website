import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Self-Hosting — Run 399apps on your own server.',
    description:
      'Self-host Nidhi Books, Nidhi Inventory, Nidhi Matrimonials and Nidhi Job Portal on your own infrastructure. Custom-quoted licence, Docker / bare metal, full data ownership.',
    keywords: ['self-hosted SaaS', 'self-hosted accounting software', 'self-hosted inventory software', 'on-premise business software', 'self hosted matrimonial software'],
  },
  hero: {
    eyebrow: 'Self-hosting',
    title: 'Your software. Your server. Same product.',
    lede: 'Every 399apps product ships as a clean self-hosted package. Run it on your laptop, your VPS, your bare-metal — same code, same support.',
    primaryCta: 'Get a self-host quote',
    secondaryCta: 'Cloud vs self-host',
  },
  why: {
    eyebrow: 'Why self-host with 399apps',
    title: 'Built for the engineers who would have built it themselves.',
    lede: 'We took the things engineers care about — clean Docker images, sane configs, backup tooling, version pinning — and made them defaults.',
    cards: [
      { icon: 'shield', t: 'Full data ownership', b: 'Your DB, your backups, your encryption keys. Nothing phones home.' },
      { icon: 'server', t: 'Docker-first deploys', b: 'docker compose up and you are live. Bare-metal binaries available on enterprise engagements.' },
      { icon: 'sparkle', t: 'Predictable upgrades', b: 'Versioned releases, migration scripts, rollback playbook.' },
      { icon: 'cloud', t: 'Managed support, opt-in', b: 'We can run it for you — backups, upgrades, on-call — for a monthly fee.' },
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'From licence to live, in four steps.',
    steps: [
      { t: 'Scope your deployment', b: 'Tell us the app, your scale and support needs. We send you a custom-quoted licence and the deployment package.' },
      { t: 'Provision your server', b: 'A small Ubuntu / Debian box is enough to start. We send you a hardware-sizing guide for your scale.' },
      { t: 'Deploy & configure', b: 'docker compose up, point your domain, set the admin email. White-label theming applies at config time.' },
      { t: 'Go live', b: 'Onboard users, import data (we provide importers), and ship. We are an email away for the term of your licence.' },
    ],
  },
  faq: {
    title: 'Self-hosting — FAQs',
    items: [
      { q: 'What does the self-hosted licence include?', a: 'A custom-quoted licence per deployment, version updates for the term, security patches, email support and an optional managed-support add-on. The product is identical to the ₹399/month cloud version — you are paying for running it on your own infrastructure at your scale.' },
      { q: 'What infrastructure do I need?', a: 'A Linux server (Ubuntu / Debian / RHEL) with 2 vCPU, 4 GB RAM and 40 GB SSD is enough for most launches. Postgres 14+ and a domain you control.' },
      { q: 'Can you deploy it for me?', a: 'Yes — we offer a one-time setup service and a monthly managed-support tier where we run upgrades, backups and on-call for you.' },
      { q: 'Do I get source access?', a: 'On enterprise engagements, yes. You get access to the source tree under a customer-only licence so you can audit, patch and extend.' },
      { q: 'Will my data leave the server?', a: 'No. Self-host means your data stays on your server. Optional anonymous product telemetry can be disabled.' },
    ],
  },
  finalCta: {
    eyebrow: 'Self-host with confidence',
    title: "Let's scope your self-host setup.",
    body: 'Tell us about your server, team and data. We will recommend the right plan and bundle setup-support if you need it.',
    primaryLabel: 'Talk to engineering',
    secondaryLabel: 'See pricing',
  },
};

export type SelfHostingCopy = typeof en;

const hi: SelfHostingCopy = {
  seo: {
    title: 'Self-Hosting — 399apps ko apne server pe chalayein.',
    description:
      'Nidhi Books, Nidhi Inventory, Nidhi Matrimonials aur Nidhi Job Portal ko apne infrastructure pe self-host karein. Custom-quoted licence, Docker / bare metal, full data ownership.',
    keywords: ['self-hosted SaaS', 'self-hosted accounting software', 'self-hosted inventory software', 'on-premise business software', 'self hosted matrimonial software'],
  },
  hero: {
    eyebrow: 'Self-hosting',
    title: 'Aapka software. Aapka server. Same product.',
    lede: 'Har 399apps product ek saaf self-hosted package ki tarah ship hota hai. Apne laptop pe, VPS pe, ya bare-metal pe chalayein — same code, same support.',
    primaryCta: 'Self-host quote lein',
    secondaryCta: 'Cloud vs self-host',
  },
  why: {
    eyebrow: 'Kyun self-host karein 399apps ke saath',
    title: 'Un engineers ke liye banaya jo khud bana sakte the.',
    lede: 'Engineers jo cheezein chahte hain — saaf Docker images, sane configs, backup tooling, version pinning — woh sab humne defaults banaye.',
    cards: [
      { icon: 'shield', t: 'Poora data ownership', b: 'Aapka DB, aapke backups, aapki encryption keys. Kuch bhi ghar phone nahi karta.' },
      { icon: 'server', t: 'Docker-first deploy', b: 'docker compose up aur aap live. Bare-metal binaries enterprise engagement pe available.' },
      { icon: 'sparkle', t: 'Predictable upgrades', b: 'Versioned releases, migration scripts, rollback playbook.' },
      { icon: 'cloud', t: 'Managed support, opt-in', b: 'Hum aapke liye chalayenge — backups, upgrades, on-call — monthly fee pe.' },
    ],
  },
  how: {
    eyebrow: 'Kaise kaam karta hai',
    title: 'Licence se live tak, chaar steps mein.',
    steps: [
      { t: 'Apna deployment scope karo', b: 'Hume bataiye app, aapka scale aur support needs. Hum custom-quoted licence aur deployment package bhejenge.' },
      { t: 'Server provision karo', b: 'Ek chhota Ubuntu / Debian box shuru ke liye kaafi hai. Aapke scale ke liye hardware-sizing guide bhejenge.' },
      { t: 'Deploy aur configure karo', b: 'docker compose up, domain point karein, admin email set karein. White-label theming config time pe lagta hai.' },
      { t: 'Live ho jao', b: 'Users onboard karein, data import karein (importers humare paas hain), aur ship. Licence ke term tak hum email ek door hain.' },
    ],
  },
  faq: {
    title: 'Self-hosting — FAQs',
    items: [
      { q: 'Self-hosted licence mein kya include hai?', a: 'Har deployment ke liye custom-quoted licence, term ke liye version updates, security patches, email support aur ek optional managed-support add-on. Product bilkul ₹399/month cloud version jaisa hi hai — aap apne infrastructure pe apne scale pe chalane ke liye pay kar rahe hain.' },
      { q: 'Mujhe kya infrastructure chahiye?', a: 'Ek Linux server (Ubuntu / Debian / RHEL) 2 vCPU, 4 GB RAM aur 40 GB SSD ke saath zyaadatar launches ke liye kaafi hai. Postgres 14+ aur ek domain jo aapke control mein ho.' },
      { q: 'Kya aap deploy kar denge?', a: 'Haan — hum ek one-time setup service aur monthly managed-support tier offer karte hain jahaan hum upgrades, backups aur on-call chalate hain.' },
      { q: 'Source access milta hai?', a: 'Enterprise engagement pe, haan. Customer-only licence ke under source tree access milta hai jahaan aap audit, patch aur extend kar sakte hain.' },
      { q: 'Mera data server se bahar jayega?', a: 'Nahi. Self-host ka matlab aapka data aapke server pe hi rehta hai. Optional anonymous product telemetry disable kar sakte hain.' },
    ],
  },
  finalCta: {
    eyebrow: 'Bharosa se self-host karein',
    title: 'Aaiye aapka self-host setup scope karein.',
    body: 'Apne server, team aur data ke baare mein bataiye. Hum sahi plan recommend karenge aur agar setup-support chahiye toh wahi bundle karenge.',
    primaryLabel: 'Engineering se baat karein',
    secondaryLabel: 'Pricing dekhein',
  },
};

const ta: SelfHostingCopy = {
  seo: {
    title: 'Self-Hosting — 399apps-a unga sontha server-la run pannunga.',
    description:
      'Nidhi Books, Nidhi Inventory, Nidhi Matrimonials matrum Nidhi Job Portal-a unga sontha infrastructure-la self-host pannunga. Custom-quoted licence, Docker / bare metal, full data ownership.',
    keywords: ['self-hosted SaaS', 'self-hosted accounting software', 'self-hosted inventory software', 'on-premise business software', 'self hosted matrimonial software'],
  },
  hero: {
    eyebrow: 'Self-hosting',
    title: 'Unga software. Unga server. Same product.',
    lede: 'Ovvoru 399apps product-um oru clean self-hosted package-a varum. Unga laptop, VPS, bare-metal — edhulayum run pannunga — same code, same support.',
    primaryCta: 'Self-host quote vaangunga',
    secondaryCta: 'Cloud vs self-host',
  },
  why: {
    eyebrow: '399apps-la yen self-host pannanum',
    title: 'Engineers thaane build pannirupanga apdina ipdi build pannirupanga.',
    lede: 'Engineers care panra cheezhgal — clean Docker images, sane configs, backup tooling, version pinning — ellaame default-a vechirukom.',
    cards: [
      { icon: 'shield', t: 'Full data ownership', b: 'Unga DB, unga backups, unga encryption keys. Edhuvum vீtukku phone pandradhu illa.' },
      { icon: 'server', t: 'Docker-first deploys', b: 'docker compose up, neenga live. Bare-metal binaries enterprise engagement-la kidaikkum.' },
      { icon: 'sparkle', t: 'Predictable upgrades', b: 'Versioned releases, migration scripts, rollback playbook.' },
      { icon: 'cloud', t: 'Managed support, opt-in', b: 'Naanga unga kooda run pannrom — backups, upgrades, on-call — monthly fee-ku.' },
    ],
  },
  how: {
    eyebrow: 'Eppadi velai seyyudhu',
    title: 'Licence-ile irundhu live varai, naalu steps-la.',
    steps: [
      { t: 'Unga deployment scope pannunga', b: 'App, unga scale, support needs sollunga. Custom-quoted licence matrum deployment package thरோம்.' },
      { t: 'Server provision pannunga', b: 'Oru chinna Ubuntu / Debian box start panrathuku podhum. Unga scale-ku hardware-sizing guide tharom.' },
      { t: 'Deploy & configure pannunga', b: 'docker compose up, unga domain point pannunga, admin email set pannunga. White-label theming config time-la apply aagum.' },
      { t: 'Live aagunga', b: 'Users onboard pannunga, data import pannunga (importers naangale tharom), ship pannunga. Licence term varai naanga email-la varom.' },
    ],
  },
  faq: {
    title: 'Self-hosting — FAQs',
    items: [
      { q: 'Self-hosted licence-la enna include?', a: 'Ovvoru deployment-ku custom-quoted licence, term-ku version updates, security patches, email support matrum optional managed-support add-on. Product ₹399/month cloud version maadhiri thaan — neenga unga sontha infrastructure-la unga scale-la run panradhuku pay pannreenga.' },
      { q: 'Enna infrastructure venum?', a: 'Oru Linux server (Ubuntu / Debian / RHEL) 2 vCPU, 4 GB RAM, 40 GB SSD-oda podhum mostu launches-ku. Postgres 14+ matrum unga control-la oru domain.' },
      { q: 'Neenga deploy panneeengala?', a: 'Aamaa — naanga oru one-time setup service matrum monthly managed-support tier kudukrom, anga upgrades, backups, on-call naanga run pannrom.' },
      { q: 'Source access kidaikuma?', a: 'Enterprise engagement-la, aamaa. Customer-only licence-oda source tree access kidaikum, neenga audit, patch, extend pannalaam.' },
      { q: 'Mera data server-a vittu pogudaa?', a: 'Illa. Self-host arthame unga data unga server-la mattum thaan irukum. Optional anonymous product telemetry disable pannalaam.' },
    ],
  },
  finalCta: {
    eyebrow: 'Nambikkai-oda self-host pannunga',
    title: 'Unga self-host setup-a scope pannrom.',
    body: 'Unga server, team, data pathi sollunga. Naanga sariyaana plan recommend pannrom, setup-support venumna bundle pannrom.',
    primaryLabel: 'Engineering-oda pesunga',
    secondaryLabel: 'Pricing paarunga',
  },
};

const hindi: SelfHostingCopy = {
  seo: {
    title: 'सेल्फ़-होस्टिंग — 399apps को अपने सर्वर पर चलाएँ।',
    description:
      'Nidhi Books, Nidhi Inventory, Nidhi Matrimonials और Nidhi Job Portal को अपने इंफ्रास्ट्रक्चर पर सेल्फ़-होस्ट करें। कस्टम-कोटेड लाइसेंस, Docker / बेयर मेटल, पूरा डेटा ओनरशिप।',
    keywords: ['self-hosted SaaS', 'self-hosted accounting software', 'self-hosted inventory software', 'on-premise business software', 'self hosted matrimonial software'],
  },
  hero: {
    eyebrow: 'सेल्फ़-होस्टिंग',
    title: 'आपका सॉफ़्टवेयर। आपका सर्वर। वही प्रोडक्ट।',
    lede: 'हर 399apps प्रोडक्ट एक साफ़ सेल्फ़-होस्टेड पैकेज की तरह आता है। अपने लैपटॉप पर, VPS पर, या बेयर-मेटल पर चलाएँ — वही कोड, वही सपोर्ट।',
    primaryCta: 'सेल्फ़-होस्ट कोट लें',
    secondaryCta: 'क्लाउड vs सेल्फ़-होस्ट',
  },
  why: {
    eyebrow: '399apps के साथ सेल्फ़-होस्ट क्यों',
    title: 'उन इंजीनियरों के लिए, जो खुद बना सकते थे।',
    lede: 'इंजीनियर जो चीज़ें चाहते हैं — साफ़ Docker images, sane configs, backup tooling, version pinning — हमने वे सब डिफ़ॉल्ट बनाए।',
    cards: [
      { icon: 'shield', t: 'पूरा डेटा ओनरशिप', b: 'आपका DB, आपके बैकअप, आपकी एन्क्रिप्शन keys। कुछ भी घर फ़ोन नहीं करता।' },
      { icon: 'server', t: 'Docker-first डिप्लॉय', b: 'docker compose up और आप लाइव। बेयर-मेटल बायनरी एंटरप्राइज़ engagement पर उपलब्ध।' },
      { icon: 'sparkle', t: 'अनुमानयोग्य अपग्रेड', b: 'Versioned releases, migration scripts, rollback playbook।' },
      { icon: 'cloud', t: 'मैनेज्ड सपोर्ट, ऑप्ट-इन', b: 'हम आपके लिए चला सकते हैं — बैकअप, अपग्रेड, ऑन-कॉल — मासिक शुल्क पर।' },
    ],
  },
  how: {
    eyebrow: 'कैसे काम करता है',
    title: 'लाइसेंस से लाइव तक, चार स्टेप में।',
    steps: [
      { t: 'अपना डिप्लॉयमेंट scope करें', b: 'ऐप, आपका scale और support needs बताइए। हम कस्टम-कोटेड लाइसेंस और डिप्लॉयमेंट पैकेज भेजेंगे।' },
      { t: 'सर्वर provision करें', b: 'एक छोटा Ubuntu / Debian box शुरू के लिए काफ़ी है। आपके scale के लिए hardware-sizing guide भेजेंगे।' },
      { t: 'डिप्लॉय और configure', b: 'docker compose up, अपना डोमेन point करें, admin email सेट करें। White-label theming config time पर लगती है।' },
      { t: 'लाइव हो जाएँ', b: 'Users onboard करें, डेटा import करें (importers हम देते हैं), और ship। लाइसेंस के term तक हम email एक दूर हैं।' },
    ],
  },
  faq: {
    title: 'सेल्फ़-होस्टिंग — FAQs',
    items: [
      { q: 'सेल्फ़-होस्टेड लाइसेंस में क्या शामिल है?', a: 'हर डिप्लॉयमेंट के लिए कस्टम-कोटेड लाइसेंस, term के लिए version updates, security patches, email support और एक वैकल्पिक managed-support ऐड-ऑन। प्रोडक्ट ₹399/महीना cloud version जैसा ही है — आप अपने इंफ्रास्ट्रक्चर पर अपने scale पर चलाने के लिए pay कर रहे हैं।' },
      { q: 'मुझे कौन सा इंफ्रास्ट्रक्चर चाहिए?', a: 'एक Linux server (Ubuntu / Debian / RHEL) 2 vCPU, 4 GB RAM और 40 GB SSD के साथ अधिकांश launches के लिए काफ़ी है। Postgres 14+ और आपके control में एक डोमेन।' },
      { q: 'क्या आप डिप्लॉय कर देंगे?', a: 'हाँ — हम एक one-time setup सर्विस और monthly managed-support tier offer करते हैं जहाँ हम upgrades, backups और on-call चलाते हैं।' },
      { q: 'क्या source access मिलता है?', a: 'एंटरप्राइज़ engagement पर, हाँ। Customer-only लाइसेंस के तहत source tree access मिलता है, जहाँ आप audit, patch और extend कर सकते हैं।' },
      { q: 'क्या मेरा डेटा सर्वर से बाहर जाएगा?', a: 'नहीं। सेल्फ़-होस्ट का मतलब आपका डेटा आपके सर्वर पर ही रहता है। Optional anonymous product telemetry disable की जा सकती है।' },
    ],
  },
  finalCta: {
    eyebrow: 'भरोसे के साथ सेल्फ़-होस्ट',
    title: 'आइए आपका सेल्फ़-होस्ट सेटअप scope करें।',
    body: 'अपने सर्वर, team और डेटा के बारे में बताइए। हम सही प्लान सुझाएँगे और setup-support चाहिए तो साथ bundle करेंगे।',
    primaryLabel: 'इंजीनियरिंग से बात करें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
};

const tamil: SelfHostingCopy = {
  seo: {
    title: 'செல்ஃப்-ஹோஸ்டிங் — 399apps-ஐ உங்கள் சர்வரில் இயக்குங்கள்.',
    description:
      'Nidhi Books, Nidhi Inventory, Nidhi Matrimonials மற்றும் Nidhi Job Portal-ஐ உங்கள் சொந்த இன்ஃப்ராஸ்ட்ரக்சரில் செல்ஃப்-ஹோஸ்ட் செய்யுங்கள். கஸ்டம்-கோட்டட் லைசன்ஸ், Docker / பேர் மெட்டல், முழு டேட்டா ஓனர்ஷிப்.',
    keywords: ['self-hosted SaaS', 'self-hosted accounting software', 'self-hosted inventory software', 'on-premise business software', 'self hosted matrimonial software'],
  },
  hero: {
    eyebrow: 'செல்ஃப்-ஹோஸ்டிங்',
    title: 'உங்கள் சாஃப்ட்வேர். உங்கள் சர்வர். அதே புராடக்ட்.',
    lede: 'ஒவ்வொரு 399apps புராடக்ட்டும் ஒரு சுத்தமான செல்ஃப்-ஹோஸ்டட் பேக்கேஜாக வரும். உங்கள் லேப்டாப், VPS, பேர் மெட்டல் — எதிலும் இயக்குங்கள் — அதே கோட், அதே சப்போர்ட்.',
    primaryCta: 'செல்ஃப்-ஹோஸ்ட் கோட் பெறுங்கள்',
    secondaryCta: 'கிளவுட் vs செல்ஃப்-ஹோஸ்ட்',
  },
  why: {
    eyebrow: 'ஏன் 399apps-உடன் செல்ஃப்-ஹோஸ்ட்',
    title: 'தாமே கட்டியிருப்பார்களே என்ற இன்ஜினியர்களுக்காக.',
    lede: 'இன்ஜினியர்கள் விரும்பும் விஷயங்கள் — சுத்தமான Docker images, sane configs, backup tooling, version pinning — அத்தனையும் டிஃபால்ட் ஆகி வைத்தோம்.',
    cards: [
      { icon: 'shield', t: 'முழு டேட்டா ஓனர்ஷிப்', b: 'உங்கள் DB, உங்கள் பேக்அப், உங்கள் என்க்ரிப்ஷன் கீஸ். எதுவும் வீட்டுக்கு போன் செய்யாது.' },
      { icon: 'server', t: 'Docker-first டிப்ளாய்', b: 'docker compose up, நீங்கள் லைவ். பேர் மெட்டல் பைனரிகள் எண்டர்ப்ரைஸ் engagement-ல் கிடைக்கும்.' },
      { icon: 'sparkle', t: 'எதிர்பார்த்த அப்கிரேட்', b: 'Versioned releases, migration scripts, rollback playbook.' },
      { icon: 'cloud', t: 'மேனேஜ்டு சப்போர்ட், ஆப்ட்-இன்', b: 'நாங்கள் உங்களுக்காக ரன் செய்யலாம் — பேக்அப், அப்கிரேட், ஆன்-கால் — மாதாந்திர கட்டணத்தில்.' },
    ],
  },
  how: {
    eyebrow: 'எப்படி வேலை செய்யுது',
    title: 'லைசன்சில் இருந்து லைவ் வரை, நான்கு படிகளில்.',
    steps: [
      { t: 'உங்கள் டிப்ளாய்மென்ட் ஸ்கோப்', b: 'ஆப், உங்கள் ஸ்கேல், சப்போர்ட் தேவைகள் சொல்லுங்கள். கஸ்டம்-கோட்டட் லைசன்ஸ் மற்றும் டிப்ளாய்மென்ட் பேக்கேஜ் அனுப்புகிறோம்.' },
      { t: 'சர்வரை provision செய்யுங்கள்', b: 'ஒரு சிறிய Ubuntu / Debian பாக்ஸ் ஆரம்பிக்க போதுமானது. உங்கள் ஸ்கேலுக்கு hardware-sizing guide அனுப்புகிறோம்.' },
      { t: 'டிப்ளாய் & configure', b: 'docker compose up, உங்கள் டொமைனை point செய்யுங்கள், admin email அமைக்கவும். White-label theming config நேரத்தில் apply ஆகும்.' },
      { t: 'லைவ் ஆகுங்கள்', b: 'பயனர்களை onboard செய்யுங்கள், டேட்டாவை import செய்யுங்கள் (importers நாங்கள் தருகிறோம்), ship செய்யுங்கள். லைசன்ஸ் term வரை நாங்கள் email தூரத்தில் இருக்கிறோம்.' },
    ],
  },
  faq: {
    title: 'செல்ஃப்-ஹோஸ்டிங் — FAQs',
    items: [
      { q: 'செல்ஃப்-ஹோஸ்டட் லைசன்ஸில் என்ன அடங்கும்?', a: 'ஒவ்வொரு டிப்ளாய்மென்ட்டுக்கும் கஸ்டம்-கோட்டட் லைசன்ஸ், term-க்கு version updates, security patches, email support மற்றும் ஒரு optional managed-support add-on. புராடக்ட் ₹399/மாதம் கிளவுட் version போலவே — நீங்கள் உங்கள் சொந்த infrastructure-ல் உங்கள் ஸ்கேலில் ரன் செய்வதற்கு பணம் செலுத்துகிறீர்கள்.' },
      { q: 'எனக்கு என்ன infrastructure வேண்டும்?', a: 'ஒரு Linux server (Ubuntu / Debian / RHEL) 2 vCPU, 4 GB RAM, 40 GB SSD-உடன் பெரும்பாலான launches-க்கு போதுமானது. Postgres 14+ மற்றும் உங்கள் கட்டுப்பாட்டில் ஒரு டொமைன்.' },
      { q: 'நீங்கள் டிப்ளாய் செய்து தர முடியுமா?', a: 'ஆமா — நாங்கள் ஒரு one-time setup சர்வீஸ் மற்றும் monthly managed-support tier வழங்குகிறோம், அங்கு upgrades, backups, on-call நாங்கள் ரன் செய்கிறோம்.' },
      { q: 'Source access கிடைக்குமா?', a: 'எண்டர்ப்ரைஸ் engagement-ல், ஆமா. Customer-only லைசன்ஸின் கீழ் source tree access கிடைக்கும், audit, patch, extend செய்யலாம்.' },
      { q: 'என் டேட்டா சர்வரை விட்டு போகுமா?', a: 'இல்லை. செல்ஃப்-ஹோஸ்ட் என்றால் உங்கள் டேட்டா உங்கள் சர்வரில் தங்கியிருக்கும். Optional anonymous product telemetry disable செய்யலாம்.' },
    ],
  },
  finalCta: {
    eyebrow: 'நம்பிக்கையுடன் செல்ஃப்-ஹோஸ்ட்',
    title: 'உங்கள் செல்ஃப்-ஹோஸ்ட் சேட்அப்பை ஸ்கோப் பண்றோம்.',
    body: 'உங்கள் சர்வர், டீம், டேட்டா பற்றி சொல்லுங்கள். சரியான பிளானை சிபாரிசு செய்வோம், setup-support வேண்டுமானால் சேர்த்து bundle செய்வோம்.',
    primaryLabel: 'இன்ஜினியரிங் உடன் பேசுங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
};

const SELF_HOSTING_COPY: Record<Lang, SelfHostingCopy> = { en, hi, ta, hindi, tamil };

export function getSelfHostingCopy(lang: Lang): SelfHostingCopy {
  return pickByLang(SELF_HOSTING_COPY, lang);
}
