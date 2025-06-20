<script lang="ts">
import { ObserveVisibility } from 'vue3-observe-visibility';

export default {
  directives: {
    observeVisibility: ObserveVisibility,
  },
};
</script>

<script setup lang="ts">
import { reactive, computed, useAttrs, ref, toValue, type PropType, nextTick } from 'vue';
import VueMultiselect, { Multiselect } from 'vue-multiselect';
import { XButton } from '@general/XButton';
import { XSvgIcon } from '@general/XSvgIcon';
import { XValidationFormItem } from '@form/XValidationFormItem';
import { XListItem } from '@general/XList';
import { XTag } from '@general/XTag';
import { XDivider } from '@general/XDivider';
import { type SimpleOption, type Option, type Options } from '../types';

const attrs = useAttrs();
const select = ref<Multiselect|null>(null);

defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits<{
  (e: 'input', val: Options | null): void,
  (e: 'search-change', val: string): void,
  (e: 'open', val: Option): void,
  (e: 'close', val: Option): void,
  (e: 'update:modelValue', val: (string| number)[] | string | number): void,
  (e: 'options-end'): void,
}>();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: null as PropType<SimpleOption> | PropType<Options> | PropType<Option> | PropType<number> | null,
    default: '',
  },
  options: {
    type: Array as PropType<Options>,
    default: () => [],
  },
  size: {
    value: String,
    default: 's',
    validator: (v: string) => ['xs', 's', 'm', 'l'].includes(v),
  },
  color: {
    value: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary', 'tertiary', 'dark'].includes(v),
  },
  width: {
    type: [Number, String],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  trackBy: {
    type: String,
  },
  limit: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  searchable: Boolean,
  preselectFirst: Boolean,
  clearable: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
  },
  prependIcon: {
    type: String,
    default: '',
  },
  prependIconProps: {
    type: Object,
    default: () => ({}),
  },
  optionPrependIcon: {
    type: Function,
  },
  optionAppendIcon: [String, Function],
  optionAppendIconProps: Object,
  tagsColor: {
    type: String,
  },
  passed: {
    type: Boolean,
    default: false,
  },
  failed: {
    type: Boolean,
    default: false,
  },
  beforeListBtnAction: {
    type: String,
    default: null,
  },
  beforeListBtnIcon: {
    type: String,
    default: null,
  },
  beforeListBtnText: {
    type: String,
    default: '',
  },
  beforeListBtnTestId: {
    type: String,
    default: '',
  },
  openDirection: {
    type: String,
    default: null,
    validator: (v: string) => ['top', 'bottom', 'above', 'below'].includes(v),
  },
  markSelectedOption: {
    type: Boolean,
    default: true,
  },
  groupValues: {
    type: String,
    default: '',
  },
  groupLabel: {
    type: String,
    default: '',
  },
  groupSelect: Boolean,
  flex: Boolean,
  flexWidth: {
    type: String,
    default: '320px',
  },
  rounded: Boolean,
  showNoResults: {
    type: Boolean,
    default: true,
  },
});

const state = reactive({
  search: '',
  isOpen: false,
  hovered: false,
  focused: false,
});

const noResultText = 'No matches';
const emptyListText = 'List is empty';
const placeholderText = props.placeholder || 'Not chosen';

const computedAttrs = computed(() => ({
  ...attrs,
  onOpen: onOpen,
  onClose: onClose,
  'on-search-change': onSearchChange,
}));

const value = computed({
  get() {
    const trackBy = props.trackBy as string;

    if (Array.isArray(props.modelValue) && !props.groupValues) {
      return props.modelValue.map(value => props.options.find(option => {
        if (typeof option === 'object') {
          return option[trackBy] === value;
        }

        return option === value;
      }));
    }

    if (trackBy && !props.groupValues) {
      return props.options.find(option => {
        if (typeof option === 'object') {
          return option[trackBy] === props.modelValue;
        }

        return option === props.modelValue;
      });
    }

    if (trackBy && props.groupValues && !props.multiple) {
      return (props.options as Option[])
        .map(option => option[props.groupValues])
        .flat()
        .find(option => typeof option === 'object'
          ? option[trackBy] === props.modelValue
          : option === props.modelValue,
        );
    }

    if (trackBy && props.groupValues && props.multiple) {
      return (props.options as Option[])
        .map(option => option[props.groupValues])
        .flat()
        .filter(option => typeof option === 'object'
          ? (props.modelValue as Options).includes(option[trackBy])
          : (props.modelValue as Options).includes(option),
        );
    }

    return props.modelValue;
  },

  set(value) {
    const trackBy = props.trackBy as string;

    if (Array.isArray(value)) {
      const newValue = value.map(option => {
        if (typeof option === 'object') {
          return option[trackBy as keyof Option];
        }

        return option as string | number;
      });

      return emit('update:modelValue', newValue);
    }

    if (typeof value === 'object') {
      return emit('update:modelValue', value[trackBy]);
    }

    emit('update:modelValue', value as string | number);
  },
});

const classes = computed(() => [
  'x-select',
  `x-select--size-${props.size}`,
  `x-select--${props.color}`,
  {
    'x-select--hovered': state.hovered,
    'x-select--focused': state.focused,
    'x-select--filled': toValue(filled),
    'x-select--success': !state.focused && props.passed,
    'x-select--error': props.failed,
    'x-select--show-clear-icon': showClearIcon,
    'x-select--mark-selected-option': props.markSelectedOption,
    'x-select--text-center': !props.markSelectedOption && !props.multiple,
    'x-select--flex': props.flex,
    'x-select--rounded': props.rounded,
  },
]);

const styles = computed(() => {
  if (props.width !== undefined) {
    const w = typeof props.width === 'number' ? props.width + 'px' : props.width;
    return { width: w };
  }

  return {};
});

const filled = computed(() => {
  return props.modelValue instanceof Array
    ? props.modelValue.length > 0
    : (props.modelValue !== null && props.modelValue !== undefined);
});

const searchFilled = computed(() => state.search !== '');

const caretIcon = computed(() => state.focused ? 'dropdown-up' : 'dropdown-down');

const showPrependIcon = computed(() => {
  if (!props.prependIcon) return;
  if (!props.modelValue) return;
  // if (Array.isArray(props.modelValue) || typeof props.modelValue === 'string' || typeof props.modelValue === 'number') return;

  // return props.multiple || !toValue(filled) || (!props.modelValue.$icon && !props.modelValue.optionPrependIcon);

  return true;
});

const showClearIcon = computed(() => {
  return (
    props.clearable &&
    !props.disabled &&
    (
      (toValue(computedSearchable) && toValue(searchFilled) && state.focused) ||
      (props.multiple
        ? (toValue(filled) && (state.hovered || state.focused))
        : (!toValue(computedPreselectFirst) && toValue(filled) && (state.hovered || state.focused))
      )
    )
  );
});

const showLimit = computed(() => props.modelValue instanceof Array && props.modelValue.length > props.limit);

const selectedOptionsCount = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.length - props.limit;
  }

  return 0;
});

const showSelectPlaceholder = computed(() => state.focused && !toValue(filled) && !toValue(computedSearchable));

const computedSearchable = computed(() => props.searchable === undefined ? props.options.length > 8 : props.searchable);

const computedPreselectFirst = computed(() => props.multiple ? false : (props.preselectFirst === undefined ? true : props.preselectFirst));

const computedPlaceholder = computed(() => toValue(filled) && (props.multiple ? toValue(computedSearchable) : state.focused) ? '' : placeholderText);

const selectAll = () => {
  if (props.multiple) {
    emit('input', props.options);
  }
};

const clearAll = () => {
  const val = props.modelValue instanceof Array ? [] : null;

  emit('input', val);
};

const onSearchChange = (search: string) => {
  state.search = search;

  emit('search-change', search);
};

const onClearIconClick = () => {
  if (!toValue(searchFilled) && toValue(filled)) {
    clearAll();

    if (state.focused && select.value) {
      setTimeout(select.value.activate);
    }
  }
};

const isCheckbox = (option: Option) => {
  if (option.$isLabel) return false;

  return true;
};

const isCheckboxChecked = (option: Option | number | string) => {
  if (!Array.isArray(props.modelValue)) return;

  if (typeof option === 'object' && Array.isArray(props.modelValue)) {
    if (option.$isLabel) return;

    const trackBy = props.trackBy as string;
    const val = option[trackBy];

    return Boolean((props.modelValue as Option[]).find((el: Option) => el === val));
  }

  return props.modelValue.includes(option);
};

const isOptionChecked = (option: Option) => {
  if (!props.trackBy) return;

  if (typeof props.modelValue === 'object' && typeof option === 'object') {
    return (props.modelValue as Option || {})[props.trackBy] === option[props.trackBy];
  };

  if (typeof option === 'object' && (typeof props.modelValue === 'string' || typeof props.modelValue === 'number')) {
    return props.modelValue === option[props.trackBy];
  };

  return props.modelValue === option;
};

const onMouseEnter = () => {
  state.hovered = true;
};

const onMouseLeave = () => {
  state.hovered = false;
};

const onOpen = (e: Option) => {
  state.isOpen = true;
  state.focused = true;
  state.hovered = true;

  emit('open', e);
};

const onClose = (e: Option) => {
  state.isOpen = false;
  state.focused = false;
  state.hovered = false;

  emit('close', e);
};

const getOptionLabel = (option: Option) => {
  if (!option) return '';

  if (option.$isLabel) {
    return option.$groupLabel;
  } else if (typeof option === 'object') {
    return option[props.label as string];
  } else {
    return option;
  }
};

const getOptionAppendIcon = (item: Option) => {
  if (props.optionAppendIcon) {
    return typeof props.optionAppendIcon === 'string'
      ? props.optionAppendIcon
      : props.optionAppendIcon(item);
  }

  return null;
};

const onSelect = async (func: Function) => {
  await nextTick();

  func(props.modelValue);
};

// @ts-ignore
const onBeforeListClick = () => emit(props.beforeListBtnAction);
</script>

<template>
  <x-validation-form-item
    :name="name"
    :value="modelValue"
  >
    <template #default="{ handleChange }">
      <div
        :class="classes"
        :style="styles"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <vue-multiselect
          ref="select"
          v-bind="computedAttrs"
          v-model="value"
          :name="name"
          :options="options"
          :group-values="props.groupValues"
          :group-label="props.groupLabel"
          :group-select="props.groupSelect"
          :show-labels="false"
          :label="label"
          :track-by="trackBy"
          :multiple="multiple"
          :allow-empty="multiple"
          :searchable="computedSearchable"
          :preselect-first="computedPreselectFirst"
          :limit="limit"
          :disabled="disabled"
          :close-on-select="!multiple"
          :placeholder="computedPlaceholder"
          :open-direction="openDirection"
          :show-no-results="showNoResults"
          @select="onSelect(handleChange)"
        >
          <template #singleLabel="{ option }">
            <x-svg-icon
              v-if="option.$icon || optionPrependIcon"
              :name="option.$icon || (optionPrependIcon && optionPrependIcon(option))"
              size="24"
              class="x-select__option-prepend-icon"
            />
            <slot
              name="single-label"
              v-bind="{ label: getOptionLabel(option), option }"
            >
              {{ getOptionLabel(option) }}
            </slot>
            <x-svg-icon
              v-if="optionAppendIcon"
              :name="getOptionAppendIcon(option)"
              v-bind="optionAppendIconProps"
              class="x-select__option-append-icon"
            />
          </template>

          <template #selection="{ remove, values }">
            <slot
              v-bind="{ selectedOptionsCount }"
              name="selection"
            >
              <x-svg-icon
                v-if="showPrependIcon"
                :name="prependIcon"
                v-bind="prependIconProps"
                class="x-select__prepend-icon"
              />

              <template v-if="showSelectPlaceholder">
                {{ placeholderText }}
              </template>

              <x-tag
                v-for="(option, i) of values"
                :key="i"
                :prepend-icon="option.$icon"
                closable
                truncate
                @close="remove(option)"
              >
                {{ getOptionLabel(option) }}
              </x-tag>

              <x-tag
                v-if="showLimit"
                class="x-select__limit"
              >
                +{{ selectedOptionsCount }}
              </x-tag>
            </slot>
          </template>

          <template
            #beforeList
            v-if="beforeListBtnAction"
          >
            <slot name="beforeList">
              <div class="x-select__before-list">
                <x-button
                  :append="beforeListBtnIcon"
                  :icon-props="{ style: { color: 'inherit' } }"
                  :data-test-id="beforeListBtnTestId"
                  icon-size="16"
                  type="button"
                  class="x-select__before-list-btn"
                  ghost
                  color="gray"
                  block
                  size="xs"
                  @click="onBeforeListClick"
                >
                  {{ beforeListBtnText }}
                </x-button>
                <x-divider />
              </div>
            </slot>
          </template>

          <template #clear>
            <x-svg-icon
              v-if="showClearIcon"
              class="x-select__clear-icon"
              name="clear"
              @mousedown="onClearIconClick"
            />
          </template>

          <template #caret="{ toggle }">
            <x-svg-icon
              class="x-select__caret"
              :name="caretIcon"
              @mousedown.prevent.stop="toggle"
            />
          </template>

          <template
            v-if="multiple"
            #option="{ option }"
          >
            <x-list-item
              :checkbox="isCheckbox(option)"
              :checked="isCheckboxChecked(option)"
              :prepend-icon="option.$icon || (optionPrependIcon && optionPrependIcon(option))"
              :append-icon="getOptionAppendIcon(option)"
              :append-icon-props="optionAppendIconProps"
              :is-truncate="flex"
              :mark-selected-option="markSelectedOption"
              :rounded="rounded"
            >
              {{ getOptionLabel(option) }}
            </x-list-item>
          </template>
          <template
            v-else
            #option="{ option }"
          >
            <x-list-item
              :checked="isOptionChecked(option)"
              :prepend-icon="option.$icon || (optionPrependIcon && optionPrependIcon(option))"
              :append-icon="getOptionAppendIcon(option)"
              :append-icon-props="optionAppendIconProps"
              :mark-selected-option="markSelectedOption"
              :is-truncate="flex"
              :rounded="rounded"
            >
              <slot
                name="list-option"
                v-bind="{ label: getOptionLabel(option), option }"
              >
                {{ getOptionLabel(option) }}
              </slot>
            </x-list-item>
          </template>

          <template
            v-if="state.isOpen"
            #afterList
          >
            <div v-observe-visibility="{ callback: () => emit('options-end'), throttle: 500 }" />
          </template>

          <template #noResult>
            <div class="x-select__no-result">
              {{ noResultText }}
            </div>
          </template>

          <template #noOptions>
            <div
              v-show="showNoResults"
              class="x-select__no-result"
            >
              {{ emptyListText }}
            </div>
          </template>
        </vue-multiselect>

        <div class="x-select__border" />
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

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style>
  .x-select {
    position: relative;
    display: flex;
    width: 100%;
    background-color: transparent;
    border-radius: var(--border-radius-2x);
    cursor: pointer;
    box-sizing: border-box;
  }

  .x-select .multiselect {
    font-family: var(--font);
    font-size: var(--text);
    font-weight: normal;
    font-style: normal;
    line-height: 1.28;
    color: var(--white);
  }

  .multiselect input,
  .multiselect .multiselect__single {
    font-family: var(--font);
    font-size: var(--text);
    font-weight: normal;
    font-style: normal;
  }

  .multiselect.multiselect--disabled {
    background: transparent;
    opacity: .2;
    pointer-events: none;
  }

  .multiselect input {
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  .multiselect input::placeholder {
    color: var(--white-40);
  }

  .multiselect__single {
    display: flex;
    align-items: center;
    min-height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    color: var(--white);
    background-color: transparent;
    border-radius: 0;
  }

  .multiselect__placeholder {
    margin: 0;
    padding: 0;
    color: var(--white-40);
  }

  .multiselect__tags {
    display: flex;
    align-items: center;
    padding: 0 26px 0 16px;
    font-family: var(--font);
    font-size: var(--text);
    font-weight: normal;
    font-style: normal;
    line-height: 1.28;
    background-color: transparent;
    border-width: 1px;
    border-color: transparent;
  }

  .multiselect__tags-wrap {
    margin-right: var(--space);
    margin-left: - var(--space);
  }

  .multiselect__content-wrapper {
    margin-top: var(--space);
    padding: var(--space) 0;
    overflow-x: hidden;
    background-color: var(--content-background);
    border: 1px solid var(--border-secondary);
    border-radius: var(--border-radius-2x);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  }

  .multiselect--above .multiselect__content-wrapper {
    border: 1px solid var(--border-secondary);
    border-radius: var(--border-radius-2x)
  }

  .multiselect__content {
    position: relative;
  }

  .multiselect__option {
    min-height: auto;
    padding: 0;
    white-space: normal;
    color: var(--gray-500);
  }

  .multiselect__option--selected {
    color: var(--white);
    background-color: var(--secondary);
  }

  .multiselect__option--highlight {
    background-color: var(--secondary);
  }

  .multiselect__option--highlight:active {
    background-color: var(--secondary);
  }

  .multiselect__option--highlight.multiselect__option--selected {
    background-color: var(--secondary);
  }

  .multiselect__option--highlight.multiselect__option--selected .x-select__option {
    color: var(--white);
  }

  .multiselect__option--highlight.multiselect__option--selected:active {
    background-color: var(--secondary);
  }

  .multiselect__option--disabled {
    background: none!important;
  }

  .x-select--mark-selected-option .multiselect__content-wrapper {
    background-color: var(--content-background);
    transition: none;
  }

  .x-select--mark-selected-option .multiselect__option--selected {
    background-color: transparent;
  }

  .x-select--mark-selected-option .multiselect__option--highlight,
  .x-select--mark-selected-option .multiselect__option--highlight:active {
    background-color: transparent;
  }

  .x-select--mark-selected-option .multiselect__option--highlight.multiselect__option--selected,
  .x-select--mark-selected-option .multiselect__option--highlight.multiselect__option--selected:active {
    background-color: transparent;
  }

  .x-select__prepend-icon {
    flex-shrink: 0;
    margin-right: var(--space);
  }

  .x-select__option-prepend-icon {
    flex-shrink: 0;
    margin-right: calc(var(--space) * 2);
    stroke: none;
  }

  .x-select__option-append-icon {
    margin-left: auto;
  }

  .x-select .x-tag {
    max-width: 100%;
    margin-right: var(--space);
    margin-left: 0;
  }

  .x-select .x-tag:first-child {
    margin-left: - var(--space);
  }

  .x-select .x-tag + .x-tag {
    margin-left: 0;
  }

  .x-select__limit.x-tag {
    padding: 5px;
  }

  .x-select__before-list {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    background-color: var(--gray-800);
    transform: translateY(calc(var(--space) * (-2)));
   }

  .x-select__before-list .x-select__before-list-btn {
    height: 40px;
    margin: var(--space);
    margin-top: calc(var(--space) * 2);
    margin-bottom: calc(var(--space) * (-1));
    border-radius: var(--border-radius-2x)!important;
  }

  .x-select__before-list-btn:hover .x-button__content {
    background-color: var(--primary-black)!important;
  }

  .x-select__before-list-btn .x-button__content-in {
    justify-content: space-between;
    padding: 0;
    padding-left: 0;
    font-weight: 400;
    line-height: 1.3;
    text-align: left;
    color: var(--gray-200);
  }

  .x-select__before-list .x-select__before-list-btn .x-button__content-in:hover {
    color: var(--white)!important;
  }

  .x-select__before-list-btn.x-button--ghost.x-button--gray .x-button__content {
    padding: 0 calc(var(--space) * 4);
    background-color: var(--content-background);
    border: none;
  }

  .x-select--mark-selected-option .x-select__before-list-btn.x-button--ghost.x-button--gray .x-button__content {
    padding: 0 calc(var(--space) * 2);
    border: none;
  }

  .x-select__border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-width: 1px;
    border-style: solid;
    border-color: var(--border-secondary);
    border-radius: var(--border-radius-2x);
    pointer-events: none;
    transition: border-color .15s, box-shadow .15s;
  }

  .x-select--primary .x-select__border {
    border-color: var(--border-secondary);
  }

  .x-select__clear-icon {
    position: absolute;
    right: 24px;
    color: var(--secondary);
    cursor: pointer;
  }

  .x-select__clear-icon:hover {
    color: var(--white);
  }

  .x-select__clear-icon:active {
    color: var(--white);
  }

  .x-select__no-result {
    padding: var(--space) calc(var(--space) * 4);
  }

  .x-select--show-clear-icon .multiselect .multiselect__tags {
    padding-right: 46px;
  }

  .x-select__caret {
    position: absolute;
    right: 16px;
    width: 16px!important;
    height: 16px!important;
    color: var(--white-40);
  }

  .x-select--flex {
    max-width: v-bind(flexWidth);
  }

  .x-select--flex .multiselect__content-wrapper {
    width: max-content;
    min-width: 100%;
    max-width: v-bind(flexWidth);
  }

  .x-select--flex .multiselect__content {
    width: 100%;
  }

  .x-select--flex .multiselect__single {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .x-select--focused .x-select__caret {
    color: var(--primary);
  }

  .x-select--hovered .x-select__border {
    border-color: var(--border-secondary-hover);
  }

  .x-select--focused .x-select__border {
    border-color: var(--primary);
  }

  .x-select--success .x-select__border {
    border-color: var(--primary);
  }

  .x-select--error .x-select__border {
    border-color: var(--danger-light);
  }

  .x-select--size-xs.x-select {
    height: 40px;
  }

  .x-select--size-xs .multiselect__content-wrapper {
    margin-top: -44px;
    margin-left: -8px;
  }

  .x-select--size-xs .multiselect--above .multiselect__content-wrapper {
    margin-bottom: -36px;
  }

  .x-select--size-xs.x-select .x-select__caret {
    top: 12px;
  }

  .x-select--size-xs.x-select .x-select__clear-icon {
    top: 8px;
  }

  .x-select--size-xs.x-select .multiselect {
    height: 40px;
    min-height: 40px;
  }

  .x-select--size-xs.x-select .multiselect__tags {
    height: 40px;
    min-height: 40px;
  }

  .x-select--size-xs.x-select .multiselect .x-tag:first-child {
    margin-left: -7px;
  }

  .x-select--size-s.x-select {
    height: 48px;
  }

  .x-select--size-s.x-select--mark-selected-option .multiselect__content-wrapper {
    margin-top: -52px;
    margin-left: -8px;
  }

  .x-select--size-s.x-select--mark-selected-option .multiselect--above .multiselect__content-wrapper {
    margin-bottom: -44px;
  }

  .x-select--size-s.x-select .x-select__caret {
    top: 16px;
  }

  .x-select--size-s.x-select .x-select__clear-icon {
    top: 16px;
  }

  .x-select--size-s.x-select .multiselect {
    height: 48px;
    min-height: 48px;
  }

  .x-select--size-s.x-select .multiselect__tags {
    height: 48px;
    min-height: 48px;
  }

  .x-select--size-s.x-select .multiselect .x-tag:first-child {
    margin-left: -5px;
  }

  .x-select--size-m.x-select {
    height: 50px;
  }

  .x-select--size-m.x-select--mark-selected-option .multiselect__content-wrapper {
    margin-top: -54px;
    margin-left: -8px;
  }

  .x-select--size-m.x-select--mark-selected-option .multiselect--above .multiselect__content-wrapper {
    margin-bottom: -46px;
  }

  .x-select--size-m.x-select .x-select__caret {
    top: 16px;
  }

  .x-select--size-m.x-select .x-select__clear-icon {
    top: 14px;
  }

  .x-select--size-m.x-select .multiselect {
    height: 50px;
    min-height: 50px;
  }

  .x-select--size-m.x-select .multiselect__tags {
    height: 50px;
    min-height: 50px;
  }

  .x-select--size-m.x-select .multiselect .x-tag:first-child {
    margin-left: -4px;
  }

  .x-select--size-l.x-select {
    height: 60px;
    font-size: var(--heading-16);
  }

  .x-select--size-l.x-select .multiselect__single {
    font-size: var(--heading-16);
  }

  .x-select--size-l.x-select--mark-selected-option .multiselect__content-wrapper {
    margin-top: -68px;
    margin-left: -4px;
  }

  .x-select--size-l.x-select--mark-selected-option .multiselect--above .multiselect__content-wrapper {
    margin-bottom: -56px;
  }

  .x-select--size-l.x-select .x-select__caret {
    top: 22px;
  }

  .x-select--size-l.x-select .x-select__clear-icon {
    top: 24px;
  }

  .x-select--size-l.x-select .multiselect {
    height: 60px;
    min-height: 60px;
  }

  .x-select--size-l.x-select .multiselect__tags {
    height: 60px;
    min-height: 60px;
    font-size: var(--heading-16);
  }

  .x-select--size-l.x-select .multiselect .x-tag:first-child {
    margin-left: -8px;
  }

  .x-select--tertiary {
    background-color: var(--secondary-hover);
  }

  .x-select--secondary {
    background-color: var(--content-background);
    border-color: var(--secondary);
  }

  .x-select--secondary.x-select--focused .x-select__caret {
    color: var(--white);
  }

  .x-select--secondary.x-select--focused .x-select__border
  .x-select--secondary.x-select--hovered .x-select__border {
    border-color: var(--secondary);
  }

  .x-select--secondary .x-select__border {
    border-color: var(--secondary);
  }

  .x-select--secondary.x-select--filled .x-select__border {
    border-color: var(--content-background);
  }

  .x-select--secondary .multiselect__content-wrapper {
    background-color: var(--gray-800);
  }

  .x-select--dark {
    font-size: var(--text);
    background-color: var(--content-background);
  }

  .x-select--dark .x-select__border {
    border: none;
  }

  .x-select--dark.x-select--rounded .multiselect__tags {
    padding-right: calc(var(--space) * 14) !important;
    padding-left: calc(var(--space) * 6);
    font-size: var(--text);
  }

  .x-select--dark .multiselect__placeholder,
  .x-select--dark .x-select__caret {
    color: var(--gray-200);
  }

  .x-select--dark.x-select--focused .x-select__caret {
    color: var(--white);
  }

  .x-select--dark:has(.multiselect.multiselect--disabled) {
    background-color: var(--content-background);
    border-radius: var(--border-radius-8x);
    opacity: .4;
  }

  .x-select--dark .multiselect.multiselect--disabled {
    opacity: 1;
  }

  .x-select--dark .multiselect__content-wrapper {
    background-color: var(--gray-800);
    border-color: transparent;
  }

  .x-select--dark.x-select .multiselect__element .multiselect__option {
    margin: 0 var(--space);
    padding-top: 2px;
    padding-bottom: 2px;
    color: var(--gray-200);
    background-color: var(--content-background);
    border-radius: var(--border-radius-2x)!important;
  }

  .x-select--dark.x-select .multiselect__element + .multiselect__element {
    margin-top: var(--space)!important;
  }

  .x-select--dark .multiselect__element .multiselect__option.multiselect__option--highlight {
    color: var(--gray-200)!important;
    background-color: var(--primary-black)!important;
  }

  .x-select--dark.x-select .multiselect__option.multiselect__option--selected {
    color: var(--white);
    background-color: var(--primary-black)!important;
  }

  .x-select--dark.x-select .multiselect__single {
    font-size: var(--text);
  }

  .multiselect__tag,
  .multiselect__spinner::before,
  .multiselect__spinner::after {
    background-color: transparent;
  }

  .x-select.x-select--rounded .multiselect__content-wrapper {
    margin-top: calc(var(--space) * 2);
    margin-left: 0;
    padding: calc(var(--space) * 2) var(--space);
    border-radius: var(--border-radius-4x);
  }

  .x-select.x-select--rounded .multiselect--above .multiselect__content-wrapper {
    margin-bottom: calc(var(--space) * 2);
  }

  .x-select--rounded {
    border-radius: var(--border-radius-8x);
  }

  .x-select--rounded .x-select__border {
    border-radius: var(--border-radius-8x);
  }

  .x-select--rounded .multiselect__tags {
    justify-content: start;
    padding-right: calc(var(--space) * 10) !important;
    padding-left: calc(var(--space) * 10);
  }

  .x-select--rounded .x-select__caret {
    right: calc(var(--space) * 6);
  }
</style>
