<template>
  <div>
    <button @click="toggle" :class="{checked}">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {checked, toggle};
  }
};
</script>

<style lang="scss" scoped>
$buttonHeight: 26px;
$circleHeight: $buttonHeight - 4px;
button {
  height: $buttonHeight;
  width: $buttonHeight*2;
  border: none;
  background: #969696;
  border-radius: $buttonHeight/2;
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $circleHeight;
  width: $circleHeight;
  background: white;
  border-radius: $circleHeight / 2;
  transition: left 250ms;
}
button.checked{
  background: #0066FF;
}

button.checked > span {
  left: calc(100% - #{$circleHeight} - 2px);
}

button:focus{
  outline: none;
}
</style>
