<template>
  <v-card class="text-left pa-8">
<!--    <v-text-field v-model="date" label="Date"/>-->
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
    <v-text-field v-model.number="value" label="Payment Amount"/>
    <v-btn @click="savePayment" :disabled="!validated">Save</v-btn>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'EditPaymentForm',
  data: () => ({
    value: 0,
    category: '',
    date: '',
    datePicker: false
  }),
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['categoryList', 'paymentsList']),
    validated () {
      if (!isFinite(this.value) || this.value <= 0) {
        return false
      }
      return true
    }
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
