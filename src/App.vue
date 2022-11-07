<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <RouterView class="container content"/>
</template>

<style scoped lang="scss">
header{
  width: 100%;
  color: var(--header-text-color);
}
.content{
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
