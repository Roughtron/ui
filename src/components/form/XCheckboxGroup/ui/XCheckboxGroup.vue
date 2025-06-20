<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { XCheckbox, type Checkbox } from '@form/XCheckbox';

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[] | number[]>,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  fields: {
    type: Array as PropType<Checkbox[]>,
    default: () => [],
  },
  checkboxProps: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[] | number[]): void
}>();

const selfValue = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div class="x-checkbox-group">
    <x-checkbox
      v-for="checkbox in fields"
      v-model="selfValue"
      :key="(checkbox.value as string)"
      :name="name"
      v-bind="{ ...checkbox, ...checkboxProps }"
    >
      {{ checkbox.label }}

      <template #text>
        <slot
          name="text"
          v-bind="checkbox"
        />
      </template>
    </x-checkbox>
  </div>
</template>

<style scoped>
.x-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space) * 2);
}
</style>
