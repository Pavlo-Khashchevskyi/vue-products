<template>
  <div class="productsPage container">
    <div class="productsPage__head">
      <h1 class="productsPage__title">Products page</h1>

      <div class="productsPage__selectors">
        <my-select
          :value="selectedFilter"
          @update="setSelectedFilter" 
          :options="filterCategories"
          :defaultName="'All'"
          :title="'Category'"
        />

        <my-select
          :value="selectedSort"
          @update="setSelectedSort"
          :options="this.sortCategories"
          :defaultName="'None'"
          :title="'Price'"
        />
      </div>
    </div>

    <products-list
      v-if="!isLoading && products.length > 0"
      :products="sortedByPrice"
    />
    <MyLoader v-else></MyLoader>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import ProductsList from './ProductsList.vue';

export default {
  components: { ProductsList },
  data() {
    return {
      sortCategories: [
        { value: 'up', name: 'Low to high'},
        { value: 'down', name: 'High to low'},
      ]
    }
  },
  methods: {
    ...mapMutations({
      setSelectedFilter: 'products/setSelectedFilter',
      setSelectedSort: 'products/setSelectedSort',
      setInitialValue: 'products/setInitialValue',
    }),
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      fetchCategories: 'products/fetchCategories',
    }),
    onChageCategory(event) {
      this.category = event.target.value;
      this.fetchProducts(event.target.value);
    },
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      isLoading: state => state.products.isLoading,
      selectedFilter: state => state.products.selectedFilter,
      selectedSort: state => state.products.selectedSort,
      filterCategories: state => state.products.filterCategories,
    }),
    ...mapGetters({
      sortedByPrice: 'products/sortedByPrice',
    }),
  },
  mounted() {
    this.fetchProducts(this.selectedFilter);
    this.fetchCategories();
  },
  unmounted() {
    this.setInitialValue('selectedFilter');
    this.setInitialValue('selectedSort');
    this.setInitialValue('filterCategories');
    this.setInitialValue('products');
  },
  watch: {
    selectedFilter(newValue) {
      this.fetchProducts(newValue);
      this.setSelectedSort('')
    }
  }
}
</script>
