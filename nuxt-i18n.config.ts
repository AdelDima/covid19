export default {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
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
    /*{
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json'
    },*/
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json'
    },
   /* {
      code: 'zh-cn',
      name: '简体中文',
      iso: 'zh-CN',
      file: 'zh_CN.json'
    },
    {
      code: 'zh-tw',
      name: '繁體中文',
      iso: 'zh-TW',
      file: 'zh_TW.json'
    },
    {
      code: 'ko',
      name: '한국어',
      iso: 'ko-KR',
      file: 'ko.json'
    },
       {
      code: 'ja-basic',
      name: 'やさしい にほんご',
      iso: 'ja-JP',
      file: 'ja-Hira.json'
    }*/
  ]
}
