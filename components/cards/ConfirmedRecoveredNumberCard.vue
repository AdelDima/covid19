<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('عدد متعافى كورونا')"
      :title-id="'number-of-confirmed-recovered'"
      :chart-id="'time-bar-chart-recovered'"
      :chart-data="patientsGraph"
      :date="Data.patients.date"
      :unit="$t('人')"
      :url="'#'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const patientsGraph = formatGraph(Data.recovered_summary.data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>
