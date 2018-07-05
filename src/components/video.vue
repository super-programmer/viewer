<template>
  <div id="player" style="width:882px;height:506px;"></div>
</template>

<script>
export default {
  name: 'media',
  props: ['filedata'],
  data () {
    return {
      src: `http://fs.yunguiedu.com/${this.filedata.src}`,
      type: `${this.filedata.type}`,
      name: `${this.filedata.name}`,
      poster: `http://fs.yunguiedu.com/${this.filedata.poster}`
    }
  },
  mounted () {
    this.initPlayer()
  },
  methods: {
    initPlayer () {
      var _this = this
      var oHead = document.getElementsByTagName('HEAD').item(0)
      var script1 = document.createElement('script')
      script1.type = 'text/javascript'
      script1.src = 'http://static.yunguiedu.com/common/player/sewise.player.min.js'
      oHead.appendChild(script1)
      setTimeout(function () {
        SewisePlayer.setup({
          server: 'vod',
          type: `${_this.type}`,
          autostart: 'true',
          poster: `${_this.poster}`,
          videourl: `${_this.src}`,
          skin: 'vodWhite',
          title: `${_this.name}`,
          logo: ' ',
          lang: 'zh_CN',
          claritybutton: 'disable'
        }, 'player')
      }, 500)
    }
  }
}
</script>
<style scoped>

</style>
