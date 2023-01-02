<template>
  <div class="stars">
    <div class="stars__content">
      <img class="stars__img" src="@/assets/Stars.png" alt="stars">
      <div class="stars__fill" :style="{'width': `${this.width}%`}"></div>
    </div>
    <span class="stars__text" v-if="this.reviews">
      {{ `reviews: ${this.reviews}` }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
    }
  }
}
</script>
