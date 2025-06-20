<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { XMark } from '@general/XMark';

const attrs = useAttrs();

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  value: {
    type: null,
    default: null,
  },
  modelValue: {
    type: null,
    default: null,
  },
  name: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v: string) => ['default', 'filled'].includes(v),
  },
  disabled: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const shouldBeChecked = computed(() => props.modelValue === props.value);

const computedAttrs = computed(() => ({
  ...attrs,
  iconProps: {
    style: {
      fill: 'none',
      stroke: 'none',
    },
  },
}));

const onChange = () => emit('update:modelValue', props.value);
</script>

<template>
  <label>
    <x-mark
      v-bind="computedAttrs"
      :active="shouldBeChecked"
      :disabled="disabled"
      :variant="variant"
    >
      <slot v-bind="{ active: shouldBeChecked }" />
    </x-mark>
    <input
      v-show="false"
      type="radio"
      :name="name"
      :checked="shouldBeChecked"
      :value="value"
      :disabled="disabled"
      @change="onChange"
    />
  </label>
</template>
