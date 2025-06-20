<script setup lang="ts">
import { computed } from 'vue';
import { GlobalEvents } from 'vue-global-events';
import XButton from '../XButton/XButton.vue';
import XLoader from '../XLoader/XLoader.vue';
import useDialog from './composables/useDialog';

const { $dialog } = useDialog();

const emit = defineEmits<{
  (e: 'cancel'): void,
  (e: 'submit'): void,
  (e: 'close'): void
}>();

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  onCancel: Function,
  onSubmit: Function,
  title: String,
  description: String,
  cancelText: {
    type: String,
    default: 'Cancel',
  },
  cancelDisabled: Boolean,
  cancelProps: Object,
  submitText: {
    type: String,
    default: 'Submit',
  },
  submitDisabled: Boolean,
  submitProps: Object,
  centerTitle: Boolean,
  persistent: Boolean,
  noActions: Boolean,
  noCancel: Boolean,
  noSubmit: Boolean,
  loading: Boolean,
  size: {
    type: String,
    default: 's',
    validator: (v: string) => ['xs', 's', 'm'].includes(v),
  },
  testId: {
    type: String,
    default: null,
  },
  isPromo: Boolean,
});

const classes = computed(() => [
  'x-dialog',
  `x-dialog--size-${props.size}`,
  {
    'x-dialog--promo': props.isPromo,
  },
]);

const computedCancelProps = computed(() => ({
  class: 'x-dialog__button',
  block: true,
  color: props.isPromo ? 'primary' : 'gray',
  size: 'xs',
  disabled: props.cancelDisabled,
  ...props.cancelProps,
}));

const computedSubmitProps = computed(() => ({
  class: 'x-dialog__button',
  block: true,
  size: 'xs',
  disabled: props.submitDisabled,
  ...props.submitProps,
}));

const computedCloseProps = computed(() => ({
  class: 'x-dialog__close-btn',
  icon: 'close',
  size: 'xxs',
  iconSize: '15',
  text: true,
  color: 'white',
}));

const close = () => {
  emit('close');

  $dialog.hide();
};

const cancel = () => {
  if (props.onCancel) {
    emit('cancel');
  } else {
    emit('cancel');

    $dialog.hide();
  }
};

const keyupEsc = () => {
  if (!props.persistent) {
    cancel();
  }
};

const submit = () => {
  if (props.onSubmit) {
    emit('submit');
  } else {
    emit('submit');

    $dialog.hide();
  }
};
</script>

<template>
  <div
    :class="classes"
    :data-test-id="testId"
    tabindex="0"
  >
    <div class="x-dialog__in">
      <div
        v-if="title || $slots.title"
        class="x-dialog__title"
        :class="{ 'x-dialog__title--center': centerTitle }"
        :title="title"
      >
        <slot name="title">{{ title }}</slot>
      </div>

      <div class="x-dialog__content-container">
        <div
          v-if="description || $slots.description"
          class="x-dialog__description"
        >
          <slot name="description">{{ description }}</slot>
        </div>

        <div
          v-if="loading"
          class="x-dialog__loader"
        >
          <x-loader size="m" />
        </div>

        <div
          v-if="$slots.default"
          class="x-dialog__content"
        >
          <slot></slot>
        </div>
      </div>

      <slot
        v-if="!noActions"
        name="footer"
      >
        <div class="x-dialog__actions">
          <slot
            v-if="!noCancel"
            name="cancel"
          >
            <x-button
              v-bind="computedCancelProps"
              @click="cancel"
            >
              {{ cancelText }}
            </x-button>
          </slot>
          <slot
            v-if="!noSubmit"
            name="submit"
          >
            <x-button
              v-bind="computedSubmitProps"
              @click="submit"
            >
              {{ submitText }}
            </x-button>
          </slot>
        </div>

        <slot name="extra-footer" />
      </slot>
    </div>

    <x-button
      v-if="!persistent"
      v-bind="computedCloseProps"
      @click="close"
    />

    <global-events @keyup.esc="keyupEsc" />
  </div>
</template>

<style scoped>
.x-dialog {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  font-family: var(--font);
  color: var(--white);
  background-color: var(--primary-black);
  border: 1px solid var(--secondary);
  border-radius: var(--border-radius-8x);
}

.x-dialog__in {
  position: relative;
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
}

.x-dialog:focus {
  outline: none;
}

.x-dialog__title {
  max-width: 520px;
  padding: calc(var(--space) * 8);
  overflow: hidden;
  font-size: var(--heading-24);
  font-weight: 500;
  line-height: 1;
}

.x-dialog__title--center {
  text-align: center;
}

.x-dialog__content-container {
  flex-grow: 0;
  flex-shrink: 1;
  padding: calc(var(--space) * 8);
  padding-top: 0;
}

.x-dialog__title + .x-dialog__content-container .x-dialog__description {
  margin-top: calc(var(--space) * 2);
}

.x-dialog__content-container:has(.x-dialog__description) {
  padding-bottom: 0;
}

.x-dialog__loader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(13, 17, 21, .4);
  pointer-events: none;
}

.x-dialog__actions {
  display: flex;
  padding: calc(var(--space) * 8);
}

.x-dialog__button + .x-dialog__button {
  margin-left: calc(var(--space) * 2);
}

.x-dialog__close-btn {
  position: absolute;
  top: calc(var(--space) * 8);
  right: calc(var(--space) * 8);
  z-index: 1;
  width: 24px;
  height: 24px!important;
}

.x-dialog--size-xs {
  width: 408px;
}

.x-dialog--size-s {
  width: 576px;
}

.x-dialog--size-m {
  width: 696px;
  padding: calc(var(--space) * 8);
}

.x-dialog--promo {
  color: var(--primary-black);
  background-color: var(--primary);
  border-radius: var(--border-radius-8x);
}

.x-dialog--promo .x-dialog__close-btn :deep(.x-button__content-in .x-button__icon) {
  color: var(--primary-black) !important;
  background-color: var(--primary) !important;
}

.x-dialog--promo :deep(.x-button--primary) {
  border: 1px solid var(--primary-black);
}

.x-dialog--promo :deep(.x-field-error) {
  color: var(--danger);
}

@media screen and (orientation: portrait) and (max-width: 550px) {
  .x-dialog {
    margin-right: calc(var(--space) * 2);
    margin-left: calc(var(--space) * 2);
  }

  .x-dialog__title {
    max-width: 224px;
    padding: calc(var(--space) * 6);
  }

  .x-dialog__content-container {
    padding: calc(var(--space) * 6);
    padding-top: 0;
  }

  .x-dialog__close-btn {
    top: calc(var(--space) * 6);
    right: calc(var(--space) * 6);
  }

  .x-dialog__actions {
    padding: calc(var(--space) * 6);
  }

  .x-dialog--promo {
    border: none;
  }

  .x-dialog--promo .x-dialog__title {
    text-align: left;
  }
}
</style>
