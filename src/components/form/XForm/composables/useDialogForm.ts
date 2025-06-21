import { ref } from 'vue';
import { XForm } from '@form/XForm';

export default () => {
  const form = ref<InstanceType<typeof XForm>>();

  const onSubmitForm = (ref?: string) => {
    if (ref) {
      // @ts-ignore
      form.value?.$refs[ref].submit();
    } else {
      form.value?.submit();
    }
  };

  return { form, onSubmitForm };
};
