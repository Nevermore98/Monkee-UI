<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="monkee-dialog-mask" @click="onClickMask"></div>
      <div class="monkee-dialog-wrapper">
        <div class="monkee-dialog">
          <header>
            <slot name="title"/>
            <span class="monkee-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button type="info" @click="ok">确认</Button>
            <Button @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    canClickMaskToClose: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };

    const onClickMask = () => {
      if (props.canClickMaskToClose) {
        close();
      }
    };

    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };

    const cancel = () => {
      context.emit('cancel');
      close();
    };

    return {
      close, onClickMask, ok, cancel
    };
  }
};
</script>

<style lang="scss">
$radius: 16px;
$border-color: #d9d9d9;
.monkee-dialog {
  background: white;
  border-radius: $radius;
  min-width: 20em;
  max-width: 80%;

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }

  > main {
    padding: 16px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
