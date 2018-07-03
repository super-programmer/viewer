<template>
  <div>
    <img v-for="item in list" v-bind:src="item">
  </div>
</template>
<script>
export default {
  name: 'doc',
  props: ['pages'],
  data () {
    return {
      list: []
    }
  },
  created: function () {
    // 添加域名
    var _this = this
    this.pages.map(function (item) {
      _this.$data.list.push(`http://fs.yunguiedu.com/${item}`)
    })
  }
}
</script>

<style scoped>
</style>
