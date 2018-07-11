import { getSetting } from 'meteor/vulcan:core';
import { addInitFunction } from 'meteor/vulcan:events';

import fetchScript from './fetchScript';

// fetchScript accepts settings for the promise options see ./fetchScript
const fetch = fetchScript();

// Init sentry function
const initSentry = () => {
  // Verify the Sentry DSN is set
  const SentryDSN = getSetting('sentry.DSN');

  if (SentryDSN) {
    fetch('https://cdn.ravenjs.com/3.26.2/raven.min.js')
      .then(response => {
        // Raven should be available globally
        // eslint-disable-next-line
        Raven.config(SentryDSN).install();
      })
      .catch(error => {
        console.warn('Sentry script loading failed', error);
      });
  }
  return null;
};

addInitFunction(initSentry);
