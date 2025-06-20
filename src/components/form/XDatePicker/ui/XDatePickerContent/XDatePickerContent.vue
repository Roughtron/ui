<script setup lang="ts">
import { reactive, computed, toValue, type PropType, watch } from 'vue';
import { hideAllPoppers } from 'floating-vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { XButton } from '@general/XButton';
import { XRow } from '@layout/XRow';
import { XCol } from '@layout/XCol';
import XDatePickerQuickLinks from '../XDatePickerQuickLinks/XDatePickerQuickLinks.vue';
import XDatePickerForm from '../XDatePickerForm/XDatePickerForm.vue';
import { isValidDate, isValidTime, getFormattedDate, isBefore } from '../shared';
import { type DatepickerOption, DatepickerUnit } from '../../types';

dayjs.extend(customParseFormat);

const props = defineProps({
  modelValue: {
    type: Object as PropType<DatepickerOption>,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<DatepickerOption[]>,
    default: () => [],
  },
  isWide: Boolean,
});

const emit = defineEmits<{
  (e: 'update:model-value', value: DatepickerOption): void,
}>();

const state = reactive({
  model: props.modelValue,
  form: {
    id: -1,
    title: '',
    value: -1,
    unit: DatepickerUnit.RANGE,
    startDate: props.modelValue.startDate ?? '',
    startTime: props.modelValue.startTime ?? '',
    endDate: props.modelValue.endDate ?? '',
    endTime: props.modelValue.endTime ?? '',
  } as DatepickerOption,
});

const cancelProps = computed(() => ({
  type: 'button',
  color: 'gray',
  size: 'xs',
  block: true,
}));

const submitProps = computed(() => ({
  type: 'submit',
  size: 'xs',
  block: true,
  disabled: toValue(isFormTouched)
    ? !toValue(isFormFilled) || !toValue(isFormValid)
    : state.model.value === undefined,
}));

const isFormValid = computed(() => {
  const { startDate, startTime = '', endDate, endTime = '' } = state.form;

  if (!startDate || !endDate) return false;

  if (!isValidDate(startDate) || !isValidDate(endDate)) return false;

  if (!isValidTime(startTime || '00:00') || !isValidTime(endTime || '23:59')) return false;

  const start = getFormattedDate({ date: startDate, time: startTime });
  const end = getFormattedDate({ date: endDate, time: endTime || '23:59' });

  return isBefore(start, end);
});

const isFormTouched = computed(() => {
  const { startDate, startTime, endDate, endTime } = state.form;

  return startDate || startTime || endDate || endTime;
});

const isFormFilled = computed(() => {
  const { startDate, endDate } = state.form;

  return Boolean(startDate && endDate);
});

const onCancelClick = () => {
  hideAllPoppers();
};

const onApplyClick = () => {
  emit('update:model-value', state.model.unit
    ? state.model
    : ({
      ...state.form,
      startTime: state.form.startTime || '00:00',
      endTime: state.form.endTime || '23:59',
    }) as DatepickerOption,
  );

  hideAllPoppers();
};

watch(() => props.modelValue, () => {
  if (props.modelValue.unit === DatepickerUnit.RANGE) {
    state.form = props.modelValue;
  } else {
    state.model = props.modelValue;
  }
});

watch(() => state.form, () => {
  if (state.model.value !== undefined && toValue(isFormTouched)) {
    state.model = {};
  }
}, { deep: true });

watch(() => state.model, () => {
  if (state.model.value !== undefined && toValue(isFormTouched)) {
    state.form = {
      ...state.form,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    } as DatepickerOption;
  }
}, { deep: true });

const computedClasses = computed(() => ([
  'x-date-picker-content',
  {
    'x-date-picker-content--wide': props.isWide,
  },
]));
</script>

<template>
  <x-row :class="computedClasses">
    <x-col
      class="x-date-picker-content__links"
      auto
    >
      <x-date-picker-quick-links
        v-model="state.model"
        :options="options"
      />
    </x-col>

    <x-col auto>
      <x-date-picker-form
        v-model="state.form"
        class="x-date-picker-content__form"
      />

      <div class="d-flex justify-between mt-6">
        <x-button
          v-bind="cancelProps"
          @click="onCancelClick"
        >
          Cancel
        </x-button>

        <x-button
          v-bind="submitProps"
          @click="onApplyClick"
        >
          Apply
        </x-button>
      </div>
    </x-col>
  </x-row>
</template>

<style scoped>
.x-date-picker-content {
  width: 508px;
}

.x-date-picker-content--wide {
  width: auto;
  flex-wrap: nowrap;
}

.x-date-picker-content__links {
  flex-shrink: 0;
  flex-basis: 256px;
  margin-right: calc(var(--space) * 6);
}

.x-date-picker-content__form {
  flex-shrink: 0;
  flex-basis: 256px;
}
</style>
