import { pickByLang, type Lang } from './shared';

// GST & accounting glossary terms.
// Per the project i18n policy (see shared.ts), technical/legal terms — and the
// statutory definitions that go with them — stay in English across every locale.
// The DefinedTermSet JSON-LD on /glossary/ is generated from this single list, so
// the structured data always matches the visible copy. The `description` strings
// here are the exact, pre-validated definitions from the APPAA-35 schema spec.
export type GlossaryTerm = {
  /** Anchor slug — also the JSON-LD @id fragment (#<slug>). */
  slug: string;
  /** Display name / DefinedTerm.name. Technical term, stays English. */
  name: string;
  /** Answer-first one-liner shown directly under the term name (AEO snippet). */
  short: string;
  /** Full statutory definition — mirrored verbatim into DefinedTerm.description. */
  description: string;
  /** Slugs of related terms, for the entity-relationship "Related" links. */
  related: string[];
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: 'gst',
    name: 'GST',
    short: 'India’s single, nationwide indirect tax on the supply of goods and services.',
    description:
      'Goods and Services Tax — India’s unified indirect tax on the supply of goods and services, replacing most earlier central and state taxes with a single multi-stage, destination-based tax.',
    related: ['gstr-1', 'gstr-3b', 'e-invoice', 'e-way-bill'],
  },
  {
    slug: 'gstr-1',
    name: 'GSTR-1',
    short: 'The GST return that reports your outward supplies (sales).',
    description:
      'A monthly or quarterly GST return that reports all outward supplies (sales) made by a registered business in India.',
    related: ['gst', 'gstr-3b', 'e-invoice'],
  },
  {
    slug: 'gstr-3b',
    name: 'GSTR-3B',
    short: 'The monthly summary return where you declare sales, input tax credit and net GST payable.',
    description:
      'A monthly self-declared summary GST return reporting total sales, input tax credit and net GST payable.',
    related: ['gst', 'gstr-1', 'tds'],
  },
  {
    slug: 'e-invoice',
    name: 'E-invoice',
    short: 'A B2B invoice validated on the government IRP portal, stamped with an IRN and QR code.',
    description:
      'An electronic invoice that, under India’s GST regime, is validated on the government IRP portal and assigned an IRN and QR code; mandatory for B2B invoices above a turnover threshold.',
    related: ['gst', 'gstr-1', 'e-way-bill'],
  },
  {
    slug: 'e-way-bill',
    name: 'E-way bill',
    short: 'The electronic document required to move goods above a value threshold under GST.',
    description:
      'An electronic document required under India’s GST regime for the movement of goods above a value threshold, generated on the e-way bill portal.',
    related: ['gst', 'e-invoice'],
  },
  {
    slug: 'tds',
    name: 'TDS',
    short: 'Tax withheld at the time of payment and deposited with the government on the payee’s behalf.',
    description:
      'Tax Deducted at Source — tax withheld by a payer at the time of certain payments and deposited with the government on the payee’s behalf.',
    related: ['gst', 'gstr-3b'],
  },
];

// Shared, answer-first FAQs (English — technical Q&A, mirrored into FAQPage JSON-LD).
export const GLOSSARY_FAQS: { q: string; a: string }[] = [
  {
    q: 'What is the difference between GSTR-1 and GSTR-3B?',
    a: 'GSTR-1 is a detailed return of your outward supplies (every sales invoice), while GSTR-3B is a summary return where you self-declare total sales, claim input tax credit, and pay the net GST due. Most businesses file GSTR-1 first, then GSTR-3B for the same period.',
  },
  {
    q: 'When is an e-invoice mandatory under GST?',
    a: 'E-invoicing is mandatory for B2B invoices once a business crosses the government turnover threshold. The invoice must be reported to the Invoice Registration Portal (IRP), which returns an IRN and a signed QR code that must appear on the invoice.',
  },
  {
    q: 'Is an e-way bill the same as an e-invoice?',
    a: 'No. An e-invoice authenticates a B2B invoice on the IRP portal, whereas an e-way bill authorises the physical movement of goods above a value threshold. A single consignment can require both, and e-invoice data can auto-populate the e-way bill.',
  },
  {
    q: 'How is TDS different from GST?',
    a: 'GST is an indirect tax on the supply of goods and services. TDS (Tax Deducted at Source) is a mechanism for collecting income tax: the payer withholds a portion of certain payments and deposits it with the government on the payee’s behalf. There is also a separate TDS-under-GST provision for specific notified deductors.',
  },
  {
    q: 'Does 399apps software handle GST returns, e-invoices and e-way bills?',
    a: 'Yes. Nidhi Books, the GST accounting app on 399apps, generates GST-ready invoices and the data you need for GSTR-1 and GSTR-3B, and supports e-invoice and e-way bill workflows — starting at ₹399/month for your first app.',
  },
];

type GlossaryChrome = {
  seo: { title: string; description: string; keywords: string[] };
  hero: { eyebrow: string; title: string; lede: string };
  termsTitle: string;
  definitionLabel: string;
  relatedLabel: string;
  faqTitle: string;
  cta: { eyebrow: string; title: string; body: string; primaryLabel: string; secondaryLabel: string };
};

const en: GlossaryChrome = {
  seo: {
    title: 'GST & Accounting Glossary — GST, GSTR-1, GSTR-3B, E-invoice, E-way bill, TDS',
    description:
      'Plain-English definitions of the GST and accounting terms every Indian small business needs: GST, GSTR-1, GSTR-3B, e-invoice, e-way bill and TDS — with how they relate.',
    keywords: [
      'GST glossary',
      'what is GSTR-1',
      'what is GSTR-3B',
      'e-invoice meaning',
      'e-way bill meaning',
      'TDS meaning',
      'GST terms India',
    ],
  },
  hero: {
    eyebrow: 'Glossary',
    title: 'GST & accounting terms, in plain English.',
    lede: 'A quick reference for the GST and accounting terms that show up when you run a small business in India — each with a one-line answer, a full definition, and how it connects to the others.',
  },
  termsTitle: 'Definitions',
  definitionLabel: 'Full definition',
  relatedLabel: 'Related',
  faqTitle: 'GST glossary FAQs',
  cta: {
    eyebrow: 'GST-ready software',
    title: 'Stop looking up GST terms — let the software handle them.',
    body: 'Nidhi Books generates GST-ready invoices, e-invoices, e-way bills and the data for GSTR-1 and GSTR-3B. From ₹399/month for your first app.',
    primaryLabel: 'See pricing',
    secondaryLabel: 'See apps',
  },
};

const hi: GlossaryChrome = {
  seo: {
    title: 'GST & Accounting Glossary — GST, GSTR-1, GSTR-3B, E-invoice, E-way bill, TDS',
    description:
      'Har Indian small business ke liye zaroori GST aur accounting terms ki simple definitions: GST, GSTR-1, GSTR-3B, e-invoice, e-way bill aur TDS — aur yeh aapas mein kaise jude hain.',
    keywords: [
      'GST glossary',
      'GSTR-1 kya hai',
      'GSTR-3B kya hai',
      'e-invoice matlab',
      'e-way bill matlab',
      'TDS matlab',
      'GST terms India',
    ],
  },
  hero: {
    eyebrow: 'Glossary',
    title: 'GST aur accounting terms, simple bhaasha mein.',
    lede: 'India mein small business chalaate waqt jo GST aur accounting terms saamne aate hain unka quick reference — har ek ke saath ek-line jawaab, poori definition, aur yeh dusron se kaise jude hain.',
  },
  termsTitle: 'Definitions',
  definitionLabel: 'Poori definition',
  relatedLabel: 'Related',
  faqTitle: 'GST glossary FAQs',
  cta: {
    eyebrow: 'GST-ready software',
    title: 'GST terms dhoondhna band karein — software ko handle karne dein.',
    body: 'Nidhi Books GST-ready invoices, e-invoices, e-way bills aur GSTR-1, GSTR-3B ka data banata hai. Pehle app ke liye sirf ₹399/month.',
    primaryLabel: 'Pricing dekhein',
    secondaryLabel: 'Apps dekhein',
  },
};

const ta: GlossaryChrome = {
  seo: {
    title: 'GST & Accounting Glossary — GST, GSTR-1, GSTR-3B, E-invoice, E-way bill, TDS',
    description:
      'India-la small business nadathra ovvoru aalukum thேvaiyana GST matrum accounting terms-oda simple definitions: GST, GSTR-1, GSTR-3B, e-invoice, e-way bill matrum TDS — idhu eppadi connect aagudhu.',
    keywords: [
      'GST glossary',
      'GSTR-1 enna',
      'GSTR-3B enna',
      'e-invoice meaning',
      'e-way bill meaning',
      'TDS meaning',
      'GST terms India',
    ],
  },
  hero: {
    eyebrow: 'Glossary',
    title: 'GST matrum accounting terms, simple-aana English-la.',
    lede: 'India-la small business nadathum bodhu varra GST matrum accounting terms-oda quick reference — ovvonnukum oru-line answer, full definition, matrum idhu matravangaloda eppadi connect aagudhu.',
  },
  termsTitle: 'Definitions',
  definitionLabel: 'Full definition',
  relatedLabel: 'Related',
  faqTitle: 'GST glossary FAQs',
  cta: {
    eyebrow: 'GST-ready software',
    title: 'GST terms thedaradha nirutthunga — software handle pannattum.',
    body: 'Nidhi Books GST-ready invoices, e-invoices, e-way bills matrum GSTR-1, GSTR-3B data create pannudhu. Mudhal app-ku ₹399/month-la irundhu.',
    primaryLabel: 'Pricing paarunga',
    secondaryLabel: 'Apps paarunga',
  },
};

const hindi: GlossaryChrome = {
  seo: {
    title: 'GST और अकाउंटिंग शब्दावली — GST, GSTR-1, GSTR-3B, E-invoice, E-way bill, TDS',
    description:
      'हर भारतीय small business के लिए ज़रूरी GST और accounting terms की सरल परिभाषाएँ: GST, GSTR-1, GSTR-3B, e-invoice, e-way bill और TDS — और ये आपस में कैसे जुड़े हैं।',
    keywords: [
      'GST glossary',
      'GSTR-1 क्या है',
      'GSTR-3B क्या है',
      'e-invoice मतलब',
      'e-way bill मतलब',
      'TDS मतलब',
      'GST terms India',
    ],
  },
  hero: {
    eyebrow: 'शब्दावली',
    title: 'GST और accounting terms, सरल भाषा में।',
    lede: 'India में small business चलाते समय सामने आने वाले GST और accounting terms का त्वरित संदर्भ — हर एक के साथ एक-लाइन जवाब, पूरी परिभाषा, और ये एक-दूसरे से कैसे जुड़े हैं।',
  },
  termsTitle: 'परिभाषाएँ',
  definitionLabel: 'पूरी परिभाषा',
  relatedLabel: 'संबंधित',
  faqTitle: 'GST शब्दावली — सामान्य प्रश्न',
  cta: {
    eyebrow: 'GST-ready software',
    title: 'GST terms ढूँढना बंद करें — software को संभालने दें।',
    body: 'Nidhi Books GST-ready invoices, e-invoices, e-way bills और GSTR-1, GSTR-3B का data बनाता है। पहले app के लिए सिर्फ़ ₹399/month।',
    primaryLabel: 'Pricing देखें',
    secondaryLabel: 'Apps देखें',
  },
};

const tamil: GlossaryChrome = {
  seo: {
    title: 'GST மற்றும் கணக்கியல் சொற்களஞ்சியம் — GST, GSTR-1, GSTR-3B, E-invoice, E-way bill, TDS',
    description:
      'India-வில் ஒவ்வொரு small business-க்கும் தேவையான GST மற்றும் accounting terms-இன் எளிய விளக்கங்கள்: GST, GSTR-1, GSTR-3B, e-invoice, e-way bill மற்றும் TDS — இவை எப்படி தொடர்புடையவை.',
    keywords: [
      'GST glossary',
      'GSTR-1 என்றால் என்ன',
      'GSTR-3B என்றால் என்ன',
      'e-invoice பொருள்',
      'e-way bill பொருள்',
      'TDS பொருள்',
      'GST terms India',
    ],
  },
  hero: {
    eyebrow: 'சொற்களஞ்சியம்',
    title: 'GST மற்றும் accounting terms, எளிய மொழியில்.',
    lede: 'India-வில் small business நடத்தும் போது வரும் GST மற்றும் accounting terms-இன் விரைவு குறிப்பு — ஒவ்வொன்றுக்கும் ஒரு வரி பதில், முழு விளக்கம், மற்றும் இவை ஒன்றோடொன்று எப்படி தொடர்புடையவை.',
  },
  termsTitle: 'விளக்கங்கள்',
  definitionLabel: 'முழு விளக்கம்',
  relatedLabel: 'தொடர்புடையவை',
  faqTitle: 'GST சொற்களஞ்சியம் — அடிக்கடி கேட்கப்படும் கேள்விகள்',
  cta: {
    eyebrow: 'GST-ready software',
    title: 'GST terms-ஐ தேடுவதை நிறுத்துங்கள் — software கையாளட்டும்.',
    body: 'Nidhi Books GST-ready invoices, e-invoices, e-way bills மற்றும் GSTR-1, GSTR-3B data உருவாக்குகிறது. முதல் app-க்கு ₹399/month முதல்.',
    primaryLabel: 'Pricing பாருங்கள்',
    secondaryLabel: 'Apps பாருங்கள்',
  },
};

const GLOSSARY_COPY: Record<Lang, GlossaryChrome> = { en, hi, ta, hindi, tamil };

export function getGlossaryCopy(lang: Lang): GlossaryChrome {
  return pickByLang(GLOSSARY_COPY, lang);
}

export type { GlossaryChrome };
