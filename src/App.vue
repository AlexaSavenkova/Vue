<template>
  <div id="app">
    <header>
      <h1>My personal costs: {{ totalCost }}</h1>
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
        :categoryList="categoryList"
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
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    showForm: false
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      // this.$store.commit('ADD_PAYMENT_DATA', data)
      this.ADD_PAYMENT_DATA(data)
    }
  },
  created () {
    // this.$store.dispatch('fetchData')
    this.fetchData()
    this.fetchCategoryData()
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
