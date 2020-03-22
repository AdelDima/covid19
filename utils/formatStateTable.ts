const headers = [
  { text: 'state', value: 'state' },
  { text: 'cases', value: 'cases' },
  { text: 'death', value: 'death' },
  { text: 'recovered', value: 'recovered' }
]

type DataType = {
  state: string | null
  cases: string | null
  death: string | null
  recovered: string | null
}

type TableDataType = {
  state: DataType['state']
  cases: DataType['cases']
  death: DataType['death']
  recovered: DataType['recovered']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      state: d.state ?? '',
      cases: d.cases ?? '',
      death: d.cases ?? '',
      recovered: d.recovered ?? ''
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}
