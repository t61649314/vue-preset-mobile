<template>
  <div class="demo">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/demo">Demo</router-link>
    </nav>
    <ul>
      <% if (bestPractices.includes('1')) { %>
      <li>
        <router-link to="/demo1">Safari浏览器修复100vh</router-link>
      </li>
      <% } %>
      <% if (bestPractices.includes('2')) { %>
      <li>
        <router-link to="/demo2">模拟实现0.5px的线</router-link>
      </li>
      <% } %>
      <% if (bestPractices.includes('3')) { %>
      <li>
        <router-link to="/demo3">模拟实现小于12px的字</router-link>
      </li>
      <% } %>
      <% if (bestPractices.includes('4')) { %>
      <li>
        <router-link to="/demo4">测试吸底组件</router-link>
      </li>
      <% } %>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DemoView',
  data() {
    return {
      value: '',
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.demo {
  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: 40px 0;
      a {
        font-weight: bold;
        color: #42b983;
      }
    }
  }
}
</style>
