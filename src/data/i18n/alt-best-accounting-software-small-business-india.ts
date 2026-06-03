import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Best Accounting Software for Small Business in India (2026)',
    description:
      'The best accounting software for Indian small businesses in 2026, compared on price, GST features and users.',
    keywords: [
      'best accounting software for small business in india',
      'accounting software india',
      'gst accounting software',
      'cheapest accounting software india',
      'small business accounting software',
    ],
  },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'Best Accounting Software for Small Business in India (2026)',
    lede:
      'For most Indian small businesses in 2026, the best accounting software is Nidhi Books for value (GST accounting from ₹399/month with unlimited users), Zoho Books for automation depth (free under ₹25 lakh turnover), and TallyPrime for established accountants and complex inventory. The right pick depends on budget, team size, and how much accounting depth you need.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatToLook: {
    eyebrow: 'What to look for',
    h2: 'What to look for in Indian accounting software',
    body: [
      'The essentials for an Indian SMB: GST-compliant invoicing, GSTR-1 and GSTR-3B export/filing support, e-invoicing (mandatory above the turnover threshold), bank reconciliation, multi-user access, and predictable pricing. Cloud access and an Indian-rupee, GST-compliant billing experience matter more than global features most SMBs never use.',
    ],
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'Best accounting software for Indian small business (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Starting price', 'Users'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Best value / cost-sensitive SMBs & freelancers', price: 'From ₹399/month', users: 'Unlimited' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Best for automation & app ecosystem', price: 'Free <₹25L; then ₹899/mo', users: 'Plan-capped' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Best for accountants & complex inventory', price: '₹22,500 one-time', users: 'Single (Silver)' },
        { rank: '4', software: 'Vyapar', bestFor: 'Best for mobile/offline billing', price: '~₹3,399/year', users: 'Per-device' },
      ],
    },
    note: 'Prices as of June 2026; verify current. All prices exclude 18% GST. Nidhi Books: from ₹399/month (first app, unlimited users; +₹99/mo per add-on).',
    why:
      'Why Nidhi Books leads on value: from ₹399/month, unlimited users (no per-seat fees), and India-native GST features — invoicing, GSTR-1/3B, e-invoicing, TDS. It\'s the simplest, cheapest path to compliant accounting for a small team. It is not the deepest tool — for heavy automation choose Zoho, for complex inventory choose Tally.',
  },
  faq: {
    title: 'Best accounting software in India — frequently asked questions',
    items: [
      { q: 'What is the best accounting software for small business in India?', a: 'Nidhi Books for value (₹399/month, unlimited users), Zoho Books for automation, and TallyPrime for accountants with complex needs.' },
      { q: 'Which accounting software is cheapest in India?', a: 'Nidhi Books at ₹399/month with unlimited users is among the cheapest full GST accounting tools; Zoho Books is free under ₹25 lakh turnover.' },
      { q: 'Is there free accounting software for Indian small business?', a: 'Zoho Books is free under ₹25 lakh turnover and Vyapar has a free mobile plan; for unlimited users at low flat cost, Nidhi Books is ₹399/month.' },
      { q: 'Does small-business accounting software handle GST returns?', a: 'The leading options (Nidhi Books, Zoho Books, TallyPrime, Vyapar) all support GST invoicing and GSTR-1/GSTR-3B exports.' },
      { q: 'What happened to QuickBooks in India?', a: 'Intuit discontinued QuickBooks in India (service ended 30 April 2023); affected users have migrated to tools like Nidhi Books and Zoho Books.' },
    ],
  },
  breadcrumb: { leaf: 'Accounting software for small business' },
  related: {
    title: 'Related',
    links: [
      'Best GST billing software',
      'Cheapest invoicing software',
      'Tally alternative',
      'Zoho Books alternative',
      'Vyapar alternative',
      'QuickBooks alternative (India)',
      'FreshBooks alternative (India)',
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: "Try India's best-value GST accounting free",
    body: 'GST invoicing, GSTR-1/3B exports and e-invoicing in minutes. The Cloud plan starts from ₹399/month for your first app (prices exclude GST), with unlimited users included.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

export type BestAccountingCopy = typeof en;

const hi: BestAccountingCopy = {
  seo: {
    title: 'India mein Small Business ke liye Best Accounting Software (2026)',
    description:
      'India ke small businesses ke liye 2026 ka best accounting software, price, GST features aur users pe compare kiya gaya.',
    keywords: [
      'best accounting software for small business in india',
      'accounting software india',
      'gst accounting software',
      'cheapest accounting software india',
      'small business accounting software',
    ],
  },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'India mein Small Business ke liye Best Accounting Software (2026)',
    lede:
      'Zyaadatar Indian small businesses ke liye 2026 mein best accounting software hai Nidhi Books value ke liye (GST accounting from ₹399/month, unlimited users ke saath), Zoho Books automation depth ke liye (₹25 lakh turnover ke neeche free), aur TallyPrime established accountants aur complex inventory ke liye. Sahi pick aapke budget, team size aur kitni accounting depth chahiye uspe depend karta hai.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatToLook: {
    eyebrow: 'Kya dekhein',
    h2: 'Indian accounting software mein kya dekhna chahiye',
    body: [
      'Ek Indian SMB ke liye essentials: GST-compliant invoicing, GSTR-1 aur GSTR-3B export/filing support, e-invoicing (turnover threshold ke upar mandatory), bank reconciliation, multi-user access, aur predictable pricing. Cloud access aur ek Indian-rupee, GST-compliant billing experience un global features se zyaada matter karte hain jo zyaadatar SMBs kabhi use hi nahi karte.',
    ],
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'Indian small business ke liye best accounting software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Starting price', 'Users'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Best value / cost-sensitive SMBs & freelancers', price: 'From ₹399/month', users: 'Unlimited' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Automation & app ecosystem ke liye best', price: 'Free <₹25L; phir ₹899/mo', users: 'Plan-capped' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants & complex inventory ke liye best', price: '₹22,500 one-time', users: 'Single (Silver)' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile/offline billing ke liye best', price: '~₹3,399/year', users: 'Per-device' },
      ],
    },
    note: 'Prices June 2026 tak; current verify karein. Saare prices 18% GST exclude karte hain. Nidhi Books: from ₹399/month (pehla app, unlimited users; +₹99/mo per add-on).',
    why:
      'Nidhi Books value pe kyun lead karta hai: from ₹399/month, unlimited users (koi per-seat fee nahi), aur India-native GST features — invoicing, GSTR-1/3B, e-invoicing, TDS. Ek chhoti team ke liye compliant accounting ka sabse simple, sabse sasta path hai. Yeh sabse deep tool nahi hai — heavy automation ke liye Zoho choose karein, complex inventory ke liye Tally.',
  },
  faq: {
    title: 'India mein best accounting software — frequently asked questions',
    items: [
      { q: 'India mein small business ke liye best accounting software kaunsa hai?', a: 'Value ke liye Nidhi Books (₹399/month, unlimited users), automation ke liye Zoho Books, aur complex needs waale accountants ke liye TallyPrime.' },
      { q: 'India mein sabse sasta accounting software kaunsa hai?', a: 'Nidhi Books ₹399/month pe unlimited users ke saath sabse saste full GST accounting tools mein se hai; Zoho Books ₹25 lakh turnover ke neeche free hai.' },
      { q: 'Kya Indian small business ke liye free accounting software hai?', a: 'Zoho Books ₹25 lakh turnover ke neeche free hai aur Vyapar ka ek free mobile plan hai; low flat cost pe unlimited users ke liye, Nidhi Books ₹399/month hai.' },
      { q: 'Kya small-business accounting software GST returns handle karta hai?', a: 'Leading options (Nidhi Books, Zoho Books, TallyPrime, Vyapar) sabhi GST invoicing aur GSTR-1/GSTR-3B exports support karte hain.' },
      { q: 'India mein QuickBooks ka kya hua?', a: 'Intuit ne India mein QuickBooks discontinue kar diya (service 30 April 2023 ko khatam hui); affected users Nidhi Books aur Zoho Books jaise tools pe migrate ho gaye.' },
    ],
  },
  breadcrumb: { leaf: 'Small business ke liye accounting software' },
  related: {
    title: 'Related',
    links: [
      'Best GST billing software',
      'Cheapest invoicing software',
      'Tally alternative',
      'Zoho Books alternative',
      'Vyapar alternative',
      'QuickBooks alternative (India)',
      'FreshBooks alternative (India)',
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: "India ka best-value GST accounting free try karein",
    body: 'GST invoicing, GSTR-1/3B exports aur e-invoicing minutes mein. Cloud plan aapke pehle app ke liye from ₹399/month se shuru hota hai (prices GST exclude karte hain), unlimited users included ke saath.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const ta: BestAccountingCopy = {
  seo: {
    title: 'India-la Small Business-ku Best Accounting Software (2026)',
    description:
      'India-la small businesses-ku 2026-oda best accounting software, price, GST features, users-la compare pannirukom.',
    keywords: [
      'best accounting software for small business in india',
      'accounting software india',
      'gst accounting software',
      'cheapest accounting software india',
      'small business accounting software',
    ],
  },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'India-la Small Business-ku Best Accounting Software (2026)',
    lede:
      'Pala Indian small businesses-ku 2026-la best accounting software-nu paatha, value-ku Nidhi Books (GST accounting from ₹399/month, unlimited users-oda), automation depth-ku Zoho Books (₹25 lakh turnover-ku keezha free), aur established accountants-um complex inventory-um-ku TallyPrime. Sariyaana pick unga budget, team size, evlo accounting depth venumnu adhula depend aagudhu.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatToLook: {
    eyebrow: 'Enna paarkanum',
    h2: 'Indian accounting software-la enna paarkanum',
    body: [
      'Oru Indian SMB-ku essentials: GST-compliant invoicing, GSTR-1 aur GSTR-3B export/filing support, e-invoicing (turnover threshold-ku mela mandatory), bank reconciliation, multi-user access, aur predictable pricing. Cloud access-um oru Indian-rupee, GST-compliant billing experience-um, pala SMBs use-e panna global features-a vida adhigama matter aagudhu.',
    ],
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'Indian small business-ku best accounting software (2026)',
    table: {
      head: ['Rank', 'Software', 'Best for', 'Starting price', 'Users'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Best value / cost-sensitive SMBs & freelancers', price: 'From ₹399/month', users: 'Unlimited' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Automation & app ecosystem-ku best', price: 'Free <₹25L; apram ₹899/mo', users: 'Plan-capped' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants & complex inventory-ku best', price: '₹22,500 one-time', users: 'Single (Silver)' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile/offline billing-ku best', price: '~₹3,399/year', users: 'Per-device' },
      ],
    },
    note: 'Prices June 2026 varaikkum; current verify pannunga. Ella prices-um 18% GST exclude pannudhu. Nidhi Books: from ₹399/month (mudhal app, unlimited users; +₹99/mo per add-on).',
    why:
      'Nidhi Books value-la yean lead pannudhu: from ₹399/month, unlimited users (per-seat fee illa), aur India-native GST features — invoicing, GSTR-1/3B, e-invoicing, TDS. Oru chinna team-ku compliant accounting-ku simple-aana, cheap-aana path. Idhu deepest tool illa — heavy automation-ku Zoho choose pannunga, complex inventory-ku Tally.',
  },
  faq: {
    title: 'India-la best accounting software — frequently asked questions',
    items: [
      { q: 'India-la small business-ku best accounting software edhu?', a: 'Value-ku Nidhi Books (₹399/month, unlimited users), automation-ku Zoho Books, aur complex needs-oda accountants-ku TallyPrime.' },
      { q: 'India-la cheapest accounting software edhu?', a: 'Nidhi Books ₹399/month-la unlimited users-oda, cheapest full GST accounting tools-la onnu; Zoho Books ₹25 lakh turnover-ku keezha free.' },
      { q: 'Indian small business-ku free accounting software irukka?', a: 'Zoho Books ₹25 lakh turnover-ku keezha free, Vyapar-ku oru free mobile plan irukku; low flat cost-la unlimited users-ku, Nidhi Books ₹399/month.' },
      { q: 'Small-business accounting software GST returns handle pannuma?', a: 'Leading options (Nidhi Books, Zoho Books, TallyPrime, Vyapar) ellame GST invoicing-um GSTR-1/GSTR-3B exports-um support pannudhu.' },
      { q: 'India-la QuickBooks-ku enna aachu?', a: 'Intuit India-la QuickBooks-a discontinue panniduchu (service 30 April 2023-la mudinjuchu); affected users Nidhi Books, Zoho Books maadhiri tools-ku migrate aagitanga.' },
    ],
  },
  breadcrumb: { leaf: 'Small business-ku accounting software' },
  related: {
    title: 'Related',
    links: [
      'Best GST billing software',
      'Cheapest invoicing software',
      'Tally alternative',
      'Zoho Books alternative',
      'Vyapar alternative',
      'QuickBooks alternative (India)',
      'FreshBooks alternative (India)',
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: "India-oda best-value GST accounting free-a try pannunga",
    body: 'GST invoicing, GSTR-1/3B exports aur e-invoicing niminisangal-la. Cloud plan unga mudhal app-ku from ₹399/month-la start aagudhu (prices GST exclude pannudhu), unlimited users included-oda.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const hindi: BestAccountingCopy = {
  seo: {
    title: 'भारत में छोटे व्यवसाय के लिए सबसे अच्छा लेखांकन सॉफ़्टवेयर (2026)',
    description:
      'भारत के छोटे व्यवसायों के लिए 2026 का सबसे अच्छा लेखांकन सॉफ़्टवेयर, कीमत, GST features और users पर तुलना किया गया।',
    keywords: [
      'best accounting software for small business in india',
      'accounting software india',
      'gst accounting software',
      'cheapest accounting software india',
      'small business accounting software',
    ],
  },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'भारत में छोटे व्यवसाय के लिए सबसे अच्छा लेखांकन सॉफ़्टवेयर (2026)',
    lede:
      '2026 में अधिकांश भारतीय छोटे व्यवसायों के लिए सबसे अच्छा लेखांकन सॉफ़्टवेयर है — value के लिए Nidhi Books (₹399/month से GST accounting, असीमित उपयोगकर्ता के साथ), automation depth के लिए Zoho Books (₹25 lakh turnover के नीचे free), और स्थापित accountants व complex inventory के लिए TallyPrime। सही चुनाव आपके बजट, team size और आपको कितनी accounting depth चाहिए — इस पर निर्भर करता है।',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatToLook: {
    eyebrow: 'क्या देखें',
    h2: 'भारतीय लेखांकन सॉफ़्टवेयर में क्या देखना चाहिए',
    body: [
      'एक भारतीय SMB के लिए ज़रूरी बातें: GST-compliant बिलिंग, GSTR-1 और GSTR-3B export/filing support, e-invoicing (turnover threshold से ऊपर अनिवार्य), bank reconciliation, multi-user access, और निश्चित मूल्य। Cloud access और एक भारतीय-रुपये वाला, GST-compliant बिलिंग अनुभव उन global features से ज़्यादा मायने रखते हैं जिन्हें अधिकांश SMBs कभी उपयोग ही नहीं करते।',
    ],
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'भारतीय छोटे व्यवसाय के लिए सबसे अच्छा लेखांकन सॉफ़्टवेयर (2026)',
    table: {
      head: ['रैंक', 'Software', 'किसके लिए सबसे अच्छा', 'शुरुआती कीमत', 'Users'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Best value / लागत-संवेदनशील SMBs व freelancers', price: 'From ₹399/month', users: 'असीमित' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Automation व app ecosystem के लिए सबसे अच्छा', price: 'Free <₹25L; फिर ₹899/mo', users: 'Plan-capped' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants व complex inventory के लिए सबसे अच्छा', price: '₹22,500 one-time', users: 'Single (Silver)' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile/offline बिलिंग के लिए सबसे अच्छा', price: '~₹3,399/year', users: 'Per-device' },
      ],
    },
    note: 'कीमतें June 2026 तक; current verify करें। सभी कीमतें 18% GST को छोड़कर हैं। Nidhi Books: from ₹399/month (पहला app, असीमित उपयोगकर्ता; +₹99/mo per add-on)।',
    why:
      'Nidhi Books value पर क्यों आगे है: from ₹399/month, असीमित उपयोगकर्ता (कोई per-seat शुल्क नहीं), और India-native GST features — बिलिंग, GSTR-1/3B, e-invoicing, TDS। एक छोटी team के लिए compliant accounting का सबसे सरल, सबसे सस्ता रास्ता है। यह सबसे गहरा tool नहीं है — heavy automation के लिए Zoho चुनें, complex inventory के लिए Tally।',
  },
  faq: {
    title: 'भारत में सबसे अच्छा लेखांकन सॉफ़्टवेयर — अक्सर पूछे जाने वाले प्रश्न',
    items: [
      { q: 'भारत में छोटे व्यवसाय के लिए सबसे अच्छा लेखांकन सॉफ़्टवेयर कौन-सा है?', a: 'value के लिए Nidhi Books (₹399/month, असीमित उपयोगकर्ता), automation के लिए Zoho Books, और complex needs वाले accountants के लिए TallyPrime।' },
      { q: 'भारत में सबसे सस्ता लेखांकन सॉफ़्टवेयर कौन-सा है?', a: 'Nidhi Books ₹399/month पर असीमित उपयोगकर्ता के साथ सबसे सस्ते full GST accounting tools में से एक है; Zoho Books ₹25 lakh turnover के नीचे free है।' },
      { q: 'क्या भारतीय छोटे व्यवसाय के लिए free लेखांकन सॉफ़्टवेयर है?', a: 'Zoho Books ₹25 lakh turnover के नीचे free है और Vyapar का एक free mobile plan है; low flat cost पर असीमित उपयोगकर्ता के लिए, Nidhi Books ₹399/month है।' },
      { q: 'क्या छोटे-व्यवसाय का लेखांकन सॉफ़्टवेयर GST returns संभालता है?', a: 'अग्रणी options (Nidhi Books, Zoho Books, TallyPrime, Vyapar) सभी GST बिलिंग और GSTR-1/GSTR-3B exports support करते हैं।' },
      { q: 'भारत में QuickBooks का क्या हुआ?', a: 'Intuit ने भारत में QuickBooks बंद कर दिया (service 30 April 2023 को समाप्त हुई); प्रभावित users, Nidhi Books और Zoho Books जैसे tools पर माइग्रेशन कर गए।' },
    ],
  },
  breadcrumb: { leaf: 'छोटे व्यवसाय के लिए लेखांकन सॉफ़्टवेयर' },
  related: {
    title: 'संबंधित',
    links: [
      'Best GST billing software',
      'Cheapest invoicing software',
      'Tally alternative',
      'Zoho Books alternative',
      'Vyapar alternative',
      'QuickBooks alternative (India)',
      'FreshBooks alternative (India)',
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'भारत का best-value GST accounting free आज़माएँ',
    body: 'GST बिलिंग, GSTR-1/3B exports और e-invoicing मिनटों में। Cloud plan आपके पहले app के लिए from ₹399/month से शुरू होता है (कीमतें GST को छोड़कर हैं), असीमित उपयोगकर्ता included के साथ।',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const tamil: BestAccountingCopy = {
  seo: {
    title: 'இந்தியாவில் சிறு வணிகத்திற்கான சிறந்த கணக்கியல் மென்பொருள் (2026)',
    description:
      'இந்தியாவில் சிறு வணிகங்களுக்கு 2026-ன் சிறந்த கணக்கியல் மென்பொருள், விலை, GST features மற்றும் users அடிப்படையில் ஒப்பிடப்பட்டது.',
    keywords: [
      'best accounting software for small business in india',
      'accounting software india',
      'gst accounting software',
      'cheapest accounting software india',
      'small business accounting software',
    ],
  },
  hero: {
    eyebrow: "Buyer's guide · 2026",
    h1: 'இந்தியாவில் சிறு வணிகத்திற்கான சிறந்த கணக்கியல் மென்பொருள் (2026)',
    lede:
      '2026-ல் பெரும்பாலான இந்திய சிறு வணிகங்களுக்கு சிறந்த கணக்கியல் மென்பொருள் — value-க்கு Nidhi Books (₹399/month முதல் GST accounting, வரம்பற்ற பயனர்களுடன்), automation depth-க்கு Zoho Books (₹25 lakh turnover-க்கு கீழே free), மற்றும் நிலைபெற்ற accountants மற்றும் complex inventory-க்கு TallyPrime. சரியான தேர்வு உங்கள் பட்ஜெட், team size மற்றும் உங்களுக்கு எவ்வளவு accounting depth தேவை என்பதைப் பொறுத்தது.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
    note: '14-day free trial · No card required · Cancel anytime',
  },
  whatToLook: {
    eyebrow: 'எதைப் பார்க்க வேண்டும்',
    h2: 'இந்திய கணக்கியல் மென்பொருளில் எதைப் பார்க்க வேண்டும்',
    body: [
      'ஒரு இந்திய SMB-க்கு அத்தியாவசியங்கள்: GST-compliant பில்லிங், GSTR-1 மற்றும் GSTR-3B export/filing support, e-invoicing (turnover threshold-க்கு மேல் கட்டாயம்), bank reconciliation, multi-user access, மற்றும் நிச்சயமான விலை. Cloud access மற்றும் ஒரு இந்திய-ரூபாய், GST-compliant பில்லிங் அனுபவம், பெரும்பாலான SMBs ஒருபோதும் பயன்படுத்தாத global features-ஐ விட அதிக முக்கியத்துவம் வாய்ந்தது.',
    ],
  },
  shortlist: {
    eyebrow: 'Shortlist',
    h2: 'இந்திய சிறு வணிகத்திற்கான சிறந்த கணக்கியல் மென்பொருள் (2026)',
    table: {
      head: ['தரவரிசை', 'Software', 'யாருக்கு சிறந்தது', 'தொடக்க விலை', 'Users'],
      rows: [
        { rank: '1', software: 'Nidhi Books', bestFor: 'Best value / செலவு-உணர்திறன் SMBs & freelancers', price: 'From ₹399/month', users: 'வரம்பற்றது' },
        { rank: '2', software: 'Zoho Books', bestFor: 'Automation & app ecosystem-க்கு சிறந்தது', price: 'Free <₹25L; பிறகு ₹899/mo', users: 'Plan-capped' },
        { rank: '3', software: 'TallyPrime', bestFor: 'Accountants & complex inventory-க்கு சிறந்தது', price: '₹22,500 one-time', users: 'Single (Silver)' },
        { rank: '4', software: 'Vyapar', bestFor: 'Mobile/offline பில்லிங்-க்கு சிறந்தது', price: '~₹3,399/year', users: 'Per-device' },
      ],
    },
    note: 'விலைகள் June 2026 வரை; current verify செய்யுங்கள். அனைத்து விலைகளும் 18% GST தவிர்த்தவை. Nidhi Books: from ₹399/month (முதல் app, வரம்பற்ற பயனர்கள்; +₹99/mo per add-on).',
    why:
      'Nidhi Books value-ல் ஏன் முன்னணியில் உள்ளது: from ₹399/month, வரம்பற்ற பயனர்கள் (per-seat கட்டணம் இல்லை), மற்றும் India-native GST features — பில்லிங், GSTR-1/3B, e-invoicing, TDS. ஒரு சிறிய team-க்கு compliant accounting-க்கு எளிமையான, மிகவும் மலிவான வழி. இது மிக ஆழமான tool அல்ல — heavy automation-க்கு Zoho-ஐ தேர்வு செய்யுங்கள், complex inventory-க்கு Tally.',
  },
  faq: {
    title: 'இந்தியாவில் சிறந்த கணக்கியல் மென்பொருள் — அடிக்கடி கேட்கப்படும் கேள்விகள்',
    items: [
      { q: 'இந்தியாவில் சிறு வணிகத்திற்கு சிறந்த கணக்கியல் மென்பொருள் எது?', a: 'value-க்கு Nidhi Books (₹399/month, வரம்பற்ற பயனர்கள்), automation-க்கு Zoho Books, மற்றும் complex needs உள்ள accountants-க்கு TallyPrime.' },
      { q: 'இந்தியாவில் மிகவும் மலிவான கணக்கியல் மென்பொருள் எது?', a: 'Nidhi Books ₹399/month-ல் வரம்பற்ற பயனர்களுடன், மிகவும் மலிவான முழு GST accounting tools-ல் ஒன்று; Zoho Books ₹25 lakh turnover-க்கு கீழே free.' },
      { q: 'இந்திய சிறு வணிகத்திற்கு free கணக்கியல் மென்பொருள் உள்ளதா?', a: 'Zoho Books ₹25 lakh turnover-க்கு கீழே free மற்றும் Vyapar-க்கு ஒரு free mobile plan உள்ளது; low flat cost-ல் வரம்பற்ற பயனர்களுக்கு, Nidhi Books ₹399/month.' },
      { q: 'சிறு-வணிக கணக்கியல் மென்பொருள் GST returns-ஐ கையாளுமா?', a: 'முன்னணி options (Nidhi Books, Zoho Books, TallyPrime, Vyapar) அனைத்தும் GST பில்லிங் மற்றும் GSTR-1/GSTR-3B exports-ஐ support செய்கின்றன.' },
      { q: 'இந்தியாவில் QuickBooks-க்கு என்ன ஆனது?', a: 'Intuit இந்தியாவில் QuickBooks-ஐ நிறுத்தியது (service 30 April 2023-ல் முடிந்தது); பாதிக்கப்பட்ட users, Nidhi Books மற்றும் Zoho Books போன்ற tools-க்கு இடம்பெயர்ந்தனர்.' },
    ],
  },
  breadcrumb: { leaf: 'சிறு வணிகத்திற்கான கணக்கியல் மென்பொருள்' },
  related: {
    title: 'தொடர்புடையவை',
    links: [
      'Best GST billing software',
      'Cheapest invoicing software',
      'Tally alternative',
      'Zoho Books alternative',
      'Vyapar alternative',
      'QuickBooks alternative (India)',
      'FreshBooks alternative (India)',
      'Tally vs Zoho vs Vyapar vs 399Apps',
      'Nidhi Books — GST accounting',
      'Pricing',
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'இந்தியாவின் best-value GST accounting-ஐ free-ஆக முயற்சிக்கவும்',
    body: 'GST பில்லிங், GSTR-1/3B exports மற்றும் e-invoicing நிமிடங்களில். Cloud plan உங்கள் முதல் app-க்கு from ₹399/month முதல் தொடங்குகிறது (விலைகள் GST தவிர்த்தவை), வரம்பற்ற பயனர்கள் included உடன்.',
    primaryLabel: 'Start your free 14-day trial',
    secondaryLabel: 'Get a free demo',
  },
};

const BEST_ACCOUNTING_COPY: Record<Lang, BestAccountingCopy> = { en, hi, ta, hindi, tamil };

export function getBestAccountingCopy(lang: Lang): BestAccountingCopy {
  return pickByLang(BEST_ACCOUNTING_COPY, lang);
}
