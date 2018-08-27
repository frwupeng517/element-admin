<template>
    <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
      <i class="iconfont icon-quanping screenfull"
        :style="{'width': width+'px', 'height': height+'px', 'color': fill}"
        @click="toggleFull()">
      </i>
    </el-tooltip>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'screenfull',
  props: {
    fill: {
      type: String,
      default: '#48576a'
    },
    width: {
      type: Number,
      default: 22
    },
    height: {
      type: Number,
      default: 22
    }
  },
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
    toggleFull() {
      if(screenfull.enabled) {
        screenfull.toggle()
      } else{
        this.$message({
          message: 'your browser can not work',
          type: 'warning'
        })
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .screenfull-container{
//   height: 22px;
// }
// .screenfull {
//   display: inline-block;
//   cursor: pointer;
//   vertical-align: -0.15em;
//   line-height: 22px;
// }
</style>


