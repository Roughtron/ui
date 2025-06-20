<script setup lang="ts">
import { computed, type PropType } from 'vue';
import XSvgIcon from '../XSvgIcon/XSvgIcon.vue';
import XLoader from '../XLoader/XLoader.vue';
import { type CssSize } from '@/types/shared.types';

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'gray', 'danger', 'promo', 'stripe', 'white', 'black'].includes(v),
  },
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['xxxs', 'xxs', 'xs', 's', 'm', 'l'].includes(v),
  },
  iconSize: {
    type: [String, Array] as PropType<CssSize>,
  },
  iconProps: {
    type: Object,
  },
  disabled: Boolean,
  to: [String, Object],
  href: String,
  target: {
    type: String,
    validator: (v: string) => ['_self', '_blank', '_top'].includes(v),
  },
  download: [String, Boolean],
  outline: Boolean,
  block: Boolean,
  loading: Boolean,
  icon: String,
  ghost: Boolean,
  text: Boolean,
  prepend: String,
  append: String,
  square: Boolean,
  round: Boolean,
  table: Boolean,
});

const componentTag = computed(() => {
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});

const computedProps = computed(() => {
  if (props.to) {
    return { to: props.to };
  }

  if (props.href) {
    return {
      href: props.href,
      target: props.target || ((props.download || props.download === '') ? null : '_blank'),
      download: props.download,
    };
  }

  return null;
});

const computedClasses = computed(() => [
  'x-button',
  'x-button--size-' + props.size,
  'x-button--' + props.color,
  {
    'x-button--block': props.block,
    'x-button--outline': props.outline,
    'x-button--ghost': props.ghost,
    'x-button--text': props.text,
    'x-button--loading': props.loading,
    'x-button--square': props.square,
    'x-button--round': props.round,
    'x-button--table': props.table,
  }],
);

const computedLoaderColor = computed(() => ['primary', 'danger'].includes(props.color) ? 'white' : 'primary');
</script>

<template>
  <component
    :is="componentTag"
    :class="computedClasses"
    :disabled="disabled"
    v-bind="computedProps"
  >
    <div class="x-button__content">
      <x-loader
        v-if="loading"
        :color="computedLoaderColor"
        class="x-button__loader"
        mini
      />
      <div class="x-button__content-in">
        <x-svg-icon
          v-if="prepend"
          :name="prepend"
          :size="iconSize"
          class="x-button__prepend"
          v-bind="iconProps"
        />
        <x-svg-icon
          v-if="icon"
          :name="icon"
          :size="iconSize"
          class="x-button__icon"
          v-bind="iconProps"
        />
        <slot v-else />
        <x-svg-icon
          v-if="append"
          :name="append"
          :size="iconSize"
          class="x-button__append"
          v-bind="iconProps"
        />
        <slot name="append" />
      </div>
    </div>
  </component>
</template>

<style scoped>
  .x-button {
    display: inline-flex;
    vertical-align: middle;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    font-family: var(--font);
    font-size: var(--heading-16);
    font-weight: 500;
    font-stretch: normal;
    line-height: 19px;
    letter-spacing: normal;
    white-space: nowrap;
    text-decoration: none;
    text-transform: none;
    color: transparent;
    background: none;
    border: none;
    border-radius: var(--border-radius-10x);
    outline: none;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  .x-button__content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 calc((var(--space) * 1.5) - 1px);
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: inherit;
    box-sizing: border-box;
    transition: background-color .2s, border-color .2s, color .1s, transform ease .2s;
    transform-origin: center;
  }

  .x-button__content-in {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .x-button__content .x-button__prepend,
  .x-button__content content .x-button__icon,
  .x-button__content .x-button__append {
    stroke: none;
    transition: color .1s;
  }

  .x-button .x-button__content .x-button__prepend,
  .x-button .x-button__content .x-button__icon,
  .x-button .x-button__content .x-button__append {
    stroke: none;
  }

  .x-button:active:not(:disabled) .x-button__content {
    transition: background-color 0s, border-color 0s, color 0s, transform linear 0s;
  }

  .x-button:active:not(:disabled) .x-button__content .x-button__prepend,
  .x-button:active:not(:disabled) .x-button__content .x-button__icon,
  .x-button:active:not(:disabled) .x-button__content .x-button__append {
    transition: color 0s;
  }

  .x-button + .x-button {
    margin-left: calc(var(--space)* 3);
  }

  .x-button:disabled {
    cursor: not-allowed;
  }

  .x-button__prepend {
    margin-right: calc(var(--space) * 2);
    margin-left: calc(var(--space) * (-1));
  }

  .x-button__append {
    margin-right: calc(var(--space) * (-1));
    margin-left: calc(var(--space) * 2);
  }

  .x-button--loading {
    pointer-events: none;
  }

  .x-button--loading .x-button__content-in {
    opacity: 0;
  }

  .x-button__loader {
    position: absolute;
  }

  .x-button--primary .x-button__content {
    color: var(--primary-black);
    background-color: var(--primary);
  }

  .x-button--primary:hover .x-button__content {
    background-color: var(--primary-hover);
  }

  .x-button--primary:active .x-button__content {
    background-color: var(--white);
  }

  .x-button--primary:disabled .x-button__content {
    opacity: .4;
  }

  .x-button--primary.x-button--table .x-button__content {
    color: var(--secondary-hover);
    background-color: transparent;
    border: 1px solid var(--secondary-hover);
  }

  .x-button--primary.x-button--table:hover .x-button__content {
    color: var(--primary);
    background-color: transparent;
  }

  .x-button--primary.x-button--table:active .x-button__content {
    color: var(--primary);
    background-color: transparent;
    border: 1px solid var(--primary);
  }

  .x-button--gray .x-button__content {
    color: var(--white);
    background-color: var(--promo-gray);
    border-color: var(--border-secondary);
  }

  .x-button--white .x-button__content {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--white);
  }

  .x-button--gray .x-button__content .x-button__prepend,
  .x-button--gray .x-button__content .x-button__icon,
  .x-button--gray .x-button__content .x-button__append {
    color: var(--white);
  }

  .x-button--gray:hover .x-button__content {
    background-color: var(--gray-700);
  }

  .x-button--gray:active .x-button__content {
    background-color: var(--secondary-content-background);
  }

  .x-button--gray:disabled .x-button__content {
    opacity: .4;
  }

  .x-button--gray.x-button--table .x-button__content,
  .x-button--gray.x-button--table .x-button__icon,
  .x-button--gray.x-button--table .x-button__prepend,
  .x-button--gray.x-button--table .x-button__append {
    padding: 0;
    color: var(--secondary-hover);
    background-color: transparent;
    border: none;
  }

  .x-button--gray.x-button--table:hover .x-button__content,
  .x-button--gray.x-button--table:hover .x-button__icon,
  .x-button--gray.x-button--table:hover .x-button__prepend,
  .x-button--gray.x-button--table:hover .x-button__append {
    color: var(--primary);
  }

  .x-button--gray:disabled .x-button__content .x-button__prepend,
  .x-button--gray:disabled .x-button__content .x-button__icon,
  .x-button--gray:disabled .x-button__content .x-button__append {
    opacity: .6;
  }

  .x-button--black .x-button__content {
    color: var(--primary);
    background-color: var(--primary-black);
  }

  .x-button--black:hover .x-button__content {
    background-color: var(--content-background);
  }

  .x-button--black:active .x-button__content {
    color: var(--primary-black);
    background-color: var(--white);
  }

  .x-button--danger .x-button__content {
    color: var(--white);
    background-color: var(--danger);
  }

  .x-button--danger:hover .x-button__content {
    background-color: var(--danger-hover);
  }

  .x-button--danger:active .x-button__content {
    color: var(--primary-black);
    background-color: var(--danger-active);
  }

  .x-button--danger:disabled .x-button__content {
    color: var(--gray-100);
    background-color: var(--danger-disabled);
  }

  .x-button--danger.x-button--table .x-button__content {
    padding: 0;
    color: var(--secondary-hover);
    background-color: transparent;
    border: none;
  }

  .x-button--danger.x-button--table:hover .x-button__content {
    color: var(--danger);
    background-color: transparent;
  }

   .x-button--danger.x-button--table:active .x-button__content {
    color: var(--danger);
    background-color: transparent;
  }

  .x-button--round .x-button__content {
    border-radius: 50%;
  }

  .x-button--round .x-button__icon {
    flex-shrink: 0;
  }

  .x-button--square {
    border-radius: var(--border-radius-2x);
  }

  .x-button--promo {
    font-size: var(--text);
    font-weight: 300;
    color: var(--white);
    background: #FFFFFF29;
    box-shadow: 0 0 16px 0 #FFFFFF66 inset;
    transition: 0.3s ease;
    backdrop-filter: blur(13px);
  }

  .x-button--promo:hover,
  .x-button--promo:active {
    background: #ffffff4d;
  }

  .x-button--promo.x-button--text {
    padding: 0;
    background-color: transparent;
    transition: color .15s;
  }

  .x-button--stripe .x-button__content {
    color: var(--white);
    background-color: #6772e5;
  }

  .x-button--stripe:hover .x-button__content {
    background-color: #7c85e4;
  }

  .x-button--outline .x-button__content {
    background-color: transparent;
    border: 1px solid;
  }

  .x-button--outline.x-button--primary .x-button__content {
    color: var(--primary);
    background: transparent;
    border-color: var(--secondary-content-background);
  }

  .x-button--outline.x-button--primary:hover .x-button__content {
    color: var(--primary);
    background: transparent;
    border-color: var(--primary-hover);
  }

  .x-button--outline.x-button--primary:active .x-button__content {
    color: var(--primary);
    background: transparent;
    border-color: var(--primary);
  }

  .x-button--outline.x-button--primary:disabled .x-button__content {
    background: transparent;
    opacity: .4;
  }

  .x-button--outline.x-button--primary.x-button--loading .x-button__content {
    color: var(--primary);
  }

  .x-button--outline.x-button--gray .x-button__content {
    color: var(--gray-600);
    background-color: transparent;
    border-color: var(--gray-600);
  }

  .x-button--outline.x-button--gray .x-button__content .x-button__prepend,
  .x-button--outline.x-button--gray .x-button__content .x-button__icon,
  .x-button--outline.x-button--gray .x-button__content .x-button__append {
    color: var(--gray-600);
  }

  .x-button--outline.x-button--gray:hover .x-button__content,
  .x-button--outline.x-button--gray:hover .x-button__content .x-button__prepend,
  .x-button--outline.x-button--gray:hover .x-button__content .x-button__icon,
  .x-button--outline.x-button--gray:hover .x-button__content .x-button__append {
    color: var(--gray-100);
    background-color: transparent;
    border-color: var(--gray-100);
  }

  .x-button--outline.x-button--gray:active .x-button__content,
  .x-button--outline.x-button--gray:active .x-button__content .x-button__prepend,
  .x-button--outline.x-button--gray:active .x-button__content .x-button__icon,
  .x-button--outline.x-button--gray:active .x-button__content .x-button__append {
    color: var(--primary);
    background-color: transparent;
    border-color: var(--primary);
  }

  .x-button--outline.x-button--gray:disabled .x-button__content {
     opacity: .4;
  }

  .x-button--outline.x-button--danger .x-button__content,
  .x-button--outline.x-button--danger .x-button__content .x-button__prepend,
  .x-button--outline.x-button--danger .x-button__content .x-button__icon,
  .x-button--outline.x-button--danger .x-button__content .x-button__append {
    color: var(--danger-light);
    border-color: var(--border-secondary);
  }

  .x-button--outline.x-button--danger:hover .x-button__content {
    background-color: var(--secondary-hover);
  }

  .x-button--outline.x-button--danger:active .x-button__content {
    background-color: var(--secondary);
  }

  .x-button--outline.x-button--danger:disabled .x-button__content {
    color: var(--danger-light-40);
    background-color: var(--secondary);
  }

  .x-button--ghost .x-button__content {
    padding: 0 calc(var(--space) - 1px);
    border-color: transparent;
  }

  .x-button--ghost.x-button--primary .x-button__content {
    color: var(--primary);
    background-color: transparent;
  }

  .x-button--ghost.x-button--primary:hover .x-button__content {
    background-color: var(--primary-hover);
  }

  .x-button--ghost.x-button--primary:active .x-button__content {
    background-color: var(--primary-active);
  }

  .x-button--ghost.x-button--primary:disabled .x-button__content {
    color: var(--primary-disabled);
    background-color: transparent;
  }

  .x-button--ghost.x-button--primary.x-button--loading .x-button__content {
    background-image: linear-gradient(-45deg, var(--primary) 25%, var(--primary-hover) 25%, var(--primary-hover) 50%, var(--primary) 50%, var(--primary) 75%, var(--primary-hover) 75%, var(--primary-hover));
  }

  .x-button--ghost.x-button--gray .x-button__content {
    padding: 0 calc(var(--space) * 3);
    color: var(--white);
    background-color: transparent;
  }

  .x-button--ghost.x-button--gray .x-button__content .x-button__prepend,
  .x-button--ghost.x-button--gray .x-button__content .x-button__icon,
  .x-button--ghost.x-button--gray .x-button__content .x-button__append {
    color: var(--white);
  }

  .x-button--ghost.x-button--gray:hover .x-button__content {
    background-color: var(--secondary-hover);
  }

  .x-button--ghost.x-button--gray:active .x-button__content {
    background-color: var(--secondary-active);
  }

  .x-button--ghost.x-button--gray:disabled .x-button__content {
    background-color: transparent;
  }

  .x-button--ghost.x-button--gray.x-button--loading .x-button__content {
    background-image: linear-gradient(-45deg, var(--secondary-hover) 25%, var(--secondary) 25%, var(--secondary) 50%, var(--secondary-hover) 50%, var(--secondary-hover) 75%, var(--secondary) 75%, var(--secondary));
  }

  .x-button--text .x-button__content {
    padding: 0;
    background-color: transparent;
    transition: color .15s;
  }

  .x-button--text .x-button__prepend {
    margin-left: 0;
  }

  .x-button--text .x-button__append {
    margin-right: 0;
  }

  .x-button--text.x-button--primary .x-button__content {
    color: var(--primary);
  }

  .x-button--text.x-button--primary:hover .x-button__content {
    color: var(--primary-darker);
  }

  .x-button--text.x-button--primary:active .x-button__content {
    color: var(--primary-30);
  }

  .x-button--text.x-button--primary:disabled .x-button__content {
    color: var(--primary-disabled);
  }

  .x-button--text.x-button--gray .x-button__content,
  .x-button--text.x-button--gray .x-button__content .x-button__icon,
  .x-button--text.x-button--gray .x-button__content .x-button__prepend,
  .x-button--text.x-button--gray .x-button__content .x-button__append {
    color: var(--gray-600);
    border: none;
  }

  .x-button--text.x-button--gray:hover .x-button__content {
    color: var(--gray-100);
  }

  .x-button--text.x-button--gray:active .x-button__content {
    color: var(--gray-100);
  }

  .x-button--text.x-button--gray:disabled .x-button__content {
    color: var(--white-20);
  }

  .x-button--text.x-button--white .x-button__content,
  .x-button--text.x-button--white .x-button__content .x-button__icon {
    color: var(--white);
    border: none;
  }

  .x-button--text.x-button--white:hover .x-button__content {
    color: var(--primary);
  }

  .x-button--text.x-button--white:active .x-button__content {
    color: var(--primary);
  }

  .x-button--text.x-button--white:disabled .x-button__content {
    color: var(--white-40);
  }

  .x-button--text:hover .x-button__content {
    color: var(--primary-hover);
    background-color: transparent;
  }

  .x-button--text:hover .x-button__content .x-button__prepend,
  .x-button--text:hover .x-button__content .x-button__icon,
  .x-button--text:hover .x-button__content .x-button__append {
    color: inherit;
  }

  .x-button--text:active .x-button__content {
    color: var(--primary-active);
    background-color: transparent;
  }

  .x-button--text:active .x-button__content .x-button__prepend,
  .x-button--text:active .x-button__content .x-button__icon,
  .x-button--text:active .x-button__content .x-button__append {
    color: inherit;
  }

  .x-button--text:disabled .x-button__content {
    background-color: transparent;
  }

  .x-button--text:disabled .x-button__content .x-button__prepend,
  .x-button--text:disabled .x-button__content .x-button__icon,
  .x-button--text:disabled .x-button__content .x-button__append {
    color: inherit;
  }

  .x-button--text.x-button--danger .x-button__content {
    color: var(--secondary-hover);
  }

  .x-button--text.x-button--danger:hover .x-button__content {
    color: var(--danger);
  }

  .x-button--text.x-button--danger:active .x-button__content {
    color: var(--danger);
  }

  .x-button--block {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  .x-button--size-l {
    height: 56px;
  }

  .x-button--size-l .x-button__content {
    padding: 22px calc(var(--space) * 5);
  }

  .x-button--size-m {
    height: 50px;
  }

  .x-button--size-m .x-button__content {
    padding: calc(var(--space) * 3.5) calc(var(--space) * 10);
  }

  .x-button--size-s {
    height: 48px;
  }

  .x-button--size-s .x-button__content {
    padding: 0 calc(var(--space) * 6);
  }

  .x-button--size-s.x-button--text {
    height: 20px;
  }

  .x-button--size-s.x-button--table {
    height: 20px;
  }

  .x-button--size-s.x-button--table .x-button__icon {
    margin: 0;
  }

  .x-button--size-s.x-button--text .x-button__content {
    padding: 0;
  }

  .x-button--size-s.x-button--text .x-button__icon {
    margin: 0;
  }
  .x-button--size-s .x-button__icon {
    margin: 0 calc(var(--space) * (-1));
  }

  .x-button--size-s.x-button--square {
    width: 48px;
    height: 48px;
  }

  .x-button--size-s.x-button--square .x-button__content {
    padding: 0;
  }

  .x-button--size-s.x-button--round {
    width: 48px;
    height: 48px;
  }

  .x-button--size-s.x-button--round .x-button__content {
    padding: 0 calc(var(--space) * 5);
  }

  .x-button--size-xs {
    height: 40px;
  }

  .x-button--size-xs .x-button__content {
    padding: 0 calc(var(--space) * 4);
    font-size: var(--text);
  }

  .x-button--size-xs.x-button--text .x-button__content {
    padding: 0;
  }

  .x-button--size-xs.x-button--text {
    height: 16px;
    font-size: var(--text);
  }
  .x-button--size-xs.x-button--text .x-button__icon {
    margin: 0;
  }
  .x-button--size-xs .x-button__icon {
    margin: 0 calc(var(--space) * (-1));
  }

  .x-button--size-xs.x-button--ghost .x-button__icon,
  .x-button--size-s.x-button--ghost .x-button__icon {
    margin: 0;
  }

  .x-button--size-xs.x-button--ghost .x-button__prepend,
  .x-button--size-s.x-button--ghost .x-button__prepend {
    margin-left: 0;
  }

  .x-button--size-xs.x-button--ghost .x-button__append,
  .x-button--size-s.x-button--ghost .x-button__append {
    margin-right: 0;
  }

  .x-button--size-xs.x-button--square {
    width: 40px;
    height: 40px;
  }

  .x-button--size-xs.x-button--round {
    width: 40px;
    height: 40px;
  }

  .x-button--size-xs.x-button--round .x-button__content {
    padding: 0;
  }

  .x-button--size-xs.x-button--square .x-button__content {
    padding: 0;
  }

  .x-button--size-xs.x-button--table {
    height: 20px;
    padding: 0;
  }

  .x-button--size-xxs {
    height: 36px;
  }

  .x-button--size-xxs .x-button__content {
    padding: 0 calc(var(--space) * 4);
    font-size: var(--caption);
  }

  .x-button--size-xxs.x-button--text {
    height: 14px;
    font-size: var(--caption);
  }

  .x-button--size-xxs.x-button--square {
    width: 36px;
    height: 36px;
  }

  .x-button--size-xxs.x-button--square .x-button__content {
    padding: 0;
  }

  .x-button--size-xxs.x-button--text .x-button__content {
    padding: 0;
  }

  .x-button--size-xxs.x-button--round {
    width: 32px;
    height: 32px;
  }

  .x-button--size-xxs.x-button--round .x-button__content {
    padding: 0;
  }

  .x-button--size-xxxs.x-button--square {
    width: calc(var(--space) * 6);
    height: calc(var(--space) * 6);
  }
</style>
