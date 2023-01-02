<template>
<div class="select">
  <span class="select__title">{{ this.title }}</span>
  <select @change="changeOption" :value="value" class="select__content">
    <option value="">
      {{ this.defaultName }}
    </option>

    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</div>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    title: {
      type: String,
      required: true,
    },
    defaultName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update', event.target.value)
    }
  }
}
</script>
