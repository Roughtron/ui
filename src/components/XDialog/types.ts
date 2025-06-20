import type { Component } from 'vue';
import type { Router } from 'vue-router';

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
  router: Router,
  globalProperties: Record<string, any>
}