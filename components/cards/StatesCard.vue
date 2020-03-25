<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('المناطق المتضررة')"
      :title-id="'states-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="'#'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import formatStateTable from '@/utils/formatStateTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const patientsTable = formatStateTable(Data.states.data)

    const sumInfoOfPatients = {
      lText: Data.states.data.length.toString(),
      sText: this.$t('{date} لتاريخ', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
      unit: this.$t('ولاية')
    }

    for (const header of patientsTable.headers) {
      header.text =
        header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
    }
    for (const row of patientsTable.datasets) {
      row.state = this.$t(row.state)
      row.cases = this.$t(row.cases)
      row.death = this.$t(row.death)
      row.recovered = this.$t(row.recovered)
    }

    const data = {
      Data,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  }
}
</script>
