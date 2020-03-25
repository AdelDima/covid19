<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <div
      class="bg-orange-100 mb-4 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class="fill-current h-6 w-6 text-orange-500 ml-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <div>
          <p class="font-bold">تبرئة</p>
          <p class="text-sm">
            أن الموقع لا يمثل أي جهة رسمية وهو مبادرة مدنية.
          </p>
          <p class="text-sm">
            كل البينات تأخذ من وزارة الصحة و الصحف الجزائرية الموثوقة.
          </p>
        </div>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-number-card />
      <confirmed-recovered-number-card />
      <states-card />
      <confirmed-deaths-number-card />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedDeathsNumberCard from '@/components/cards/ConfirmedDeathsNumberCard.vue'
import ConfirmedRecoveredNumberCard from '@/components/cards/ConfirmedRecoveredNumberCard.vue'
import StatesCard from '@/components/cards/StatesCard.vue'
// import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
// import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
// import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
// import MetroCard from '@/components/cards/MetroCard.vue'
// import AgencyCard from '@/components/cards/AgencyCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    ConfirmedCasesNumberCard,
    ConfirmedRecoveredNumberCard,
    ConfirmedDeathsNumberCard,
    StatesCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('都内の最新感染動向') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
