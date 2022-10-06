<template>
  <div class="px-14">
  <Doughnut
    :chart-options="chartOptions"
    :chart-data="chartData"
  />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Doughnut } from 'vue-chartjs'
import { Chart, ArcElement, Title, Legend } from 'chart.js'

Chart.register(ArcElement, Title, Legend)

export default {
  name: 'Diagram',
  components: {
    Doughnut
  },
  data: () => ({
    chartOptions: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: 'Costs by categories'
        }
      }
    }
  }),
  computed: {
    ...mapGetters(['categoryList', 'paymentsList']),
    values () {
      const totals = []
      this.categoryList.forEach(value => {
        const total = this.paymentsList.filter(item => item.category === value).reduce((sum, cur) => sum + cur.value, 0)
        totals.push(total)
      })
      return totals
    },
    backgroundColor () {
      const colors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(100, 100, 200)',
        'rgb(12, 255, 30)'
      ]
      const length = this.categoryList.length
      return colors.slice(0, length)
    },
    chartData () {
      const data = {
        labels: this.categoryList,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.backgroundColor
          }
        ]
      }
      return data
    }
  }
}
</script>
