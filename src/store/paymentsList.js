export default {
  state: {
    paymentsList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    totalCost: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0)
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    },
    DELETE_PAYMENT (state, index) {
      state.paymentsList.splice(index, 1)
    },
    EDIT_PAYMENTS (state, data) {
      state.paymentsList[data.index] = data.editedPayment
      state.paymentsList = [...state.paymentsList]
      // Vue.set(this.state.paymentsList, data.index, data.editedPayment)
    }
  },
  actions: {
    fetchData: ({ commit }) => {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532
          }
        ]
        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    }
  }
}
