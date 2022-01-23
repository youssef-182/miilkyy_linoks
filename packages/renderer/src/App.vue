<script setup>
import Navbar from '/@/components/Navbar.vue';
</script>
<template>
  <navbar />
  <main>
    <router-view />  
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 700px; */
}
</style>
