<script setup lang="ts">
import { computed } from 'vue';
import { XSvgIcon } from '@general/XSvgIcon';
import { XCheckbox } from '@form/XCheckbox';
import { useThrottleEvent } from '@/composables';

const { handleThrottleEvent } = useThrottleEvent();

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  checkbox: Boolean,
  checked: Boolean,
  prependIcon: String,
  prependIconProps: Object,
  appendIcon: String,
  appendIconProps: Object,
  markSelectedOption: Boolean,
  isTruncate: Boolean,
  rounded: Boolean,
});

const classes = computed(() => [
  'x-list-item',
  {
    'x-list-item--checked': props.checked,
    'x-list-item--mark-selected-option': props.markSelectedOption,
    'x-list-item--truncate': props.isTruncate,
    'x-list-item--rounded': props.rounded,
  },
]);

const classesCheckmark = computed(() => [
  'x-list-item__checkmark',
  { 'x-list-item__checkmark--checked': props.checked },
]);
</script>

<template>
  <button
    :class="classes"
    type="button"
  >
    <div
      v-if="checkbox && !markSelectedOption"
      class="mr-2"
      @click="handleThrottleEvent"
    >
      <x-checkbox
        :value="checked"
        classic
      />
    </div>
    <x-svg-icon
      v-if="markSelectedOption && checked"
      :class="classesCheckmark"
      name="checkmark"
      size="16"
    />
    <x-svg-icon
      v-if="prependIcon"
      :name="prependIcon"
      size="24"
      class="x-list-item__prepend-icon"
      v-bind="prependIconProps"
    />
    <div class="x-list-item__content">
      <slot></slot>
    </div>
    <x-svg-icon
      v-if="appendIcon"
      :name="appendIcon"
      size="16"
      class="x-list-item__append-icon"
      v-bind="appendIconProps"
    />
  </button>
</template>

<style>
.x-list-item {
  display: flex;
  vertical-align: middle;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 10px 16px;
  font-family: var(--font);
  font-size: var(--text);
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 16px;
  letter-spacing: normal;
  white-space: normal;
  text-align: left;
  text-transform: none;
  color: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  transition: background-color .2s;
  -webkit-tap-highlight-color: transparent;
}

.x-list-item__prepend-icon {
  margin-right: calc(var(--space) * 2);
  stroke: none;
}

.x-list-item__append-icon {
  margin-left: calc(var(--space) * 2);
  stroke: none;
}

.x-list-item__content {
  width: 100%;
  margin-right: auto;
}

.x-list-item.x-list-item--mark-selected-option:hover:not(.x-list-item--checked),
.x-list-item.x-list-item--mark-selected-option:focus-visible:not(.x-list-item--checked) {
  color: var(--white);
  background-color: var(--secondary);
}

.x-list-item:active {
  background-color: var(--secondary);
  transition: background-color 0s;
}

.x-list-item:hover {
  background-color: transparent;
}

.multiselect__option--highlight .x-list-item:not(.x-list-item--checked),
.multiselect__option--highlight:not(.x-list-item--checked) {
  background-color: transparent;
}

.x-list-item-check-fade-enter-active, .x-list-item-check-fade-leave-active {
  transition: opacity .2s cubic-bezier(0.25, 0.8, 0.5, 1), transform .2s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.x-list-item-check-fade-enter, .x-list-item-check-fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.x-list-item__checkmark {
  flex-shrink: 0;
  margin-right: calc(var(--space) * 2);
  margin-left: -8px;
  opacity: 0;
}

.x-list-item__checkmark--checked {
  color: var(--white);
  opacity: 1
}

.x-list-item--checked {
  color: var(--white);
}

.x-list-item.x-list-item--mark-selected-option:active,
.x-list-item--mark-selected-option.x-list-item--checked,
.x-list-item--mark-selected-option.x-list-item--checked:hover,
.x-list-item--mark-selected-option.x-list-item--checked:focus-visible,
.x-list-item--mark-selected-option.x-list-item--checked:active {
  background-color: transparent;
}

.multiselect__option--highlight .x-list-item.x-list-item--mark-selected-option,
.multiselect__option--highlight .x-list-item--checked.x-list-item--mark-selected-option {
  background-color: transparent;
}

.multiselect__option--highlight .x-list-item.x-list-item--mark-selected-option:hover {
  background-color: var(--secondary);
}

.x-list-item.x-list-item--mark-selected-option {
  width: calc(100% - 8px);
  margin: auto;
  padding-left: 12px;
  border-radius: var(--border-radius-1x);
}

.multiselect__content:has(.multiselect__option--selected) .x-list-item.x-list-item--mark-selected-option:not(.x-list-item--checked) {
  padding-left: 28px;
}

.multiselect__content:has(.multiselect__option--selected) .multiselect__option--highlight .x-list-item.x-list-item--mark-selected-option:not(.x-list-item--checked):hover,
.multiselect__content:has(.multiselect__option--selected) .multiselect__option--highlight .x-list-item.x-list-item--mark-selected-option:not(.x-list-item--checked):focus-visible {
  color: var(--gray-300);
  background-color: var(--secondary);
}

.x-select--mark-selected-option .multiselect__option--disabled.multiselect__option--group  .x-list-item {
  color: var(--white-40);
}

.multiselect__element .multiselect__option--disabled.multiselect__option--disabled.multiselect__option--group .x-list-item {
  padding-left: calc(var(--space) * 2);
}

.multiselect__content .x-select__before-list ~ .multiselect__element .x-list-item.x-list-item--mark-selected-option {
  padding-right: calc(var(--space) * 2);
  padding-left: calc(var(--space) * 8);
}

.multiselect__content .x-select__before-list ~ .multiselect__element .x-list-item__checkmark {
  margin-left: calc(var(--space) * (-6));
}

.x-list-item--truncate .x-list-item__content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.x-list-item.x-list-item--mark-selected-option.x-list-item--rounded {
  padding-left: calc(var(--space) * 8);
  border-radius: var(--border-radius-2x);
}

.x-list-item--rounded .x-list-item__checkmark {
  margin-left: calc(var(--space) * (-6));
}

.multiselect__content:has(.multiselect__option--selected) .x-list-item--rounded.x-list-item--mark-selected-option:not(.x-list-item--checked) {
  padding-left: calc(var(--space) * 8);
}
</style>
