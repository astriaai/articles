// Measurement IDs are public configuration, never API secrets.
const articlesMeasurementID = 'G-PR5YMLZ2Y1';
const mainMeasurementID = (process.env.ASTRIA_MAIN_GA4_MEASUREMENT_ID || '').trim();

if (mainMeasurementID && !/^G-[A-Z0-9]+$/.test(mainMeasurementID)) {
  throw new Error('ASTRIA_MAIN_GA4_MEASUREMENT_ID must be a GA4 measurement ID (G-...).');
}

module.exports = {
  measurementIDs: [...new Set([articlesMeasurementID, mainMeasurementID].filter(Boolean))],
};
