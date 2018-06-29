<template>
  <div :class="clicked ? 'iframe-box iframe-box--fullscreen' : 'iframe-box'" id="firame">
    <iframe v-bind:src="src"></iframe>
  </div>
</template>
<script>
  export default {
    name: "ppt",
    props: ['fileid'],
    data() {
      return {
        clicked: false,
        src:`http://192.168.10.14/download/demo/ppt/index.html?fileid=${this.fileid}`
      }
    },
    mounted(){
      var _this = this;
      window.addEventListener("message",function(e){
        if('fullscreen' === e.data){
          _this.fullscreen();
        }else if('exitfullscreen' === e.data){
          _this.exitFullScreen();
        }
      },false);
    },
    methods: {
      //全屏事件
      fullscreen: function (ev) {
        this.$data.clicked = !this.$data.clicked;
      },
      //退出全屏
      exitFullScreen: function (ev) {
        console.log(this.$data.clicked)
      },
    }
  }
</script>

<style scoped>

</style>
