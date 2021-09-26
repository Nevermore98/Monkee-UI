<template>
  <div class="card">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="card-component">
      <component :is="component" />
    </div>
    <div class="card-actions">
      <Button size="small">查看代码</Button>
    </div>
    <div class="card-code">
        <pre class="language-html"
             v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'HTML')" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism-customXMY.css'
const Prism = (window as any).Prism
export default {
  components: {Button},
  props: {
    component: Object
  },
  setup() {
    return {
      Prism
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.card {
  background-color: white;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;

  > h2 {
    font-size: 20px;
    padding: 6px 0;
  }

  &-component {
    padding: 6px 0;
  }

  &-actions {
    padding-top: 10px;
  }

  &-code {

    > pre {
      line-height: 1.5;
      font-family: "Source Code Pro","Monaco","Inconsolata",monospace;
      margin: 0;
    }
  }
}
</style>
