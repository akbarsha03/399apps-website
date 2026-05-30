import { pickByLang, type Lang } from './shared';

const en = {
  seo: {
    title: 'Page not found — 399apps',
    description: "The page you were looking for doesn't exist.",
  },
  eyebrow: '404',
  title: "We couldn't find that page.",
  body: 'It may have moved, been renamed, or never existed. Head back to the homepage or pick an app below.',
  back: 'Back to home',
  apps: 'Browse apps',
};

export type NotFoundCopy = typeof en;

const hi: NotFoundCopy = {
  seo: {
    title: 'Page nahi mila — 399apps',
    description: 'Jis page ko aap dhoondh rahe the wo exist nahi karta.',
  },
  eyebrow: '404',
  title: 'Hum vo page nahi dhoondh paaye.',
  body: 'Shaayad hata diya gaya, rename ho gaya, ya kabhi tha hi nahi. Homepage pe vapas jaayein ya neeche se app chunein.',
  back: 'Home pe vapas',
  apps: 'Apps dekhein',
};

const ta: NotFoundCopy = {
  seo: {
    title: 'Page kandupidikka mudiyala — 399apps',
    description: 'Neenga thedra page exist aagala.',
  },
  eyebrow: '404',
  title: 'Antha page-a kandupidikka mudiyala.',
  body: 'Move aagi irukalaam, rename aagi irukalaam, illa eppovum illa irundhirukalaam. Homepage-ku vapasu pongunga illa keezha oru app select pannunga.',
  back: 'Home-ku vapasu',
  apps: 'Apps paarunga',
};

const hindi: NotFoundCopy = {
  seo: {
    title: 'पेज नहीं मिला — 399apps',
    description: 'जिस पेज को आप ढूँढ रहे थे वह मौजूद नहीं है।',
  },
  eyebrow: '404',
  title: 'हम वह पेज नहीं ढूँढ पाए।',
  body: 'शायद हटा दिया गया, rename हो गया, या कभी था ही नहीं। होमपेज पर वापस जाएँ या नीचे से एक ऐप चुनें।',
  back: 'होम पर वापस',
  apps: 'ऐप्स देखें',
};

const tamil: NotFoundCopy = {
  seo: {
    title: 'பக்கம் கிடைக்கவில்லை — 399apps',
    description: 'நீங்கள் தேடிய பக்கம் இல்லை.',
  },
  eyebrow: '404',
  title: 'அந்த பக்கத்தை எங்களால் கண்டுபிடிக்க முடியவில்லை.',
  body: 'அது நகர்த்தப்பட்டிருக்கலாம், மறுபெயர் சூட்டப்பட்டிருக்கலாம், அல்லது இருந்ததே இல்லை. முகப்புப் பக்கத்திற்கு திரும்பவும் அல்லது கீழே ஒரு ஆப்பை தேர்வு செய்யவும்.',
  back: 'முகப்புக்கு திரும்பு',
  apps: 'ஆப்ஸ் பாருங்கள்',
};

const NOT_FOUND_COPY: Record<Lang, NotFoundCopy> = { en, hi, ta, hindi, tamil };

export function getNotFoundCopy(lang: Lang): NotFoundCopy {
  return pickByLang(NOT_FOUND_COPY, lang);
}
