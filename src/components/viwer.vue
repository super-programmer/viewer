<template>
  <div :class="clicked ? 'fileBox fileBox--fullscreen' : 'fileBox'" id="fullbox" @click="exitFullScreen">
    <div class="filebox-con" :style="video ? 'overflow:hidden;' : ''">
      <Doc v-if="doc" :pages="pages"></Doc>
      <Ppt v-if="ppt" :fileid="fileid"></Ppt>
      <Video v-if="video" :filedata="filedata"></Video>
        <transition name="fade">
          <div class="file--loading" v-if="!loadend"></div>
        </transition>
  </div>
  <i class="file-btn-fullscreen" @click="fullscreen" v-if="doc"></i>
  <div class="f-scrollbox">
    <div class="f-scrollbar"></div>
  </div>
  </div>

</template>
<script>
  import axios from 'axios'
  import doc from './doc.vue'
  import ppt from './ppt.vue'
  import video from './video.vue'
  export default {
    name: 'viewer',
    props:['fileId'],
    data() {
      return {
        filedata: {
          src: '',
          poster: '',
        },                             //多媒体数据
        loadend: false,                //下载完成表示
        clicked: false,
        fileid: "YzpcMS5wcHR4",
        doc: false,
        pages: '',
        video: false,
        audio: false,
        ppt: false,


        src: '',
      }
    },
    created: function () {
      let _this = this;
      let fileId = this.fileId;
      _this.getDocData(fileId);
      document.onkeydown = function(ev){
        if(ev.keyCode == 27){
          _this.exitFullScreen();
        }
      }
    },
    components: {
      Doc: doc,
      Ppt: ppt,
      Video: video
    },
    methods: {
      //拉取数据
      getDocData: function (fileid) {
        let timer = '';
        let sum = 0;
        var _this = this;
        timer = setInterval(function () {
          sum++;
          axios.get('/static/tsconfig.json').then(res => {
            if (res && res.data.success) {
              if (res.data.datas.progress == 100) {
                _this.analyzeData(res.data.datas);
                _this.loadend = true;
                clearInterval(timer);
                return;
              }
            }
          })
        }, 1000);
        if (sum >= 30) {
          clearInterval(timer);
          return;
        }
      },
      //数据分析
      analyzeData: function (data) {
        switch (data.ext) {
          case 'video':
            this.$data.video = true;
            this.$data.filedata.src = data.src;
            this.$data.filedata.poster = data.poster;
            break;
          case 'audio':
            this.$data.video = true;
            this.$data.filedata.src = data.src;
            this.$data.filedata.poster = data.poster;
            break;
          case 'ppt':
            this.$data.ppt = true;
            this.$data.fileid = data.id;
            break;
          default:
            this.$data.doc = true;
            this.$data.pages = data.pages;
            break;
        }
      },
      //全屏事件
      fullscreen: function (ev) {
        let _this = this;
        _this.$data.clicked = !_this.$data.clicked;
        ev.stopPropagation();
        ev.preventDefault();
      },
      //退出全屏
      exitFullScreen: function (ev) {
        this.$data.clicked = false;
      },
    }
  }
</script>

<style scoped>

</style>
