<template>
  <Navbar />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
components: {
  Navbar,
}
}
</script>

<style scoped>
  .main {
    flex: 1 1 auto;
  }
</style>