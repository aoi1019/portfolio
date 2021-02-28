<template>
  <header>
    <div class="header-field flex-column flex-md-row px-md-4 border-bottom shadow-sm">
      <div class="header-ttl">
        <router-link to='/' class="ttl">{{ ttl }}</router-link>
      </div>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/" active-class="active-link" exact class="link">TOP</router-link>
        <router-link to="/works" active-class="active-link" exact class="link">WORKS</router-link>
        <router-link to="/about" active-class="active-link" exact class="link">ABOUT</router-link>
        <router-link to="/contact" active-class="active-link" exact class="link">CONTACT</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    ttl: String
  }
}
</script>