<template>
  <h1>Dialog 弹出框</h1>
  <Demo :component="DialogDemo1"/>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import Demo from '../Demo.vue';
import DialogDemo1 from './DialogDemo1.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button, Demo},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {

    };
    return {
      x, toggle, f1, f2, DialogDemo1
    };
  }
};
</script>
