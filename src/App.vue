<template>
  <div class="app-container">
    <div class="app-background"></div>
    <div class="web-header">
      <WebHeader/>
    </div>
    <router-view />
  </div>
</template>

<script>
import WebHeader from './components/WebHeader.vue'

export default {
  name: 'App',
  components: {
    WebHeader
  }
}
</script>

<style>
.app-container {
  position: relative;
  height: 100vh;
}
.app-background {
  background-image: url('@/assets/background.jpg');
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 0;
}
.web-header {
  position: fixed;
  z-index: 3;
  width: 100%;
}
</style>
