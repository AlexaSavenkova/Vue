<template>
  <div>
    <h1>My personal costs: {{ totalCost }}</h1>
    <button
      :class="this.$style.showFormBtn"
      @click="addPayment"
    >
      ADD NEW COST +
    </button>
    <PaymentsDisplay
      :paymentsList="currentPage"
      :start-index="startIndex"
    />
    <Pagination
      :totalPages="totalPages"
      :currentPageNumber="currentPageNumber"
      @get-page="getPage"
    />
    <button
      :class="this.$style.showFormBtn"
      @click="authModal"
    >
      AUTH
    </button>
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
// import ModalWindowAddPayment from '@/components/ModalWindow.vue'
import Pagination from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    Pagination
  },
  data: () => ({
    linesPerPage: 5,
    currentPageNumber: 1
  }),
  computed: {
    ...mapGetters(['paymentsList', 'totalCost']),
    startIndex () {
      return this.linesPerPage * (this.currentPageNumber - 1)
    },
    currentPage () {
      // const start = this.linesPerPage * (this.currentPageNumber - 1)
      const start = this.startIndex
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
    addPayment () {
      this.$modal.show({ title: 'Add New Payment', content: 'addPaymentForm' })
    },
    authModal () {
      this.$modal.show({ title: 'Authorization', content: 'auth' })
    }
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
