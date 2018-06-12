import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      { name: "BMW", price: 110, quantity: 5 },
      { name: "Google", price: 200, quantity: 5 },
      { name: "Apple", price: 250, quantity: 5 },
      { name: "Twitter", price: 8, quantity: 0 }
    ]
  },
  getters: {
    stocks: state => state.stocks,
    funds: state => state.funds,
    portfolio: state => state.stocks.filter(stock => stock.quantity > 0)
  },
  mutations: {
    saveData(state) {},
    loadData(state, payload) {
      state.funds = payload.funds;
      state.stocks = payload.stocks;
    },
    buyStock(state, payload) {
      state.funds = payload.funds;
      state.stocks = payload.stocks;
    },
    sellStock(state, payload) {
      state.funds = payload.funds;
      state.stocks = payload.stocks;
    },
    endDay(state, payload) {
      state.stocks = payload;
    }
  },
  actions: {
    async saveData({ state, commit }) {
      const response = Vue.http.put("data.json", state);
      console.log(await response);
      commit("saveData");
    },
    async loadData({ _state, commit }) {
      const { body } = await Vue.http.get("data.json");
      commit("loadData", body);
    },
    buyStock({ state, commit }, { stock, quantity }) {
      const payload = this.updateStocks(state, { stock, quantity });
      commit("buyStock", payload);
    },
    sellStock({ state, commit }, { stock, quantity }) {
      const payload = this.updateStocks(state, {
        stock,
        quantity: quantity * -1
      });
      commit("sellStock", payload);
    },
    endDay: ({ state, commit }) => {
      const generateRandom = (min, max) =>
        Math.round(Math.round(Math.random() * (max - min)) + min);
      const payload = state.stocks.map(stock => ({
        ...stock,
        price: Math.max(generateRandom(stock.price * 0.8, stock.price * 1.2), 1)
      }));
      commit("endDay", payload);
    }
  }
});

store.updateStocks = (state, { stock, quantity }) => {
  const updatedFunds = state.funds - stock.price * quantity;
  const updatedQuantity = stock.quantity + quantity;
  if (updatedFunds < 0) return state;
  if (updatedQuantity < 0) return state;
  const updatedStocks = state.stocks.map(oldStock => {
    if (oldStock.name === stock.name) {
      return { ...stock, quantity: updatedQuantity };
    }
    return oldStock;
  });
  return { funds: updatedFunds, stocks: updatedStocks };
};

export default store;
