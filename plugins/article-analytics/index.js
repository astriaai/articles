const {measurementIDs} = require('../../analytics.config');

// Serialized into the document head. Keep this function self-contained.
function bootstrap(ids) {
  if (location.origin !== 'https://www.astria.ai' ||
      !/^\/articles(?:\/|$)/.test(location.pathname) ||
      navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' ||
      window.doNotTrack === '1' || ids.every(id => window[`ga-disable-${id}`])) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  // Leave any existing Consent Mode state intact; never grant consent here.
  window.gtag('js', new Date());
  // The client configures destinations with sanitized context before its first
  // pageview. Do not let an early automatic event collect the raw browser URL.
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ids[0]}`;
  document.head.appendChild(script);
}

module.exports = function articleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return {name: 'article-analytics'};
  return {
    name: 'article-analytics',
    getClientModules: () => [require.resolve('./client')],
    injectHtmlTags: () => ({headTags: [{
      tagName: 'script',
      innerHTML: `(${bootstrap.toString()})(${JSON.stringify(measurementIDs)});`,
    }]}),
  };
};
