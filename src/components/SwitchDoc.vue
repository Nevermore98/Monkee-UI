<template>
  <div>
    <h1>Switch 开关</h1>

    <div class="card demo">
      <Demo :component="SwitchDemo1"/>
      <Demo :component="SwitchDemo2"/>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
import {ref} from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-customXMY.css'
import Demo from './Demo.vue';
const Prism = (window as any).Prism

export default {
  components: {Demo, Button},
  setup() {
    const isOpen = ref(false);
    return {isOpen,SwitchDemo1, SwitchDemo2,Prism};
  }
};

</script>
<!--<style lang="scss" scoped>-->
<!--$border-color: #d9d9d9;-->
<!--.card {-->
<!--  background-color: white;-->
<!--  padding: 24px;-->
<!--  margin-bottom: 24px;-->
<!--  border-radius: 20px;-->
<!--  box-shadow: 0 8px 12px #ebedf0;-->

<!--  > h2 {-->
<!--    font-size: 20px;-->
<!--    padding: 6px 0;-->
<!--  }-->

<!--  &-component {-->
<!--    padding: 6px 0;-->
<!--  }-->

<!--  &-actions {-->
<!--    padding-top: 10px;-->
<!--  }-->

<!--  &-code {-->

<!--    > pre {-->
<!--      line-height: 1.5;-->
<!--      font-family: "Source Code Pro","Monaco","Inconsolata",monospace;-->
<!--      margin: 0;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
