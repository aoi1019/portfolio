<template>
  <div id="app">
    <Header ttl="Aoi Tech" />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-actibe {
  transition: opacity 0.4s;
}
</style>