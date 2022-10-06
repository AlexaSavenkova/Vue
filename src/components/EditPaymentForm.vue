<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date"/>
    <v-select
      v-model="category"
      label="Category"
      :items="categoryList"
    />
    <v-text-field v-model.number="value" label="Payment Amount"/>
    <v-btn @click="savePayment">Save</v-btn>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'EditPaymentForm',
  data: () => ({
    value: 0,
    category: '',
    date: ''
  }),
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['categoryList', 'paymentsList'])
  },
  methods: {
    ...mapMutations(['EDIT_PAYMENTS']),
    savePayment () {
      const { value, category, date, index } = this
      const editedPayment = {
        value,
        category,
        date
      }
      const data = {
        index,
        editedPayment
      }
      this.EDIT_PAYMENTS(data)
      this.$emit('payment-edited')
      this.$destroy()
    }
  },
  mounted () {
    this.value = this.paymentsList[this.index].value
    this.category = this.paymentsList[this.index].category
    this.date = this.paymentsList[this.index].date
  }
}
</script>
