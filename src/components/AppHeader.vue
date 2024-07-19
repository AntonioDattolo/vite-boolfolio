<script>





</script>

<template>
  <h1 class="text-center">Boolfolio</h1>
  <li v-for="(item, index) in menuItems" :key="index">
 <router-link :to="{ name: 'home' }" class="nav-link">
 {{ item.label }}
 </router-link>
</li>
</template>

<style scoped>

</style>
