<script setup lang="ts">
import { computed, toValue, type PropType, useAttrs } from 'vue';
import Slider from '@vueform/slider';
import { XValidationFormItem } from '@form/XValidationFormItem';
import XSliderInput from '../ui/XSliderInput.vue';
import '@vueform/slider/themes/default.css';
import { type SliderModel } from '../types';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: '',
  },
  modelValue:{
    type: [Number, Array] as PropType<SliderModel>,
    required: true,
  },
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['xs', 's'].includes(v),
  },
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary'].includes(v),
  },
  prepends: {
    type: Object as PropType<{ from: string, to: string }>,
    default: () => ({
      from: 'from',
      to: 'to',
    }),
  },
  readonly: Boolean,
  float: Boolean,
  disabled: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: SliderModel): void
}>();

const computedClasses = computed(() => [
  'x-slider',
  `x-slider--size-${props.size}`,
]);

const computedFrom = computed({
  get() {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue[0];
    }

    return props.modelValue;
  },

  set(value: number) {
    if (Array.isArray(props.modelValue)) {
      return selectedValue.value = [value, props.modelValue[1]];
    }

    return selectedValue.value = value;
  },
});

const computedTo = computed({
  get() {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue[1];
    }

    return attrs.max ? Number(attrs.max) : 0;
  },

  set(value: number) {
    if (Array.isArray(props.modelValue)) {
      selectedValue.value = [props.modelValue[0], Number(value)];
    }

    return selectedValue.value = value;
  },
});

const selectedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const computedProps = computed(() => ({
  ...attrs,
  tooltips: false,
  lazy: false,
  disabled: props.disabled,
  class: 'x-slider--custom',
  step: props.float ? -1 : 1,
}));

const isActiveFrom = computed(() => Number(attrs.min) !== toValue(computedFrom));

const isActiveTo = computed(() =>
  Array.isArray(props.modelValue)
    ? Number(attrs.max) !== toValue(computedTo)
    : toValue(computedFrom) === toValue(computedTo),
);

const isReadonlyTo = computed(() => !Array.isArray(props.modelValue) || props.readonly);
</script>

<template>
  <x-validation-form-item
    :name="name"
    :value="modelValue"
  >
    <template #default="{ handleChange }">
      <div :class="computedClasses">
        <div class="x-slider__boundaries">
          <x-slider-input
            v-model="computedFrom"
            :active="isActiveFrom"
            :readonly="readonly"
            :color="color"
            :prepend="prepends.from"
          />

          <x-slider-input
            v-model="computedTo"
            :active="isActiveTo"
            :readonly="isReadonlyTo"
            :disabled="disabled"
            :color="color"
            :prepend="prepends.to"
          />
        </div>
        <slider
          v-model="selectedValue"
          v-bind="computedProps"
          @change="handleChange"
        />
      </div>
    </template>
  </x-validation-form-item>
</template>

<style>
.x-slider {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-2x);
}

.x-slider--custom {
  --slider-height: 1px;
  --slider-bg: var(--gray-200);
  --slider-connect-bg: var(--white);
  --slider-handle-bg: var(--white);
  --slider-handle-width: calc(var(--space) * 2);
  --slider-handle-height: calc(var(--space) * 2);
  --slider-handle-shadow: none;
  --slider-handle-shadow-active: none;
}

.x-slider__boundaries {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: var(--space) 0 18px 0;
}

.slider-target {
  position: absolute;
  right: var(--space);
  bottom: calc(var(--space) * (-0.25));
  left: var(--space);
}

.slider-horizontal .slider-handle {
  top: -3.5px;
}

.x-slider--size-xs .x-slider__boundaries {
  margin: 11.5px calc(var(--space) * 3.5);
}

.x-slider--custom .slider-connects {
  top: -1px;
  height: 3px;
}

.x-slider--custom:active .slider-connect,
.x-slider--custom:active .slider-handle {
  background-color: var(--primary);
}
</style>
