<script setup lang="ts">
import { useAttrs, useTemplateRef, toValue } from 'vue';

const label = useTemplateRef<HTMLElement>('label');

const attrs = useAttrs();

const props = defineProps({
  htmlFor: {
    type: String,
  },
  required: Boolean,
});

const focus = () => {
  if (props.htmlFor) return;

  const input = toValue(label)?.nextElementSibling?.querySelector('input');
  if (input) {
    input.focus();
  }
};
</script>

<template>
  <div class="x-label">
    <label
      :for="htmlFor"
      ref="label"
      v-bind="attrs"
      @click="focus"
    >
      <slot />
      <span v-if="required">*</span>
    </label>
    <slot name="append" />
  </div>
</template>

<style scoped>
.x-label {
  display: inline-flex;
  align-items: center;
  margin-bottom: calc(var(--space) * 3);
  font-family: var(--font);
  font-size: var(--caption);
  font-weight: normal;
  font-style: normal;
  color: var(--white-60);
}

.x-label label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
</style>
