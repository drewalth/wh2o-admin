const {
  VUE_APP_BASE_URL,
  VUE_APP_API_BASE_URL,
  VUE_APP_GTAG_UA,
  VUE_APP_SENTRY_DSN,
  NODE_ENV = ''
} = process.env

const environment = NODE_ENV.toLowerCase()
const apiBaseUrl = VUE_APP_API_BASE_URL
const appBaseUrl = VUE_APP_BASE_URL
const gTagUA = VUE_APP_GTAG_UA
const sentryDSN = VUE_APP_SENTRY_DSN

export { environment, apiBaseUrl, appBaseUrl, gTagUA, sentryDSN }
