<template>
  <div id="app">
    <Header ttl="Aoi's Portfolio" />
    <Top />
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Top,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
