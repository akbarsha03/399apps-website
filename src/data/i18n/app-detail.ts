import { pickByLang, type Lang } from './shared';

// Chrome around an app detail page. The per-app data (descriptions, features,
// FAQs) lives in src/data/apps.ts and stays in English — same approach as
// brand/product names, kept in English on purpose.
const en = {
  seoSuffix: 'Available on the 399apps cloud or fully self-hosted. Yearly plans, white-label ready.',
  breadcrumb: { home: 'Home', apps: 'Apps' },
  ctaDemo: 'Get a demo',
  ctaPricing: 'See pricing',
  selfHostFallback: 'Self-host details',
  badges: {
    cloud: 'Cloud · ₹399/mo (₹99 as add-on)',
    selfHost: 'Self-hosted · custom',
    unlimited: 'Unlimited users + exports',
    whiteLabel: 'White-label ready',
  },
  glance: {
    title: 'At a glance',
    status: 'Status',
    statusAvailable: 'Available',
    audience: 'Audience',
    hosting: 'Hosting',
    hostingValue: 'Cloud · Self-host',
    users: 'Users',
    usersValue: 'Unlimited',
    exports: 'Exports',
    exportsValue: 'Unlimited',
    billing: 'Billing',
    billingValue: 'Monthly · INR',
    whiteLabel: 'White-label',
    whiteLabelValue: 'Yes',
    cloudPrice: 'Cloud price',
    perMonth: '/month',
    cloudPriceNote: 'as your first app · ₹99/mo as an add-on · unlimited users',
  },
  overview: {
    eyebrow: 'Overview',
    bestFor: 'Best for',
    worksAcross: 'Works across',
  },
  features: {
    eyebrow: "What's inside",
    title: 'Features that earn their place.',
  },
  pricing: {
    eyebrowPrefix: 'Pricing for',
    title: '₹399/month as your first app. Unlimited users.',
    ledeTemplate:
      '{shortName} is ₹399/month on the cloud as your base app — or ₹99/month added on top of another 399apps app. No per-seat charges. Self-hosted and enterprise needs are custom-quoted.',
    fineprint: '₹399/month is exclusive of GST, billed monthly (annual billing on request). Self-hosted and enterprise scopes are bespoke.',
  },
  related: {
    eyebrow: 'More from 399apps',
    title: 'Other apps you might like.',
  },
  faqTitleTemplate: '{shortName} — FAQs',
  noteHeading: 'Heads-up.',
  finalCta: {
    eyebrowTemplate: 'Ready to roll {shortName}?',
    titleTemplate: "Let's get {name} live for you.",
    body: 'A short call. We will scope your setup, recommend cloud vs self-host honestly, and quote without games.',
    primaryLabel: 'Get a demo',
    secondaryLabel: 'See pricing',
  },
};

export type AppDetailCopy = typeof en;

const hi: AppDetailCopy = {
  seoSuffix: '399apps cloud pe ya poori tarah self-hosted available. Yearly plans, white-label ready.',
  breadcrumb: { home: 'Home', apps: 'Apps' },
  ctaDemo: 'Demo lein',
  ctaPricing: 'Pricing dekhein',
  selfHostFallback: 'Self-host details',
  badges: {
    cloud: 'Cloud · ₹399/mo (add-on pe ₹99)',
    selfHost: 'Self-hosted · custom',
    unlimited: 'Unlimited users + exports',
    whiteLabel: 'White-label ready',
  },
  glance: {
    title: 'Ek nazar mein',
    status: 'Status',
    statusAvailable: 'Available',
    audience: 'Audience',
    hosting: 'Hosting',
    hostingValue: 'Cloud · Self-host',
    users: 'Users',
    usersValue: 'Unlimited',
    exports: 'Exports',
    exportsValue: 'Unlimited',
    billing: 'Billing',
    billingValue: 'Monthly · INR',
    whiteLabel: 'White-label',
    whiteLabelValue: 'Haan',
    cloudPrice: 'Cloud price',
    perMonth: '/mahina',
    cloudPriceNote: 'pehle app pe · add-on pe ₹99/mo · unlimited users',
  },
  overview: {
    eyebrow: 'Overview',
    bestFor: 'Kiske liye',
    worksAcross: 'Kahaan kaam aata hai',
  },
  features: {
    eyebrow: 'Kya andar hai',
    title: 'Features jo apni jagah banaate hain.',
  },
  pricing: {
    eyebrowPrefix: 'Pricing',
    title: '₹399/month aapke pehle app ke liye. Unlimited users.',
    ledeTemplate:
      '{shortName} cloud pe ₹399/month aapke base app ke roop mein — ya kisi aur 399apps app ke saath ₹99/month add-on ke roop mein. Koi per-seat charge nahi. Self-hosted aur enterprise zaroorat custom-quoted.',
    fineprint: '₹399/month GST ke alag hai, monthly billed (annual billing request pe). Self-hosted aur enterprise scope bespoke hain.',
  },
  related: {
    eyebrow: '399apps se aur',
    title: 'Doosre apps jo aapko pasand aa sakte hain.',
  },
  faqTitleTemplate: '{shortName} — FAQs',
  noteHeading: 'Dhyaan dein.',
  finalCta: {
    eyebrowTemplate: '{shortName} chalu karne ko ready?',
    titleTemplate: 'Aaiye {name} ko aapke liye live karte hain.',
    body: 'Ek choti call. Hum aapka setup scope karenge, cloud vs self-host honestly recommend karenge, aur bina khel quote karenge.',
    primaryLabel: 'Demo lein',
    secondaryLabel: 'Pricing dekhein',
  },
};

const ta: AppDetailCopy = {
  seoSuffix: '399apps cloud-la illa fully self-hosted-a available. Yearly plans, white-label ready.',
  breadcrumb: { home: 'Home', apps: 'Apps' },
  ctaDemo: 'Demo paarunga',
  ctaPricing: 'Pricing paarunga',
  selfHostFallback: 'Self-host details',
  badges: {
    cloud: 'Cloud · ₹399/mo (add-on-aa ₹99)',
    selfHost: 'Self-hosted · custom',
    unlimited: 'Unlimited users + exports',
    whiteLabel: 'White-label ready',
  },
  glance: {
    title: 'Oru paarvai-la',
    status: 'Status',
    statusAvailable: 'Available',
    audience: 'Audience',
    hosting: 'Hosting',
    hostingValue: 'Cloud · Self-host',
    users: 'Users',
    usersValue: 'Unlimited',
    exports: 'Exports',
    exportsValue: 'Unlimited',
    billing: 'Billing',
    billingValue: 'Monthly · INR',
    whiteLabel: 'White-label',
    whiteLabelValue: 'Aamaa',
    cloudPrice: 'Cloud price',
    perMonth: '/maasam',
    cloudPriceNote: 'mudhal app-a · add-on-aa ₹99/mo · unlimited users',
  },
  overview: {
    eyebrow: 'Overview',
    bestFor: 'Yaaruku best',
    worksAcross: 'Enge velai pannudhu',
  },
  features: {
    eyebrow: 'Enna ulla irukku',
    title: 'Sariyaana idam piditha features.',
  },
  pricing: {
    eyebrowPrefix: 'Pricing',
    title: '₹399/month unga mudhal app-aa. Unlimited users.',
    ledeTemplate:
      '{shortName} cloud-la ₹399/month base app-aa — illa innoru 399apps app mela ₹99/month add-on-aa. Per-seat charge illa. Self-hosted matrum enterprise needs custom-quoted.',
    fineprint: '₹399/month GST-ya thavira, monthly billed (annual billing request pannina). Self-hosted matrum enterprise scope bespoke.',
  },
  related: {
    eyebrow: '399apps-la veera',
    title: 'Ungaluku pidikkura veera apps.',
  },
  faqTitleTemplate: '{shortName} — FAQs',
  noteHeading: 'Kavanikkavum.',
  finalCta: {
    eyebrowTemplate: '{shortName} aarambika ready-aa?',
    titleTemplate: 'Vaanga {name}-a ungaluku live aakurom.',
    body: 'Oru chinna call. Naanga unga setup scope pannrom, cloud vs self-host honest-a recommend pannrom, vilayaattu illama quote pannrom.',
    primaryLabel: 'Demo paarunga',
    secondaryLabel: 'Pricing paarunga',
  },
};

const hindi: AppDetailCopy = {
  seoSuffix: '399apps cloud पर या पूरी तरह सेल्फ़-होस्टेड उपलब्ध। सालाना plans, व्हाइट-लेबल रेडी।',
  breadcrumb: { home: 'होम', apps: 'ऐप्स' },
  ctaDemo: 'डेमो लें',
  ctaPricing: 'प्राइसिंग देखें',
  selfHostFallback: 'सेल्फ़-होस्ट विवरण',
  badges: {
    cloud: 'क्लाउड · ₹399/mo (ऐड-ऑन पर ₹99)',
    selfHost: 'सेल्फ़-होस्टेड · कस्टम',
    unlimited: 'अनलिमिटेड users + exports',
    whiteLabel: 'व्हाइट-लेबल रेडी',
  },
  glance: {
    title: 'एक नज़र में',
    status: 'स्थिति',
    statusAvailable: 'उपलब्ध',
    audience: 'किसके लिए',
    hosting: 'होस्टिंग',
    hostingValue: 'क्लाउड · सेल्फ़-होस्ट',
    users: 'Users',
    usersValue: 'अनलिमिटेड',
    exports: 'Exports',
    exportsValue: 'अनलिमिटेड',
    billing: 'बिलिंग',
    billingValue: 'मासिक · INR',
    whiteLabel: 'व्हाइट-लेबल',
    whiteLabelValue: 'हाँ',
    cloudPrice: 'क्लाउड कीमत',
    perMonth: '/महीना',
    cloudPriceNote: 'पहले ऐप पर · ऐड-ऑन पर ₹99/mo · अनलिमिटेड users',
  },
  overview: {
    eyebrow: 'Overview',
    bestFor: 'सबसे अच्छा',
    worksAcross: 'कहाँ काम आता है',
  },
  features: {
    eyebrow: 'अंदर क्या है',
    title: 'फ़ीचर जो अपनी जगह बनाते हैं।',
  },
  pricing: {
    eyebrowPrefix: 'प्राइसिंग —',
    title: '₹399/महीना आपके पहले ऐप के लिए। अनलिमिटेड users।',
    ledeTemplate:
      '{shortName} क्लाउड पर ₹399/महीना आपके base ऐप के रूप में — या किसी अन्य 399apps ऐप के साथ ₹99/महीना ऐड-ऑन। कोई per-seat charge नहीं। सेल्फ़-होस्टेड और एंटरप्राइज़ ज़रूरतें कस्टम-कोटेड।',
    fineprint: '₹399/महीना GST से अलग, मासिक बिल (वार्षिक बिलिंग रिक्वेस्ट पर)। सेल्फ़-होस्टेड और एंटरप्राइज़ scope bespoke हैं।',
  },
  related: {
    eyebrow: '399apps से और',
    title: 'अन्य ऐप्स जो आपको पसंद आ सकते हैं।',
  },
  faqTitleTemplate: '{shortName} — FAQs',
  noteHeading: 'ध्यान दें।',
  finalCta: {
    eyebrowTemplate: '{shortName} शुरू करने के लिए तैयार?',
    titleTemplate: 'आइए {name} को आपके लिए लाइव करें।',
    body: 'एक छोटी कॉल। हम आपका setup scope करेंगे, क्लाउड vs सेल्फ़-होस्ट ईमानदारी से सुझाएँगे, और बिना खेल quote करेंगे।',
    primaryLabel: 'डेमो लें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
};

const tamil: AppDetailCopy = {
  seoSuffix: '399apps கிளவுடில் அல்லது முழுமையாக செல்ஃப்-ஹோஸ்டட்-ஆக கிடைக்கிறது. வருடாந்திர பிளான்கள், ஒயிட்-லேபல் ரெடி.',
  breadcrumb: { home: 'முகப்பு', apps: 'ஆப்ஸ்' },
  ctaDemo: 'டெமோ பாருங்கள்',
  ctaPricing: 'ப்ரைசிங் பாருங்கள்',
  selfHostFallback: 'செல்ஃப்-ஹோஸ்ட் விவரம்',
  badges: {
    cloud: 'கிளவுட் · ₹399/mo (ஆட்-ஆன் ஆக ₹99)',
    selfHost: 'செல்ஃப்-ஹோஸ்டட் · கஸ்டம்',
    unlimited: 'அன்லிமிடெட் users + exports',
    whiteLabel: 'ஒயிட்-லேபல் ரெடி',
  },
  glance: {
    title: 'ஒரு பார்வையில்',
    status: 'நிலை',
    statusAvailable: 'கிடைக்கிறது',
    audience: 'யாருக்கு',
    hosting: 'ஹோஸ்டிங்',
    hostingValue: 'கிளவுட் · செல்ஃப்-ஹோஸ்ட்',
    users: 'Users',
    usersValue: 'அன்லிமிடெட்',
    exports: 'Exports',
    exportsValue: 'அன்லிமிடெட்',
    billing: 'பில்லிங்',
    billingValue: 'மாதாந்திர · INR',
    whiteLabel: 'ஒயிட்-லேபல்',
    whiteLabelValue: 'ஆமா',
    cloudPrice: 'கிளவுட் விலை',
    perMonth: '/மாதம்',
    cloudPriceNote: 'முதல் ஆப்பாக · ஆட்-ஆன் ஆக ₹99/mo · அன்லிமிடெட் users',
  },
  overview: {
    eyebrow: 'Overview',
    bestFor: 'யாருக்கு சிறந்தது',
    worksAcross: 'எங்கு வேலை செய்யுது',
  },
  features: {
    eyebrow: 'உள்ளே என்ன',
    title: 'தங்கள் இடத்தை சம்பாதிக்கும் ஃபீச்சர்கள்.',
  },
  pricing: {
    eyebrowPrefix: 'ப்ரைசிங் —',
    title: '₹399/மாதம் உங்கள் முதல் ஆப்பாக. அன்லிமிடெட் users.',
    ledeTemplate:
      '{shortName} கிளவுடில் ₹399/மாதம் உங்கள் base ஆப் ஆக — அல்லது இன்னொரு 399apps ஆப்புடன் ₹99/மாதம் ஆட்-ஆன் ஆக. Per-seat சார்ஜ் இல்லை. செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் தேவைகள் கஸ்டம்-கோட்டட்.',
    fineprint: '₹399/மாதம் GST தவிர, மாதாந்திர பில் (வருடாந்திர பில்லிங் கோரிக்கையின் பேரில்). செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் scope bespoke.',
  },
  related: {
    eyebrow: '399apps-லிருந்து மேலும்',
    title: 'நீங்கள் விரும்பக்கூடிய மற்ற ஆப்ஸ்.',
  },
  faqTitleTemplate: '{shortName} — FAQs',
  noteHeading: 'கவனிக்கவும்.',
  finalCta: {
    eyebrowTemplate: '{shortName} ஆரம்பிக்க தயாரா?',
    titleTemplate: 'வாருங்கள் {name}-ஐ உங்களுக்காக லைவ் செய்வோம்.',
    body: 'ஒரு குறு கால். உங்கள் setup-ஐ ஸ்கோப் செய்வோம், cloud vs self-host honest-ஆ பரிந்துரைப்போம், விளையாட்டு இல்லாமல் கோட் செய்வோம்.',
    primaryLabel: 'டெமோ பாருங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
};

const APP_DETAIL_COPY: Record<Lang, AppDetailCopy> = { en, hi, ta, hindi, tamil };

export function getAppDetailCopy(lang: Lang): AppDetailCopy {
  return pickByLang(APP_DETAIL_COPY, lang);
}
