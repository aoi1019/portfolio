<template>
  <header>
    <div class="header-field">
      <div class="header-title">
        {{ ttl }}
      </div>
      <div class="header-list">
        
      </div>
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