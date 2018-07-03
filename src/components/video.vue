<template>
  <div id="video">
    <video v-bind:src="src" v-bind:poster="poster" style="width:882px;height:506px;"></video>
  </div>
</template>

<script>
import 'mediaelement'
import 'mediaelement/build/mediaelementplayer.min.css'
props:['filedata']
export default {
  name: 'audio',
  data () {
    return {
      /* src:this.filedata.src,
        poster:this.filedata.poster, */
      src: 'http://fs.yunguiedu.com/group1/M00/00/07/wKgKjFst_zmADExtAAACq5RSq0082.m3u8',
      poster: 'http://www.mediaelementjs.com/images/big_buck_bunny.jpg'
    }
  },
  mounted () {
    this.initPlayer()
  },
  methods: {
    initPlayer () {
      var player = new MediaElementPlayer(document.querySelector('video'), {
        mode: 'shim',
        enablePluginDebug: true,
        defaultVideoWidth: 882,
        defaultVideoHeight: 506,
        pluginPath: 'build/',
        features: ['playpause', 'progress', 'volume', 'duration', 'fullscreen'],
        poster: this.poster,
        success: me => {
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
