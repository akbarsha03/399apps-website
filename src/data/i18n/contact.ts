import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Contact — Talk to 399apps about a demo, plan or white-label.',
    description:
      'Get in touch with 399apps. Book a 20-minute demo, request a custom quote, or scope a white-label deployment. Email, WhatsApp, or the form.',
    keywords: ['contact 399apps', 'book a demo', 'business software demo', 'white label SaaS contact'],
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Tell us what you want to build.',
    lede: 'A short conversation goes a long way. Share your context — we will recommend the right app, plan and hosting mode.',
  },
  channels: {
    salesEmail: 'Sales · email',
    builder: 'Builder',
  },
  form: {
    heading: 'Tell us a bit about you',
    reply: 'We reply within one business day.',
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    interestedIn: 'Interested in',
    pickApp: '— Pick an app —',
    multipleApps: 'Multiple apps',
    whitelabelScope: 'White-label scope',
    other: 'Other',
    hosting: 'Hosting preference',
    hostingOptions: {
      cloud: 'Cloud',
      selfhost: 'Self-hosted',
      unsure: 'Unsure — advise me',
    },
    message: 'What are you trying to do?',
    messagePlaceholder: 'A few lines on your business, team size, current stack…',
    privacy: "By submitting, you agree to our privacy practices. We don't spam.",
    submit: 'Send',
    submitting: 'Sending…',
    errorGeneric: 'Something went wrong. Please try again or email us directly.',
    errorNetwork: 'We could not reach the server. Please check your connection or email us directly.',
    successTitle: 'Got it. Your message is on its way.',
    successBody: 'Expect a reply from {email} within one business day.',
    successFollow: 'Want to follow up directly?',
  },
};

export type ContactCopy = typeof en;

const hi: ContactCopy = {
  seo: {
    title: 'Contact — 399apps se demo, plan ya white-label ke baare mein baat karein.',
    description:
      '399apps se sampark karein. 20-minute demo book karein, custom quote maangein, ya white-label deployment scope karein. Email, WhatsApp, ya form.',
    keywords: ['contact 399apps', 'book a demo', 'business software demo', 'white label SaaS contact'],
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Bataiye kya banana hai.',
    lede: 'Ek choti baat door tak jaati hai. Apna context share karein — hum sahi app, plan aur hosting mode recommend karenge.',
  },
  channels: {
    salesEmail: 'Sales · email',
    builder: 'Builder',
  },
  form: {
    heading: 'Apne baare mein thoda bataiye',
    reply: 'Hum ek business day mein jawab dete hain.',
    name: 'Naam',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    interestedIn: 'Kya interested hai',
    pickApp: '— Ek app chunein —',
    multipleApps: 'Multiple apps',
    whitelabelScope: 'White-label scope',
    other: 'Doosra',
    hosting: 'Hosting preference',
    hostingOptions: {
      cloud: 'Cloud',
      selfhost: 'Self-hosted',
      unsure: 'Sure nahi — salah dijiye',
    },
    message: 'Kya karna chahte hain?',
    messagePlaceholder: 'Apne business, team size, current stack ke baare mein kuch lines…',
    privacy: 'Submit karke aap hamari privacy practices se sahmat hain. Hum spam nahi karte.',
    submit: 'Bhejein',
    submitting: 'Bhej rahe hain…',
    errorGeneric: 'Kuch galat ho gaya. Phir try karein ya humein seedha email karein.',
    errorNetwork: 'Server tak nahi pahunch paaye. Connection check karein ya humein seedha email karein.',
    successTitle: 'Mil gaya. Aapka message ja raha hai.',
    successBody: '{email} se ek business day mein reply ki ummeed karein.',
    successFollow: 'Seedha follow up karna hai?',
  },
};

const ta: ContactCopy = {
  seo: {
    title: 'Contact — 399apps-oda demo, plan illa white-label pathi pesunga.',
    description:
      '399apps-a thodarbu kollunga. 20-nimisha demo book pannunga, custom quote request pannunga, illa white-label deployment scope pannunga. Email, WhatsApp, illa form.',
    keywords: ['contact 399apps', 'book a demo', 'business software demo', 'white label SaaS contact'],
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Enna build pannanumnu sollunga.',
    lede: 'Oru chinna pesu doora pogum. Unga context share pannunga — naanga sariyaana app, plan, hosting mode recommend pannrom.',
  },
  channels: {
    salesEmail: 'Sales · email',
    builder: 'Builder',
  },
  form: {
    heading: 'Unga pathi konjam sollunga',
    reply: 'Oru business day-la badhil tharom.',
    name: 'Per',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    interestedIn: 'Enna interested',
    pickApp: '— Oru app select pannunga —',
    multipleApps: 'Pala apps',
    whitelabelScope: 'White-label scope',
    other: 'Innondru',
    hosting: 'Hosting preference',
    hostingOptions: {
      cloud: 'Cloud',
      selfhost: 'Self-hosted',
      unsure: 'Theriyala — yosanai sollunga',
    },
    message: 'Enna pannanumnu paarkireenga?',
    messagePlaceholder: 'Unga business, team size, current stack pathi konjam lines…',
    privacy: 'Submit panrathula naanga privacy practices-a accept pannreenga. Spam pannamaattom.',
    submit: 'Anuppunga',
    submitting: 'Anuppurom…',
    errorGeneric: 'Edho thappa pochu. Mudhurum try pannunga illa neradiyaa email pannunga.',
    errorNetwork: 'Server-a edhirpaartha mudiyala. Connection check pannunga illa neradiyaa email pannunga.',
    successTitle: 'Kidaichudhu. Unga message povudhu.',
    successBody: '{email}-la irundhu oru business day-la badhil edhirpaarunga.',
    successFollow: 'Neradiyaa follow up pannanuma?',
  },
};

const hindi: ContactCopy = {
  seo: {
    title: 'संपर्क — 399apps से डेमो, प्लान या व्हाइट-लेबल के बारे में बात करें।',
    description:
      '399apps से संपर्क करें। 20-मिनट का डेमो बुक करें, कस्टम कोट मांगें, या व्हाइट-लेबल डिप्लॉयमेंट scope करें। Email, WhatsApp, या फ़ॉर्म।',
    keywords: ['contact 399apps', 'book a demo', 'business software demo', 'white label SaaS contact'],
  },
  hero: {
    eyebrow: 'संपर्क',
    title: 'बताइए क्या बनाना है।',
    lede: 'एक छोटी बात दूर तक जाती है। अपना context साझा करें — हम सही ऐप, प्लान और hosting mode सुझाएँगे।',
  },
  channels: {
    salesEmail: 'सेल्स · ईमेल',
    builder: 'Builder',
  },
  form: {
    heading: 'अपने बारे में थोड़ा बताइए',
    reply: 'हम एक बिज़नेस दिन में जवाब देते हैं।',
    name: 'नाम',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    interestedIn: 'किसमें रुचि',
    pickApp: '— एक ऐप चुनें —',
    multipleApps: 'कई ऐप्स',
    whitelabelScope: 'व्हाइट-लेबल scope',
    other: 'अन्य',
    hosting: 'Hosting preference',
    hostingOptions: {
      cloud: 'क्लाउड',
      selfhost: 'सेल्फ़-होस्टेड',
      unsure: 'सुनिश्चित नहीं — सलाह दीजिए',
    },
    message: 'क्या करना चाहते हैं?',
    messagePlaceholder: 'अपने बिज़नेस, team size, current stack के बारे में कुछ लाइनें…',
    privacy: 'Submit करके आप हमारी privacy practices से सहमत हैं। हम spam नहीं करते।',
    submit: 'भेजें',
    submitting: 'भेज रहे हैं…',
    errorGeneric: 'कुछ ग़लत हो गया। फिर से कोशिश करें या हमें सीधा email करें।',
    errorNetwork: 'सर्वर तक नहीं पहुँच पाए। Connection देखें या हमें सीधा email करें।',
    successTitle: 'मिल गया। आपका संदेश जा रहा है।',
    successBody: '{email} से एक बिज़नेस दिन में reply की उम्मीद करें।',
    successFollow: 'सीधा follow up करना है?',
  },
};

const tamil: ContactCopy = {
  seo: {
    title: 'தொடர்பு — 399apps-உடன் டெமோ, பிளான் அல்லது ஒயிட்-லேபல் பற்றி பேசுங்கள்.',
    description:
      '399apps-ஐ தொடர்பு கொள்ளுங்கள். 20-நிமிட டெமோ புக் செய்யுங்கள், கஸ்டம் கோட் கேட்கவும், அல்லது ஒயிட்-லேபல் டிப்ளாய்மென்டை ஸ்கோப் பண்ணுங்கள். Email, WhatsApp, அல்லது form.',
    keywords: ['contact 399apps', 'book a demo', 'business software demo', 'white label SaaS contact'],
  },
  hero: {
    eyebrow: 'தொடர்பு',
    title: 'என்ன build செய்ய வேண்டும் என்று சொல்லுங்கள்.',
    lede: 'ஒரு குறு உரையாடல் தூரம் செல்லும். உங்கள் context-ஐ பகிருங்கள் — சரியான ஆப், பிளான், hosting mode சிபாரிசு செய்வோம்.',
  },
  channels: {
    salesEmail: 'சேல்ஸ் · email',
    builder: 'Builder',
  },
  form: {
    heading: 'உங்களைப் பற்றி கொஞ்சம் சொல்லுங்கள்',
    reply: 'ஒரு business day-க்குள் பதில் தருகிறோம்.',
    name: 'பெயர்',
    email: 'Work email',
    company: 'Company',
    phone: 'Phone / WhatsApp',
    interestedIn: 'என்னில் interest',
    pickApp: '— ஒரு ஆப் தேர்வு செய்யவும் —',
    multipleApps: 'பல ஆப்ஸ்',
    whitelabelScope: 'ஒயிட்-லேபல் scope',
    other: 'மற்றவை',
    hosting: 'Hosting preference',
    hostingOptions: {
      cloud: 'கிளவுட்',
      selfhost: 'செல்ஃப்-ஹோஸ்டட்',
      unsure: 'தெரியாது — ஆலோசனை சொல்லவும்',
    },
    message: 'என்ன செய்ய பார்க்கிறீர்கள்?',
    messagePlaceholder: 'உங்கள் business, team size, current stack பற்றி சில lines…',
    privacy: 'Submit செய்வதன் மூலம் எங்கள் privacy practices-ஐ ஏற்கிறீர்கள். ஸ்பாம் செய்ய மாட்டோம்.',
    submit: 'அனுப்பு',
    submitting: 'அனுப்புகிறது…',
    errorGeneric: 'ஏதோ தவறு நடந்தது. மீண்டும் முயற்சி செய்யுங்கள் அல்லது நேரடியாக email செய்யுங்கள்.',
    errorNetwork: 'சர்வரை அடைய முடியவில்லை. Connection சோதிக்கவும் அல்லது நேரடியாக email செய்யவும்.',
    successTitle: 'கிடைத்தது. உங்கள் செய்தி போய்க்கொண்டிருக்கிறது.',
    successBody: '{email}-லிருந்து ஒரு business day-க்குள் reply எதிர்பாருங்கள்.',
    successFollow: 'நேரடியாக follow up செய்ய வேண்டுமா?',
  },
};

const CONTACT_COPY: Record<Lang, ContactCopy> = { en, hi, ta, hindi, tamil };

export function getContactCopy(lang: Lang): ContactCopy {
  return pickByLang(CONTACT_COPY, lang);
}
