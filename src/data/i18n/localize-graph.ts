// Localize a verbatim EN JSON-LD @graph (alt/best cluster pages) for a non-default locale.
// APPAA-30: the cluster pages emit a complete @graph (rawJsonLd). For /hi/, /ta/, /hindi/, /tamil/
// variants we must (a) point page-specific @id/url at the localized path, (b) set the WebPage
// language + localized name/description, (c) rebuild the FAQPage from the localized FAQ items so
// the visible <FAQ> and the schema can't drift (release gate), and (d) localize the breadcrumb leaf.
// Site-wide nodes (Organization, WebSite) and shared @ids (…/apps/books/#software, root urls) are
// left untouched so the global graph stays consistent across locales.
import { localizedPath, HTML_LANG_ATTR, DEFAULT_LANG, type Lang } from './shared';

const ORIGIN = 'https://399apps.com';

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * @param graph    the EN `@graph` array (from ALT_JSONLD/BEST_JSONLD)
 * @param lang     target locale
 * @param basePath en page path, leading + trailing slash, e.g. '/zoho-books-alternative/' or '/best/gst-billing-software/'
 * @param faqItems localized FAQ Q/A (same source as the visible <FAQ>)
 * @param seo      localized { name, description } for the WebPage node
 * @param leafName localized breadcrumb leaf label
 */
export function localizeAltGraph(
  graph: Array<Record<string, any>>,
  lang: Lang,
  basePath: string,
  faqItems: FaqItem[],
  seo: { name: string; description: string },
  leafName: string,
): Array<Record<string, any>> {
  if (lang === DEFAULT_LANG) return graph;

  const enPrefix = `${ORIGIN}${basePath}`; // https://399apps.com/zoho-books-alternative/
  const locBase = localizedPath(basePath, lang); // /hi/zoho-books-alternative/
  const locPrefix = `${ORIGIN}${locBase}`;
  const langTag = HTML_LANG_ATTR[lang]; // e.g. hi-Latn-IN

  // Deep clone + swap every page-scoped absolute URL/@id prefix → localized.
  // Root urls (https://399apps.com/) and shared @ids (#organization, …/apps/books/#software)
  // are not prefixed by enPrefix, so they pass through unchanged.
  const swap = (val: any): any => {
    if (typeof val === 'string') return val.startsWith(enPrefix) ? locPrefix + val.slice(enPrefix.length) : val;
    if (Array.isArray(val)) return val.map(swap);
    if (val && typeof val === 'object') {
      const out: Record<string, any> = {};
      for (const [k, v] of Object.entries(val)) out[k] = swap(v);
      return out;
    }
    return val;
  };

  const g = graph.map(swap) as Array<Record<string, any>>;

  for (const node of g) {
    switch (node['@type']) {
      case 'WebPage':
        node.inLanguage = langTag;
        node.name = seo.name;
        node.description = seo.description;
        break;
      case 'FAQPage':
        node.inLanguage = langTag;
        node.mainEntity = faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        }));
        break;
      case 'BreadcrumbList': {
        const items = node.itemListElement as Array<Record<string, any>> | undefined;
        if (items && items.length) items[items.length - 1].name = leafName;
        break;
      }
    }
  }

  return g;
}
