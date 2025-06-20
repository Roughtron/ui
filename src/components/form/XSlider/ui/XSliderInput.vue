<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  prepend: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary'].includes(v),
  },
  readonly: Boolean,
  active: Boolean,
  disabled: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>();

const currentValue = ref(props.modelValue);

const computedClasses = computed(() => [
  'x-slider-input',
  `x-slider-input--${props.color}`,
  {
    'x-slider-input--active': props.active,
    'x-slider-input--disabled': props.disabled,
    'x-slider-input--readonly': props.readonly,
  },
]);

const computedProps = computed(() => ({
  readonly: props.readonly,
  type: 'number',
  min: 0,
  max: 9999,
  class: 'x-slider-input__field',
}));

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  emit('update:modelValue', Number(target.value));
};

watchEffect(() => {
  currentValue.value = String(props.modelValue);
});
</script>

<template>
  <div :class="computedClasses">
    <div class="x-slider-input__prepend">{{ prepend }}&nbsp;</div>

    <input
      v-bind="computedProps"
      v-model="currentValue"
      @change="onChange"
    />
  </div>
</template>

<style scoped>
.x-slider-input {
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: calc(var(--space) * 3) calc(var(--space) * 5);
  border: 1px solid var(--gray-700);
  border-radius: var(--border-radius-4x);
}

.x-slider-input--primary {
  background-color: transparent;
}

.x-slider-input--secondary {
  height: 58px;
  background-color: var(--gray-800);
  border: none;
}

.x-slider-input + .x-slider-input {
  margin-left: calc(var(--space) * 2);
}

.x-slider-input__prepend {
  font-size: var(--heading-16);
  color: var(--white-40);
}

.x-slider-input__field {
  width: 100%;
  padding-left: calc(var(--space) * 2);
  font-family: var(--font);
  font-size: var(--heading-16);
  font-weight: 500;
  line-height: 15px;
  color: var(--white-40);
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.x-slider-input--secondary .x-slider-input__field,
.x-slider-input--secondary .x-slider-input__prepend {
  font-size: var(--text);
  line-height: 1.3;
  color: var(--gray-200);
}

.x-slider-input__field[type="number"] {
  appearance: textfield;
}

.x-slider-input.x-slider-input--active .x-slider-input__field {
  color: var(--white);
}

.x-slider-input.x-slider-input--active.x-slider-input--readonly .x-slider-input__field {
  color: var(--white-60);
}

.x-slider-input--readonly {
  pointer-events: none;
}

.x-slider-input__field:active,
.x-slider-input__field:focus {
  color: var(--white);
  border: none;
  outline: none;
}

.x-slider-input__field[type="number"]::-webkit-inner-spin-button,
.x-slider-input__field[type="number"]::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

.x-slider-input--disabled {
  opacity: .2;
  pointer-events: none;
}
</style>
