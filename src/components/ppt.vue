<template>
  <div :class="clicked ? 'iframe-box iframe-box--fullscreen' : 'iframe-box'" id="firame">
    <iframe v-bind:src="src"></iframe>
  </div>
</template>
<script>
export default {
  name: 'ppt',
  props: ['path'],
  data () {
    return {
      clicked: false,
      src: `http://static.yunguiedu.com/common/ppt/index.html?fileid=${this.path}`
    }
  },
  mounted () {
    var _this = this
    window.addEventListener('message', function (e) {
      if (e.data === 'fullscreen') {
        _this.fullscreen()
      } else if (e.data === 'exitfullscreen') {
        _this.exitFullScreen()
      }
    }, false)
  },
  methods: {
    // 全屏事件
    fullscreen: function (ev) {
      this.$data.clicked = !this.$data.clicked
    },
    // 退出全屏
    exitFullScreen: function (ev) {
      this.$data.clicked = false
    }
  }
}
</script>

<style scoped>

</style>
