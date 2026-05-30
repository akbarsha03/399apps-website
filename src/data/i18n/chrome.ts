import { pickByLang, type Lang } from './shared';

// Header + Footer + shared CTA defaults — visible on every page.
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
  footer: {
    apps: 'Apps',
    product: 'Product',
    company: 'Company',
    contact: 'Contact',
    pricing: 'Pricing',
    selfHosting: 'Self-hosting',
    whiteLabel: 'White label',
    cloudVsSelf: 'Cloud vs self-host',
    about: 'About',
    contactLink: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    builtBy: 'Built, deployed and maintained by',
    rights: 'All rights reserved.',
    madeIn: 'Made with care in India.',
  },
  cta: {
    eyebrow: 'Get started',
    primaryLabel: 'Get a demo',
    secondaryLabel: 'See pricing',
  },
  faq: {
    title: 'Frequently asked questions',
  },
};

export type ChromeCopy = typeof en;

const hi: ChromeCopy = {
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
  footer: {
    apps: 'Apps',
    product: 'Product',
    company: 'Company',
    contact: 'Contact',
    pricing: 'Pricing',
    selfHosting: 'Self-hosting',
    whiteLabel: 'White label',
    cloudVsSelf: 'Cloud vs self-host',
    about: 'About',
    contactLink: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    builtBy: 'Banaya, deploy aur maintain kiya hai',
    rights: 'Sabhi adhikaar surakshit.',
    madeIn: 'India mein pyaar se banaya.',
  },
  cta: {
    eyebrow: 'Shuru karein',
    primaryLabel: 'Demo lein',
    secondaryLabel: 'Pricing dekhein',
  },
  faq: {
    title: 'Aksar pooche jaane waale sawaal',
  },
};

const ta: ChromeCopy = {
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
  footer: {
    apps: 'Apps',
    product: 'Product',
    company: 'Company',
    contact: 'Contact',
    pricing: 'Pricing',
    selfHosting: 'Self-hosting',
    whiteLabel: 'White label',
    cloudVsSelf: 'Cloud vs self-host',
    about: 'About',
    contactLink: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    builtBy: 'Build panni, deploy panni, maintain pannradhu',
    rights: 'Ellaa urimaikalum kaakkappattadhu.',
    madeIn: 'India-la anbu-da banayrukom.',
  },
  cta: {
    eyebrow: 'Aarambikkalaam',
    primaryLabel: 'Demo paarunga',
    secondaryLabel: 'Pricing paarunga',
  },
  faq: {
    title: 'Adikkadi kekkura kelvigal',
  },
};

const hindi: ChromeCopy = {
  header: {
    nav: {
      apps: 'Apps',
      pricing: 'Pricing',
      selfHosting: 'Self-Hosting',
      whiteLabel: 'White Label',
      contact: 'Contact',
    },
    talkToSales: 'सेल्स से बात करें',
    getDemo: 'डेमो देखें',
    languageLabel: 'भाषा',
  },
  footer: {
    apps: 'ऐप्स',
    product: 'प्रोडक्ट',
    company: 'कंपनी',
    contact: 'संपर्क',
    pricing: 'प्राइसिंग',
    selfHosting: 'सेल्फ़-होस्टिंग',
    whiteLabel: 'व्हाइट लेबल',
    cloudVsSelf: 'क्लाउड vs सेल्फ़-होस्ट',
    about: 'अबाउट',
    contactLink: 'संपर्क',
    privacy: 'प्राइवेसी',
    terms: 'टर्म्स',
    builtBy: 'बनाया, डिप्लॉय और मेंटेन किया है',
    rights: 'सर्वाधिकार सुरक्षित।',
    madeIn: 'India में प्यार से बनाया।',
  },
  cta: {
    eyebrow: 'शुरू करें',
    primaryLabel: 'डेमो लें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
  faq: {
    title: 'अक्सर पूछे जाने वाले सवाल',
  },
};

const tamil: ChromeCopy = {
  header: {
    nav: {
      apps: 'Apps',
      pricing: 'Pricing',
      selfHosting: 'Self-Hosting',
      whiteLabel: 'White Label',
      contact: 'Contact',
    },
    talkToSales: 'சேல்ஸ்-ஐ தொடர்பு கொள்ளுங்கள்',
    getDemo: 'டெமோ பாருங்கள்',
    languageLabel: 'மொழி',
  },
  footer: {
    apps: 'ஆப்ஸ்',
    product: 'புராடக்ட்',
    company: 'நிறுவனம்',
    contact: 'தொடர்பு',
    pricing: 'ப்ரைசிங்',
    selfHosting: 'செல்ஃப்-ஹோஸ்டிங்',
    whiteLabel: 'ஒயிட்-லேபல்',
    cloudVsSelf: 'கிளவுட் vs செல்ஃப்-ஹோஸ்ட்',
    about: 'பற்றி',
    contactLink: 'தொடர்பு',
    privacy: 'ப்ரைவசி',
    terms: 'டெர்ம்ஸ்',
    builtBy: 'உருவாக்கி, டிப்ளாய் பண்ணி, மெயின்டெயின் பண்றாங்க',
    rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    madeIn: 'அன்போடு இந்தியாவில் உருவாக்கப்பட்டது.',
  },
  cta: {
    eyebrow: 'தொடங்குங்கள்',
    primaryLabel: 'டெமோ பாருங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
  faq: {
    title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  },
};

const CHROME: Record<Lang, ChromeCopy> = { en, hi, ta, hindi, tamil };

export function getChromeCopy(lang: Lang): ChromeCopy {
  return pickByLang(CHROME, lang);
}
