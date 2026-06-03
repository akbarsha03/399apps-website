// Derived JSON-LD for the /answers/ AEO hub (APPAA-60). Built from answers.ts so schema == visible text.
// Per answer page: Organization, WebSite, WebPage(→QAPage), QAPage (headline Q + acceptedAnswer snippet),
// FAQPage (supporting Qs), BreadcrumbList. Hub: CollectionPage + ItemList + BreadcrumbList.
// Apex + trailing-slash URLs only (canonical host). Emitted verbatim via Layout rawJsonLd.
import { ANSWERS, ANSWERS_ORDER, ANSWERS_HUB } from './answers';

const SITE = 'https://399apps.com';

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: '399Apps',
  url: `${SITE}/`,
};
const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: '399Apps',
  publisher: { '@id': `${SITE}/#organization` },
};

function answerGraph(slug: string): Record<string, unknown> {
  const a = ANSWERS[slug];
  const base = `${SITE}/answers/${slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG,
      WEBSITE,
      {
        '@type': 'WebPage',
        '@id': `${base}#webpage`,
        url: base,
        name: a.metaTitle,
        description: a.metaDescription,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
        mainEntity: { '@id': `${base}#qapage` },
        breadcrumb: { '@id': `${base}#breadcrumb` },
      },
      {
        '@type': 'QAPage',
        '@id': `${base}#qapage`,
        isPartOf: { '@id': `${base}#webpage` },
        mainEntity: {
          '@type': 'Question',
          name: a.question,
          text: a.question,
          answerCount: 1,
          acceptedAnswer: {
            '@type': 'Answer',
            text: a.directAnswer,
            url: base,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${base}#faq`,
        isPartOf: { '@id': `${base}#webpage` },
        mainEntity: a.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: `${SITE}/answers/` },
          { '@type': 'ListItem', position: 3, name: a.question, item: base },
        ],
      },
    ],
  };
}

function hubGraph(): Record<string, unknown> {
  const base = `${SITE}/answers/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG,
      WEBSITE,
      {
        '@type': 'CollectionPage',
        '@id': `${base}#webpage`,
        url: base,
        name: ANSWERS_HUB.metaTitle,
        description: ANSWERS_HUB.metaDescription,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${SITE}/#website` },
        mainEntity: { '@id': `${base}#itemlist` },
        breadcrumb: { '@id': `${base}#breadcrumb` },
      },
      {
        '@type': 'ItemList',
        '@id': `${base}#itemlist`,
        itemListElement: ANSWERS_ORDER.map((slug, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: ANSWERS[slug].question,
          url: `${base}${slug}/`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: base },
        ],
      },
    ],
  };
}

export const ANSWERS_JSONLD: Record<string, Record<string, unknown>> = Object.fromEntries(
  Object.keys(ANSWERS).map((slug) => [slug, answerGraph(slug)]),
);

export const ANSWERS_HUB_JSONLD = hubGraph();
