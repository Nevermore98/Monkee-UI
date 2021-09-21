<template>
  <div class="monkee-tabs">
    <div ref="navWrapper" class="monkee-tabs-nav">
      <div v-for="(title, index) in titles"
           :key="index"
           :ref="el => { if (title===selected) selectedItem = el }"
           :class="{selected: title=== selected}"
           class="monkee-tabs-nav-item"
           @click="select(title)">{{ title }}
      </div>
      <div ref="indicator" class="monkee-tabs-nav-indicator"></div>
    </div>

    <div class="monkee-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, computed, onMounted, ref, watchEffect} from 'vue';
import Tab from './Tab.vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement | null>(null);
    const indicator = ref<HTMLDivElement | null>(null);
    const navWrapper = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      watchEffect(() => {
        if (selectedItem.value && indicator.value && navWrapper.value) {
          const {
            width
          } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          const {
            left: left1
          } = navWrapper.value.getBoundingClientRect();
          const {
            left: left2
          } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + 'px';
        }
      });
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      navWrapper
    };
  }
};
</script>

<style lang="scss">
$blue: #0066FF;
$font-color: #333;
$border-color: #d9d9d9;
$background-color: white;
$radius: 4px;
.monkee-tabs {
  &-nav {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: $font-color;
    border-bottom: 1px solid $border-color;
    background-color: $background-color;
    border-top-right-radius: $radius;
    border-top-left-radius: $radius;


    &-item {
      min-width: 30px;
      padding: 8px 0;
      cursor: pointer;
      white-space: nowrap;

      &.selected {
        font-weight: bold;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 16px 16px;
    min-height: 150px;
    background-color: $background-color;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;

  }
}
</style>
