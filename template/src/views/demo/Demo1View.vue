<template>
  <div class="demo1">
    <div class="vh100">处理前</div>
    <div class="vh100-fixed">处理后</div>
  </div>
</template>

<script>

export default {
  mounted() {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.demo1 {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  color: white;

  .vh100 {
    height: 100vh;
    width: 100px;
    background: red;
  }

  .vh100-fixed {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100px;
    background: red;
  }
}
</style>
