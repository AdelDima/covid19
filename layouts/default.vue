<template>
  <v-app class="app">
    <v-overlay v-if="loading" color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <img src="/logo.svg" alt="東京都" />
        <scale-loader color="#00A040" />
      </div>
    </v-overlay>
    <div
      v-if="hasNavigation"
      class="appContainer md:flex-1 md:flex md:overflow-y-hidden"
    >
      <div class="naviContainer xl:w-72 md:w-64 sm:w-full">
        <SideNavigation
          :is-navi-open="isOpenNavigation"
          :class="{ open: isOpenNavigation }"
          @openNavi="openNavigation"
          @closeNavi="hideNavigation"
        />
      </div>
      <main
        class="mainContainer w-full max-w-screen-xl mx-auto px-6 py-6 md:flex-1 md:overflow-x-hidden"
        :class="{ open: isOpenNavigation }"
      >
        <v-container class="p-5">
          <nuxt />
        </v-container>
      </main>
    </div>
    <div v-else class="embed">
      <v-container>
        <nuxt />
      </v-container>
    </div>
    <NoScript />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SideNavigation from '@/components/SideNavigation.vue'
import NoScript from '@/components/NoScript.vue'

type LocalData = {
  hasNavigation: boolean
  isOpenNavigation: boolean
  loading: boolean
}

export default Vue.extend({
  components: {
    // DevelopmentModeMark,
    ScaleLoader,
    SideNavigation,
    NoScript
  },
  data(): LocalData {
    let hasNavigation = true
    let loading = true
    if (this.$route.query.embed === 'true') {
      hasNavigation = false
      loading = false
    }

    return {
      hasNavigation,
      loading,
      isOpenNavigation: false
    }
  },
  mounted() {
    this.loading = false
  },
  methods: {
    openNavigation(): void {
      this.isOpenNavigation = true
    },
    hideNavigation(): void {
      this.isOpenNavigation = false
    }
  },
  head(): MetaInfo {
    const { htmlAttrs } = this.$nuxtI18nSeo()
    return {
      htmlAttrs,
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        }
      ],
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$tc('東京都')
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
          )
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.$t('東京都') + ' ' + this.$t('新型コロナウイルス感染症')
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$t('東京都') + ' ' + this.$t('新型コロナウイルス感染症')
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
          )
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.$tc('ogp.og:image')
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.$t('東京都') + ' ' + this.$t('新型コロナウイルス感染症')
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$tc('ogp.og:image')
        }
      ]
    }
  }
})
</script>
<style lang="scss">
.app {
  margin: 0 auto;
  background-color: inherit !important;
}
.embed {
  .container {
    padding: 0 !important;
  }
  .DataCard {
    padding: 0 !important;
  }
}

.open {
  height: 100vh;
  @include largerThan($small) {
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}
.v-application--is-rtl {
  &.v-application ul,
  &.v-application ol {
    @include padding_start(15px);
  }
}
</style>
