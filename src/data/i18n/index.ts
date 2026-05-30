// Per-page translations live in sibling files; import from there directly.
// Anything common (Lang type, switcher list, path helpers) is re-exported from ./shared.

export * from './shared';
export { getLandingCopy, getHomeJsonLd, type LandingCopy } from './landing';
export { getChromeCopy, type ChromeCopy } from './chrome';
export { getPricingCopy, type PricingCopy } from './pricing';
export { getSelfHostingCopy, type SelfHostingCopy } from './self-hosting';
export { getWhiteLabelCopy, type WhiteLabelCopy } from './white-label';
export { getContactCopy, type ContactCopy } from './contact';
export { getCloudVsSelfCopy, type CloudVsSelfCopy } from './cloud-vs-self';
export { getAboutCopy, type AboutCopy } from './about';
export { getAppDetailCopy, type AppDetailCopy } from './app-detail';
export { getNotFoundCopy, type NotFoundCopy } from './not-found';
