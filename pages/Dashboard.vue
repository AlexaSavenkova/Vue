<template>
  <div>
    <h1>My personal costs: {{ totalCost }}</h1>
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
      :paymentsList="currentPage"
    />
    <Pagination
      :totalPages="totalPages"
      :currentPageNumber="currentPageNumber"
      @get-page="getPage"
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm'
import Pagination from '@/components/Pagination'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data: () => ({
    showForm: false,
    linesPerPage: 3,
    currentPageNumber: 1
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost', 'currentPage']),
    totalPages () {
      return Math.ceil(this.paymentsList.length / this.linesPerPage)
    }
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData', 'fetchPage']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      // this.$store.commit('ADD_PAYMENT_DATA', data)
      this.ADD_PAYMENT_DATA(data)
      this.getPage(this.currentPageNumber)
    },
    getPage (number) {
      this.currentPageNumber = number
      const start = this.linesPerPage * (number - 1)
      const end = start + this.linesPerPage
      const payload = {
        start,
        end
      }
      this.fetchPage(payload)
    }
  },
  created () {
    // this.$store.dispatch('fetchData')
    this.fetchData()
    this.fetchCategoryData()
    setTimeout(() => this.getPage(1), 1000)
  }
}
</script>

<style lang="scss" module>
  h1 {
    padding-left: 20px;
  }
  .showFormBtn {
    background-color: #5ea899;
    color: white;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>
