<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { XLabel } from '@form/XLabel';

const slots = useSlots();

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  htmlFor: {
    type: String,
  },
  mode: {
    type: String,
    default: 'default',
    validator: (v: string) => ['default', 'inline', 'flex'].includes(v),
  },
  required: Boolean,
  noLabel: Boolean,
});

const computedClass = computed(() => [
  'x-form-item',
  `x-form-item--${props.mode}`,
]);

const labelClasses = computed(() => [
  'x-form-item__label',
  { 'x-form-item__label--block': slots['append-label'] },
]);

const computedPlaceholder = computed(() => {
  if (props.noLabel && props.label) {
    return props.required ? `${props.label} *` : props.label;
  }
  return null;
});
</script>

<template>
  <div :class="computedClass">
    <x-label
      v-if="!noLabel && (label || $slots.label)"
      :html-for="htmlFor"
      :required="required"
      :class="labelClasses"
    >
      <slot name="label">{{ label }}</slot>

      <template #append>
        <div class="x-form-item__append-label">
          <slot name="append-label" />
        </div>
      </template>
    </x-label>

    <div class="x-form-item__content">
      <slot :placeholder="computedPlaceholder" />
    </div>
  </div>
</template>

<style scoped>
.x-form-item {
  margin-bottom: calc(var(--space) * 6);
}

.x-form-item:last-child {
  margin-bottom: 0;
}

.x-form-item--inline {
  display: flex;
  align-items: center;
}

.x-form-item--inline .x-form-item__label {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 206px;
  margin-bottom: 0;
}

.x-form-item__label--block {
  display: block;
}

.x-form-item__append-label {
  float: right;
}

.x-form-item__content {
  position: relative;
}

.x-form-item--inline .x-form-item__content {
  flex-grow: 1;
  min-width: 0;
}

.x-form-item--inline ::v-deep(.x-field-error) {
  position: absolute;
}

.x-form-item--flex ::v-deep(.x-field-error) {
  position: absolute;
  right: 0;
  left: 0;
}
</style>
