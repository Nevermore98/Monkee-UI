<template>
  <article class="markdown-body card" v-html="content">
  </article>
</template>

<script lang="ts">
import {
  ref
} from 'vue';

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.path).then(result => {
      content.value = result.default;
    });
    return {
      content
    };
  }
};
</script>
<style lang="scss">
.card {
  background-color: white;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;

  @media (max-width: 500px) {
    padding: 12px;
  }

  h1 {
    margin: 0 0 6px;
    font-weight: normal !important;
    border-bottom: none !important;
  }

  > h2 {
    font-size: 20px;
    padding: 6px 0;
    border-bottom: none !important;
  }
}
</style>
