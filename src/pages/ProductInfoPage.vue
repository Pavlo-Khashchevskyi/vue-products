<template lang="">
  <div v-if="currentProduct" class="productPage container">
    <div class="productPage__btn-back" @click="$router.back">
      <img src="@/assets/arrow_left.svg"/>
      Back
    </div>

    <div class="productPage__head">
      <my-title>{{ currentProduct.title }}</my-title>
      <div class="productPage__stars">
        <Stars :width="countPercent()" :reviews="+this.currentProduct.rating.count" />
      </div>
    </div>

    <div class="productPage__about">
      <img :src="currentProduct.image" class="productPage__img"/>
      
      <div class="productPage__info">
        <div class="productPage__info-head">
          <div>
            <span class="productPage__price">{{ `${currentProduct.price} $` }}</span>
          </div>

          <my-button @click="handleButton">Buy</my-button>
        </div>


        <div>
          <span class="productPage__title">Category :</span>
          <p>{{ currentProduct.category }}</p>
        </div>

        <div>
          <span class="productPage__title">Description :</span>
          <p>{{ currentProduct.description }}</p>
        </div>

      </div>
    </div>
  </div>

  <MyLoader v-else></MyLoader>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import Stars from '@/components/Stars.vue';

export default {
  components: {
    Stars,
  },
  methods: {
    ...mapActions({
      fetchCurrentProduct: 'products/fetchCurrentProduct',
    }),
    ...mapMutations({
      setInitialValue: 'products/setInitialValue'
    }),
    countPercent() {
      return Math.round((this.currentProduct.rating.rate / 5) * 100);
    },
    handleButton() {
      alert('We are sorry, but this feature is not implemented yet')
    }
  },
  computed: {
    ...mapState({
      currentProduct: state => state.products.currentProduct,
    })
  },
  mounted() {
    this.fetchCurrentProduct(this.$route.params.id)
      .then(data => {
        if (!data) {
          this.$router.push('/products');
        }
      })
  },
  unmounted() {
    this.setInitialValue('currentProduct');
  },
}
</script>
