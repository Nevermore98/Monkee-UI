<template>
  <div class="card">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="card-component">
      <component :is="component"/>
    </div>
    <div class="card-actions">
      <Button size="small" @click="toggleCode">查看代码</Button>
    </div>
    <div v-if="codeVisible" class="card-code">
        <pre class="language-html"
             v-html="html"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism-custom.css'
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;
export default {
  components: {Button},
  props: {
    component: Object
  },
  setup(props) {
    const codeVisible = ref(false);
    const toggleCode = () => codeVisible.value = !codeVisible.value;
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    return {
      Prism, codeVisible, toggleCode, html
    };
  }
};
</script>

<style lang="scss">
$border-color: #d9d9d9;

.card {
  background-color: white;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;

  @media (max-width: 500px) {
    padding: 12px;
  }

  > h2 {
    font-size: 20px;
    padding: 6px 0;
  }

  &-component {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 6px 0;

    .monkee-button {
      margin: 0 10px 12px 0;
    }
  }
  &-actions {
    margin-bottom: 10px;

    .monkee-button {
      display: block;
      margin-left: auto;
    }
  }

  &-code {

    > pre {
      line-height: 1.5;
      font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
      margin: 0;
    }
  }
}
</style>
