<template>
  <div>
    <i class="iconfont icon-hanbaobao hamburger" 
      :class="{'is-active':isActive}"
      @click="toggleClick">
    </i>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
	cursor: pointer;
	transform: rotate(0deg);
	transition: .38s;
	transform-origin: 50% 50%;
  user-select: none;
}

.hamburger.is-active {
	transform: rotate(90deg);
}
</style>


