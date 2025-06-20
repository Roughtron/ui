<script setup lang="ts">
import { computed } from 'vue';
import { XSvgIcon } from '@general/XSvgIcon'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v: string) => ['default', 'filled'].includes(v),
  },
  icon: {
    type: String,
  },
  iconProps: {
    type: Object,
    default: () => ({}),
  },
  active: Boolean,
  disabled: Boolean,
  block: Boolean,
});

const classes = computed(() => [
  'x-mark',
  `x-mark--${props.variant}`,
  {
    'x-mark--active': props.active,
    'x-mark--disabled': props.disabled,
    'x-mark--block': props.block,
  },
]);
</script>

<template>
  <div :class="classes">
    <div
      v-if="icon"
      class="x-mark__img"
    >
      <x-svg-icon
        :name="icon"
        v-bind="iconProps"
      />
    </div>
    <div class="x-mark__text">
      <slot />
    </div>
    <div class="x-mark__border" />
  </div>
</template>

<style scoped>
.x-mark {
  position: relative;
  display: inline-flex;
  width: max-content;
  background-color: transparent;
  border-radius: var(--border-radius-2x);
  cursor: pointer;
  box-sizing: border-box;
}

.x-mark__border {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-secondary);
  border-radius: var(--border-radius-2x);
  pointer-events: none;
  transition: border-color .15s;
}

.x-mark__img {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: calc(var(--space) * 8);;
  height: calc(var(--space) * 8);
  padding: calc(var(--space) * 2);
  background: var(--content-background);
  border-radius: var(--border-radius-2x) 0 0 var(--border-radius-2x);
}

.x-mark__text {
  align-self: center;
  padding: calc(var(--space) * 2) calc(var(--space) * 3);
  font-family: var(--font);
  font-size: var(--text);
  line-height: 1.143;
  color: var(--white-40);
}

.x-mark.x-mark--active .x-mark__text {
  color: var(--white);
}

.x-mark:hover:not(.x-mark--active) .x-mark__text {
  color: var(--white-60);
}

.x-mark:hover:not(.x-mark--active) .x-mark__border {
  border: 1px solid #a3a3a3;
}

.x-mark .x-mark__img ~ .x-mark__text {
  padding-left: calc(var(--space) * 2);
}

.x-mark--disabled {
  color: var(--secondary-disabled);
  pointer-events: none;
}

.x-mark--active .x-mark__border {
  border: 1.5px solid var(--primary);
}

.x-mark--block {
  display: block;
  width: 100%;
}

.x-mark + .x-mark {
  margin-left: calc(var(--space) * 2.5);
}

.x-mark--filled .x-mark__text {
  padding: calc(var(--space) * 2) calc(var(--space) * 4);
  color: var(--gray-200);
  background-color: var(--secondary-content-background);
  border-radius: var(--border-radius-8x);
}

.x-mark--filled .x-mark__border,
.x-mark.x-mark--filled:hover:not(.x-mark--active) .x-mark__border,
.x-mark--filled .x-mark--active .x-mark__border {
  border-color: transparent;
  border-radius: var(--border-radius-8x);
}

.x-mark.x-mark--filled:hover:not(.x-mark--active) .x-mark__text {
  color: var(--white);
}

.x-mark.x-mark--filled.x-mark--active {
  color: var(--primary-black);
}

.x-mark.x-mark--filled.x-mark--active .x-mark__text {
  padding: calc(var(--space) * 2) calc(var(--space) * 4);
  color: var(--primary-black);
  background-color: var(--primary);
}
</style>
