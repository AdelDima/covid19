<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TextCard from '@/components/TextCard.vue'

type ItemData = {
  items: Item[]
}

type Item = {
  title: string
  body: string
}

export default Vue.extend({
  components: {
    TextCard
  },
  data(): ItemData {
    return {
      items: [
        {
          title: `1. ${this.$t('感染予防・健康管理')}`,
          body: [
            this.$t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            ),
            this.$t('手洗い、咳エチケット等により、感染予防に努めてください。'),
            '<a href="https://www.youtube.com/watch?v=Jyjxn-CNChE" target="_blank" rel="noopener">' +
              this.$t('【参考】感染症予防のための正しい手洗い方法（動画）') +
              '</a>',
            this.$t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          ].join('<br />')
        },
        {
          title: `2. ${this.$t('感染症を疑う場合の対応')}`,
          body: [
            this.$t('各保健所にご相談ください'),
            '<a href="http://covid19.sante.gov.dz/numeros-utiles/" target="_blank" rel="noopener">' +
              this.$t('خدمة استشارية للعدوى بفيروس كورونا الجديد') +
              '</a>'
          ].join('<br />')
        }
      ]
    }
  },
  head: (): MetaInfo => ({
    title: 'お子様をお持ちの皆様へ'
  })
})
</script>

<style lang="scss">
.Parent {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
