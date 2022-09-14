// import Vue from 'vue'
export default {
  state: {
    paymentsList: [],
    // linesPerPage: 3,
    currentPage: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    totalCost: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0),
    currentPage: (state) => state.currentPage
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    SET_CURRENT_PAGE (state, page) {
      state.currentPage = page
    },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
    // EDIT_PAYMENTS (state, editedPayment) {
    //   state.paymentsList[1] = editedPayment
    //   state.paymentsList = [...state.paymentsList]
    //   Vue.set(this.state.paymentsList, 1, editedPayment)
    // }
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
          },
          {
            date: '24.04.2020',
            category: 'Food',
            value: 765
          }
        ]
        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    fetchPage: (context, payload) => {
      const page = context.state.paymentsList.slice(payload.start, payload.end)
      context.commit('SET_CURRENT_PAGE', page)
    }
  }
}
