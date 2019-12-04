<template>
  <div id="app">
    <c-nav></c-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import CNav from '@/components/Nav'
export default {
  name: 'app',
  components: { CNav }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
