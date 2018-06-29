<template>
  <div>
    <img v-for="item in pages" v-bind:src="item">
  </div>
</template>
<script>
  // import getDoc from '@/api/api'
  export default {
    name: 'doc',
    props: ['pages'],
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
