<script setup lang="ts">
import { computed } from 'vue';
import XSvgIcon from '../XSvgIcon/XSvgIcon.vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'gray', 'white'].includes(v),
  },
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['xs', 's', 'm', 'l'].includes(v),
  },
  mini: Boolean,
});

const computedClass = computed(() => [
  'x-loader',
  `x-loader--color-${props.color}`,
  `x-loader--size-${props.size}`,
  { 'x-loader--mini': props.mini },
]);

</script>

<template>
  <div
    v-if="mini"
    :class="computedClass"
  >
    <div class="x-loader__dot" />
  </div>
  <x-svg-icon
    v-else
    :class="computedClass"
    name="loader"
  />
</template>

<style scoped>
.x-loader {
  display: inline-block;
  box-sizing: border-box;
  transform-origin: center;
  animation: rotation 1.5s linear infinite;
}

.x-loader--color-primary {
  color: var(--primary);
}

.x-loader--color-secondary {
  color: var(--secondary);
}

.x-loader--color-white {
  color: var(--white);
}

.x-loader--size-xs {
  width: 20px;
  height: 20px;
}

.x-loader--size-s {
  width: 48px;
  height: 48px;
}

.x-loader--size-m {
  width: 80px;
  height: 80px;
}

.x-loader--size-l {
  width: 120px;
  height: 120px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  75% {
    transform: rotate(-270deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.x-loader--mini {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: none;
}

.x-loader__dot {
  position: relative;
  left: -9999px;
  width: calc(var(--space) * 2);
  height: calc(var(--space) * 2);
  color: currentColor;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 9999px 0 0 -5px;
  animation: dot-pulse 1.5s infinite linear;
  animation-delay: 0.25s;
}
.x-loader__dot:before,
.x-loader__dot:after {
  content: "";
  position: absolute;
  top: 0;
  display: inline-block;
  width: calc(var(--space) * 2);
  height: calc(var(--space) * 2);
  color: currentColor;
  background-color: currentColor;
  border-radius: 50%;
}
.x-loader__dot:before {
  box-shadow: 9984px 0 0 -5px;
  animation: dot-pulse-before 1.5s infinite linear;
  animation-delay: 0s;
}
.x-loader__dot:after {
  box-shadow: 10007px 0 0 -5px;
  animation: dot-pulse-after 1.5s infinite linear;
  animation-delay: 0.5s;
}

@keyframes dot-pulse-before {
  0% {
    box-shadow: 9984px 0 0 -5px;
  }
  30% {
    box-shadow: 9984px 0 0 1px;
  }
  60%, 100% {
    box-shadow: 9984px 0 0 -5px;
  }
}

@keyframes dot-pulse {
  0% {
    box-shadow: 9999px 0 0 -5px;
  }
  30% {
    box-shadow: 9999px 0 0 1px;
  }
  60%, 100% {
    box-shadow: 9999px 0 0 -5px;
  }
}

@keyframes dot-pulse-after {
  0% {
    box-shadow: 10007px 0 0 -5px;
  }
  30% {
    box-shadow: 10007px 0 0 1px;
  }
  60%, 100% {
    box-shadow: 10007px 0 0 -5px;
  }
}
</style>