<script setup lang="ts">
import { PropType } from 'vue';
import type { Component } from 'vue';

defineOptions({
  inheritAttrs: false,
});

defineProps({
  show: Boolean,
  component: {
    type: Object as PropType<Component | null>,
    default: null,
  },
});
</script>

<template>
  <transition
    name="x-dialog-overlay-fade"
    mode="out-in"
    appear
  >
    <div
      v-if="show"
      class="x-dialog-overlay"
    >
      <transition
        name="x-dialog-fade"
        mode="out-in"
        appear
      >
        <keep-alive v-if="show">
          <suspense>
            <component
              v-if="component"
              :is="component"
              :key="component.name"
            />
          </suspense>
        </keep-alive>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.x-dialog-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100vw;
  height: 100vh;
  padding: calc(var(--space) * 12) 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(14, 17, 22, 0.4);
  overscroll-behavior: contain;
  backdrop-filter: blur(5px);
}

.x-dialog-overlay-fade-enter-active,
.x-dialog-overlay-fade-leave-active {
  transition: opacity .25s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.x-dialog-overlay-fade-enter,
.x-dialog-overlay-fade-leave-to {
  opacity: 0;
}

.x-dialog-fade-enter-active,
.x-dialog-fade-leave-active {
  transition: transform .25s cubic-bezier(0.25, 0.8, 0.5, 1), opacity .25s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.x-dialog-fade-enter,
.x-dialog-fade-leave-to {
  opacity: 0;
  transform: scale(.4);
}
</style>
