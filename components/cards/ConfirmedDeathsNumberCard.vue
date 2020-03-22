<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('عدد الوفيات المؤكدة')"
      :title-id="'number-of-confirmed-deaths'"
      :chart-id="'time-bar-chart-deaths'"
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
import TimeBarChart from '@/components/TimeBarRedChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const patientsGraph = formatGraph(Data.deaths_summary.data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>
