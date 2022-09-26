<template>
  <div>
    <h1>My personal costs: {{ totalCost }}</h1>
<!--    <button-->
<!--      :class="this.$style.showFormBtn"-->
<!--      @click="addPaymentModal"-->
<!--    >-->
<!--      ADD NEW COST +-->
<!--    </button>-->
    <button
      :class="this.$style.showFormBtn"
      @click="addPayment"
    >
      ADD NEW COST +
    </button>
    <PaymentsDisplay
      :paymentsList="currentPage"
    />
<!--    <ModalWindowAddPayment-->
<!--      v-if="showModal"-->
<!--      @close="close"-->
<!--      :settings="modalSettings"-->
<!--    />-->
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
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue'
import Pagination from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    PaymentsDisplay,
    // ModalWindowAddPayment,
    Pagination
  },
  data: () => ({
    // showModal: false,
    // modalSettings: {},
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
    // addPaymentModal () {
    //   this.showModal = true
    //   this.modalSettings = {
    //     title: 'Add New Payment',
    //     content: 'addPaymentForm'
    //   }
    // },
    addPayment () {
      this.$modal.show({ title: 'Add New Payment', content: 'addPaymentForm' })
    },
    authModal () {
      // this.showModal = true
      // this.modalSettings = {
      //   title: 'Authorization',
      //   content: 'auth'
      // }
      this.$modal.show({ title: 'Authorization', content: 'auth' })
    }
    // close () {
    //   this.showModal = false
    // }
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
