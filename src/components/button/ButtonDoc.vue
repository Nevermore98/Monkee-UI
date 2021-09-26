<template>
  <h1>Button 按钮</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import ButtonDemo1 from './ButtonDemo1.vue';
import ButtonDemo2 from './ButtonDemo2.vue';
import ButtonDemo3 from './ButtonDemo3.vue';
import ButtonDemo4 from './ButtonDemo4.vue';


export default {
  components: {Demo},
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
    };
  }
};
</script>
