<template>
<div class="top-field">
  <div class="ttl-field">
    <h2 class="top-ttl">Aoi's Portfolio</h2>
  </div>
  <div class="pc-only">
    <div class="bgImage"></div>
    <svg class="blobCont">
      <image xlink:href="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-0.3.5&s=e20bc3d490c974d9ea190e05c47962f5&auto=format&fit=crop&w=634&q=80" mask="url(#mask)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
        <defs>
        <filter id="gooey" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </defs>
        <mask id="mask" x="0" y="0">
          <g style="filter: url(#gooey)">
            <circle class="blob" cx="10%" cy="10%" r="80" fill="white" stroke="white"/>
            <circle class="blob" cx="50%" cy="10%" r="40" fill="white" stroke="white"/>
            <circle class="blob" cx="17%" cy="15%" r="70" fill="white" stroke="white"/>
            <circle class="blob" cx="90%" cy="20%" r="120" fill="white" stroke="white"/>
            <circle class="blob" cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
            <circle class="blob" cx="50%" cy="60%" r="80" fill="white" stroke="white"/>
            <circle class="blob" cx="70%" cy="90%" r="10" fill="white" stroke="white"/>
            <circle class="blob" cx="90%" cy="60%" r="90" fill="white" stroke="white"/>
            <circle class="blob" cx="30%" cy="90%" r="80" fill="white" stroke="white"/>
            <circle class="blob" cx="10%" cy="10%" r="80" fill="white" stroke="white"/>
            <circle class="blob" cx="50%" cy="10%" r="20" fill="white" stroke="white"/>
            <circle class="blob" cx="17%" cy="15%" r="70" fill="white" stroke="white"/>
            <circle class="blob" cx="40%" cy="20%" r="120" fill="white" stroke="white"/>
            <circle class="blob" cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
            <circle class="blob" cx="80%" cy="60%" r="80" fill="white" stroke="white"/>
            <circle class="blob" cx="17%" cy="10%" r="100" fill="white" stroke="white"/>
            <circle class="blob" cx="40%" cy="60%" r="90" fill="white" stroke="white"/>
            <circle class="blob" cx="10%" cy="50%" r="80" fill="white" stroke="white"/>
          </g>
        </mask>
    </svg>
  </div>
</div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
