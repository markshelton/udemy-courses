const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => state.counter * 2,
  stringCounter: state => state.counter + " clicks"
};

const mutations = {
  increment: state => state.counter++,
  decrement: state => state.counter--
};

const actions = {
  increment: (context, payload) =>
    setTimeout(() => context.commit("increment"), payload),
  decrement: (context, payload) =>
    setTimeout(() => context.commit("decrement"), payload)
};

export default {
  state,
  getters,
  mutations,
  actions
};
