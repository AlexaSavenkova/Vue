<template>
  <v-card class="text-left pa-8">
    <v-menu
      v-model="datePicker"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Date"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        @input="datePicker = false"
      ></v-date-picker>
    </v-menu>
    <v-select
      v-model="category"
      label="Category"
      :items="categoryList"
    />
    <v-text-field
      v-model.number="value"
      label="Payment Amount"
    />
    <v-btn
      @click="addPayment"
      :disabled="!validated"
    >
      ADD
    </v-btn>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: 0,
    category: '',
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    datePicker: false
  }),
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    validated () {
      if (this.category === '') {
        return false
      }
      if (!isFinite(this.value) || this.value <= 0) {
        return false
      }
      return true
    }
  },
  methods: {
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      const { value, category, date } = this
      const data = {
        value,
        category,
        date
      }
      this.ADD_PAYMENT_DATA(data)
      this.$emit('payment-added')
      this.resetData()
    },
    resetData () {
      this.date = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
      this.category = ''
      this.value = 0
    }
  }
}
</script>
