<script setup lang="ts">
import { computed } from 'vue';
import { XSvgIcon } from '@general/XSvgIcon';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'gray'].includes(v),
  },
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['s'].includes(v),
  },
  prependIcon: {
    type: String,
    default: '',
  },
  outline: Boolean,
  closable: Boolean,
  truncate: Boolean,
});

const emit = defineEmits<{
  (e: 'close'): void,
}>();

const classes = computed(() => [
  'x-tag',
  'x-tag--' + props.color,
  'x-tag--size-' + props.size,
  {
    'x-tag--outline': props.outline,
    'x-tag--truncate': props.truncate,
  },
]);

const onCloseClick = () => emit('close');
</script>

<template>
  <div :class="classes">
    <x-svg-icon
      v-if="prependIcon"
      :name="prependIcon"
      class="x-tag__prepend-icon"
    />
    <div class="x-tag__content">
      <slot />
    </div>
    <x-svg-icon
      v-if="closable"
      name="close"
      class="x-tag__close-icon"
      size="10"
      @click="onCloseClick"
    />
  </div>
</template>

<style scoped>
.x-tag {
  display: inline-flex;
  vertical-align: text-bottom;
  align-items: center;
  font-family: var(--font);
  font-size: var(--text);
  line-height: 18px;
  white-space: nowrap;
  border-radius: var(--border-radius-2x);
  box-sizing: border-box;
}

.x-tag + .x-tag {
  margin-left: calc(var(--space) * 2);
}

.x-tag__prepend-icon {
  margin-right: var(--space);
  margin-left: -2px;
  stroke: none;
}

.x-tag__close-icon {
  margin-right: calc(var(--space) * (-1));
  margin-left: var(--space);
  cursor: pointer;
}

.x-tag--truncate .x-tag__content {
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.x-tag--outline {
  border: border-width solid;
}

.x-tag--primary {
  color: var(--primary);
  background-color: var(--secondary);
}
.x-tag--primary .x-tag__close-icon {
  color: var(--white);
}

.x-tag--primary .x-tag__close-icon:hover {
  color: var(--white-80);
}

.x-tag--gray {
  color: var(--white);
  background-color: var(--secondary);
}

.x-tag--gray .x-tag__prepend-icon {
  color: var(--white);
}

.x-tag--gray .x-tag__close-icon {
  color: var(--white);
}

.x-tag--gray .x-tag__close-icon:hover {
  color: var(--white-80);
}

.x-tag--gray.x-tag--outline {
  background-color: var(--secondary);
  border-color: var(--border-secondary);
}

.x-tag--gray.x-tag--outline:hover {
  background-color: var(--border-secondary-hover);
}

.x-tag--size-s {
  height: 28px;
  padding: calc(var(--space) * 2);
}

.x-tag--size-s.x-tag--outline {
  padding: var(--space) calc((var(--space) * 2) - 1);
}
</style>
