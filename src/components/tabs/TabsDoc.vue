<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="TabsDemo1" />
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import TabsDemo1 from './TabsDemo1.vue';

export default {
  components: {
    Demo
  },
  setup(){
    return {
      TabsDemo1
    }
  }
}
</script>
<style lang="scss">
.card-component{
  display: block;
}
</style>
