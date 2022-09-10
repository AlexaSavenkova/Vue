export default {
  state: {
    categoryList: []
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  actions: {
    fetchCategoryData: ({ commit }) => {
      setTimeout(() => {
        const categotyList = ['Food', 'Transport', 'Education', 'Sport']
        commit('SET_CATEGORY_LIST', categotyList)
      }, 1000)
    }
  }
}
