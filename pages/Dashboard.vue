<template>
  <div>
    <h1>My personal costs: {{ totalCost }}</h1>
    <button
      :class="this.$style.showFormBtn"
      @click="goToAddPaymentPage"
    >
      ADD NEW COST +
    </button>
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
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    Pagination
  },
  data: () => ({
    showForm: false,
    linesPerPage: 5,
    currentPageNumber: 1
  }),
  computed: {
    ...mapGetters(['paymentsList', 'totalCost']),
    currentPage () {
      const start = this.linesPerPage * (this.currentPageNumber - 1)
      const end = start + this.linesPerPage
      return this.paymentsList.slice(start, end)
    },
    totalPages () {
      return Math.ceil(this.paymentsList.length / this.linesPerPage)
    }
  },
  methods: {
    getPage (number) {
      this.currentPageNumber = number
    },
    goToAddPaymentPage () {
      this.$router.push({
        name: 'add_payment'
        // params: {
        //   a: 'qwerty'
        // }
      })
    }
  },
  created () {
    // this.getPage(1)
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
