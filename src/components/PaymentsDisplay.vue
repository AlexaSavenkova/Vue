<template>
  <v-container>
    <v-row>
      <v-dialog v-model="showEditPaymentForm">
        <EditPaymentForm
          v-if="showEditPaymentForm"
          :index="editedIndex"
          @payment-edited="showEditPaymentForm = false"
        />
      </v-dialog>
    </v-row>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="3">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Value</v-col>
    </v-row>
    <v-row
    v-for="({ value, category, date }, index) in paymentsList"
    :key="index"
    >
      <v-col cols="1">{{ startIndex + index + 1 }}</v-col>
      <v-col cols="4">{{ date }}</v-col>
      <v-col cols="5">{{ category }}</v-col>
      <v-col cols="2">
        <v-menu
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              {{ value }}
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              @click="editPayment(startIndex + index)"
            >
              <v-list-item-title>
                <v-icon>mdi-pencil</v-icon>
                Edit
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="deletePayment(startIndex + index)"
            >
              <v-list-item-title>
                <v-icon>mdi-delete</v-icon>
                Delete
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import EditPaymentForm from '@/components/EditPaymentForm'
export default {
  name: 'PaymentsDisplay',
  components: {
    EditPaymentForm
  },
  data: () => ({
    editedIndex: null,
    showEditPaymentForm: false
  }),
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
    },
    startIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations(['DELETE_PAYMENT']),
    deletePayment (index) {
      this.DELETE_PAYMENT(index)
    },
    editPayment (index) {
      this.editedIndex = index
      this.showEditPaymentForm = true
    }
  }
}
</script>
