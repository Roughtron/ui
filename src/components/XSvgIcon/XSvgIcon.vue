<script setup lang="ts">
import { computed, toValue, type PropType, onMounted, ref } from 'vue';
import { type CSSSize } from '@/types/shared';

const isShow = ref(false);
const prefix = 'icon';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: null,
  },
  size: {
    type: [String, Array] as PropType<CSSSize>,
    default: '20px',
  },
});

const getSize = (size: string) => size.includes('px') ? size : `${size}px`;

const symbolId = computed(() => `#${prefix}-${props.name.toLowerCase()}`);

const computedSize = computed(() => {
  if (Array.isArray(props.size)) {
    const [width, height] = props.size;

    return {
      width: getSize(width),
      height: getSize(height),
    };
  }

  const size = getSize(props.size);

  return {
    width: size,
    height: size,
  };
});

const computedWidth = computed(() => toValue(computedSize).width);
const computedHeight = computed(() => toValue(computedSize).height);

onMounted(() => isShow.value = true);
</script>

<template>
  <svg
    v-show="isShow"
    class="x-svg-icon"
    aria-hidden="true"
  >
    <use
      :href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<style>
.x-svg-icon {
  width: v-bind(computedWidth);
  height: v-bind(computedHeight);
  fill: currentColor;
  stroke: currentColor;
}
</style>
