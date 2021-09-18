<template>
  <div>
    <button :class="{checked:value}" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
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

button.checked {
  background: #0066FF;
}

button.checked > span {
  left: calc(100% - #{$circleHeight} - 2px);
}

button:focus {
  outline: none;
}
</style>
