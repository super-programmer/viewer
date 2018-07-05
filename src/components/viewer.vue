<template>
  <div :class="clicked ? 'fileBox fileBox--fullscreen' : 'fileBox'" id="fullbox" @click="exitFullScreen">
    <div class="filebox-con" :style="video ? 'overflow:hidden;' : ''">
      <Img v-if="img" :src="src"></Img>
      <Doc v-if="doc" :pages="pages"></Doc>
      <Ppt v-if="ppt" :path="path"></Ppt>
      <Video v-if="video" :filedata="filedata"></Video>
      <div class="filebox-tips" v-if="tipsflag">
        {{tips}}
      </div>
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
        type: '',
        src: '',
        name: '',
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
      path: '', // pptid
      timer: '', // 轮询定时器
      tipsflag: false, // 提示语开关
      tips: '' // 提示语
    }
  },
  created: function () {
    let _this = this
    let fileId = this.fileId

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
      var _this = this
      // 状态，0：等待中，1：转换中，2：转换成功，3：转换失败
      axios.get(`http://api.yunguiedu.com/file/files/${fileid}`).then(res => {
        if (res) {
          if (res.data.status === 2) {
            _this.$data.tipsflag = false
            _this.analyzeData(res.data)
            _this.loadend = true
            clearInterval(_this.$data.timer)
          } else if (res.data.status === 1) {
            _this.$data.tipsflag = true
            _this.$data.tips = '转换中'
            clearInterval(_this.$data.timer)
          } else if (res.data.status === 0) {
            _this.$data.tipsflag = true
            _this.$data.tips = '等待中'
            clearInterval(_this.$data.timer)
          } else {
            _this.$data.tipsflag = true
            _this.$data.tips = '转换失败'
            clearInterval(_this.$data.timer)
          }
        } else {

        }
      })
    },
    // 数据分析
    analyzeData: function (data) {
      switch (data.type) {
        case 'video':
          this.$data.video = true
          this.$data.filedata.type = data.ext
          this.$data.filedata.src = data.src
          this.$data.filedata.name = data.name
          this.$data.filedata.poster = data.poster
          break
        case 'audio':
          this.$data.video = true
          this.$data.filedata.type = data.ext
          this.$data.filedata.src = data.src
          this.$data.filedata.name = data.name
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
