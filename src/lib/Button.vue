<template>
  <button :class="classes"
          :disabled="disabled"
          class="monkee-button"
  >
    <span v-if="loading" class="monkee-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {type, size} = props;
    const classes = computed(() => {
      return {
        [`monkee-type-${type}`]: type,
        [`monkee-size-${size}`]: size,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$font-size-mini: 12px;
$font-size-small: 14px;
$font-size-default: 16px;
$font-size-large: 18px;

$button-default-background-color: white;
$button-primary-background-color: lightgreen;
$button-info-background-color: skyblue;
$button-danger-background-color: orangered;
$button-warning-background-color: #FFFF33;

$button-default-border-color: white;
$button-primary-border-color: lightgreen;
$button-info-border-color: skyblue;
$button-danger-border-color: orangered;
$button-warning-border-color: #FFFF33;

$button-mini-height: 24px;
$button-small-height: 32px;
$button-default-height: 44px;
$button-large-height: 50px;

$border-color: #d9d9d9;
$font-color: #333;
$blue: #0066FF;
$radius: 4px;
$disable-opacity: 0.5;

.monkee-button {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $button-default-height;
  padding: 0 16px;
  color: $font-color;
  background-color: white;
  border: 1px solid $border-color;
  border-radius: $radius;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;

  &:hover,
  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: 1px solid #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    content: '';
  }

  &:active::before {
    opacity: 0.1;
  }

  &.monkee-type-primary {
    background-color: $button-primary-background-color;
    border-color: $button-primary-border-color;
  }

  &.monkee-type-info {
    background-color: $button-info-background-color;
    border-color: $button-info-border-color;
  }

  &.monkee-type-danger {
    background-color: $button-danger-background-color;
    border-color: $button-danger-background-color;
  }

  &.monkee-type-warning {
    background-color: $button-warning-background-color;
    border-color: $button-warning-border-color;
  }

  &.monkee-type-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background-color: inherit;
  }

  &.monkee-type-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background-color: inherit;
  }

  &.monkee-size-large {
    font-size: $font-size-large;
    height: $button-large-height;
    width: 100%;
  }

  &.monkee-size-small {
    font-size: $font-size-small;
    height: $button-small-height;
    padding: 0 8px;
  }

  &.monkee-size-mini {
    font-size: $font-size-mini;
    height: $button-mini-height;
    padding: 0 4px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: $disable-opacity;
  }

  > .monkee-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: loading 1s infinite linear;
  }
}

@keyframes loading {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>
