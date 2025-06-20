<script setup lang="ts">
import { computed, toValue, useAttrs } from 'vue';
import { XSvgIcon } from '@general/XSvgIcon';
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
  testId: {
    type: String,
    default: '',
  },
  classic: Boolean,
  toggle: Boolean,
  bordered: Boolean,
  disabled: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[] | number[] | boolean, isChecked?: boolean): void
}>();

const shouldBeChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(props.value);
  }

  return props.modelValue || props.value;
});

const computedAttrs = computed(() => ({
  ...attrs,
  iconProps: {
    style: {
      fill: 'none',
      stroke: 'none',
    },
  },
}));

const classicCheckboxClasses = computed(() => [
  'x-checkbox',
  'x-checkbox--classic',
  { 'x-checkbox--active': toValue(shouldBeChecked) },
  { 'x-checkbox--disabled': props.disabled },
  { 'x-checkbox--bordered': props.bordered },
]);

const toggleCheckboxClasses = computed(() => [
  'x-checkbox',
  'x-checkbox--toggle',
  { 'x-checkbox--active': toValue(shouldBeChecked) },
  { 'x-checkbox--disabled': props.disabled },
]);

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const isChecked = target.checked;

  if (props.modelValue instanceof Array) {
    const newValue = [...props.modelValue];

    if (isChecked) {
      newValue.push(props.value);
    } else {
      newValue.splice(newValue.indexOf(props.value), 1);
    }

    emit('update:modelValue', newValue, isChecked);
  } else {
    emit('update:modelValue', isChecked);
  }
};
</script>

<template>
  <label>
    <div
      v-if="classic"
      :class="classicCheckboxClasses"
    >
      <div class="x-checkbox__control">
        <x-svg-icon
          v-if="shouldBeChecked"
          name="checkmark"
          class="x-checkbox__mark"
          size="12"
        />
      </div>

      <div
        v-if="$slots.text"
        class="x-checkbox__text"
      >
        <slot name="text" />
      </div>
    </div>

    <div
      v-else-if="toggle"
      :class="toggleCheckboxClasses"
    >
      <div
        v-if="$slots.text"
        class="x-checkbox__text"
      >
        <slot name="text" />
      </div>

      <div
        class="x-checkbox__control"
        :class="{ 'x-checkbox__control--active': shouldBeChecked }"
      />
    </div>

    <x-mark
      v-else
      v-bind="computedAttrs"
      :active="shouldBeChecked"
      :disabled="disabled"
    >
      <slot />
    </x-mark>

    <input
      v-show="false"
      :name="name"
      :checked="shouldBeChecked"
      :value="value"
      :disabled="disabled"
      :data-test-id="testId"
      type="checkbox"
      @change="onChange"
    />
  </label>
</template>

<style scoped>

.x-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.x-checkbox--classic .x-checkbox__control {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background-color: #31363c;
  border-radius: var(--border-radius-1x);
  cursor: pointer;
}

.x-checkbox--classic .x-checkbox--disabled {
  opacity: .5;
  pointer-events: none;
}

.x-checkbox__text {
  font-size: var(--text);
}

.x-checkbox--classic .x-checkbox__text {
  margin-left: calc(var(--space) * 2);
}

.x-checkbox__mark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.x-checkbox--bordered {
  padding: calc(var(--space) * 6);
  border: 1px solid var(--border-secondary);
  border-radius: var(--border-radius-4x);
  transition: border-color .3s;
}

.x-checkbox--classic .x-checkbox--bordered .x-checkbox__text {
  color: var(--white-40);
}

.x-checkbox--classic.x-checkbox--active.x-checkbox--bordered {
  border-color: var(--primary);
}

.x-checkbox--classic.x-checkbox--active.x-checkbox--bordered .x-checkbox__text {
  color: var(--primary);
}

.x-checkbox--toggle .x-checkbox__control {
  position: relative;
  width: 24px;
  height: 12px;
  background-color: var(--gray-600);
  border-radius: var(--border-radius-8x);
  transition: background-color .3s;
}

.x-checkbox--toggle .x-checkbox__control:after {
  content: "";
  position: absolute;
  top: 1px;
  width: 10px;
  height: 10px;
  background-color: var(--white);
  border-radius: 50%;
  transition: transform .3s, background-color .3s;
}

.x-checkbox--toggle.x-checkbox--active .x-checkbox__control {
  background-color: var(--primary);
}

.x-checkbox--toggle.x-checkbox--active .x-checkbox__control:after {
  background-color: #000;
  transform: translateX(13px);
}

.x-checkbox--toggle .x-checkbox__text {
  margin-right: calc(var(--space) * 2);
}
</style>
