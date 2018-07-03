<template>
  <div>
    <viewer :fileId="fileId" ref="mychild"></viewer>
  </div>
</template>

<script>
// import viewer from '../../lib/ygui-viewer.min'
// import viewer from './viewer'

export default {
  name: 'demo',
  data () {
    return {
      fileId: 'c7dfc8c4c484de317d58b1753aa87cc0ppt4c400'
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
