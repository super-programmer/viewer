<template>
  <div>
    <viewer :fileId="fileId" ref="mychild"></viewer>
  </div>
</template>

<script>
// import viewer from './viewer'

export default {
  name: 'demo',
  data () {
    return {
      fileId: '289912f7c122630fd98b5c27a87e7569mp4961ced'
      // fileId: 'c587b2ae091d21f952b907eee2a29103mp472eb52'
      // fileId: 'c9bec7efdd2b34d23dcfdfecb6eee3e1jpg1dc50'
      // fileId: 'e81a39cd636d1022cb61bcbb45db10f1docxf99f'
    }
  },
  mounted: function () {
    this.seekTo()
  },
  methods: {
    seekTo () {
      this.$refs.mychild.seekTo('嘿嘿嘿')
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
