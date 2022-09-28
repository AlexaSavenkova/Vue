<template>
  <div :class="this.$style.main">
    <div :class="this.$style.form">
      <input type="text" placeholder="Payment Amount" v-model.number="value">
      <select v-model="category">
        <option value="" disabled hidden>Payment Description</option>
        <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
          placeholder="Payment Description"
        >
          {{ category}}
        </option>
      </select>
      <input type="text" placeholder="Payment date" v-model="date">
      <button @click="savePayment" :class="this.$style.saveBtn">Save </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'EditPaymentForm',
  data: () => ({
    value: '',
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
      this.$modal.hide()
    }
  },
  created () {
    this.value = this.paymentsList[this.index].value
    this.category = this.paymentsList[this.index].category
    this.date = this.paymentsList[this.index].date
  }
}
</script>

<style module>
.main {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
}
.saveBtn {
  width: 80px;
  align-self: flex-end;
  background-color: #5ea899;
  color: white;
}
</style>
