<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'gray',
    validator: (v: string) => ['primary', 'gray'].includes(v),
  },
  vertical: Boolean,
});

const classes = computed(() => [
  'x-divider',
  'x-divider--' + props.color,
  { 'x-divider--vertical': props.vertical },
]);
</script>

<template>
  <hr :class="classes">
</template>

<style>
hr.x-divider {
  margin-block-start: 0;
  margin-block-end: 0;
}

.x-divider {
  display: block;
  flex: 1 1 0;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: 0 0 1px;
}

.x-divider--vertical {
  display: inline-flex;
  vertical-align: text-bottom;
  align-self: stretch;
  width: 0;
  max-width: 0;
  height: inherit;
  min-height: 100%;
  max-height: 100%;
  border-width: 0 1px 0 0;
}

.x-divider--gray {
  border-color: var(--border-secondary);
}

.x-divider--primary {
  border-color: var(--primary);
}
</style>
