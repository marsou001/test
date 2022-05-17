import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [],
      cartItems: 0,
      error: '',
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cartItems;
    },
    error(state) {
      return state.error;
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    addItemToCart(state, data = 1) {
      console.log(data)
      state.cartItems += data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    fetchProducts(context) {
      return new Promise((resolve, reject) => {
        const url = 'https://fakestoreapi.com/products';

        axios.get(url)
          .then(({ data }) => {
            context.commit('setProducts', data);
            resolve();
          })
          .catch((error) => {
            context.commit('setError', error.response.data.message);
            reject(error);
          })
      })
    }
  }
});

export default store;