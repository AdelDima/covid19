<template>
  <div>
    <confirmed-cases-number-card
      v-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <confirmed-deaths-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-deaths'"
    />
    <states-card
      v-else-if="this.$route.params.card == 'states-of-confirmed-cases'"
    />
    <confirmed-recovered-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-recovered'"
    />
  </div>
</template>

<script>
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import agencyData from '@/data/agency.json'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedDeathsNumberCard from '@/components/cards/ConfirmedDeathsNumberCard.vue'
import ConfirmedRecoveredNumberCard from '@/components/cards/ConfirmedRecoveredNumberCard.vue'
import StatesCard from '@/components/cards/StatesCard.vue'

export default {
  components: {
    ConfirmedCasesNumberCard,
    ConfirmedDeathsNumberCard,
    ConfirmedRecoveredNumberCard,
    StatesCard
  },
  data() {
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients.date
        break
      case 'number-of-confirmed-deaths':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients.date
        break

      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        updatedAt = Data.patients.date
        break
      case 'number-of-tested':
        title = this.$t('検査実施数')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        title = this.$t('新型コロナコールセンター相談件数')
        updatedAt = Data.contacts.date
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = this.$t('新型コロナ受診相談窓口相談件数')
        updatedAt = Data.querents.date
        break
      case 'predicted-number-of-toei-subway-passengers':
        title = this.$t('都営地下鉄の利用者数の推移')
        updatedAt = MetroData.date
        break
      case 'agency':
        title = this.$t('都庁来庁者数の推移')
        updatedAt = agencyData.date
        break
    }

    const data = {
      title,
      updatedAt
    }
    return data
  },
  head() {
    const url = 'https://stopcovid19.metro.tokyo.lg.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.updatedAt} | ${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。'
    )}`

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('東京都') +
            ' ' +
            this.$t('新型コロナウイルス感染症')
        },
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage
        }
      ]
    }
  }
}
</script>
