import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cartItems: 0,
    }
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
  },
  mutations: {
    addItemToCart(state) {
      state.cartItems++;
    },
  }
});

export default store;