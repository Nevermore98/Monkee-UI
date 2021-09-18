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
$button-height: 26px;
$circle-height: $button-height - 4px;

button {
  position: relative;
  height: $button-height;
  width: $button-height*2;
  background: #969696;
  border: none;
  border-radius: $button-height/2;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $circle-height;
    width: $circle-height;
    background: white;
    border-radius: $circle-height / 2;
    transition: left 250ms;
  }

  &.checked {
    background: #0066FF;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $circle-height + 6px;
    }
  }

  &.checked:active {
    > span {
      margin-left: -6px;
      width: $circle-height + 6px;
    }
  }

  &.checked > span {
    left: calc(100% - #{$circle-height} - 2px);
  }
}


</style>
