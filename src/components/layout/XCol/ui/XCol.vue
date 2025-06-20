<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  col: {
    type: String,
    default: null,
  },
  auto: Boolean,
});

const computedClasses = computed(() => [
  'col',
  { 'col-auto': props.auto },
  { [`col-${props.col}`]: props.col },
]);
</script>

<template>
  <div :class="computedClasses">
    <slot />
  </div>
</template>

<style>
.col {
  flex: 1 0 0%;
}

.col, [class^="col-"] {
  padding-right: var(--col-gap);
  padding-left: var(--col-gap);
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 1);
}

.col-2 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 2);
}

.col-3 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 3);
}

.col-4 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 4);
}

.col-5 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 5);
}

.col-6 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 6);
}

.col-7 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 7);
}

.col-8 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 8);
}

.col-9 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 9);
}

.col-10 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 10);
}

.col-11 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 11);
}

.col-12 {
  flex: 0 0 auto;
  width: calc((100% / 12) * 12);
}
</style>
