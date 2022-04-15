<template>
  <div class="demo3">
    <span class="font-size-10">10px的字</span>
    <span class="font-size-8">8px的字</span>
    <span class="font-size-6">6px的字</span>
    <span class="font-size-4">4px的字</span>
    <span class="font-size-2">2px的字</span>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../styles/mixins/small-font.less";

.demo3 {
  padding: 30px;

  .font-size-10 {
    .small-font(20);
  }

  .font-size-8 {
    .small-font(16);
  }

  .font-size-6 {
    .small-font(12);
  }

  .font-size-4 {
    .small-font(8);
  }

  .font-size-2 {
    .small-font(4);
  }

}
</style>
