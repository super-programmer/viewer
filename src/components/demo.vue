<template>
  <div>
    <viewer :fileId="fileId"  @closeSet="closeSet" ></viewer>
  </div>
</template>

<script>
// import viewer from './viewer'

export default {
  name: 'demo',
  data () {
    return {
      // fileId: '289912f7c122630fd98b5c27a87e7569mp4961ced' // 视频
      // fileId: 'd28fa4966681f3f60a9468deb9dc9215flv1ac9210' // 视频
      // fileId: 'c587b2ae091d21f952b907eee2a29103mp472eb52'
      // fileId: 'c9bec7efdd2b34d23dcfdfecb6eee3e1jpg1dc50'
      // fileId: '7d017a9cd2eec51cd0c7086b89610c45ppt52600' // ppt
      // fileId: 'e81a39cd636d1022cb61bcbb45db10f1docxf99f' // 文档
      fileId: 'd74394e7a61c2dd243bba61a5a1583ffmp448f9359' // 文档
    }
  },
  mounted: function () {
  },
  methods: {
    closeSet: function (value) {
    }
  },
  components: {
    // viewer: viewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
