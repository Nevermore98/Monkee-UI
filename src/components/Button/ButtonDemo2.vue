<demo>
按钮尺寸
</demo>
<template>
  <Button size="large" type="primary">大号按钮</Button>
  <Button type="primary">普通按钮</Button>
  <Button size="small" type="primary">小号按钮</Button>
  <Button size="mini" type="primary">迷你按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {
    Button
  }
};
</script>
