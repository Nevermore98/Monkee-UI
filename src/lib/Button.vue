<template>
  <button :class="`monkee-theme-${theme}`"
          class="monkee-button"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style lang="scss">
$button-height: 32px;
$border-color: #d9d9d9;
$font-color: #333;
$blue: #0066FF;
$radius: 4px;

.monkee-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $button-height;
  padding: 0 12px;
  color: $font-color;
  background: white;
  border: 1px solid $border-color;
  border-radius: $radius;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
