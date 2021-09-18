<template>
  <div>
    <Switch :value="isOpen" v-model:value="isOpen"/>
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup(){
    const isOpen = ref(false)
    return {isOpen}
  }
};

</script>
