<script setup lang="ts">
import { reactive, computed, toValue, type PropType } from 'vue';
import { type Placement } from 'floating-vue';
import { XButton } from '@general/XButton';
import { XDropdown } from '@general/XDropdown';
import XDatePickerContent from './XDatePickerContent/XDatePickerContent.vue';
import { type DatepickerOption, DatepickerUnit } from '../types';

const props = defineProps({
  modelValue: {
    type: Object as PropType<DatepickerOption>,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<DatepickerOption[]>,
    default: () => [],
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
});

const emit = defineEmits<{
  (e: 'update:model-value', value: DatepickerOption): void,
}>();

const state = reactive({
  isShow: false,
});

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:model-value', value);
  },
});

const computedIcon = computed(() => state.isShow ? 'arrow-up': 'arrow-down');

const computedTitle = computed(() => {
  const { title, startDate, startTime, endDate, endTime, unit } = toValue(model);
  const isFormFilled = startDate && endDate;

  if (unit !== DatepickerUnit.RANGE) return title;

  if (isFormFilled) {
    return `${startDate} ${startTime ?? '00:00'} - ${endDate} ${endTime ?? '23:59'}`;
  }

  return 'Select date';
});

const computedIsWide = computed(() => props.placement === 'bottom-start');

const onToggleDropdown = () => {
  state.isShow = !state.isShow;
};

const computedProps = computed(() => ({
  placement: props.placement,
  distance: 8,
  autoBoundaryMaxSize: true,
  shown: state.isShow,
  triggers: [],
  class: 'x-date-picker',
}));
</script>

<template>
  <x-dropdown
    v-bind="computedProps"
    @hide="state.isShow = false"
  >
    <x-button
      :append="computedIcon"
      icon-size="8"
      class="x-date-picker__button"
      color="gray"
      @click="onToggleDropdown"
    >
      {{ computedTitle }}
    </x-button>

    <template #popper>
      <x-date-picker-content
        v-model="model"
        :options="options"
        :is-wide="computedIsWide"
      />
    </template>
  </x-dropdown>
</template>

<style scoped>
.x-date-picker__button {
  min-width: 203px;
  font-size: var(--text);
}

.x-date-picker__button ::v-deep(.x-button__content) {
  font-size: var(--text);
  font-weight: 400;
  background-color: var(--content-background);
  border-color: var(--content-background) !important;
}

.x-date-picker__button ::v-deep(.x-button__append) {
  margin-left: calc(var(--space) * 3);
}

.x-date-picker__button:hover ::v-deep(.x-button__content),
.v-popper--shown .x-date-picker__button ::v-deep(.x-button__content) {
  background-color: var(--content-background) !important;
  border-color: var(--secondary) !important;
}
</style>
