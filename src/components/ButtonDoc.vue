<template>
  <h3>按钮类型</h3>
  <div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="link">链接按钮</Button>
    <Button type="text">文本按钮</Button>
  </div>

  <h3>按钮尺寸</h3>
  <div>
    <Button size="large" type="primary">大号按钮</Button>
    <Button type="primary">普通按钮</Button>
    <Button size="small" type="primary">小号按钮</Button>
    <Button size="mini" type="primary">迷你按钮</Button>
  </div>
  <div>

  </div>
  <h3>禁用状态</h3>
  <div>
    <Button disabled>禁用状态</Button>
    <Button disabled type="primary">禁用状态</Button>

  </div>

  <h3>加载状态</h3>
  <div>
    <Button loading >加载中</Button>
    <Button loading type="primary">加载中</Button>
  </div>

</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {

    };
    return {onClick};
  }
};
</script>
