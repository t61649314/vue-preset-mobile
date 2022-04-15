<template>
  <div class="demo4">
    <div class="placeholder">
    </div>
    <div>
      输入框获取焦点时，吸底按钮在安卓手机上隐藏
    </div>
    <van-cell-group inset>
      <van-field v-model="value" label="用户名" placeholder="请输入用户名"/>
    </van-cell-group>
    测试底部文字是否被遮挡测试底部文字是否被遮挡测试底部文字是否被遮挡测试底部文字是否被遮挡
    测试底部文字是否被遮挡测试底部文字是否被遮挡测试底部文字是否被遮挡
    <FixedBottom>
      <div class="footer">
        <van-button block type="primary">吸底按钮</van-button>
      </div>
    </FixedBottom>
  </div>
</template>

<script>
import { Button, CellGroup, Field } from 'vant';
import FixedBottom from '@/components/FixedBottom.vue';

export default {
  components: {
    FixedBottom,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.demo4 {
  text-align: left;
  padding-bottom: 130px;

  .placeholder {
    height: 80vh;
  }

  .footer {
    height: 130px;
    padding: 20px;
    border: 1px solid #ddd;
  }
}
</style>
