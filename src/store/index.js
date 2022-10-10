import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'
import paymentsList from '@/store/paymentsList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categoryList,
    paymentsList
  }
})
