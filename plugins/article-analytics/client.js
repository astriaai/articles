import siteConfig from '@generated/docusaurus.config';
import {createTracker} from '../../src/analytics/tracker';

// Client modules also run during SSR. The tracker is created only in the browser.
const tracker = typeof window === 'undefined' ? null :
  createTracker(window, siteConfig.customFields.analytics.measurementIDs);

export default {
  onRouteDidUpdate() {
    // Helmet updates the title and canonical URL after the route callback.
    tracker?.schedulePageView();
  },
};
