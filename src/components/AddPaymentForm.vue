<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date"/>
    <v-select
      v-model="category"
      label="Category"
      :items="categoryList"
    />
    <v-text-field v-model.number="value" label="Payment Amount"/>
    <v-btn @click="addPayment">ADD</v-btn>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: 0,
    category: '',
    date: ''
  }),
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      const { value, category, date, currentDate } = this
      const data = {
        value,
        category,
        date: date || currentDate
      }
      this.ADD_PAYMENT_DATA(data)
      this.$emit('payment-added')
      this.date = ''
      this.category = ''
      this.value = 0
    }
  },
  computed: {
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>
