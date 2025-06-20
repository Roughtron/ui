<script setup lang="ts">
import { reactive, computed, type PropType } from 'vue';
import { XSearch } from '@form/XSearch';
import XDatePickerQuickLinksList from '../XDatePickerQuickLinksList/XDatePickerQuickLinksList.vue';
import { type DatepickerOption } from '../../types';

const props = defineProps({
  modelValue: {
    type: Object as PropType<DatepickerOption>,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<DatepickerOption[]>,
    default: () => [],
  },
});

const emit = defineEmits<{
  (e: 'update:model-value', value: DatepickerOption): void,
}>();

const state = reactive({
  search: '',
});

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value: DatepickerOption) {
    emit('update:model-value', value);
  },
});

const computedOptions = computed(() => {
  if (!state.search) return props.options;

  return props.options.filter(({ title }) => title.toLowerCase().includes(state.search.toLowerCase()));
});

const onSearchClean = () => {
  state.search = '';
};
</script>

<template>
  <div class="x-date-picker-quick-links">
    <x-search
      v-model="state.search"
      :show-submit="false"
      color="tertiary"
      placeholder="Search quick ranges"
      class="mb-2"
      @clear="onSearchClean"
    />

    <x-date-picker-quick-links-list
      v-model="model"
      :options="computedOptions"
    />
  </div>
</template>
