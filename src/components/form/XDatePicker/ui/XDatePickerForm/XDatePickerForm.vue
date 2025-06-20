<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { XForm } from '@form/XForm';
import { XFormItem } from '@form/XFormItem';
import { XInput } from '@form/XInput';
import schema from './schema';
import { type DatepickerOption } from '../../types';

const props = defineProps({
  modelValue: {
    type: Object as PropType<DatepickerOption>,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (e: 'update:model-value', value: DatepickerOption): void,
}>();

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:model-value', value);
  },
});
</script>

<template>
  <x-form
    :validation-schema="schema"
    class="x-date-picker-form"
  >
    <fieldset class="x-date-picker-form__fieldset">
      <x-form-item
        label="Start date"
        html-for="startDate"
        class="mb-2"
        no-label
      >
        <template #default="fieldProps">
          <x-input
            v-model="model.startDate"
            v-bind="fieldProps"
            :show-error="false"
            name="startDate"
            mask="##/##/####"
            placeholder="dd/mm/yyyy"
            size="m"
            rounded
          />
        </template>
      </x-form-item>

      <x-form-item
        label="Start time"
        html-for="startTime"
        no-label
      >
        <template #default="fieldProps">
          <x-input
            v-model="model.startTime"
            v-bind="fieldProps"
            :show-error="false"
            name="startTime"
            mask="##:##"
            placeholder="hh:mm"
            size="m"
            rounded
          />
        </template>
      </x-form-item>
    </fieldset>

    <fieldset class="x-date-picker-form__fieldset">
      <x-form-item
        label="End date"
        html-for="endDate"
        class="mb-2"
        no-label
      >
        <template #default="fieldProps">
          <x-input
            v-model="model.endDate"
            v-bind="fieldProps"
            :show-error="false"
            name="endDate"
            mask="##/##/####"
            placeholder="dd/mm/yyyy"
            size="m"
            rounded
          />
        </template>
      </x-form-item>

      <x-form-item
        label="End time"
        html-for="endTime"
        no-label
      >
        <template #default="fieldProps">
          <x-input
            v-model="model.endTime"
            v-bind="fieldProps"
            :show-error="false"
            name="endTime"
            mask="##:##"
            placeholder="hh:mm"
            size="m"
            rounded
          />
        </template>
      </x-form-item>
    </fieldset>
  </x-form>
</template>

<style scoped>
.x-date-picker-form__fieldset + .x-date-picker-form__fieldset {
  margin-top: calc(var(--space) * 6);
}
</style>
