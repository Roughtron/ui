<script setup lang="ts">
import { ref } from 'vue';
import { Form as VeeForm } from 'vee-validate';
import { type FormSubmitPayload, type Actions } from '../types';

const form = ref<HTMLFormElement>();

const veeform = ref<HTMLFormElement>();

const emit = defineEmits<{
  (e: 'submit', model: FormSubmitPayload<any>, actions: Actions): void
}>();

const submit = () => {
  form.value?.dispatchEvent(new Event('submit', { cancelable: true }));
};

const validate = async () => {
  return await veeform.value?.validate();
};

const resetForm = () => {
  veeform.value?.resetForm();
};

const onSubmit = (model: FormSubmitPayload<any>, actions: Actions) => {
  emit('submit', model, actions);
};

defineExpose({
  submit,
  validate,
  resetForm,
});
</script>

<template>
  <vee-form
    ref="veeform"
    v-slot="{ handleSubmit }"
    as="div"
  >
    <form
      ref="form"
      @submit="handleSubmit($event, onSubmit)"
    >
      <slot />
    </form>
  </vee-form>
</template>
