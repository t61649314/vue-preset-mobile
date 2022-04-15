<template>
  <div class="demo2">
    <div class="hairline-left"></div>
    <div class="hairline-top"></div>
    <div class="hairlines"></div>
    <div class="hairlines-radius"></div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../styles/mixins/hairline.less";

.demo2 {
  padding: 30px;
  display: flex;
  justify-content: space-around;

  div {
    width: 100px;
    height: 100px;
  }

  .hairlines-radius {
    .hairline(red, @border-radius:20px)
  }

  .hairline-top {
    .hairline(red, top)
  }

  .hairline-left {
    .hairline(red, left)
  }

  .hairlines {
    .hairline(red)
  }
}
</style>
