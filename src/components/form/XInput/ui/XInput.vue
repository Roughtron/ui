<script setup lang="ts">
import { useAttrs, computed, ref, reactive, toValue } from 'vue';
import { vMaska } from 'maska/vue';
import { XButton } from '@general/XButton';
import { XValidationFormItem } from '@form/XValidationFormItem';

const attrs = useAttrs();
const input = ref<HTMLInputElement>();

defineOptions({
  inheritAttrs: false,
});

const state = reactive({
  focused: false,
});

const props = defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['xxxs', 'xxs', 'xs', 's', 'm'].includes(v),
  },
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'dark', 'promo', 'secondary', 'tertiary', 'darkest-gray'].includes(v),
  },
  rounded: {
    type: [Boolean, String],
    default: false,
    validator: (v: boolean | string) =>
      typeof v === 'boolean' || ['extra'].includes(v),
  },
  type: {
    type: String,
    default: 'text',
  },
  append: {
    type: String,
    default: '',
  },
  appendIcon: {
    type: String,
    default: '',
  },
  appendIconProps: {
    type: Object,
    default: () => ({}),
  },
  appendButton: {
    type: Object,
    default: null,
  },
  onAppendClick: Function,
  prepend: {
    type: String,
    default: '',
  },
  prependIcon: {
    type: String,
    default: '',
  },
  prependIconProps: {
    type: Object,
    default: () => ({}),
  },
  prependButton: {
    type: Object,
    default: null,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },
  modelModifiers: {
    type: Object,
    default: () => ({}),
  },
  mask: {
    type: String,
    default: '',
  },
  showError: {
    type: Boolean,
    default: true,
  },
  onPrependClick: Function,
  disabled: Boolean,
  readonly: Boolean,
  invisible: Boolean,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>();

const { class: classes = '', ...attrsWithoutClasses } = attrs;

const selfValue = computed(() => (props.value || props.modelValue).toString());

const isRoundedTypeBoolean = computed(() => typeof props.rounded === 'boolean');

const computedClasses = computed(() => [
  'x-input',
  `x-input--size-${props.size}`,
  `x-input--${props.color}`,
  {
    'x-input--disabled': props.disabled,
    'x-input--focused': state.focused && !props.readonly,
    'x-input--readonly': props.readonly,
    'x-input--invisible': props.invisible,
    'x-input--hide-error': !props.showError,
    'x-input--rounded': toValue(isRoundedTypeBoolean) && props.rounded,
    [`x-input--rounded-${props.rounded}`]: !toValue(isRoundedTypeBoolean) && props.rounded,
  },
  classes,
]);

const computedAttrs = computed(() => ({
  name: props.name,
  id: props.name,
  disabled: props.disabled,
  readonly: props.readonly,
  class: 'x-input__field',
  type: props.type,
  ...attrsWithoutClasses,
}));

const computedPrependBtnProps = computed(() => ({
  type: 'button',
  text: true,
  color: 'gray',
  class: 'x-input__prepend-btn',
  size: props.size,
  icon: props.prependIcon,
  iconProps: props.prependIconProps,
  disabled: props.disabled,
}));

const computedAppendBtnProps = computed(() => ({
  type: 'button',
  text: true,
  color: 'gray',
  class: 'x-input__append-btn',
  size: props.size,
  icon: props.appendIcon,
  iconProps: props.appendIconProps,
  disabled: props.disabled,
}));

const spinButtonProps = computed(() => ({
  class: 'x-input__spin-button',
  type: 'button',
  iconSize: ['8px', '6px'],
  text: true,
}));

const focus = () => input.value?.focus();

const onFocus = () => state.focused = true;

const onBlur = (callback: Function) => {
  state.focused = false;

  callback();
};

const onClickPrepend = () => {
  if (props.onPrependClick) {
    props.onPrependClick();
  }
};

const onClickAppend = () => {
  if (props.onAppendClick) {
    props.onAppendClick();
  }
};

const onChange = (e: Event, handleChange: Function) => {
  const target = e.target as HTMLInputElement;
  let { value } = target;

  handleChange(e, true);

  if (props.modelModifiers.lowercase) {
    value = value.toLowerCase();
  }

  emit('update:modelValue', value);
};

const onIncSpinButtonClick = () => {
  const newValue = (parseInt(toValue(selfValue)) || 0) + 1;

  emit('update:modelValue', newValue);
};

const onDescSpinButtonClick = () => {
  const newValue = (parseInt(toValue(selfValue)) || 0) - 1;

  emit('update:modelValue', newValue);
};

defineExpose({
  focus,
});
</script>

<template>
  <x-validation-form-item
    :name="name"
    :value="selfValue"
    class="x-input-container"
  >
    <template #default="{ inputValue, handleChange, handleBlur }">
      <div
        :class="computedClasses"
        @click="focus"
      >
        <div
          v-if="prepend || $slots.prepend"
          class="x-input__prepend"
        >
          <slot name="prepend">{{ prepend }}</slot>
        </div>
        <x-button
          v-if="onPrependClick"
          v-bind="computedPrependBtnProps"
          @click="onClickPrepend"
        />
        <input
          ref="input"
          v-bind="computedAttrs"
          v-maska="mask"
          :value="inputValue"
          @change="$event => onChange($event, handleChange)"
          @focus="onFocus"
          @blur="onBlur(handleBlur)"
        />
        <div
          v-if="append || $slots.append || type === 'number'"
          class="x-input__append"
        >
          <div
            v-if="type === 'number'"
            class="x-input__spin-buttons"
          >
            <x-button
              icon="input-arrow-up"
              v-bind="spinButtonProps"
              @click="onIncSpinButtonClick"
            />
            <x-button
              icon="input-arrow-down"
              v-bind="spinButtonProps"
              @click="onDescSpinButtonClick"
            />
          </div>
          <slot
            v-else
            name="append"
          >
            {{ append }}
          </slot>
        </div>
        <x-button
          v-if="onAppendClick"
          v-bind="computedAppendBtnProps"
          @click="onClickAppend"
        />
      </div>
    </template>

    <template #error="{ errorMessage }">
      <slot
        name="error"
        v-bind="{ errorMessage }"
      />
    </template>
  </x-validation-form-item>
</template>

<style scoped>
.x-input-container:has(.x-field-error) .x-input--hide-error {
  border-color: var(--danger-error);
}

.x-input-container:has(.x-input--hide-error) ::v-deep(.x-field-error) {
  display: none;
}

.x-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 0 calc(var(--space) * 4);
  border: 1px solid var(--secondary-hover);
  border-radius: var(--border-radius-2x);
  box-sizing: border-box;
  transition: border-color .15s;
}

.x-input--dark {
  background-color: var(--primary-black);
  border: none;
}

.x-input--dark.x-input--focused .x-input__field {
  color: var(--white);
  border: none;
}

.x-input__field {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  font-family: var(--font);
  font-size: var(--text);
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--white-60);
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.x-input__field[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.x-input__field[type="number"] {
  appearance: textfield;
}

.x-input__spin-buttons {
  position: absolute;
  top: 50%;
  right: 11px;
  display: flex;
  flex-direction: column;
  height: 28px;
  transform: translateY(-50%);
}

.x-input__spin-button {
  height: 14px!important;
  margin: 0!important;
}

.x-input__spin-button ::v-deep(.x-button__icon) {
  color: rgba(255, 255, 255, 0.60);
}

.x-input__spin-button:hover ::v-deep(.x-button__icon) {
  color: #fff!important;
}

.x-input--focused {
  border: 1px solid var(--primary);
}

.x-input--focused .x-input__field {
  color: var(--primary);
}

.x-input--focused .x-input__field:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--primary) !important;
}

.x-input--readonly {
  cursor: default;
}

.x-input--readonly .x-input__field {
  cursor: default;
  user-select: none;
}

.x-input--rounded {
  border-radius: var(--border-radius-4x);
}

.x-input--rounded-extra {
  border-radius: var(--border-radius-8x);
}

.x-input__field:-webkit-autofill,
.x-input__field:-webkit-autofill:hover,
.x-input__field:-webkit-autofill:focus,
:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: var(--white-60) !important;
  caret-color: var(--white-60) !important;
}

.x-input--disabled {
  opacity: .4;
  pointer-events: none;
}

.x-input--size-m {
  height: 58px;
  padding: 0 calc(var(--space) * 6);
}

.x-input--size-m .x-input__field {
  height: 58px;
}

.x-input--size-m::placeholder {
  color: var(--white-40);
}

.x-input--size-s {
  height: calc(var(--space) * 12);
  padding: 0 calc(var(--space) * 6);
}

.x-input--size-s .x-input__field {
  height: calc(var(--space) * 12);
}

.x-input--size-xs,
.x-input--size-xs .x-input__field {
  height: calc(var(--space) * 10);
}

.x-input--size-xxs,
.x-input--size-xxs .x-input__field {
  height: calc(var(--space) * 9);
}

.x-input--size-xxxs,
.x-input--size-xxxs .x-input__field {
  height: calc(var(--space) * 7);
}

.x-input__prepend {
  padding-right: calc(var(--space) * 2);
  font-family: var(--font);
  font-size: var(--text);
  line-height: 1;
  color: var(--white);
}

.x-input__prepend-btn {
  margin-left: calc((-2) * var(--space));
}

.x-input__append {
  padding-left: calc(var(--space) * 2);
  font-family: var(--font);
  font-size: var(--text);
  line-height: 1;
  color: var(--white);
}

.x-input__append-btn {
  margin-right: calc((-2) * var(--space));
}

.x-input--invisible {
  display: none;
}

.x-input--promo {
  height: 58px;
  padding: 0;
  background-color: var(--primary-black-20);
  border: none;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.x-input--promo .x-input__field {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 43px;
  padding: 14px calc(var(--space) * 6);
  font-family: var(--font);
  color: var(--primary-black);
  background: transparent;
  border: none;
  border-radius: var(--border-radius-2x);
  outline: none;
  outline-offset: 0;
}

.x-input--promo .x-input__field::placeholder {
  color: var(--primary-black);
}

.x-input--promo .x-input__field:-webkit-autofill,
.x-input--promo .x-input__field:-webkit-autofill:hover,
.x-input--promo .x-input__field:-webkit-autofill:focus,
.x-input--promo .x-input__field:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
  -webkit-text-fill-color: var(--primary-black) !important;
  caret-color: var(--primary-black) !important;
}

.x-input--secondary {
  background: var(--content-inner-background);
}

.x-input--tertiary {
  background-color: var(--content-background);
  border-color: transparent;
}

.x-input--tertiary .x-input__field:not(:placeholder-shown) {
  color: var(--white);
}

.x-input--tertiary .x-input__field::placeholder {
  color: var(--gray-200);
}

.x-input--tertiary.x-input--focused .x-input__field {
  color: var(--white)!important;
}

.x-input--tertiary.x-input--focused .x-input__field:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--white) !important;
}

.x-input--darkest-gray {
  background-color: var(--gray-800);
  border-color: transparent;
}

.x-input--darkest-gray .x-input__field::placeholder {
  color: var(--gray-200);
}

.x-input--darkest-gray.x-input--focused .x-input__field {
  color: var(--white)!important;
}

.x-input--darkest-gray.x-input--focused .x-input__field:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--white) !important;
}

.x-input-container:has(.x-field-error) .x-input--darkest-gray {
  border-color: var(--danger-error);
}

@media screen and (orientation: portrait) and (max-width: 550px) {
  .x-input--promo {
    border-radius: calc(var(--space) * 10);
  }

  .x-input--promo:after {
    border-radius: calc(var(--space) * 10);
  }
}
</style>
