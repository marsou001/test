import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      cartItems: 0,
    }
  },
  mutations: {
    addItemToCart(state) {
      state.cartItems++;
    },
  }
});

export default store;