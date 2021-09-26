<demo>
常规用法
</demo>
<template>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="link">链接按钮</Button>
  <Button type="text">文本按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {
    Button
  }
};
</script>
