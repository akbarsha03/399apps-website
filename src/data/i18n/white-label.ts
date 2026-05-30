import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'White Label — Launch a 399apps product under your brand.',
    description:
      'White-label Nidhi Books, Inventory, Matrimonials or Job Portal under your own domain, logo and colours. B2B and B2C ready, on cloud or self-hosted.',
    keywords: ['white label SaaS', 'white label matrimonial', 'white label job portal', 'white label inventory software', 'rebrandable business software'],
  },
  hero: {
    eyebrow: 'White label',
    title: 'Your brand on top. Our engineering underneath.',
    lede: 'Run any 399apps product under your own brand — domain, logo, colours, copy, the whole thing. No per-user royalties, no fine print.',
    primaryCta: 'Start a white-label conversation',
    secondaryCta: 'See base pricing',
  },
  perfectFor: {
    eyebrow: 'Perfect for',
    title: 'When you need a product, not a project.',
    lede: 'Communities, niche operators and agencies use 399apps to launch a serious product in weeks instead of years — without becoming a software company.',
    cards: [
      { t: 'Community matrimony platforms', b: 'Caste, regional or NRI matrimonial brands that want a Shaadi-class product without a 12-month build.' },
      { t: 'Niche job boards', b: 'Industry associations, alumni networks or specialist recruiters who want their own Naukri-class portal.' },
      { t: 'Vertical accounting + inventory', b: 'Pharmacy, jewellery, fashion or distribution operators who want Books + Inventory tuned to their vocabulary.' },
      { t: 'Agencies & resellers', b: 'Agencies bundling SaaS with services — resell 399apps under your brand with a flat yearly licence.' },
    ],
  },
  whatYouGet: {
    eyebrow: 'What you get',
    title: 'A real product, in your colours.',
    items: [
      'Your domain (yourbrand.com)',
      'Logo, favicon, OG images',
      'Brand colour system',
      'All app copy, configurable per locale',
      'Branded transactional emails',
      'Custom T&Cs, privacy policy hooks',
      'Per-product taxonomies (matrimony / jobs)',
      'Razorpay / Stripe / Cashfree on your account',
      'SEO setup on your domain (sitemap, schema, OG)',
      'Optional managed support add-on',
    ],
  },
  faq: {
    title: 'White-label — FAQs',
    items: [
      { q: 'What can I customise on a white-label deployment?', a: 'Domain, logo, favicon, brand colours, all copy, email templates, payment branding, supported languages, terms of use, and category taxonomies for matrimony / jobs.' },
      { q: 'Will customers know it is 399apps under the hood?', a: 'No. Your customers see your brand. The 399apps name is not visible in the app, in emails or in legal copy. Engineering credits stay in the source — that is it.' },
      { q: 'Is there a per-customer royalty?', a: 'No. White-label is a flat yearly licence per deployment. Add seats and scale tiers honestly without per-end-user royalties.' },
      { q: 'How long does a white-label launch take?', a: 'Cloud white-label launches take roughly 1–2 weeks. Self-hosted launches typically take 2–4 weeks depending on customisation scope.' },
      { q: 'Can you handle our payments + KYC?', a: 'Yes. We integrate Razorpay, Stripe, Cashfree or your provider of choice, and route payouts to your account. KYC flows are configurable per product.' },
    ],
  },
  finalCta: {
    eyebrow: 'Ready to white-label?',
    title: 'Tell us about the brand you want to launch.',
    body: 'A 30-minute conversation. We will scope your brand, product and timeline, and quote a fixed yearly licence.',
    primaryLabel: 'Talk to us',
    secondaryLabel: 'See pricing',
  },
};

export type WhiteLabelCopy = typeof en;

const hi: WhiteLabelCopy = {
  seo: {
    title: 'White Label — 399apps product apne brand mein launch karein.',
    description:
      'Nidhi Books, Inventory, Matrimonials ya Job Portal ko apne domain, logo aur colours mein white-label karein. B2B aur B2C ready, cloud ya self-hosted.',
    keywords: ['white label SaaS', 'white label matrimonial', 'white label job portal', 'white label inventory software', 'rebrandable business software'],
  },
  hero: {
    eyebrow: 'White label',
    title: 'Aapka brand upar. Hamari engineering neeche.',
    lede: 'Koi bhi 399apps product apne brand pe chalayein — domain, logo, colours, copy, sab kuch. Koi per-user royalty nahi, koi fine print nahi.',
    primaryCta: 'White-label baat shuru karein',
    secondaryCta: 'Base pricing dekhein',
  },
  perfectFor: {
    eyebrow: 'Perfect kiske liye',
    title: 'Jab aapko product chahiye, project nahi.',
    lede: 'Communities, niche operators aur agencies 399apps use karte hain ek serious product weeks mein launch karne ke liye — software company banne ke bina.',
    cards: [
      { t: 'Community matrimony platforms', b: 'Caste, regional ya NRI matrimony brands jo 12-mahine ki build ke bina Shaadi-class product chahte hain.' },
      { t: 'Niche job boards', b: 'Industry associations, alumni networks ya specialist recruiters jo apna Naukri-class portal chahte hain.' },
      { t: 'Vertical accounting + inventory', b: 'Pharmacy, jewellery, fashion ya distribution operators jo apni vocabulary mein Books + Inventory chahte hain.' },
      { t: 'Agencies aur resellers', b: 'Agencies jo SaaS + services bundle karte hain — 399apps ko apne brand mein flat yearly licence pe resell karein.' },
    ],
  },
  whatYouGet: {
    eyebrow: 'Kya milta hai',
    title: 'Asli product, aapke colours mein.',
    items: [
      'Aapka domain (yourbrand.com)',
      'Logo, favicon, OG images',
      'Brand colour system',
      'Saara app copy, har locale ke liye configurable',
      'Branded transactional emails',
      'Custom T&Cs, privacy policy hooks',
      'Per-product taxonomies (matrimony / jobs)',
      'Razorpay / Stripe / Cashfree aapke account pe',
      'Aapke domain pe SEO setup (sitemap, schema, OG)',
      'Optional managed support add-on',
    ],
  },
  faq: {
    title: 'White-label — FAQs',
    items: [
      { q: 'White-label deployment mein kya customise kar sakte hain?', a: 'Domain, logo, favicon, brand colours, saari copy, email templates, payment branding, supported languages, terms of use, aur matrimony / jobs ke category taxonomies.' },
      { q: 'Kya customers ko pata chalega ki andar 399apps hai?', a: 'Nahi. Aapke customers aapka brand dekhenge. 399apps naam app mein, emails mein ya legal copy mein nahi dikhega. Engineering credits sirf source mein rehte hain.' },
      { q: 'Kya per-customer royalty hai?', a: 'Nahi. White-label ek flat yearly licence per deployment hai. Seats aur scale tiers honestly add karein, koi per-end-user royalty nahi.' },
      { q: 'White-label launch mein kitna time lagta hai?', a: 'Cloud white-label launches lagbhag 1–2 weeks. Self-hosted launches typically 2–4 weeks, customisation scope pe depend karta hai.' },
      { q: 'Kya aap payments + KYC handle karenge?', a: 'Haan. Hum Razorpay, Stripe, Cashfree ya aapki pasand ka provider integrate karte hain aur payouts aapke account pe route karte hain. KYC flows har product ke liye configurable hain.' },
    ],
  },
  finalCta: {
    eyebrow: 'White-label ke liye ready?',
    title: 'Aapke launch karne wale brand ke baare mein bataiye.',
    body: '30-minute baat. Hum aapka brand, product aur timeline scope karenge, aur fixed yearly licence quote karenge.',
    primaryLabel: 'Humse baat karein',
    secondaryLabel: 'Pricing dekhein',
  },
};

const ta: WhiteLabelCopy = {
  seo: {
    title: 'White Label — 399apps product-a unga brand-la launch pannunga.',
    description:
      'Nidhi Books, Inventory, Matrimonials illa Job Portal-a unga sontha domain, logo, colours-la white-label pannunga. B2B matrum B2C ready, cloud illa self-hosted.',
    keywords: ['white label SaaS', 'white label matrimonial', 'white label job portal', 'white label inventory software', 'rebrandable business software'],
  },
  hero: {
    eyebrow: 'White label',
    title: 'Unga brand mela. Engaloda engineering keezha.',
    lede: 'Edha 399apps product-aiyum unga sontha brand-la run pannunga — domain, logo, colours, copy, ellaame. Per-user royalty illa, fine print illa.',
    primaryCta: 'White-label-ku pesi paarunga',
    secondaryCta: 'Base pricing paarunga',
  },
  perfectFor: {
    eyebrow: 'Yaaruku perfect',
    title: 'Project illa, product venumna.',
    lede: 'Communities, niche operators matrum agencies 399apps-a use pannraanga, oru serious product-a weeks-la launch panna — software company aagama.',
    cards: [
      { t: 'Community matrimony platforms', b: 'Caste, regional illa NRI matrimony brands, 12-maasa build illama Shaadi-class product venumna.' },
      { t: 'Niche job boards', b: 'Industry associations, alumni networks illa specialist recruiters, sontha Naukri-class portal venumna.' },
      { t: 'Vertical accounting + inventory', b: 'Pharmacy, jewellery, fashion illa distribution operators, Books + Inventory-a unga vocabulary-la tune panna.' },
      { t: 'Agencies & resellers', b: 'Agencies SaaS + services bundle pannraanga — 399apps-a unga brand-la flat yearly licence-la resell pannunga.' },
    ],
  },
  whatYouGet: {
    eyebrow: 'Enna kidaikum',
    title: 'Sariyaana product, unga colours-la.',
    items: [
      'Unga domain (yourbrand.com)',
      'Logo, favicon, OG images',
      'Brand colour system',
      'Mottha app copy, ovvoru locale-ku configurable',
      'Branded transactional emails',
      'Custom T&Cs, privacy policy hooks',
      'Per-product taxonomies (matrimony / jobs)',
      'Razorpay / Stripe / Cashfree unga account-la',
      'Unga domain-la SEO setup (sitemap, schema, OG)',
      'Optional managed support add-on',
    ],
  },
  faq: {
    title: 'White-label — FAQs',
    items: [
      { q: 'White-label deployment-la enna customise pannalaam?', a: 'Domain, logo, favicon, brand colours, ella copy, email templates, payment branding, supported languages, terms of use, matrum matrimony / jobs-ku category taxonomies.' },
      { q: 'Customers-ku ulla 399apps irukku-nu theriyuma?', a: 'Illa. Unga customers unga brand-a paaparganga. 399apps peyru app-la, emails-la illa legal copy-la theriyaadhu. Engineering credits source-la mattum thaan.' },
      { q: 'Per-customer royalty irukka?', a: 'Illa. White-label oru flat yearly licence per deployment. Seats matrum scale tiers honest-a add pannunga, per-end-user royalty illa.' },
      { q: 'White-label launch evvalavu naal aagum?', a: 'Cloud white-label launches roughly 1–2 weeks. Self-hosted launches usually 2–4 weeks, customisation scope-a poruthadhu.' },
      { q: 'Neenga payments + KYC handle panneengala?', a: 'Aamaa. Naanga Razorpay, Stripe, Cashfree illa unga choice provider integrate pannrom, payouts unga account-ku route pannrom. KYC flows ovvoru product-ku configurable.' },
    ],
  },
  finalCta: {
    eyebrow: 'White-label-ku ready-aa?',
    title: 'Neenga launch panra brand pathi sollunga.',
    body: '30-nimisha pesu. Naanga unga brand, product, timeline scope pannrom, fixed yearly licence quote pannrom.',
    primaryLabel: 'Enga kitta pesunga',
    secondaryLabel: 'Pricing paarunga',
  },
};

const hindi: WhiteLabelCopy = {
  seo: {
    title: 'व्हाइट लेबल — 399apps प्रोडक्ट अपने ब्रांड में लॉन्च करें।',
    description:
      'Nidhi Books, Inventory, Matrimonials या Job Portal को अपने डोमेन, लोगो और रंगों में व्हाइट-लेबल करें। B2B और B2C रेडी, क्लाउड या सेल्फ़-होस्टेड।',
    keywords: ['white label SaaS', 'white label matrimonial', 'white label job portal', 'white label inventory software', 'rebrandable business software'],
  },
  hero: {
    eyebrow: 'व्हाइट लेबल',
    title: 'आपका ब्रांड ऊपर। हमारी इंजीनियरिंग नीचे।',
    lede: 'किसी भी 399apps प्रोडक्ट को अपने ब्रांड पर चलाएँ — डोमेन, लोगो, रंग, कॉपी, सब कुछ। कोई per-user royalty नहीं, कोई fine print नहीं।',
    primaryCta: 'व्हाइट-लेबल बातचीत शुरू करें',
    secondaryCta: 'बेस प्राइसिंग देखें',
  },
  perfectFor: {
    eyebrow: 'किसके लिए सही',
    title: 'जब आपको प्रोजेक्ट नहीं, प्रोडक्ट चाहिए।',
    lede: 'Communities, niche operators और agencies 399apps का इस्तेमाल करती हैं ताकि weeks में एक serious product launch हो सके — software company बने बिना।',
    cards: [
      { t: 'कम्युनिटी मैट्रिमोनी प्लेटफ़ॉर्म', b: 'जाति, क्षेत्रीय या NRI मैट्रिमोनी ब्रांड, जो 12 महीने की build के बिना Shaadi-class प्रोडक्ट चाहते हैं।' },
      { t: 'Niche जॉब बोर्ड्स', b: 'इंडस्ट्री associations, alumni networks या specialist recruiters, जिन्हें अपना Naukri-class portal चाहिए।' },
      { t: 'Vertical accounting + inventory', b: 'फार्मेसी, ज्वैलरी, फ़ैशन या distribution operators जो Books + Inventory अपनी vocabulary में चाहते हैं।' },
      { t: 'Agencies & resellers', b: 'Agencies जो SaaS + services bundle करती हैं — 399apps को अपने ब्रांड में flat yearly licence पर resell करें।' },
    ],
  },
  whatYouGet: {
    eyebrow: 'क्या मिलता है',
    title: 'असली प्रोडक्ट, आपके रंगों में।',
    items: [
      'आपका डोमेन (yourbrand.com)',
      'लोगो, favicon, OG images',
      'Brand colour system',
      'पूरी ऐप कॉपी, हर locale के लिए configurable',
      'Branded transactional emails',
      'Custom T&Cs, privacy policy hooks',
      'Per-product taxonomies (matrimony / jobs)',
      'Razorpay / Stripe / Cashfree आपके account पर',
      'आपके डोमेन पर SEO setup (sitemap, schema, OG)',
      'Optional managed support add-on',
    ],
  },
  faq: {
    title: 'व्हाइट-लेबल — FAQs',
    items: [
      { q: 'व्हाइट-लेबल डिप्लॉयमेंट में क्या customise कर सकते हैं?', a: 'डोमेन, लोगो, favicon, brand colours, सारी कॉपी, email templates, payment branding, supported languages, terms of use, और matrimony / jobs के category taxonomies।' },
      { q: 'क्या customers को पता चलेगा कि अंदर 399apps है?', a: 'नहीं। आपके customers आपका ब्रांड देखेंगे। 399apps नाम ऐप में, emails में या legal copy में नहीं दिखेगा। Engineering credits सिर्फ़ source में रहते हैं।' },
      { q: 'क्या per-customer royalty है?', a: 'नहीं। व्हाइट-लेबल एक flat yearly licence per deployment है। Seats और scale tiers ईमानदारी से जोड़ें, कोई per-end-user royalty नहीं।' },
      { q: 'व्हाइट-लेबल launch में कितना समय लगता है?', a: 'क्लाउड व्हाइट-लेबल launches लगभग 1–2 weeks। सेल्फ़-होस्टेड launches typically 2–4 weeks, customisation scope पर निर्भर।' },
      { q: 'क्या आप payments + KYC handle करेंगे?', a: 'हाँ। हम Razorpay, Stripe, Cashfree या आपकी पसंद का provider integrate करते हैं, payouts आपके account पर route करते हैं। KYC flows हर प्रोडक्ट के लिए configurable हैं।' },
    ],
  },
  finalCta: {
    eyebrow: 'व्हाइट-लेबल के लिए तैयार?',
    title: 'आपके लॉन्च करने वाले ब्रांड के बारे में बताइए।',
    body: '30-मिनट की बात। हम आपका ब्रांड, प्रोडक्ट और timeline scope करेंगे, और fixed yearly licence quote करेंगे।',
    primaryLabel: 'हमसे बात करें',
    secondaryLabel: 'प्राइसिंग देखें',
  },
};

const tamil: WhiteLabelCopy = {
  seo: {
    title: 'ஒயிட் லேபல் — 399apps புராடக்ட்டை உங்கள் ப்ராண்டில் தொடங்குங்கள்.',
    description:
      'Nidhi Books, Inventory, Matrimonials அல்லது Job Portal-ஐ உங்கள் சொந்த டொமைன், லோகோ மற்றும் கலர்ஸில் ஒயிட்-லேபல் செய்யுங்கள். B2B மற்றும் B2C ரெடி, கிளவுட் அல்லது செல்ஃப்-ஹோஸ்டட்.',
    keywords: ['white label SaaS', 'white label matrimonial', 'white label job portal', 'white label inventory software', 'rebrandable business software'],
  },
  hero: {
    eyebrow: 'ஒயிட் லேபல்',
    title: 'உங்கள் ப்ராண்ட் மேலே. எங்கள் இன்ஜினியரிங் கீழே.',
    lede: 'எந்த 399apps புராடக்ட்டையும் உங்கள் சொந்த ப்ராண்டில் இயக்குங்கள் — டொமைன், லோகோ, கலர்ஸ், காப்பி, அத்தனையும். Per-user ராயல்டி இல்லை, fine print இல்லை.',
    primaryCta: 'ஒயிட்-லேபல் உரையாடல் தொடங்குங்கள்',
    secondaryCta: 'பேஸ் ப்ரைசிங் பாருங்கள்',
  },
  perfectFor: {
    eyebrow: 'யாருக்கு பொருத்தம்',
    title: 'புராஜெக்ட் இல்லை, புராடக்ட் வேண்டும் என்றால்.',
    lede: 'Communities, niche operators மற்றும் agencies 399apps-ஐ பயன்படுத்துகின்றனர், serious புராடக்ட்டை வாரங்களில் தொடங்க — software company ஆகாமலேயே.',
    cards: [
      { t: 'கம்யூனிட்டி மேட்ரிமோனி பிளாட்ஃபார்ம்', b: 'ஜாதி, பிராந்திய அல்லது NRI மேட்ரிமோனி ப்ராண்ட்கள், 12-மாத கட்டுமானம் இல்லாமல் Shaadi-class புராடக்ட் வேண்டுமென்றால்.' },
      { t: 'Niche ஜாப் போர்டுகள்', b: 'Industry associations, alumni networks அல்லது specialist recruiters, தங்களின் Naukri-class portal வேண்டுமென்றால்.' },
      { t: 'Vertical accounting + inventory', b: 'பார்மசி, நகை, ஃபேஷன் அல்லது distribution operators, தங்கள் vocabulary-ல் Books + Inventory tune செய்ய.' },
      { t: 'Agencies & resellers', b: 'Agencies SaaS + services bundle செய்கின்றனர் — 399apps-ஐ உங்கள் ப்ராண்டில் flat yearly licence-ல் resell செய்யுங்கள்.' },
    ],
  },
  whatYouGet: {
    eyebrow: 'என்ன கிடைக்கும்',
    title: 'உண்மையான புராடக்ட், உங்கள் கலர்ஸில்.',
    items: [
      'உங்கள் டொமைன் (yourbrand.com)',
      'லோகோ, favicon, OG images',
      'Brand colour system',
      'மொத்த ஆப் காப்பி, ஒவ்வொரு locale-க்கும் configurable',
      'Branded transactional emails',
      'Custom T&Cs, privacy policy hooks',
      'Per-product taxonomies (matrimony / jobs)',
      'Razorpay / Stripe / Cashfree உங்கள் account-ல்',
      'உங்கள் டொமைனில் SEO setup (sitemap, schema, OG)',
      'Optional managed support add-on',
    ],
  },
  faq: {
    title: 'ஒயிட்-லேபல் — FAQs',
    items: [
      { q: 'ஒயிட்-லேபல் டிப்ளாய்மென்டில் என்ன customise செய்யலாம்?', a: 'டொமைன், லோகோ, favicon, brand colours, அனைத்து காப்பி, email templates, payment branding, supported languages, terms of use, மற்றும் matrimony / jobs-க்கு category taxonomies.' },
      { q: 'Customers-க்கு உள்ளே 399apps இருக்கிறது என்று தெரியுமா?', a: 'இல்லை. உங்கள் customers உங்கள் ப்ராண்டை மட்டுமே பார்ப்பார்கள். 399apps பெயர் ஆப்பில், emails-ல் அல்லது legal copy-ல் தெரியாது. Engineering credits source-ல் மட்டுமே.' },
      { q: 'Per-customer ராயல்டி உள்ளதா?', a: 'இல்லை. ஒயிட்-லேபல் ஒரு flat yearly licence per deployment. Seats மற்றும் scale tiers நேர்மையாக சேர்க்கவும், per-end-user ராயல்டி இல்லை.' },
      { q: 'ஒயிட்-லேபல் launch எவ்வளவு நாள் ஆகும்?', a: 'கிளவுட் ஒயிட்-லேபல் launches தோராயமாக 1–2 weeks. செல்ஃப்-ஹோஸ்டட் launches பொதுவாக 2–4 weeks, customisation scope-ஐப் பொருத்து.' },
      { q: 'நீங்கள் payments + KYC handle செய்கிறீர்களா?', a: 'ஆமா. நாங்கள் Razorpay, Stripe, Cashfree அல்லது உங்கள் விருப்ப provider integrate செய்கிறோம், payouts உங்கள் account-க்கு route செய்கிறோம். KYC flows ஒவ்வொரு புராடக்ட்டுக்கும் configurable.' },
    ],
  },
  finalCta: {
    eyebrow: 'ஒயிட்-லேபல்-க்கு தயாரா?',
    title: 'நீங்கள் தொடங்கும் ப்ராண்ட் பற்றி சொல்லுங்கள்.',
    body: '30-நிமிட உரையாடல். உங்கள் ப்ராண்ட், புராடக்ட், timeline-ஐ ஸ்கோப் செய்வோம், fixed yearly licence கோட் செய்வோம்.',
    primaryLabel: 'எங்களிடம் பேசுங்கள்',
    secondaryLabel: 'ப்ரைசிங் பாருங்கள்',
  },
};

const WHITE_LABEL_COPY: Record<Lang, WhiteLabelCopy> = { en, hi, ta, hindi, tamil };

export function getWhiteLabelCopy(lang: Lang): WhiteLabelCopy {
  return pickByLang(WHITE_LABEL_COPY, lang);
}
