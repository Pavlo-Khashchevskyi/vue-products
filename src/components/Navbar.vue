<template>
  <header class="navbar">
    <div class="navbar__content container">
      <div class="navbar__logo" @click="$router.push('/')">Test task</div>

      <nav class="navbar__btns">
        <MyButton
          style="color: white; border-color: white;"
          @click="$router.push('/products')"
        >
          Products
        </MyButton>

        <MyButton
          style="color: white; border-color: white;"
          @click="$router.push('/about')"
        >
          About
        </MyButton>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>
