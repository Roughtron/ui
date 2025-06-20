<script setup lang="ts">
import { computed, toValue } from 'vue';
import type { PropType } from 'vue';
import XListItem from './XListItem.vue';

defineOptions({ inheritAttrs: false });

interface ListItem {
  [key: string]: string
}

const props = defineProps({
  value: null,
  items: Array as PropType<ListItem[]>,
  itemText: Function,
  itemTextKey: String,
  itemValue: Function,
  itemValueKey: String,
  prependIcon: [Function, String],
  prependIconKey: String,
  prependIconProps: Object,
  appendIcon: [Function, String],
  appendIconKey: String,
  appendIconProps: Object,
});

const emit = defineEmits<{
  (e: 'input', val: ListItem[] | ListItem): void
}>();

const multiple = computed(() => Array.isArray(props.value));

const getItemText = (item: ListItem, index: number) => {
  if (props.itemText) return props.itemText(item, index);
  if (props.itemTextKey) return item[props.itemTextKey];
  return item;
};

const getItemValue = (item: ListItem, index: number) => {
  if (props.itemValue) return props.itemValue(item, index);
  if (props.itemValueKey) return item[props.itemValueKey];
  return item;
};

const getPrependIcon = (item: ListItem, index: number) => {
  if (props.prependIcon) {
    return typeof props.prependIcon === 'string'
      ? props.prependIcon
      : props.prependIcon(item, index);
  }
  if (props.prependIconKey) return item[props.prependIconKey];
};

const getAppendIcon = (item: ListItem, index: number) => {
  if (props.appendIcon) {
    return typeof props.appendIcon === 'string'
      ? props.appendIcon
      : props.appendIcon(item, index);
  }
  if (props.appendIconKey) return item[props.appendIconKey];
};

const isChecked = (item: ListItem) => {
  return toValue(multiple)
    ? props.value.includes(item)
    : props.value === item;
};

const onClick = (item: ListItem) => {
  if (toValue(multiple)) {
    let newValue;
    const index = props.value.indexOf(item);

    if (index !== -1) {
      const copy = [...props.value];
      copy.splice(index, 1);
      newValue = copy;
    } else {
      newValue = props.value.concat(item);
    }

    emit('input', newValue);
  } else if (props.value !== item) {
    emit('input', item);
  }
};
</script>

<template>
  <div class="x-list">
    <x-list-item
      v-for="(item, i) of items"
      :key="i"
      :checked="isChecked(getItemValue(item, i))"
      :prepend-icon="getPrependIcon(item, i)"
      :prepend-icon-props="prependIconProps"
      :append-icon="getAppendIcon(item, i)"
      :append-icon-props="appendIconProps"
      @click="onClick(getItemValue(item, i))"
    >
      <slot
        :item="item"
        :index="i"
      >
        {{ getItemText(item, i) }}
      </slot>
    </x-list-item>
  </div>
</template>
