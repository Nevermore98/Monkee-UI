<template>
  <div>
    <h1>Switch 开关</h1>

    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </div>
</template>
<script lang="ts">
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
import Demo from '../Demo.vue';

const Prism = (window as any).Prism;

export default {
  components: {Demo},
  setup() {
    return {SwitchDemo1, SwitchDemo2, Prism};
  }
};

</script>
