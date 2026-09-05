// Measurement IDs are public configuration, never API secrets.
const articlesMeasurementID = 'G-PR5YMLZ2Y1';
// Keep article-specific reporting while also joining article-to-product journeys
// in the main Astria property. The environment variable is an emergency/build
// override if the main site's public web-stream ID changes.
const mainMeasurementID = (
  process.env.ASTRIA_MAIN_GA4_MEASUREMENT_ID || 'G-HCZ11XZYYX'
).trim();

if (mainMeasurementID && !/^G-[A-Z0-9]+$/.test(mainMeasurementID)) {
  throw new Error('ASTRIA_MAIN_GA4_MEASUREMENT_ID must be a GA4 measurement ID (G-...).');
}

module.exports = {
  measurementIDs: [...new Set([articlesMeasurementID, mainMeasurementID].filter(Boolean))],
};
