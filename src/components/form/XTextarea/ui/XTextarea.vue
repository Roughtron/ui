<script setup lang="ts">
import { useAttrs, computed } from 'vue';
import { XValidationFormItem } from '@form/XValidationFormItem';

const attrs = useAttrs();

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary', 'dark'].includes(v),
  },
  size: {
    type: String,
    default: 'xs',
    validator: (v: string) => ['xs', 's'].includes(v),
  },
  rounded: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const selfValue = computed(() => props.value || props.modelValue);

const { class: classes = '', ...attrsWithoutClasses } = attrs;

const computedAttrs = computed(() => ({
  name: props.name,
  class: [
    'x-textarea__field',
    `x-textarea__field--${props.color}`,
    classes,
  ],
  ...attrsWithoutClasses,
}));

const computedClasses = computed(() => ([
  'x-textarea',
  `x-textarea--${props.color}`,
  `x-textarea--${props.size}`,
  { 'x-textarea--rounded': props.rounded },
]));

const onChange = (e: Event, handleChange: Function) => {
  const target = e.target as HTMLInputElement;

  handleChange(e, true);

  emit('update:modelValue', target.value);
};
</script>

<template>
  <x-validation-form-item
    :name="name"
    :value="selfValue"
    :class="computedClasses"
  >
    <template #default="{ inputValue, handleChange, handleBlur }">
      <div class="x-textarea__container">
        <textarea
          v-bind="computedAttrs"
          :value="inputValue"
          @input="$event => onChange($event, handleChange)"
          @blur="handleBlur"
        />

        <div
          v-if="$slots.placeholder && !inputValue"
          class="x-textarea__placeholder"
        >
          <slot name="placeholder" />
        </div>

        <div
          v-if="$slots.append"
          class="x-textarea__append"
        >
          <slot name="append" />
        </div>
      </div>
    </template>
  </x-validation-form-item>
</template>

<style scoped>
.x-textarea__container {
  position: relative;
}

.x-textarea__placeholder {
  position: absolute;
  top: calc(var(--space) * 4);
  left: calc(var(--space) * 4);
  font-family: var(--font);
  font-size: var(--text);
  white-space: pre-wrap;
  color: var(--white-40);
  pointer-events: none;
}

.x-textarea__field {
  position: relative;
  width: 100%;
  padding: calc(var(--space) * 4);
  font-family: var(--font);
  color: var(--white-60);
  background-color: transparent;
  border: 1px solid var(--gray-700);
  border-radius: var(--border-radius-2x);
  outline: none;
  resize: none;
  box-sizing: border-box;
  transition: border-color .15s;
}

.x-textarea__field:focus {
  color: var(--primary);
  border: 1px solid var(--primary);
}

.x-textarea__field:-webkit-autofill,
.x-textarea__field:-webkit-autofill:hover,
.x-textarea__field:-webkit-autofill:focus,
:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 80px var(--content-background) inset !important;
  -webkit-text-fill-color: var(--white);
  caret-color: var(--white) !important;
}

.x-textarea__field[disabled] {
  opacity: .2;
  pointer-events: none;
}

.x-textarea--xs .x-textarea__field,
.x-textarea--xs .x-textarea__placeholder {
  padding: calc(var(--space) * 6);
  font-size: var(--text);
}

.x-textarea--s .x-textarea__field,
.x-textarea--s .x-textarea__placeholder {
  font-size: var(--heading-16);
}

.x-textarea__field--secondary {
  background-color: var(--content-inner-background);
}

.x-textarea--secondary .x-textarea__placeholder {
  color: var(--white-60);
}

.x-textarea--dark .x-textarea__placeholder,
.x-textarea--dark .x-textarea__field::placeholder {
  color: var(--gray-200)!important;
}

.x-textarea--dark .x-textarea__field {
  background-color: var(--content-background);
  border: transparent;
}

.x-textarea--dark .x-textarea__field:focus {
  color: var(--white);
  border: none;
}

.x-textarea--dark .x-textarea__field:not(:placeholder-shown) {
  color: var(--white);
}

.x-textarea--rounded .x-textarea__field {
  border-radius: var(--border-radius-4x);
}

.x-textarea__append {
  position: absolute;
  top: calc(var(--space) * 3);
  right: calc(var(--space) * 3);
}
</style>
