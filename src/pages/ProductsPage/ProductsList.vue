<template>
  <div v-if="products.length > 0" class="list">

    <transition-group name="productsList">
      <product-item
        v-for="product in products"
        :product="product"
        :key="product.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>

  </div>
  <h3 v-else style="color: red">
    List is empty
  </h3>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  }
}
</script>
