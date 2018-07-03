<template>
  <div :class="clicked ? 'fileBox fileBox--fullscreen' : 'fileBox'" id="fullbox" @click="exitFullScreen">
    <div class="filebox-con" :style="video ? 'overflow:hidden;' : ''">
      <Img v-if="img" :src="src"></Img>
      <Doc v-if="doc" :pages="pages"></Doc>
      <Ppt v-if="ppt" :path="path"></Ppt>
      <Video v-if="video" :filedata="filedata"></Video>
        <!--<transition name="fade">-->
          <!--<div class="file&#45;&#45;loading" v-if="!loadend"></div>-->
        <!--</transition>-->
  </div>
  <i class="file-btn-fullscreen" @click="fullscreen" v-if="doc || img"></i>
  <div class="f-scrollbox">
    <div class="f-scrollbar"></div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
import img from './img.vue'
import doc from './doc.vue'
import ppt from './ppt.vue'
import video from './video.vue'
export default {
  name: 'viewer',
  props: ['fileId'],
  data () {
    return {
      filedata: {
        src: '',
        poster: ''
      }, // 多媒体数据
      loadend: false, // 下载完成表示
      clicked: false, // 全屏按钮状态
      doc: false, // 文档
      pages: '', // 文档list
      video: false, // 视频
      audio: false, // 音频
      img: '', // 图片
      src: '', // 图片src
      ppt: false, // ppt
      path: '' // pptid
    }
  },
  created: function () {
    let _this = this
    let fileId = this.fileId
    let storage = window.localStorage
    storage['access_token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NzkwOTQiLCJleHAiOjE1MzA1MDQ1OTksInVpZCI6NTc5MDk0LCJraWQiOm51bGwsIm5hbWUiOiLpn6nmooXmooUiLCJ0eXAiOiJhY2MiLCJwaWQiOiJVNTc5MDk0UzI0UjEiLCJyaWQiOjEsImF1cyI6WyJST0xFX0FVVEhFRCIsIlJPTEVfU1RVREVOVCJdLCJzaWQiOjI0fQ.a41J1Uu_sIKgRy_kPOKVIBchSbWNhaTFcTmnvwW1pkY'
    /* 绑定esc键盘事件 */
    document.onkeydown = function (ev) {
      if (ev.keyCode === 27) {
        _this.exitFullScreen()
      }
    }
    /* 渲染数据 */
    _this.getDocData(fileId)
  },
  components: {
    Img: img,
    Doc: doc,
    Ppt: ppt,
    Video: video
  },
  methods: {
    // 拉取数据
    getDocData: function (fileid) {
      let timer = ''
      let sum = 0
      var _this = this

      // 状态，0：等待中，1：转换中，2：转换成功，3：转换失败

      timer = setInterval(function () {
        sum++
        axios.get(`http://api.yunguiedu.com/file/apidoc/files/${fileid}`).then(res => {
          if (res) {
            if (res.data.status === 2) {
              if (!res.data.progress) {
                _this.analyzeData(res.data)
                _this.loadend = true
                clearInterval(timer)
              } else if (res.data.progress === 100) {
                _this.analyzeData(res.data)
                _this.loadend = true
                clearInterval(timer)
              }
            } else if (res.data.status === 1) {

            } else if (res.data.status === 0) {

            } else {

            }
          } else {

          }
        })
      }, 1000)
      if (sum >= 30) {
        clearInterval(timer)
      }
    },
    // 数据分析
    analyzeData: function (data) {
      switch (data.type) {
        case 'video':
          this.$data.video = true
          this.$data.filedata.src = data.src
          this.$data.filedata.poster = data.poster
          break
        case 'audio':
          this.$data.video = true
          this.$data.filedata.src = data.src
          this.$data.filedata.poster = data.poster
          break
        case 'ppt':
          this.$data.ppt = true
          this.$data.path = data.path
          break
        case 'img':
          this.$data.img = true
          this.$data.src = data.src
          break
        default:
          this.$data.doc = true
          this.$data.pages = data.pages
          break
      }
    },
    // 全屏事件
    fullscreen: function (ev) {
      let _this = this
      _this.$data.clicked = !_this.$data.clicked
      ev.stopPropagation()
      ev.preventDefault()
    },
    // 退出全屏
    exitFullScreen: function (ev) {
      this.$data.clicked = false
    },
    // 暴露方法
    seekTo: function (i) {

    }
  }
}
</script>
<style>
  /*@import "../assets/viewer.css";*/
</style>
