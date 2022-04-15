<template>
  <div class="fixed-bottom" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FixedBottom',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    watchResize() {
      const screenHeight = document.documentElement.clientHeight;
      this.show = screenHeight >= this.originalHeight;
      // 解决输入框被弹起的键盘遮挡的问题，部分较老的浏览器才需要
      if (
        document.activeElement.tagName === 'INPUT'
        || document.activeElement.tagName === 'TEXTAREA'
      ) {
        window.setTimeout(() => {
          document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    },
  },
  mounted() {
    this.originalHeight = document.documentElement.clientHeight;
    window.addEventListener('resize', this.watchResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.watchResize);
  },
};
</script>

<style scoped lang="less">
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
}

@supports (padding-bottom: constant(safe-area-inset-bottom)) or
 (padding-bottom: env(safe-area-inset-bottom)) {
  .fixed-bottom {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
