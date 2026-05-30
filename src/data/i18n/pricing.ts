import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Pricing — ₹399 first app, ₹99 each add-on. Unlimited users.',
    description:
      'Simple, honest pricing for 399apps — Nidhi Books, Inventory, Matrimonials and Job Portal. ₹399/month for your first app on the cloud, ₹99/month for every additional app or add-on. Unlimited users. Self-hosted and enterprise are custom-quoted.',
    keywords: ['399apps pricing', '₹399 per month business software', 'unlimited user SaaS India', 'flat pricing accounting software', 'cheap GST billing software'],
  },
  hero: {
    eyebrow: 'Pricing',
    titleA: 'first app.',
    titleB: 'each after.',
    lede: 'Your first app is ₹399/month on the cloud. Every additional app or add-on is just ₹99/month. Unlimited users on all of it. No tiers, no per-seat charges. Self-hosted and enterprise needs are custom-quoted.',
    badges: ['Unlimited users', 'Unlimited exports', 'Every feature included', 'Cancel anytime'],
  },
  addsUp: {
    title: 'How it adds up',
    rows: [
      { label: 'First app (e.g. Books)', value: '₹399/mo' },
      { label: '+ Add Inventory', value: '₹99/mo' },
      { label: '+ Any add-on', value: '₹99/mo' },
    ],
    totalLabel: 'Your total',
    totalValue: '₹597/mo',
    footnote: 'Unlimited users throughout. No per-seat charges, ever.',
    fineprint: 'Prices exclude GST, billed monthly (annual billing available on request). Self-hosted and enterprise scopes are custom-quoted.',
  },
  whichApps: {
    eyebrow: 'Same simple pricing, every app',
    title: 'Pick a first app. Add the rest for ₹99.',
    lede: 'Any product can be your ₹399/month base app — every other app or add-on you bolt on is ₹99/month, with unlimited users throughout.',
    addOnNote: 'or ₹99 as add-on',
  },
  faq: {
    title: 'Pricing — FAQs',
    items: [
      { q: 'How does the ₹399 + ₹99 pricing work?', a: 'Your first app on the cloud is ₹399/month. Every additional app, and every add-on, is ₹99/month. So Books alone is ₹399; Books + Inventory is ₹498; Books + Inventory + one add-on is ₹597 — and so on. Unlimited users on all of it.' },
      { q: 'Is the whole suite ₹399?', a: 'No. ₹399 is for your first app. Each further app or add-on is ₹99/month, so your bill scales with exactly what you use — never a flat all-you-can-eat price.' },
      { q: 'What does "unlimited users" mean?', a: 'No per-seat caps, ever. Add as many team members, admins, members, profiles, jobs or candidates as your business needs — it never changes your price.' },
      { q: 'What counts as an "add-on"?', a: 'Optional capabilities on top of an app — extra modules, integrations or workflow extensions. Each is ₹99/month, the same as adding another app.' },
      { q: 'What about self-hosting?', a: 'If you want to run a 399apps product on your own server with full data ownership, we quote it custom based on your scale and support needs. Talk to us and we will scope it.' },
      { q: 'What counts as "enterprise"?', a: 'White-label deployments, deep customisation, SSO, audit logs, custom SLAs, or very large scale. These are bespoke — we scope and quote per engagement.' },
      { q: 'Is GST included?', a: 'No — the ₹399 and ₹99 prices are exclusive of GST. We add applicable GST on the invoice based on your billing location.' },
      { q: 'Can I pay annually?', a: 'Yes, annual billing is available on request (with a discount). The headline ₹399/month is the simplest way to think about it.' },
      { q: 'Do you offer non-profit or community discounts?', a: 'Yes. Registered non-profits, community organisations and educational projects can get a discount. Write to us with proof of registration.' },
      { q: 'What payment methods do you accept?', a: 'UPI, bank transfer (NEFT/RTGS) and cards for India. International customers can pay via card or wire.' },
    ],
  },
  finalCta: {
    eyebrow: 'Self-hosted, white-label or enterprise?',
    title: "Tell us what you need and we'll quote it.",
    body: "Running on your own server, putting your brand on it, or rolling out at scale — those are bespoke. A short call and we'll scope it honestly.",
    primaryLabel: 'Talk to us',
    secondaryLabel: 'See the apps',
  },
};

export type PricingCopy = typeof en;

const hi: PricingCopy = {
  seo: {
    title: 'Pricing — ₹399 pehla app, ₹99 har add-on. Unlimited users.',
    description:
      '399apps ki simple aur imaandaar pricing — Nidhi Books, Inventory, Matrimonials aur Job Portal. Pehla app cloud pe ₹399/month, har additional app ya add-on ₹99/month. Unlimited users. Self-hosted aur enterprise custom-quoted.',
    keywords: ['399apps pricing', '₹399 per month business software', 'unlimited user SaaS India', 'flat pricing accounting software', 'cheap GST billing software'],
  },
  hero: {
    eyebrow: 'Pricing',
    titleA: 'pehla app.',
    titleB: 'har ek aage.',
    lede: 'Pehla app cloud pe ₹399/month. Har additional app ya add-on sirf ₹99/month. Sab pe unlimited users. Koi tiers nahi, koi per-seat charge nahi. Self-hosted aur enterprise zarooratein custom-quoted hain.',
    badges: ['Unlimited users', 'Unlimited exports', 'Har feature included', 'Kabhi bhi cancel karein'],
  },
  addsUp: {
    title: 'Kaise jodta hai',
    rows: [
      { label: 'Pehla app (jaise Books)', value: '₹399/mo' },
      { label: '+ Inventory add karein', value: '₹99/mo' },
      { label: '+ Koi bhi add-on', value: '₹99/mo' },
    ],
    totalLabel: 'Aapka total',
    totalValue: '₹597/mo',
    footnote: 'Sab pe unlimited users. Kabhi per-seat charge nahi.',
    fineprint: 'GST se alag price, monthly billed (annual billing request pe milegi). Self-hosted aur enterprise scope custom-quoted hain.',
  },
  whichApps: {
    eyebrow: 'Wahi simple pricing, har app',
    title: 'Pehla app chuno. Baaki ₹99 mein add karo.',
    lede: 'Koi bhi product aapka ₹399/month base app ban sakta hai — uske baad har app ya add-on ₹99/month, sab pe unlimited users.',
    addOnNote: 'ya add-on ke roop mein ₹99',
  },
  faq: {
    title: 'Pricing — FAQs',
    items: [
      { q: '₹399 + ₹99 pricing kaise kaam karti hai?', a: 'Aapka pehla cloud app ₹399/month. Har additional app, aur har add-on, ₹99/month. Toh Books akele ₹399; Books + Inventory ₹498; Books + Inventory + ek add-on ₹597 — aise hi aage. Sab pe unlimited users.' },
      { q: 'Kya poori suite ₹399 hai?', a: 'Nahi. ₹399 sirf pehle app ke liye hai. Har aage ka app ya add-on ₹99/month, toh aapka bill exactly utna hi badhega jitna aap use karenge — kabhi flat all-you-can-eat price nahi.' },
      { q: '"Unlimited users" ka matlab kya hai?', a: 'Kabhi per-seat cap nahi. Jitne team members, admins, members, profiles, jobs ya candidates chahiye add karein — price kabhi nahi badlega.' },
      { q: '"Add-on" kya hota hai?', a: 'App ke upar optional capabilities — extra modules, integrations ya workflow extensions. Har ek ₹99/month, ek aur app add karne ke barabar.' },
      { q: 'Self-hosting ke liye?', a: 'Agar aap apne server pe 399apps product run karna chahte hain full data ownership ke saath, hum aapke scale aur support needs ke hisaab se custom quote dete hain. Humse baat karein, scope karenge.' },
      { q: '"Enterprise" kya hota hai?', a: 'White-label deployment, deep customisation, SSO, audit logs, custom SLA, ya bahut bada scale. Yeh sab bespoke hain — har engagement ke hisaab se scope aur quote karte hain.' },
      { q: 'Kya GST include hai?', a: 'Nahi — ₹399 aur ₹99 GST se alag hain. Aapke billing location ke hisaab se invoice pe applicable GST add karte hain.' },
      { q: 'Kya annually pay kar sakta hoon?', a: 'Haan, annual billing request pe available hai (discount ke saath). Headline ₹399/month sabse simple soch ka tareeka hai.' },
      { q: 'Kya non-profit ya community discount hai?', a: 'Haan. Registered non-profits, community organisations aur educational projects ko discount milta hai. Registration proof ke saath likhein.' },
      { q: 'Kaunse payment methods accept karte hain?', a: 'India ke liye UPI, bank transfer (NEFT/RTGS) aur cards. International customers card ya wire se pay kar sakte hain.' },
    ],
  },
  finalCta: {
    eyebrow: 'Self-hosted, white-label ya enterprise?',
    title: 'Bataiye kya chahiye, hum quote denge.',
    body: 'Apne server pe chalana, apna brand lagana, ya bade scale pe roll-out — yeh bespoke hain. Ek choti call aur hum honestly scope karenge.',
    primaryLabel: 'Humse baat karein',
    secondaryLabel: 'Apps dekhein',
  },
};

const ta: PricingCopy = {
  seo: {
    title: 'Pricing — ₹399 mudhal app, ₹99 ovvoru add-on. Unlimited users.',
    description:
      '399apps-oda simple, honest pricing — Nidhi Books, Inventory, Matrimonials matrum Job Portal. Mudhal app cloud-la ₹399/month, ovvoru additional app illa add-on ₹99/month. Unlimited users. Self-hosted matrum enterprise custom-quoted.',
    keywords: ['399apps pricing', '₹399 per month business software', 'unlimited user SaaS India', 'flat pricing accounting software', 'cheap GST billing software'],
  },
  hero: {
    eyebrow: 'Pricing',
    titleA: 'mudhal app.',
    titleB: 'apram ovvonnum.',
    lede: 'Mudhal app cloud-la ₹399/month. Ovvoru additional app illa add-on vெறும் ₹99/month. Ellaadhulayum unlimited users. Tiers illa, per-seat charge illa. Self-hosted matrum enterprise needs custom-quoted.',
    badges: ['Unlimited users', 'Unlimited exports', 'Ovvoru feature-um included', 'Eppovum cancel pannalaam'],
  },
  addsUp: {
    title: 'Eppadi koodudhu',
    rows: [
      { label: 'Mudhal app (e.g. Books)', value: '₹399/mo' },
      { label: '+ Inventory add pannunga', value: '₹99/mo' },
      { label: '+ Edha add-on', value: '₹99/mo' },
    ],
    totalLabel: 'Unga total',
    totalValue: '₹597/mo',
    footnote: 'Ellaadhulayum unlimited users. Eppovum per-seat charge illa.',
    fineprint: 'Vilai GST-ya thavira, monthly billed (annual billing request pannalaam). Self-hosted matrum enterprise scope custom-quoted.',
  },
  whichApps: {
    eyebrow: 'Adhe simple pricing, ovvoru app-kum',
    title: 'Mudhal app select pannunga. Mathadhu ₹99-ku add pannunga.',
    lede: 'Edha product-um unga ₹399/month base app aagalaam — adhuku apram ovvoru app illa add-on ₹99/month, ellaadhulayum unlimited users.',
    addOnNote: 'illa add-on-aa ₹99',
  },
  faq: {
    title: 'Pricing — FAQs',
    items: [
      { q: '₹399 + ₹99 pricing eppadi velai seyyudhu?', a: 'Unga mudhal cloud app ₹399/month. Ovvoru additional app, matrum ovvoru add-on, ₹99/month. So Books mattum ₹399; Books + Inventory ₹498; Books + Inventory + oru add-on ₹597 — apdiye thodarum. Ellaadhulayum unlimited users.' },
      { q: 'Mottam suite ₹399-aa?', a: 'Illa. ₹399 mudhal app-ku mattum. Adhuku apram ovvoru app illa add-on ₹99/month, so unga bill exactly evvalavu use pannreengo adhukku eththra alavula thaan adikkum — eppovum flat all-you-can-eat price illa.' },
      { q: '"Unlimited users" arthamenna?', a: 'Eppovum per-seat cap illa. Ethana team members, admins, members, profiles, jobs illa candidates venumo add pannunga — unga price maaradhu.' },
      { q: '"Add-on" enna?', a: 'Oru app mela optional capabilities — extra modules, integrations illa workflow extensions. Ovvonnum ₹99/month, innoru app add panradhuku samam.' },
      { q: 'Self-hosting pathi?', a: 'Neenga unga sontha server-la 399apps product run pannanumna, unga scale matrum support needs-ku custom quote tharom. Enga kitta pesunga, scope pannrom.' },
      { q: '"Enterprise" enna?', a: 'White-label deployment, deep customisation, SSO, audit logs, custom SLA, illa periya scale. Idhellam bespoke — ovvoru engagement-ku scope panni quote pannrom.' },
      { q: 'GST include-aa?', a: 'Illa — ₹399 matrum ₹99 GST-ya thavira. Unga billing location-ku eththra alavula applicable GST invoice-la add pannrom.' },
      { q: 'Annual-a pay pannalaama?', a: 'Aamaa, annual billing request pannina kidaikkum (discount kooda). Headline ₹399/month sabse simple yosanai.' },
      { q: 'Non-profit illa community discount irukka?', a: 'Aamaa. Registered non-profits, community organisations matrum educational projects-ku discount irukku. Registration proof-oda eluthunga.' },
      { q: 'Enna payment methods accept pannreengo?', a: 'India-vukku UPI, bank transfer (NEFT/RTGS) matrum cards. International customers card illa wire-la pay pannalaam.' },
    ],
  },
  finalCta: {
    eyebrow: 'Self-hosted, white-label illa enterprise?',
    title: 'Enna venumnu sollunga, naanga quote pannrom.',
    body: 'Sontha server-la run panradhu, sontha brand vekradhu, illa periya scale-la roll-out — idhellam bespoke. Oru chinna call, naanga honest-a scope pannrom.',
    primaryLabel: 'Enga kitta pesunga',
    secondaryLabel: 'Apps paarunga',
  },
};

const hindi: PricingCopy = {
  seo: {
    title: 'प्राइसिंग — ₹399 पहला ऐप, ₹99 हर ऐड-ऑन। अनलिमिटेड यूज़र्स।',
    description:
      '399apps की सरल, ईमानदार प्राइसिंग — Nidhi Books, Inventory, Matrimonials और Job Portal। पहला ऐप क्लाउड पर ₹399/महीना, हर अतिरिक्त ऐप या ऐड-ऑन ₹99/महीना। अनलिमिटेड यूज़र्स। सेल्फ़-होस्टेड और एंटरप्राइज़ कस्टम-कोटेड हैं।',
    keywords: ['399apps pricing', '₹399 per month business software', 'unlimited user SaaS India', 'flat pricing accounting software', 'cheap GST billing software'],
  },
  hero: {
    eyebrow: 'प्राइसिंग',
    titleA: 'पहला ऐप।',
    titleB: 'हर अगला।',
    lede: 'पहला ऐप क्लाउड पर ₹399/महीना। हर अतिरिक्त ऐप या ऐड-ऑन सिर्फ़ ₹99/महीना। सब पर अनलिमिटेड यूज़र्स। कोई tiers नहीं, कोई per-seat चार्ज नहीं। सेल्फ़-होस्टेड और एंटरप्राइज़ ज़रूरतें कस्टम-कोटेड हैं।',
    badges: ['अनलिमिटेड यूज़र्स', 'अनलिमिटेड एक्सपोर्ट्स', 'हर फ़ीचर शामिल', 'कभी भी कैंसल करें'],
  },
  addsUp: {
    title: 'जोड़ कैसे होता है',
    rows: [
      { label: 'पहला ऐप (जैसे Books)', value: '₹399/mo' },
      { label: '+ Inventory जोड़ें', value: '₹99/mo' },
      { label: '+ कोई भी ऐड-ऑन', value: '₹99/mo' },
    ],
    totalLabel: 'आपका कुल',
    totalValue: '₹597/mo',
    footnote: 'सब पर अनलिमिटेड यूज़र्स। कभी per-seat चार्ज नहीं।',
    fineprint: 'GST अलग, मासिक बिल (वार्षिक बिलिंग रिक्वेस्ट पर)। सेल्फ़-होस्टेड और एंटरप्राइज़ स्कोप कस्टम-कोटेड।',
  },
  whichApps: {
    eyebrow: 'वही सरल प्राइसिंग, हर ऐप',
    title: 'पहला ऐप चुनें। बाक़ी ₹99 में जोड़ें।',
    lede: 'कोई भी प्रोडक्ट आपका ₹399/महीना का बेस ऐप बन सकता है — फिर हर ऐप या ऐड-ऑन ₹99/महीना, सब पर अनलिमिटेड यूज़र्स।',
    addOnNote: 'या ऐड-ऑन के रूप में ₹99',
  },
  faq: {
    title: 'प्राइसिंग — FAQs',
    items: [
      { q: '₹399 + ₹99 प्राइसिंग कैसे काम करती है?', a: 'आपका पहला क्लाउड ऐप ₹399/महीना। हर अतिरिक्त ऐप, और हर ऐड-ऑन, ₹99/महीना। तो अकेले Books ₹399; Books + Inventory ₹498; Books + Inventory + एक ऐड-ऑन ₹597 — और ऐसे ही। सब पर अनलिमिटेड यूज़र्स।' },
      { q: 'क्या पूरी suite ₹399 है?', a: 'नहीं। ₹399 सिर्फ़ पहले ऐप के लिए है। हर आगे का ऐप या ऐड-ऑन ₹99/महीना, इसलिए आपका बिल उतना ही बढ़ेगा जितना आप इस्तेमाल करेंगे — कभी flat all-you-can-eat नहीं।' },
      { q: '"अनलिमिटेड यूज़र्स" का मतलब?', a: 'कभी per-seat cap नहीं। जितने team members, admins, members, profiles, jobs या candidates चाहिए जोड़ें — कीमत कभी नहीं बदलेगी।' },
      { q: '"ऐड-ऑन" क्या होता है?', a: 'ऐप के ऊपर वैकल्पिक capabilities — extra modules, integrations या workflow extensions। हर एक ₹99/महीना, जैसे एक और ऐप जोड़ना।' },
      { q: 'सेल्फ़-होस्टिंग के लिए?', a: 'अगर आप अपने सर्वर पर 399apps प्रोडक्ट चलाना चाहते हैं full data ownership के साथ, हम आपके scale और support needs के हिसाब से कस्टम quote देते हैं। हमसे बात करें, scope करेंगे।' },
      { q: '"एंटरप्राइज़" क्या है?', a: 'व्हाइट-लेबल डिप्लॉयमेंट, गहरी customisation, SSO, audit logs, custom SLA, या बहुत बड़ा scale। ये सब bespoke हैं — हर engagement के हिसाब से scope और quote।' },
      { q: 'क्या GST शामिल है?', a: 'नहीं — ₹399 और ₹99 GST से अलग हैं। आपके बिलिंग location के हिसाब से invoice पर applicable GST जोड़ते हैं।' },
      { q: 'क्या सालाना pay कर सकते हैं?', a: 'हाँ, annual billing request पर available है (छूट के साथ)। Headline ₹399/महीना सबसे सरल तरीका है सोचने का।' },
      { q: 'क्या non-profit या community छूट है?', a: 'हाँ। Registered non-profits, community organisations और educational projects को छूट मिलती है। Registration proof के साथ लिखें।' },
      { q: 'कौन से payment methods accept करते हैं?', a: 'India के लिए UPI, bank transfer (NEFT/RTGS) और cards। International customers card या wire से pay कर सकते हैं।' },
    ],
  },
  finalCta: {
    eyebrow: 'सेल्फ़-होस्टेड, व्हाइट-लेबल या एंटरप्राइज़?',
    title: 'बताइए क्या चाहिए, हम quote देंगे।',
    body: 'अपने सर्वर पर चलाना, अपना ब्रांड लगाना, या बड़े scale पर roll-out — ये bespoke हैं। एक छोटी कॉल और हम ईमानदारी से scope करेंगे।',
    primaryLabel: 'हमसे बात करें',
    secondaryLabel: 'ऐप्स देखें',
  },
};

const tamil: PricingCopy = {
  seo: {
    title: 'ப்ரைசிங் — ₹399 முதல் ஆப், ₹99 ஒவ்வொரு ஆட்-ஆன். அன்லிமிடெட் யூசர்கள்.',
    description:
      '399apps-இன் எளிய, நேர்மையான ப்ரைசிங் — Nidhi Books, Inventory, Matrimonials மற்றும் Job Portal. முதல் ஆப் கிளவுடில் ₹399/மாதம், ஒவ்வொரு கூடுதல் ஆப் அல்லது ஆட்-ஆன் ₹99/மாதம். அன்லிமிடெட் யூசர்கள். செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் கஸ்டம்-கோட்டட்.',
    keywords: ['399apps pricing', '₹399 per month business software', 'unlimited user SaaS India', 'flat pricing accounting software', 'cheap GST billing software'],
  },
  hero: {
    eyebrow: 'ப்ரைசிங்',
    titleA: 'முதல் ஆப்.',
    titleB: 'பிறகு ஒவ்வொன்றும்.',
    lede: 'முதல் ஆப் கிளவுடில் ₹399/மாதம். ஒவ்வொரு கூடுதல் ஆப் அல்லது ஆட்-ஆன் வெறும் ₹99/மாதம். எல்லாவற்றிலும் அன்லிமிடெட் யூசர்கள். டியர்ஸ் இல்லை, per-seat சார்ஜ் இல்லை. செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் தேவைகள் கஸ்டம்-கோட்டட்.',
    badges: ['அன்லிமிடெட் யூசர்கள்', 'அன்லிமிடெட் எக்ஸ்போர்ட்ஸ்', 'ஒவ்வொரு ஃபீச்சரும் சேர்க்கப்பட்டுள்ளது', 'எப்போது வேண்டுமானாலும் கேன்சல்'],
  },
  addsUp: {
    title: 'எப்படி கூடுது',
    rows: [
      { label: 'முதல் ஆப் (உ.ம். Books)', value: '₹399/mo' },
      { label: '+ Inventory சேர்க்கவும்', value: '₹99/mo' },
      { label: '+ எந்த ஆட்-ஆன்', value: '₹99/mo' },
    ],
    totalLabel: 'உங்கள் மொத்தம்',
    totalValue: '₹597/mo',
    footnote: 'எல்லாவற்றிலும் அன்லிமிடெட் யூசர்கள். எப்போதும் per-seat சார்ஜ் இல்லை.',
    fineprint: 'விலை GST தவிர, மாதாந்திர பில் (வருடாந்திர பில்லிங் கோரிக்கையின் பேரில்). செல்ஃப்-ஹோஸ்டட் மற்றும் எண்டர்ப்ரைஸ் ஸ்கோப் கஸ்டம்-கோட்டட்.',
  },
  whichApps: {
    eyebrow: 'அதே எளிய ப்ரைசிங், ஒவ்வொரு ஆப்-கும்',
    title: 'முதல் ஆப் தேர்வு செய்யவும். மீதியை ₹99-க்கு சேர்க்கவும்.',
    lede: 'எந்த புராடக்ட்டும் உங்கள் ₹399/மாத பேஸ் ஆப்பாக ஆகலாம் — அதன் பிறகு ஒவ்வொரு ஆப் அல்லது ஆட்-ஆன் ₹99/மாதம், எல்லாவற்றிலும் அன்லிமிடெட் யூசர்கள்.',
    addOnNote: 'அல்லது ஆட்-ஆன் ஆக ₹99',
  },
  faq: {
    title: 'ப்ரைசிங் — FAQs',
    items: [
      { q: '₹399 + ₹99 ப்ரைசிங் எப்படி வேலை செய்யுது?', a: 'உங்கள் முதல் கிளவுட் ஆப் ₹399/மாதம். ஒவ்வொரு கூடுதல் ஆப், மற்றும் ஒவ்வொரு ஆட்-ஆன், ₹99/மாதம். அதனால் Books மட்டும் ₹399; Books + Inventory ₹498; Books + Inventory + ஒரு ஆட்-ஆன் ₹597 — அப்படியே தொடரும். எல்லாவற்றிலும் அன்லிமிடெட் யூசர்கள்.' },
      { q: 'மொத்த suite ₹399-ஆ?', a: 'இல்லை. ₹399 முதல் ஆப்-க்கு மட்டும். அதன் பிறகு ஒவ்வொரு ஆப் அல்லது ஆட்-ஆன் ₹99/மாதம், எனவே உங்கள் பில் நீங்கள் எவ்வளவு பயன்படுத்துகிறீர்களோ அதற்கு ஏற்ப மட்டுமே அதிகரிக்கும் — எப்போதும் flat all-you-can-eat விலை இல்லை.' },
      { q: '"அன்லிமிடெட் யூசர்கள்" அர்த்தம்?', a: 'எப்போதும் per-seat கேப் இல்லை. எத்தனை டீம் உறுப்பினர்கள், அட்மின்கள், members, profiles, jobs அல்லது candidates வேண்டுமோ சேர்க்கவும் — விலை மாறாது.' },
      { q: '"ஆட்-ஆன்" என்றால் என்ன?', a: 'ஒரு ஆப்பின் மேல் விருப்பத் திறன்கள் — கூடுதல் modules, integrations அல்லது workflow extensions. ஒவ்வொன்றும் ₹99/மாதம், இன்னொரு ஆப் சேர்ப்பதற்கு சமம்.' },
      { q: 'செல்ஃப்-ஹோஸ்டிங் பற்றி?', a: 'நீங்கள் உங்கள் சொந்த சர்வரில் 399apps புராடக்ட் ரன் செய்ய விரும்பினால், உங்கள் ஸ்கேல் மற்றும் சப்போர்ட் தேவைகளுக்கு ஏற்ப கஸ்டம் கோட் தருகிறோம். எங்களிடம் பேசுங்கள், ஸ்கோப் பண்றோம்.' },
      { q: '"எண்டர்ப்ரைஸ்" என்றால் என்ன?', a: 'ஒயிட்-லேபல் டிப்ளாய்மென்ட், ஆழ்ந்த customisation, SSO, audit logs, custom SLA, அல்லது மிக பெரிய ஸ்கேல். இவை bespoke — ஒவ்வொரு engagement-க்கும் ஸ்கோப் செய்து கோட் பண்றோம்.' },
      { q: 'GST சேர்க்கப்பட்டுள்ளதா?', a: 'இல்லை — ₹399 மற்றும் ₹99 GST தவிர. உங்கள் பில்லிங் இடத்திற்கு ஏற்ப applicable GST invoice-ல் சேர்க்கிறோம்.' },
      { q: 'வருடாந்திர பணம் செலுத்த முடியுமா?', a: 'ஆமா, கோரிக்கையின் பேரில் வருடாந்திர பில்லிங் கிடைக்கும் (தள்ளுபடியுடன்). Headline ₹399/மாதம் என்பது எளிமையான வழி.' },
      { q: 'Non-profit அல்லது community தள்ளுபடி உள்ளதா?', a: 'ஆமா. பதிவு செய்யப்பட்ட non-profits, community organisations மற்றும் educational projects-க்கு தள்ளுபடி உண்டு. பதிவு சான்றுடன் எழுதவும்.' },
      { q: 'என்ன பேமென்ட் methods ஏற்கிறீர்கள்?', a: 'India-க்கு UPI, bank transfer (NEFT/RTGS) மற்றும் cards. International customers card அல்லது wire மூலம் பணம் செலுத்தலாம்.' },
    ],
  },
  finalCta: {
    eyebrow: 'செல்ஃப்-ஹோஸ்டட், ஒயிட்-லேபல் அல்லது எண்டர்ப்ரைஸ்?',
    title: 'உங்களுக்கு என்ன வேண்டும் என்று சொல்லுங்கள், கோட் தருகிறோம்.',
    body: 'உங்கள் சொந்த சர்வரில் ரன் செய்வது, உங்கள் ப்ராண்ட் வைப்பது, அல்லது பெரிய ஸ்கேலில் roll-out — இவை bespoke. ஒரு குறு கால், நாங்கள் honest-ஆ ஸ்கோப் செய்வோம்.',
    primaryLabel: 'எங்களிடம் பேசுங்கள்',
    secondaryLabel: 'ஆப்ஸ் பாருங்கள்',
  },
};

const PRICING_COPY: Record<Lang, PricingCopy> = { en, hi, ta, hindi, tamil };

export function getPricingCopy(lang: Lang): PricingCopy {
  return pickByLang(PRICING_COPY, lang);
}
