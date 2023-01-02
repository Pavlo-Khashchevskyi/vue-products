<template>
  <div class="card">
    <img :src="product.image" class="card__img" @click="$router.push(`/products/${product.id}`)" />
    <div class="card__info">
      <span class="card__price">Price: {{ product.price }} $</span>
      <my-button
        @click="toggleIsOpen"
        :class="{
          'card__btn-active': isOpen,
        }"
      >
        {{ isOpen ? 'x' : 'Info' }}
      </my-button>
    </div>

    <div
      class="card__content"
      :class="{
        'card__content--act': isOpen,
      }"
    >
      <span class="card__title">{{ product.title }}</span>
      <hr class="card__hr"/>
      <span>{{ product.description }}</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>
