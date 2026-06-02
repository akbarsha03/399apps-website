import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'About 399apps — Small, opinionated, well-built.',
    description:
      '399apps is a small app-store of business SaaS built by shabuilds — GST-ready accounting and inventory. Cloud or self-hosted, with white-label support.',
    keywords: ['about 399apps', 'shabuilds', 'business SaaS India', '399apps team'],
  },
  hero: {
    eyebrow: 'About',
    title: 'Software that pays for itself in a quarter.',
    lede: '399apps exists because most business software is either too expensive, too bloated, or too closed. We are building a small catalogue of focused apps — accounting and inventory — that are honest with their price and generous with their hosting.',
  },
  body: {
    whyTitle: 'Why we built this',
    whyP1: 'Small businesses, communities and niche operators in India have always been served by either expensive global SaaS, or by old-school desktop software that no one wants to use anymore. We wanted to build a third option: products that feel like Linear or Stripe to use, priced like an Indian tool, and offered with the option to self-host on your own server when you need it.',
    howTitle: 'How we work',
    howP1: 'We ship like engineers, not like an agency. Every product has a small surface area, a clean codebase, and a real deploy story. We support self-hosting because we think you should be able to leave us. We sell yearly because monthly billing makes us optimise for the wrong thing.',
    whoTitle: 'Who builds it',
    whoBefore: '399apps is built, deployed and maintained by ',
    whoLink: 'shabuilds',
    whoAfter: ' — a small, focused product studio. The 399apps app store is one of the things we run; if you like how this works, you might want to talk to us about your own product too.',
  },
  finalCta: {
    eyebrow: 'Want to chat?',
    title: 'We like talking to operators.',
    body: 'Whether you want to use 399apps, white-label it, or just compare notes about building product — write to us.',
    primaryLabel: 'Email us',
    secondaryLabel: 'See apps',
  },
};

export type AboutCopy = typeof en;

const hi: AboutCopy = {
  seo: {
    title: '399apps ke baare mein — Chhota, opinionated, achha banaaya.',
    description:
      '399apps shabuilds ka business SaaS ka chhota app store hai — GST-ready accounting aur inventory. Cloud ya self-hosted, white-label support ke saath.',
    keywords: ['about 399apps', 'shabuilds', 'business SaaS India', '399apps team'],
  },
  hero: {
    eyebrow: 'About',
    title: 'Software jo ek quarter mein khud ki kimat nikaal de.',
    lede: '399apps isliye exist karta hai kyunki zyaadatar business software ya toh bahut mehnga, ya bloated, ya bahut closed hai. Hum focused apps ka ek chhota catalogue bana rahe hain — accounting aur inventory — jo price mein imaandaar aur hosting mein generous hain.',
  },
  body: {
    whyTitle: 'Yeh kyun banaaya',
    whyP1: 'India ke small businesses, communities aur niche operators ko hamesha ya toh mehnge global SaaS ya purane desktop software hi mila hai jise ab koi use nahi karna chahta. Hum teesra option banana chahte the: products jo Linear ya Stripe jaise feel karein, Indian tool ki tarah priced hon, aur zaroorat pade toh apne server pe self-host bhi kiya ja sake.',
    howTitle: 'Hum kaise kaam karte hain',
    howP1: 'Hum engineers ki tarah ship karte hain, agency ki tarah nahi. Har product ka surface area chhota, codebase clean, aur deploy story real hai. Hum self-hosting support karte hain kyunki humein lagta hai aap humein chod sakte hone chahiye. Hum yearly bechte hain kyunki monthly billing humein galat cheez ke liye optimize karaati hai.',
    whoTitle: 'Kaun banaata hai',
    whoBefore: '399apps ko ',
    whoLink: 'shabuilds',
    whoAfter: ' banata, deploy aur maintain karta hai — ek chhota, focused product studio. 399apps app store unme se ek hai jo hum chalate hain; agar yeh tareeka aapko pasand aaya, toh apne product ke baare mein bhi humse baat karein.',
  },
  finalCta: {
    eyebrow: 'Baat karni hai?',
    title: 'Humein operators se baat karna pasand hai.',
    body: '399apps use karna hai, white-label karna hai, ya bas product banane ke notes compare karne hain — humein likhein.',
    primaryLabel: 'Email karein',
    secondaryLabel: 'Apps dekhein',
  },
};

const ta: AboutCopy = {
  seo: {
    title: '399apps pathi — Chinna, opinionated, nalla build pannadhu.',
    description:
      '399apps-na shabuilds-oda business SaaS-oda chinna app store — GST-ready accounting matrum inventory. Cloud illa self-hosted, white-label support-oda.',
    keywords: ['about 399apps', 'shabuilds', 'business SaaS India', '399apps team'],
  },
  hero: {
    eyebrow: 'About',
    title: 'Oru quarter-la sontha vilai-a return tharra software.',
    lede: '399apps irukirathuku reason — mostu business software-um ya bahut mehnga, illa bloated, illa bahut closed. Naanga focused apps-oda chinna catalogue build pannrom — accounting matrum inventory — price-la honest, hosting-la generous.',
  },
  body: {
    whyTitle: 'Yen build pannrom',
    whyP1: 'India-la small businesses, communities, niche operators-ku ennaikum expensive global SaaS illa old-school desktop software mattum thaan kidaichudhu, idha yaarum ipo use panna virumbala. Naanga moonravu option build pannanumna nenacchom: products Linear illa Stripe maadhiri feel aagum, Indian tool maadhiri priced, thேvai patta unga server-la self-host pannalaam.',
    howTitle: 'Eppadi velai pannrom',
    howP1: 'Naanga engineers maadhiri ship pannrom, agency maadhiri illa. Ovvoru product-ku-um surface area chinna, clean codebase, real deploy story irukku. Self-hosting support pannrom, kaaranam neenga engale vittu poga mudiyanum nu nenakirom. Yearly bechufrom, monthly billing wrong cheez-ku optimize seyya vechirudhuna.',
    whoTitle: 'Yaaru build pannranga',
    whoBefore: '399apps-a ',
    whoLink: 'shabuilds',
    whoAfter: ' build panni, deploy panni, maintain pannraanga — oru chinna, focused product studio. 399apps app store athula onnu naanga run pannrom; idhu ungaluku pidikuthuna unga product pathi-yum pesalaam.',
  },
  finalCta: {
    eyebrow: 'Pesanuma?',
    title: 'Operators kitta pesa pidikkum.',
    body: '399apps use pannanum, white-label pannanum, illa product build panradhu pathi notes compare pannanum — engaluku ezhuthunga.',
    primaryLabel: 'Email pannunga',
    secondaryLabel: 'Apps paarunga',
  },
};

const hindi: AboutCopy = {
  seo: {
    title: '399apps के बारे में — छोटा, सुलझा हुआ, अच्छे से बनाया।',
    description:
      '399apps shabuilds का business SaaS का छोटा app store है — GST-ready accounting और inventory। क्लाउड या सेल्फ़-होस्टेड, white-label support के साथ।',
    keywords: ['about 399apps', 'shabuilds', 'business SaaS India', '399apps team'],
  },
  hero: {
    eyebrow: 'अबाउट',
    title: 'सॉफ़्टवेयर जो एक तिमाही में अपनी कीमत निकाल दे।',
    lede: '399apps इसलिए मौजूद है क्योंकि अधिकांश business software या तो बहुत महँगा, या bloated, या बहुत closed है। हम focused apps का एक छोटा catalogue बना रहे हैं — accounting और inventory — जो कीमत में ईमानदार और hosting में उदार हैं।',
  },
  body: {
    whyTitle: 'यह क्यों बनाया',
    whyP1: 'India के small businesses, communities और niche operators को हमेशा या तो महँगे global SaaS या पुराने desktop software ही मिले हैं, जिन्हें अब कोई इस्तेमाल नहीं करना चाहता। हम एक तीसरा option बनाना चाहते थे: products जो Linear या Stripe जैसे feel करें, Indian tool की तरह priced हों, और ज़रूरत पड़े तो अपने सर्वर पर सेल्फ़-होस्ट भी कर सकें।',
    howTitle: 'हम कैसे काम करते हैं',
    howP1: 'हम engineers की तरह ship करते हैं, एजेंसी की तरह नहीं। हर प्रोडक्ट का surface area छोटा, codebase साफ़, और deploy story असली है। हम सेल्फ़-होस्टिंग support करते हैं क्योंकि हमें लगता है आप हमें छोड़ने में सक्षम होने चाहिए। हम सालाना बेचते हैं क्योंकि monthly billing हमें ग़लत चीज़ के लिए optimize कराती है।',
    whoTitle: 'कौन बनाता है',
    whoBefore: '399apps को ',
    whoLink: 'shabuilds',
    whoAfter: ' बनाता, डिप्लॉय और मेंटेन करता है — एक छोटा, फ़ोकस्ड product studio। 399apps app store उन चीज़ों में से एक है जो हम चलाते हैं; अगर आपको यह तरीक़ा पसंद आया, तो अपने product के बारे में भी हमसे बात करें।',
  },
  finalCta: {
    eyebrow: 'बात करनी है?',
    title: 'हमें operators से बात करना पसंद है।',
    body: '399apps इस्तेमाल करना है, white-label करना है, या बस product बनाने के notes compare करने हैं — हमें लिखें।',
    primaryLabel: 'Email करें',
    secondaryLabel: 'Apps देखें',
  },
};

const tamil: AboutCopy = {
  seo: {
    title: '399apps பற்றி — சிறிய, opinionated, நன்றாக கட்டப்பட்டது.',
    description:
      '399apps என்பது shabuilds-இன் business SaaS-இன் சிறிய ஆப் ஸ்டோர் — GST-ready accounting மற்றும் inventory. கிளவுட் அல்லது செல்ஃப்-ஹோஸ்டட், white-label support-உடன்.',
    keywords: ['about 399apps', 'shabuilds', 'business SaaS India', '399apps team'],
  },
  hero: {
    eyebrow: 'பற்றி',
    title: 'ஒரு காலாண்டில் தன் விலையை ஈட்டும் சாஃப்ட்வேர்.',
    lede: '399apps இருக்கிறது, ஏனெனில் பெரும்பாலான business software அதிக விலை, bloated அல்லது மிக closed-ஆக உள்ளது. நாங்கள் focused apps-இன் சிறிய catalogue ஒன்றை கட்டி வருகிறோம் — accounting மற்றும் inventory — விலையில் நேர்மை, hosting-ல் தாராளம்.',
  },
  body: {
    whyTitle: 'ஏன் கட்டினோம்',
    whyP1: 'India-வின் small businesses, communities, niche operators-க்கு எப்போதும் விலை அதிக global SaaS அல்லது பழைய desktop software மட்டுமே கிடைத்தது, இதை இப்போது யாரும் பயன்படுத்த விரும்புவதில்லை. நாங்கள் மூன்றாவது option கட்ட விரும்பினோம்: products Linear அல்லது Stripe போல் உணர, Indian tool போல் விலை, தேவைப்படும் போது உங்கள் சர்வரில் செல்ஃப்-ஹோஸ்ட் செய்யும் வாய்ப்புடன்.',
    howTitle: 'எப்படி வேலை செய்கிறோம்',
    howP1: 'நாங்கள் engineers போல் ship செய்கிறோம், ஏஜென்சி போல் இல்லை. ஒவ்வொரு product-க்கும் surface area சிறியது, codebase சுத்தம், deploy story உண்மை. நாங்கள் self-hosting-ஐ ஆதரிக்கிறோம், ஏனெனில் எங்களை விட்டுச் செல்லும் தேர்வு உங்களுக்கு இருக்க வேண்டும். நாங்கள் ஆண்டுக்கு விற்கிறோம், ஏனெனில் monthly billing தவறான விஷயத்திற்காக optimize செய்ய வைக்கிறது.',
    whoTitle: 'யார் கட்டுகிறார்கள்',
    whoBefore: '399apps-ஐ ',
    whoLink: 'shabuilds',
    whoAfter: ' கட்டி, டிப்ளாய் செய்து, பராமரிக்கிறது — சிறிய, focused product studio. 399apps app store நாங்கள் இயக்கும் ஒன்று; உங்களுக்கு இந்த முறை பிடித்தால், உங்கள் சொந்த product பற்றியும் எங்களிடம் பேசலாம்.',
  },
  finalCta: {
    eyebrow: 'பேச வேண்டுமா?',
    title: 'Operators-உடன் பேசுவது பிடிக்கும்.',
    body: '399apps use செய்ய, white-label செய்ய, அல்லது product கட்டுவதைப் பற்றி notes compare செய்ய — எங்களுக்கு எழுதுங்கள்.',
    primaryLabel: 'Email செய்யவும்',
    secondaryLabel: 'Apps பாருங்கள்',
  },
};

const ABOUT_COPY: Record<Lang, AboutCopy> = { en, hi, ta, hindi, tamil };

export function getAboutCopy(lang: Lang): AboutCopy {
  return pickByLang(ABOUT_COPY, lang);
}
