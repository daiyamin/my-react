const store = {
  state: {

  },
  getters: {
    a: (state, getters, rootState) => {

    },
    b: state => (id) => {

    }
  },
  mutations: {
    f1(state) {

    }
  },
  actions: {
    action({state, getters, rootState,commit}, payload) {
      commit
    }
  },
  modules: {
    a: {
      namespaced: true,
    }
  }
}

mapGetters({
  a: 
})

this.$store.dispatch({
  type: 'f1',
  payload: {

  }
})

require.ensure([], () => {
  const x = require('./index.js');
  x.a();
})