<template>
  <div
    class="SideNavigation sticky xl:fixed md:fixed xl:h-full xl:w-72 w-full bg-white xl:block xl:h-full xl:flex xl:flex-col xl:justify-between"
  >
    <header class="mt-0">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none absolute"
        :aria-label="$t('サイドメニュー項目を開く')"
        @click="openNavi"
        >mdi-menu</v-icon
      >
      <nuxt-link :to="localePath('/')" class="flex items-center p-5">
        <h1 class="mt-4 mb-4 text-gray-600 w-full text-center">
          <div class="Logo">
            <img class="mx-auto" src="/logo.svg" :alt="$t('東京都')" />
          </div>
        </h1>
      </nuxt-link>
    </header>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div
      class="sp-none xl:block xl:h-full xl:flex xl:flex-col xl:justify-between hidden"
      :class="{ open: isNaviOpen }"
    >
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="closeNavi"
        >mdi-close</v-icon
      >
      <nav class="lg:flex xl:block">
        <v-list>
          <div
            v-for="(item, i) in items"
            :key="i"
            class="SideNavigation-ListItemContainer"
            @click="closeNavi"
          >
            <ListItem
              class="text-white"
              :link="item.link"
              :icon="item.icon"
              :title="item.title"
            />
          </div>
        </v-list>
        <!--
        <div class="SideNavigation-LanguageMenu">
          <LanguageSelector />
        </div>-->
      </nav>
      <v-divider class="SideNavigation-HeadingDivider" />

      <v-footer
        class="SideNavigation-Footer bg-gray-900 px-4 py-4 sm:text-right"
      >
        <!--
        <div class="flex flex-row">
          <a
            href="https://line.me/R/ti/p/%40822sysfc"
            target="_blank"
            rel="noopener"
          >
            <img class="m-2 w-8" src="/line.png" alt="LINE" />
          </a>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener"
          >
            <img class="m-2 w-8" src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/tochokoho"
            target="_blank"
            rel="noopener"
          >
            <img class="m-2 w-8" src="/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://github.com/tokyo-metropolitan-gov/covid19"
            target="_blank"
            rel="noopener"
          >
            <img class="m-2 w-8" src="/github.png" alt="GitHub" />
          </a>
        </div>
        -->
        <small class="SideNavigation-Copyright">
          {{ $t('このサイトの内容物は') }}
          <a
            rel="license"
            target="_blank"
            :href="'https://creativecommons.org/licenses/by/4.0/deed.ar'"
            >{{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}</a
          >
          <br />
        </small>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import ListItem from '@/components/ListItem.vue'
// import LanguageSelector from '@/components/LanguageSelector.vue'

type Item = {
  icon?: string
  title: TranslateResult
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    ListItem
    // LanguageSelector
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items(): Item[] {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('都内の最新感染動向'),
          link: this.localePath('/')
        },
        {
          icon: 'covid',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: this.localePath('/flow'),
          divider: true
        },
        {
          icon: 'parent',
          title: this.$t('お子様をお持ちの皆様へ'),
          link: this.localePath('/parent')
        },
        {
          icon: 'mdi-information-outline',
          title: this.$t('当サイトについて'),
          link: this.localePath('/about')
        }
      ]
    }
  },
  methods: {
    openNavi(): void {
      this.$emit('openNavi')
    },
    closeNavi(): void {
      this.$emit('closeNavi')
    }
  }
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  &-HeadingIcon {
    position: absolute;
    font-size: 30px;
    line-height: 88px;
    width: 88px;
  }
  &-ListContainerIcon {
    position: relative;
    font-size: 30px;
    line-height: 88px;
    width: 88px;
  }
}
/*
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);

  &-HeadingIcon {
    margin-right: 10px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    width: 21px;
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }

  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #707070;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-LanguageMenu {
    padding: 0 20px;
    background: #fff;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & a:not(:last-of-type) {
      margin-right: 10px;
    }
    & img {
      width: 30px;
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
*/
.open {
  @include lessThan($small) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
    height: 100%;
    overflow-y: scroll;
  }
}
@include lessThan($tiny) {
  .sp-logo {
    width: 100px;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
.theme--light.v-list {
  background: inherit;
}
</style>
