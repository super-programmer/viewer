<template>
  <div>
    <img v-bind:src="imgsrc">
  </div>
</template>
<script>
export default {
  name: 'doc',
  props: ['src'],
  data () {
    return {
      imgsrc: ''
    }
  },
  created: function () {
    // 添加域名
    this.imgsrc = `http://fs.yunguiedu.com/${this.src}`
  }
}
</script>

<style scoped>
</style>
