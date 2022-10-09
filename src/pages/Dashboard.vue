<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3 my-8">My personal costs: {{ totalCost }}</div>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="showAddPaymentForm">
          <template v-slot:activator="{ on }">
            <v-btn
              color="teal"
              dark
              v-on="on"
              @click="showAddPaymentForm = !showAddPaymentForm"
            >
              ADD NEW COST
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card class="text-left pa-8">
            <AddPaymentForm
            :category-list="categoryList"
            @payment-added="showAddPaymentForm=false"
            />
          </v-card>
        </v-dialog>
        <div>
          <PaymentsDisplay
            :paymentsList="currentPage"
            :start-index="startIndex"
          />
          <Pagination
            :totalPages="totalPages"
            :currentPageNumber="currentPageNumber"
            @get-page="getPage"
          />
        </div>
      </v-col>
      <v-col>
        <Diagram/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import Pagination from '@/components/Pagination.vue'
import AddPaymentForm from '@/components/AddPaymentForm'
import Diagram from '@/components/Diagram'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Diagram,
    AddPaymentForm,
    PaymentsDisplay,
    Pagination
  },
  data: () => ({
    linesPerPage: 5,
    currentPageNumber: 1,
    showAddPaymentForm: false,
    showContext: false
  }),
  computed: {
    ...mapGetters(['paymentsList', 'totalCost', 'categoryList']),
    startIndex () {
      return this.linesPerPage * (this.currentPageNumber - 1)
    },
    currentPage () {
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
    }
  }
}
</script>
