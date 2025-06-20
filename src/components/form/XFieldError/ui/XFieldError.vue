<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: null,
  },
});

</script>

<template>
  <div
    v-if="message"
    v-html="message"
    class="x-field-error"
  />
</template>

<style scoped>
.x-field-error {
  margin-top: var(--space);
  padding-bottom: calc(var(--space) * 2);
  font-size: var(--caption);
  font-weight: 400;
  line-height: 1.3;
  color: var(--danger-error);
}
</style>
