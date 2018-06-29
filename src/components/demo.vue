<template>
  <div>
    <viwer :fileId="fileId"></viwer>
  </div>
</template>

<script>
  import viwer from './viwer'
export default {
  name: 'demo',
  data () {
    return {
      fileId:222
    }
  },
  components:{
    viwer:viwer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
