export default {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  defaultLocale: 'ar',
  vueI18n: {
    fallbackLocale: 'ar',
    formatFallbackMessages: true
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ar',
      name: 'العربية',
      iso: 'ar-AR',
      file: 'ar.json'
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json'
    }
  ]
}
