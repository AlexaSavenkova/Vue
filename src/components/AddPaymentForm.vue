<template>
  <div :class="this.$style.main">
    <div :class="this.$style.form">
      <input type="text" placeholder="Payment Amount" v-model.number="value">
      <select v-model="category">
        <option value="" disabled selected hidden>Payment Description</option>
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
      <button @click="addPayment" :class="this.$style.addBtn">ADD + </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
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
    addPayment () {
      const { value, category, date, currentDate } = this
      const data = {
        value,
        category,
        date: date || currentDate
      }
      this.$emit('add-payment', data)
      this.resetForm()
    },
    resetForm () {
      this.value = ''
      this.category = ''
      this.date = ''
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

<style module>
  .main {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
    margin-left: 20px;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 10px;
  }
  .addBtn {
    width: 80px;
    align-self: flex-end;
    background-color: #5ea899;
    color: white;
  }
</style>
