<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="monkee-dialog-mask" @click="onClickMask"></div>
      <div class="monkee-dialog-wrapper">
        <div class="monkee-dialog">
          <header>
            <slot name="title"/>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button size="large" class="hairline-top hairline-right" type="text" @click="cancel">取消</Button>
            <Button size="large" class="hairline-top" type="text" @click="ok">确认</Button>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }

  > main {
    padding: 16px 16px;
  }

  > footer {
    display: flex;
    justify-content: space-around;
    .monkee-button::before {
      border: none;
    }

    :nth-child(1){
      border: none;
      flex-grow: 1;
      border-radius: 0 0 0 $radius;
    }
    :nth-child(2){
      border: none;

      flex-grow: 1;
      color: orangered;
      border-radius: 0 0 $radius 0;
    }

    .hairline-border {
      padding: 1rem;
      box-shadow: 0 0 0 1px #ebedf0;
    }
    //.monkee-button {
    //  background-color: white;
    //  border-radius: $radius;
    //}

  }
  .hairline,
  .hairline-top,
  .hairline-right,
  .hairline-bottom,
  .hairline-left {
    position: relative;
  }
  .hairline-top::after {
    content: ' ';
    transform: scale(0.5);
    position: absolute;
    left: -50%;
    right: -50%;
    top: -50%;
    bottom: -50%;
    border-top: 1px solid #ebedf0;
  }
  .hairline-right::after {
    content: ' ';
    transform: scale(0.5);
    position: absolute;
    left: -50%;
    right: -50%;
    top: -50%;
    bottom: -50%;
    border-right: 1px solid #ebedf0;
  }
}
</style>
