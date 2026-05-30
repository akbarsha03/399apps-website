import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Cloud vs Self-Hosted — Which 399apps mode is right for you?',
    description:
      'A side-by-side comparison of running 399apps on the cloud versus self-hosting on your own server. Cost, control, compliance, time-to-live — laid out plainly.',
    keywords: ['cloud vs self-hosted', 'SaaS vs self host', 'on-premise vs cloud SaaS', 'self-hosted business software'],
  },
  hero: {
    eyebrow: 'Cloud vs Self-hosted',
    title: 'Which way should you run 399apps?',
    lede: 'We sell both because both make sense — just for different teams. Here is how we think about it.',
  },
  table: {
    dimension: 'Dimension',
    cloud: 'Cloud',
    selfHost: 'Self-host',
    rows: [
      { label: 'Price', cloud: '₹399/mo first app, ₹99 each add-on', self: 'Custom-quoted' },
      { label: 'Users', cloud: 'Unlimited', self: 'Unlimited' },
      { label: 'Time to live', cloud: 'Minutes', self: '1–4 weeks' },
      { label: 'Who runs the server', cloud: '399apps', self: 'You (or our managed add-on)' },
      { label: 'Data location', cloud: 'India region by default', self: 'Wherever your server is' },
      { label: 'Backups', cloud: 'Daily, retained 30 days', self: 'You configure (we ship tooling)' },
      { label: 'Updates', cloud: 'Automatic', self: 'On your schedule' },
      { label: 'Custom domain', cloud: 'Included', self: 'Yours' },
      { label: 'White-label', cloud: 'Enterprise', self: 'Enterprise' },
      { label: 'Source access', cloud: 'No', self: 'Yes, on enterprise' },
      { label: 'Best for', cloud: 'Speed, low-ops, simple ₹399 + ₹99 pricing', self: 'Compliance, data locality, custom infra' },
    ],
  },
  faq: {
    title: 'Cloud vs Self-host — FAQs',
    items: [
      { q: 'Can I start on cloud and move later?', a: 'Yes. We will migrate your data, set up your self-hosted instance and credit the remainder of your cloud subscription toward the self-host quote.' },
      { q: 'Which is cheaper?', a: 'For most teams the ₹399/month cloud plan is the cheapest and simplest option — no server to run. Self-host makes sense when you have a compliance, data-locality or scale reason, not usually a cost one. We will model it honestly for your case.' },
      { q: 'Can I move from self-host back to cloud?', a: 'Yes. The data model is identical. We will migrate you back onto the ₹399/month cloud plan and credit any unused self-host months.' },
    ],
  },
  finalCta: {
    eyebrow: 'Still unsure?',
    title: 'Tell us your situation. We will recommend honestly.',
    body: "If cloud is obviously the right call, we will say so. If you should self-host, we will say that. We sell both, so we don't need to push one.",
    primaryLabel: 'Talk to us',
    secondaryLabel: 'See pricing',
  },
};

export type CloudVsSelfCopy = typeof en;

const hi: CloudVsSelfCopy = {
  seo: {
    title: 'Cloud vs Self-Hosted — Aapke liye 399apps ka kaunsa mode sahi?',
    description:
      '399apps cloud pe vs apne server pe self-host karne ka side-by-side comparison. Cost, control, compliance, time-to-live — saaf-saaf samjhaaya gaya.',
    keywords: ['cloud vs self-hosted', 'SaaS vs self host', 'on-premise vs cloud SaaS', 'self-hosted business software'],
  },
  hero: {
    eyebrow: 'Cloud vs Self-hosted',
    title: '399apps kaise chalayein?',
    lede: 'Hum dono bechte hain kyunki dono ka sense banta hai — bas alag-alag teams ke liye. Hum aise sochte hain.',
  },
  table: {
    dimension: 'Dimension',
    cloud: 'Cloud',
    selfHost: 'Self-host',
    rows: [
      { label: 'Price', cloud: 'Pehla app ₹399/mo, har add-on ₹99', self: 'Custom-quoted' },
      { label: 'Users', cloud: 'Unlimited', self: 'Unlimited' },
      { label: 'Live hone ka time', cloud: 'Minutes', self: '1–4 hafte' },
      { label: 'Server kaun chalata hai', cloud: '399apps', self: 'Aap (ya hamara managed add-on)' },
      { label: 'Data location', cloud: 'Default India region', self: 'Jahaan aapka server ho' },
      { label: 'Backups', cloud: 'Daily, 30 din rakhte hain', self: 'Aap configure karein (tooling hum dete hain)' },
      { label: 'Updates', cloud: 'Automatic', self: 'Aapke schedule pe' },
      { label: 'Custom domain', cloud: 'Included', self: 'Aapka' },
      { label: 'White-label', cloud: 'Enterprise', self: 'Enterprise' },
      { label: 'Source access', cloud: 'Nahi', self: 'Haan, enterprise pe' },
      { label: 'Sabse achha', cloud: 'Speed, low-ops, simple ₹399 + ₹99 pricing', self: 'Compliance, data locality, custom infra' },
    ],
  },
  faq: {
    title: 'Cloud vs Self-host — FAQs',
    items: [
      { q: 'Kya cloud pe shuru karke baad mein move kar sakte hain?', a: 'Haan. Hum aapka data migrate karenge, self-hosted instance set up karenge aur cloud subscription ka baaki amount self-host quote pe credit karenge.' },
      { q: 'Kaunsa sasta hai?', a: 'Zyaadatar teams ke liye ₹399/month cloud plan sabse sasta aur simple option hai — koi server nahi chalana. Self-host tab sense banata hai jab compliance, data-locality ya scale reason ho, cost reason aam taur pe nahi. Hum aapke case ke liye honestly model karenge.' },
      { q: 'Kya self-host se wapas cloud pe ja sakte hain?', a: 'Haan. Data model bilkul same hai. Hum aapko ₹399/month cloud plan pe wapas migrate karenge aur unused self-host months credit denge.' },
    ],
  },
  finalCta: {
    eyebrow: 'Abhi bhi confuse?',
    title: 'Apni situation bataiye. Hum honestly recommend karenge.',
    body: 'Agar cloud sahi hai toh hum bolenge. Agar self-host karna chahiye toh wahi bolenge. Hum dono bechte hain, isliye ek ko push karne ki zaroorat nahi.',
    primaryLabel: 'Humse baat karein',
    secondaryLabel: 'Pricing dekhein',
  },
};

const ta: CloudVsSelfCopy = {
  seo: {
    title: 'Cloud vs Self-Hosted — 399apps-oda enna mode unga-ku sariyaanadhu?',
    description:
      '399apps-a cloud-la vs unga sontha server-la self-host panradhukku side-by-side comparison. Cost, control, compliance, time-to-live — clear-a vechirukom.',
    keywords: ['cloud vs self-hosted', 'SaaS vs self host', 'on-premise vs cloud SaaS', 'self-hosted business software'],
  },
  hero: {
    eyebrow: 'Cloud vs Self-hosted',
    title: '399apps-a eppadi run pannanum?',
    lede: 'Naanga rendaiyum vikrom, rendum sense aagudhu — different teams-ku. Naanga ipdi nenakirom.',
  },
  table: {
    dimension: 'Dimension',
    cloud: 'Cloud',
    selfHost: 'Self-host',
    rows: [
      { label: 'Price', cloud: 'Mudhal app ₹399/mo, ovvoru add-on ₹99', self: 'Custom-quoted' },
      { label: 'Users', cloud: 'Unlimited', self: 'Unlimited' },
      { label: 'Live aaga edukura time', cloud: 'Niminisangal', self: '1–4 weeks' },
      { label: 'Server yaaru run pannradhu', cloud: '399apps', self: 'Neenga (illa engaloda managed add-on)' },
      { label: 'Data location', cloud: 'Default India region', self: 'Unga server enge irukko anga' },
      { label: 'Backups', cloud: 'Daily, 30 naal retain pannrom', self: 'Neenga configure pannunga (tooling naanga tharom)' },
      { label: 'Updates', cloud: 'Automatic', self: 'Unga schedule-la' },
      { label: 'Custom domain', cloud: 'Included', self: 'Unga' },
      { label: 'White-label', cloud: 'Enterprise', self: 'Enterprise' },
      { label: 'Source access', cloud: 'Illa', self: 'Aamaa, enterprise-la' },
      { label: 'Yaaruku best', cloud: 'Speed, low-ops, simple ₹399 + ₹99 pricing', self: 'Compliance, data locality, custom infra' },
    ],
  },
  faq: {
    title: 'Cloud vs Self-host — FAQs',
    items: [
      { q: 'Cloud-la start panni apram move pannalaama?', a: 'Aamaa. Naanga unga data migrate pannrom, self-hosted instance set up pannrom, cloud subscription-la mathra amount-a self-host quote-ku credit kuduppom.' },
      { q: 'Edhu cheap?', a: 'Mostu teams-ku ₹399/month cloud plan cheap-um simple-um — server illa run pannradhu. Self-host sense aagudhu compliance, data-locality illa scale reason irundha, usually cost reason illa. Naanga unga case-ku honest-a model pannrom.' },
      { q: 'Self-host-la irundhu thirumba cloud-ku poga mudiyuma?', a: 'Aamaa. Data model same. Naanga unga ₹399/month cloud plan-ku migrate pannrom, unused self-host months credit kuduppom.' },
    ],
  },
  finalCta: {
    eyebrow: 'Innum confuse-a?',
    title: 'Unga situation sollunga. Naanga honest-a recommend pannrom.',
    body: 'Cloud sariya irundha solrom. Self-host sariya irundha athaiye solrom. Naanga rendaiyum vikrom, edhuvum push panra thேvai illa.',
    primaryLabel: 'Enga kitta pesunga',
    secondaryLabel: 'Pricing paarunga',
  },
};

const hindi: CloudVsSelfCopy = {
  seo: {
    title: 'क्लाउड vs सेल्फ़-होस्टेड — 399apps का कौन-सा mode आपके लिए सही?',
    description:
      '399apps को क्लाउड पर बनाम अपने सर्वर पर सेल्फ़-होस्ट करने का side-by-side comparison। Cost, control, compliance, time-to-live — साफ़-साफ़ रखा गया।',
    keywords: ['cloud vs self-hosted', 'SaaS vs self host', 'on-premise vs cloud SaaS', 'self-hosted business software'],
  },
  hero: {
    eyebrow: 'क्लाउड vs सेल्फ़-होस्टेड',
    title: '399apps किस तरह चलाएँ?',
    lede: 'हम दोनों बेचते हैं क्योंकि दोनों का sense बनता है — बस अलग-अलग teams के लिए। हम ऐसे सोचते हैं।',
  },
  table: {
    dimension: 'Dimension',
    cloud: 'क्लाउड',
    selfHost: 'सेल्फ़-होस्ट',
    rows: [
      { label: 'कीमत', cloud: 'पहला ऐप ₹399/mo, हर ऐड-ऑन ₹99', self: 'कस्टम-कोटेड' },
      { label: 'Users', cloud: 'अनलिमिटेड', self: 'अनलिमिटेड' },
      { label: 'लाइव होने का समय', cloud: 'मिनट', self: '1–4 सप्ताह' },
      { label: 'सर्वर कौन चलाता है', cloud: '399apps', self: 'आप (या हमारा managed add-on)' },
      { label: 'डेटा location', cloud: 'डिफ़ॉल्ट India region', self: 'जहाँ आपका सर्वर हो' },
      { label: 'बैकअप', cloud: 'डेली, 30 दिन रखते हैं', self: 'आप configure करें (tooling हम देते हैं)' },
      { label: 'अपडेट्स', cloud: 'ऑटोमैटिक', self: 'आपके schedule पर' },
      { label: 'कस्टम डोमेन', cloud: 'शामिल', self: 'आपका' },
      { label: 'व्हाइट-लेबल', cloud: 'एंटरप्राइज़', self: 'एंटरप्राइज़' },
      { label: 'Source access', cloud: 'नहीं', self: 'हाँ, एंटरप्राइज़ पर' },
      { label: 'किसके लिए सबसे अच्छा', cloud: 'Speed, low-ops, simple ₹399 + ₹99 pricing', self: 'Compliance, data locality, custom infra' },
    ],
  },
  faq: {
    title: 'क्लाउड vs सेल्फ़-होस्ट — FAQs',
    items: [
      { q: 'क्या क्लाउड पर शुरू करके बाद में move कर सकता हूँ?', a: 'हाँ। हम आपका डेटा migrate करेंगे, सेल्फ़-होस्टेड instance set up करेंगे और cloud subscription का बचा हुआ amount self-host कोट पर credit करेंगे।' },
      { q: 'कौन-सा सस्ता है?', a: 'अधिकांश teams के लिए ₹399/महीना क्लाउड प्लान सबसे सस्ता और सरल है — कोई सर्वर नहीं चलाना। सेल्फ़-होस्ट तब sense बनाता है जब compliance, data-locality या scale कारण हो, आमतौर पर cost कारण नहीं। हम आपके केस के लिए ईमानदारी से model करेंगे।' },
      { q: 'क्या सेल्फ़-होस्ट से वापस क्लाउड पर जा सकते हैं?', a: 'हाँ। डेटा model एक जैसा है। हम आपको ₹399/महीना क्लाउड प्लान पर वापस migrate करेंगे और unused self-host months credit देंगे।' },
    ],
  },
  finalCta: {
    eyebrow: 'अभी भी confuse?',
    title: 'अपनी situation बताइए। हम ईमानदारी से सुझाएँगे।',
    body: 'क्लाउड सही है तो वही कहेंगे। सेल्फ़-होस्ट करना चाहिए तो वही कहेंगे। हम दोनों बेचते हैं, इसलिए किसी एक को push करने की ज़रूरत नहीं।',
    primaryLabel: 'हमसे बात करें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
};

const tamil: CloudVsSelfCopy = {
  seo: {
    title: 'கிளவுட் vs செல்ஃப்-ஹோஸ்டட் — உங்களுக்கு எந்த 399apps mode சரி?',
    description:
      '399apps-ஐ கிளவுடில் vs உங்கள் சர்வரில் செல்ஃப்-ஹோஸ்ட் செய்வதற்கான side-by-side ஒப்பீடு. Cost, control, compliance, time-to-live — தெளிவாக.',
    keywords: ['cloud vs self-hosted', 'SaaS vs self host', 'on-premise vs cloud SaaS', 'self-hosted business software'],
  },
  hero: {
    eyebrow: 'கிளவுட் vs செல்ஃப்-ஹோஸ்டட்',
    title: '399apps-ஐ எப்படி இயக்க வேண்டும்?',
    lede: 'நாங்கள் இரண்டையும் விற்கிறோம், ஏனெனில் இரண்டிற்கும் sense உண்டு — வெவ்வேறு teams-க்கு. நாங்கள் இப்படி நினைக்கிறோம்.',
  },
  table: {
    dimension: 'Dimension',
    cloud: 'கிளவுட்',
    selfHost: 'செல்ஃப்-ஹோஸ்ட்',
    rows: [
      { label: 'விலை', cloud: 'முதல் ஆப் ₹399/mo, ஒவ்வொரு ஆட்-ஆன் ₹99', self: 'கஸ்டம்-கோட்டட்' },
      { label: 'Users', cloud: 'அன்லிமிடெட்', self: 'அன்லிமிடெட்' },
      { label: 'லைவ் ஆகும் நேரம்', cloud: 'நிமிடங்கள்', self: '1–4 weeks' },
      { label: 'சர்வரை யார் இயக்குகிறார்', cloud: '399apps', self: 'நீங்கள் (அல்லது எங்கள் managed add-on)' },
      { label: 'டேட்டா location', cloud: 'டிஃபால்ட் India region', self: 'உங்கள் சர்வர் எங்கே உள்ளதோ அங்கே' },
      { label: 'பேக்அப்', cloud: 'டெய்லி, 30 நாட்கள்', self: 'நீங்கள் configure (tooling நாங்கள் தருகிறோம்)' },
      { label: 'அப்டேட்ஸ்', cloud: 'ஆட்டோமேட்டிக்', self: 'உங்கள் schedule-ல்' },
      { label: 'கஸ்டம் டொமைன்', cloud: 'சேர்க்கப்பட்டுள்ளது', self: 'உங்கள்' },
      { label: 'ஒயிட்-லேபல்', cloud: 'எண்டர்ப்ரைஸ்', self: 'எண்டர்ப்ரைஸ்' },
      { label: 'Source access', cloud: 'இல்லை', self: 'ஆமா, எண்டர்ப்ரைஸ்-ல்' },
      { label: 'யாருக்கு சிறந்தது', cloud: 'Speed, low-ops, simple ₹399 + ₹99 pricing', self: 'Compliance, data locality, custom infra' },
    ],
  },
  faq: {
    title: 'கிளவுட் vs செல்ஃப்-ஹோஸ்ட் — FAQs',
    items: [
      { q: 'கிளவுட்-ல் தொடங்கி பிறகு move செய்ய முடியுமா?', a: 'ஆமா. உங்கள் டேட்டாவை migrate செய்வோம், செல்ஃப்-ஹோஸ்டட் instance set up செய்வோம், கிளவுட் subscription-ல் மீதி amount-ஐ self-host quote-க்கு credit செய்வோம்.' },
      { q: 'எது cheap?', a: 'பெரும்பாலான teams-க்கு ₹399/மாதம் கிளவுட் பிளான் cheap-உம் simple-உம் — சர்வர் ரன் செய்ய தேவையில்லை. செல்ஃப்-ஹோஸ்ட் sense ஆகுது compliance, data-locality அல்லது scale காரணம் இருந்தால், usually cost காரணம் இல்லை. உங்கள் case-க்கு honest-ஆ model செய்வோம்.' },
      { q: 'செல்ஃப்-ஹோஸ்ட்-லிருந்து மீண்டும் கிளவுட்-க்கு போக முடியுமா?', a: 'ஆமா. டேட்டா model same. உங்களை ₹399/மாதம் கிளவுட் பிளானுக்கு migrate செய்வோம், unused self-host months credit கொடுப்போம்.' },
    ],
  },
  finalCta: {
    eyebrow: 'இன்னும் confuse-ஆ?',
    title: 'உங்கள் situation சொல்லுங்கள். நாங்கள் honest-ஆ recommend செய்வோம்.',
    body: 'கிளவுட் சரியா இருந்தா அதுவே சொல்வோம். செல்ஃப்-ஹோஸ்ட் வேண்டுமா அதையே சொல்வோம். நாங்கள் இரண்டையும் விற்கிறோம், ஒன்றை push செய்ய தேவை இல்லை.',
    primaryLabel: 'எங்களிடம் பேசுங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
};

const CLOUD_VS_SELF_COPY: Record<Lang, CloudVsSelfCopy> = { en, hi, ta, hindi, tamil };

export function getCloudVsSelfCopy(lang: Lang): CloudVsSelfCopy {
  return pickByLang(CLOUD_VS_SELF_COPY, lang);
}
