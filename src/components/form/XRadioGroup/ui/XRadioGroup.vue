<script setup lang="ts">
import { computed, type PropType } from 'vue';
import XRadio from '@/components/form/XRadio.vue';
import { type Radio } from '@form/XRadio';
import { XInput } from '@form/XInput';

const props = defineProps({
  name:{
    type: String,
    required: true,
  },
  fields: {
    type: Array as PropType<Radio[]>,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v: string) => ['default', 'filled'].includes(v),
  },
  block: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string|number): void
}>();

const selectedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const classes = computed(() => [
  'x-radio-group',
  { 'x-radio-group--block': props.block },
]);
</script>

<template>
  <div :class="classes">
    <x-radio
      v-model="selectedValue"
      v-for="(radio, index) in fields"
      :key="index"
      :icon="radio.icon"
      :value="radio.value"
      :disabled="radio.disabled"
      :name="name"
      :block="block"
      :variant="variant"
      :data-test-id="`radiogroup-item-${name}-${index}`"
    >

      <template #default="{ active }">
        <slot v-bind="{ item: radio, active }">
          {{ radio.label }}
        </slot>
      </template>
    </x-radio>
  </div>

  <x-input
    v-model="selectedValue"
    :name="name"
    :data-test-id="`radiogroup-${name}`"
    invisible
  />
</template>

<style scoped>
.x-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space) * 2);
}

.x-radio-group--block {
  flex-direction: column;
  gap: calc(var(--space) * 4);
}
</style>
