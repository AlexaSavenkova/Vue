<template>
  <div>
    <h1>Add Payment</h1>
    <div :class="this.$style.main">
      <div :class="this.$style.form">
        <input type="text" placeholder="Payment Amount" v-model.number="value">
        <select v-model="category">
          <option value="" disabled hidden>Payment Description</option>
          <option
            v-for="category of categoryList"
            :value="category"
            :key="category"
          >
            {{ category}}
          </option>
        </select>
        <input type="text" placeholder="Payment date" v-model="date">
        <button @click="addPayment" :class="this.$style.addBtn">ADD + </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'AddPayment',
  data: () => ({
    value: '',
    category: '',
    date: ''
  }),
  methods: {
    ...mapActions(['fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      const { value, category, date, currentDate } = this
      const data = {
        value,
        category,
        date: date || currentDate
      }
      this.ADD_PAYMENT_DATA(data)
      this.$router.push({ name: 'dashboard' })
    }
  },
  computed: {
    ...mapGetters(['categoryList']),
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  },
  created () {
    this.fetchCategoryData()
    if (this.$route.params.category) {
      this.category = this.$route.params.category[0].toUpperCase() + this.$route.params.category.slice(1)
    }
    this.value = Number(this.$route.query.value) || ''
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
