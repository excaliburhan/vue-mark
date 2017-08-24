<template>
<div class="xp-mark">
  <slot></slot>
  <sup
    v-show="!hidden && (content || isDot)"
    class="xp-mark__content" :class="{ 'is-dot': isDot }"
  >{{ content }}</sup>
</div>
</template>

<script>
export default {
  name: 'xp-mark',
  props: {
    value: '',
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
  },
  computed: {
    content () {
      if (this.isDot) return
      const value = this.value
      const max = this.max

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }

      return value
    }
  },
}
</script>

<style lang="scss" scoped>
.xp-mark {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  &__content {
    position: absolute;
    top: 0;
    right: 10px;
    display: inline-block;
    transform: translateY(-50%) translateX(100%);
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    background-color: #ff4949;
    border: 1px solid #fff;
    border-radius: 10px;
    &.is-dot {
      width: 8px;
      height: 8px;
      padding: 0;
      right: 5px;
      border-radius: 50%;
    }
  }
}
</style>
