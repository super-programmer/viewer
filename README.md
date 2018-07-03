# viewer

> 课件预览插件

## Install

npm install viewer --save

## Usage

```
import viewer from 'viewer'
import 'viewer/src/assets/viewer.css'
Vue.use(viewer)

```
```
<template>
  <div>
    <viewer :fileId="fileId" ref="mychild"></viewer>
  </div>
</template>
<script>
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
      this.$refs.mychild.seekTo(200)
    }
  },
  components: {

  }
}
</script>
<style scoped>
</style>

```

## Attributes

参数 | 说明 | 类型 | 是否必须 | 默认值
--- | --- | --- | --- | ---
fileId | 文件id | string | 是 | 无


## 初始化函数说明

记录轨迹参数i是number类型

seekTo(i)

##




