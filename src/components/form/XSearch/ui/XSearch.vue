<script setup lang="ts">
import { computed, useSlots, type PropType, toValue } from 'vue';
import { XButton } from '@general/XButton';
import { XSvgIcon } from '@general/XSvgIcon';
import { XSelect } from '@form/XSelect';
import { XInput } from '@form/XInput';
import options from '../config/options';
import { SearchMode } from '../types';
import { type Nullable } from '@/types/shared.types';

const slots = useSlots();

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'search',
  },
  placeholder: {
    type: String,
    default: 'Search',
  },
  color: {
    type: String,
    default: 'dark',
    validator: (v: string) => ['dark', 'tertiary'].includes(v),
  },
  mode: {
    type: String as PropType<SearchMode>,
    default: SearchMode.LINE_CONTAINS,
  },
  icon: {
    type: String as PropType<Nullable<string>>,
    default: null,
  },
  showMode: Boolean,
});

const emit = defineEmits<{
  (e: 'update:model-value', value: string): void,
  (e: 'update:mode', value: string): void,
  (e: 'clear', value: string): void
}>();

const model = computed({
  get() {
    return props.modelValue;
  },

  set(value: string) {
    emit('update:model-value', value);
  },
});

const searchMode = computed({
  get() {
    return props.mode;
  },

  set(value: string) {
    emit('update:mode', value);

    onClear();
  },
});

const computedClasses = computed(() => [
  'x-search',
  { 'x-search--fill': props.modelValue },
  { 'x-search--select': props.showMode },
]);

const onInput = (e: Event) => {
  if (slots.append) return;

  const target = e.target as HTMLInputElement;

  model.value = target.value;
};

const onClear = () => {
  emit('clear', toValue(model));
};

const computedSelectWidth = computed(() => props.mode === SearchMode.LINE_CONTAINS ? '203px' : '260px');

const computedIconProps = computed(() => ({
  class: 'x-search__icon',
  name: props.icon ?? 'search-right',
  size: '16',
  stroke: null,
}));
</script>

<template>
  <!-- TODO: Need to investigate why class='x-search' didn't work on x-input -->
  <div :class="computedClasses">
    <x-select
      v-if="showMode"
      v-model="searchMode"
      :options="options"
      :width="computedSelectWidth"
      size="xs"
      color="secondary"
      name="id"
      track-by="id"
      label="name"
      preselect-first
      flex
      rounded
    />

    <x-input
      v-model.trim="model"
      :placeholder="placeholder"
      :name="name"
      :color="color"
      autocomplete="off"
      @input="onInput"
    >
      <template #prepend>
        <x-svg-icon
          v-if="!model"
          v-bind="computedIconProps"
        />
      </template>

      <template #append>
        <slot name="append">
          <x-button
            v-if="model"
            icon="close"
            color="white"
            size="xxs"
            icon-size="12"
            class="x-search__clear"
            type="button"
            square
            text
            @click="onClear"
          />
        </slot>
      </template>
    </x-input>
  </div>
</template>

<style scoped>
.x-search ::v-deep(.x-input--focused) {
  border-color: var(--border-secondary);
}

.x-search::v-deep(.x-input) {
  border-radius: var(--border-radius-8x);
}

.x-search::v-deep(.x-input--tertiary) {
  color: var(--white);
  border-color: var(--secondary);
}

.x-search--fill::v-deep(.x-input--tertiary) {
  border-color: var(--content-background);
}

.x-search::v-deep(.x-input__field) {
  color: var(--white);
}

.x-search__clear {
  width: auto !important;
  height: auto !important;
}

.x-search__icon {
  color: #6e7073;
}

.x-search--select {
  display: flex;
  align-items: center;
  background-color: var(--content-background);
  border: 1px solid var(--secondary);
  border-radius: var(--border-radius-8x);
}

.x-search--select .x-search__clear {
  margin-right: calc(var(--space) * 4);
}

.x-search--select > :nth-child(2) {
  flex-grow: 1;
}

.x-search--select::v-deep(.x-input) {
  border: none;
}
</style>
