<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="isOpen" />
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}
</script>
