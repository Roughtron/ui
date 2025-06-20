<script setup lang="ts">
import { toRef, watch } from 'vue';
import { useField } from 'vee-validate';
import { XFieldError } from '@form/XFieldError';

const props = defineProps({
  value: {
    type: null,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(toRef(props, 'name'), undefined, {
  syncVModel: true,
  initialValue: props.value,
});

watch(() => props.value, value => inputValue.value = value);
</script>

<template>
  <span>
    <slot v-bind="{ inputValue, handleBlur, handleChange }" />

    <slot
      name="error"
      v-bind="{ errorMessage }"
    >
      <x-field-error :message="errorMessage" />
    </slot>
  </span>
</template>
