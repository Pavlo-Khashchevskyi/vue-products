import axios from "axios";
import { Base_URL } from '@/config';

export const productsModule = {
  state: () => ({
    products: [],
    currentProduct: null,
    isLoading: false,
    selectedFilter: '',
    selectedSort: '',
    filterCategories: null,
  }),
  getters: {
    sortedByPrice(state) {
      return state.selectedSort
        ? [...state.products].sort((el1, el2) => {
          switch(state.selectedSort) {
            case 'up':
              return el1.price - el2.price;
            case 'down':
              return el2.price - el1.price;
            default:
              return false;
          }
        })
        : [...state.products];
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSelectedFilter(state, filter) {
      state.selectedFilter = filter;
    },
    setSelectedSort(state, sort) {
      state.selectedSort = sort;
    },
    setInitialValue(state, value ,) {
      state[value] = value === 'products' ? [] : null;
    },
    setFilterCategories(state, categories) {
      const createCategories = categories.map(category => {
        return {
          value: category,
          name : category.slice(0,1).toUpperCase() + category.slice(1),
        }
      });

      state.filterCategories = createCategories;
    },
  },
  actions: {
    async fetchProducts({ state, commit }, category) {
      try {
        commit('setIsLoading', true);

        const response = await axios.get(category ? Base_URL + `/category/${category}` : Base_URL);
        commit('setProducts', response.data);
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false);
      }
    },
    async fetchCurrentProduct({ state, commit }, id) {
      try {
        commit('setIsLoading', true);

        const response = await axios.get(Base_URL + `/${id}`);
        commit('setCurrentProduct', response.data);
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false);
      }
    },
    async fetchCategories({ state, commit }) {
      try {
        commit('setIsLoading', true);
  
        const response = await axios.get(Base_URL + '/categories');
        commit('setFilterCategories', response.data);
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false);
      }
    },
  },
  namespaced: true,
}