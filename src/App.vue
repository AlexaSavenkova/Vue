<template>
  <div id="app">
    <header>
      <h1>My personal costs</h1>
    </header>
    <main>
      <button
        :class="this.$style.showFormBtn"
        @click="showForm = !showForm"
      >
        ADD NEW COST +
      </button>
      <AddPaymentForm
        v-show="showForm"
        @add-payment="addPayment"
      />
      <PaymentsDisplay
        :paymentsList="paymentsList"
        show
      />
    </main>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    paymentsList: [],
    showForm: false
  }),
  methods: {
    fetchPaymentsData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ]
    },
    addPayment (data) {
      this.paymentsList.push(data)
    }
  },
  created () {
    this.paymentsList = this.fetchPaymentsData()
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  padding-left: 20px;
}
.showFormBtn {
  background-color: #5ea899;
  color: white;
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
