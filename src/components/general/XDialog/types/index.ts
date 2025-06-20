import type { Component } from 'vue';

export interface ComponentPayload {
  props?: Function,
  on?: {[key: string]: Function }
}

export interface Dialog {
  show(component: Component, options?: ComponentPayload): void,
  showPrevious(): void,
  hide(): void,
}

export interface DialogOptions {
  globalProperties: Record<string, any>
}