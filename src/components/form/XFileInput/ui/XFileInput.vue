<script setup lang="ts">
import { computed, type PropType, toValue, useTemplateRef } from 'vue';
import { XButton } from '@general/XButton';
import { XValidationFormItem } from '@form/XValidationFormItem';
import { useReactiveArrayModel } from '@form/XForm';
import { type FileInput } from '../types';

const props = defineProps({
  modelValue: {
    type: Array as PropType<FileInput[]>,
    default: () => [],
  },
  name: {
    type: String,
    default: 'imageUploads',
  },
  maxFiles: {
    type: Number,
    default: Infinity,
    validator: (v: number) => v >= 1 || v === Infinity,
  },
  maxFileSize: {
    type: Number,
    default: 5,
  },
  accept: {
    type: String,
    default: 'image/png, image/jpeg',
  },
  placeholder: {
    type: String,
    default: 'Add your files here',
  },
});

const input = useTemplateRef<HTMLElement>('input');

const emit = defineEmits<{
  (e: 'update:modelValue', value: FileInput[]): void,
}>();

const selfValue = computed(() => useReactiveArrayModel(props.modelValue, emit));

const isUnlimitedFiles = computed(() => props.maxFiles === Infinity);

const canAddMoreFiles = computed(() => toValue(isUnlimitedFiles) || toValue(selfValue).length < props.maxFiles);

const isMultiple = computed(() => toValue(isUnlimitedFiles) || props.maxFiles > 1);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const { maxFiles } = props;

  if (!target.files) return;

  const fileLimit = toValue(isUnlimitedFiles)
    ? undefined
    : maxFiles - toValue(selfValue).length;

  const attachedFileNames = selfValue.value.map(({ fileName }) => fileName);

  const newFiles = Array.from(target.files)
    .filter(({ name }) => !attachedFileNames.includes(name))
    .slice(0, fileLimit);

  newFiles.forEach(file => {
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = {
        fileName: file.name,
        contentBase64: (reader.result as string).split(',')[1],
        mimeType: file.type,
        preview: URL.createObjectURL(file),
      };

      selfValue.value.push(fileData);
    };

    reader.readAsDataURL(file);
  });

  if (input.value) {
    (input.value as HTMLInputElement).value = '';
  }
};

const removeFile = (index: number) => selfValue.value.splice(index, 1);
</script>

<template>
  <x-validation-form-item
    :name="name"
    :value="selfValue"
  >
    <div class="x-file-input">
      <input
        v-show="false"
        ref="input"
        id="input"
        :multiple="isMultiple"
        :name="name"
        :max="maxFiles"
        :accept="accept"
        type="file"
        @change="handleFileChange"
      />

      <label
        v-if="!selfValue.length"
        class="x-file-input__header"
        for="input"
      >
        {{ placeholder }}
      </label>

      <ul
        v-else
        class="x-file-input__preview"
      >
        <li
          v-for="(file, index) in selfValue"
          :key="index"
          class="x-file-input__preview-item"
        >
          <img
            :src="file.preview"
            :alt="file.fileName"
            class="x-file-input__preview-image"
          />

          <x-button
            type="button"
            class="x-file-input__remove-button"
            icon="close"
            color="gray"
            icon-size="8px"
            size="xxxs"
            round
            @click="removeFile(index)"
          />
        </li>

        <label
          v-if="canAddMoreFiles"
          class="x-file-input__add-item"
          for="input"
        >
          <x-button
            type="button"
            class="x-file-input__add-button"
            icon="plus"
            color="gray"
            size="xxxs"
            text
          />
        </label>
      </ul>
    </div>
  </x-validation-form-item>
</template>

<style scoped>
.x-file-input__header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 76px;
  font-size: var(--text);
  font-weight: 300;
  line-height: 1.4;
  text-align: center;
  color: var(--gray-200);
  border: 1px dashed var(--gray-700);
  border-radius: var(--border-radius-4x);
  cursor: pointer;
}

.x-file-input__preview {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space) * 3);
  padding: calc(var(--space) * 3);
}

.x-file-input__preview-item {
  position: relative;
  width: 154px;
  height: 84px;
  overflow: hidden;
  border: 1px solid var(--gray-700);
  border-radius: var(--border-radius-4x);
}

.x-file-input__preview-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.x-file-input__remove-button {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.x-file-input__remove-button::v-deep(.x-button__content) {
  width: 16px;
  height: 16px;
}

.x-file-input__remove-button::v-deep(.x-button__icon) {
  flex-shrink: 0;
}

.x-file-input__add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 84px;
  border: 1px dashed var(--gray-700);
  border-radius: var(--border-radius-4x);
  cursor: pointer;
}

.x-file-input__add-button:active {
  pointer-events: none;
}
</style>