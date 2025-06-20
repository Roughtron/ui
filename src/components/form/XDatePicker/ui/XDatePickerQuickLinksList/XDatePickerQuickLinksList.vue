<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { XButton } from '@general/XButton';
import { XSvgIcon } from '@general/XSvgIcon';
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

const model = computed({
  get() {
    return props.modelValue;
  },

  set(option: DatepickerOption) {
    emit('update:model-value', option);
  },
});

const onClick = (option: DatepickerOption) => {
  model.value = option;
};
</script>

<template>
  <div
    v-if="options.length"
    class="x-date-picker-quick-links-list"
  >
    <div class="x-date-picker-quick-links-list__content">
      <ul class="x-date-picker-quick-links-list__in">
        <li
          v-for="option in options"
          :key="option.id"
          class="x-date-picker-quick-links-list__item"
          :class="{ 'x-date-picker-quick-links-list__item--active': option.id === model.id }"
        >
          <x-button
            type="button"
            class="x-date-picker-quick-links-list__link"
            color="gray"
            size="xs"
            ghost
            @click="onClick(option)"
          >
            {{ option.title }}
          </x-button>

          <x-svg-icon
            v-if="option.id === model.id"
            class="x-date-picker-quick-links-list__check"
            name="checkmark"
            size="16"
          />
        </li>
      </ul>
    </div>
  </div>

  <div v-else>
    <p class="x-date-picker-quick-links-list__empty">
      No shortcuts found.
    </p>
    <p class="x-date-picker-quick-links-list__empty">
      'Please adjust your search or try entering specific dates and times manually.'
    </p>
  </div>
</template>

<style scoped>
.x-date-picker-quick-links-list {
  display: flex;
  flex-direction: column;
  max-height: 280px;
  overflow: hidden;
}

.x-date-picker-quick-links-list__content {
  flex-grow: 1;
  overflow: auto;
}

.x-date-picker-quick-links-list__in {
  list-style: none;
}

.x-date-picker-quick-links-list__item {
  display: flex;
  align-items: center;
}

.x-date-picker-quick-links-list__link ::v-deep(.x-button__content) {
  height: 32px;
  font-size: var(--text);
  font-weight: 400;
  color: var(--gray-600)!important;
}

.x-date-picker-quick-links-list__link:hover ::v-deep(.x-button__content),
.x-date-picker-quick-links-list__item--active ::v-deep(.x-button__content) {
  color: var(--white)!important;
}

.x-date-picker-quick-links-list__check {
  color: var(--white);
}

.x-date-picker-quick-links-list__empty {
  font-size: var(--text);
  font-weight: 400;
  color: var(--gray-600);
}

.x-date-picker-quick-links-list__empty + .x-date-picker-quick-links-list__empty {
  margin-top: 10px;
}
</style>
