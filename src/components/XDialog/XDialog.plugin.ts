import { h, getCurrentInstance, createApp, shallowRef } from 'vue';
import { type Component, type App, type ComponentPublicInstance, type ComponentInternalInstance, toValue } from 'vue';
import { type Dialog, type ComponentPayload, type DialogOptions } from './types';
import XDialogOverlay from './XDialogOverlay.vue';

export default {
  install: (app: App, pluginOptions: DialogOptions) => {
    let instance: ComponentPublicInstance | null = null;
    const show = shallowRef(false);
    const previousComponent: Component = shallowRef({});
    const currentComponent: Component = shallowRef({});

    const $dialog: Dialog = {
      show(component: Component, options: ComponentPayload) {
        const vm = getCurrentInstance();

        if (!instance) {
          const container = document.createElement('div');
          container.id = 'x-dialog-container';

          document.body.appendChild(container);

          const app = createApp({
            provide: () => ({ $dialog }),
            render: () => h(XDialogOverlay, { show: toValue(show), component: toValue(currentComponent) }),
          });

          Object.entries(pluginOptions.globalProperties).forEach(([name, property]) => {
            app.config.globalProperties[name] = property;
          });

          instance = app.mount(`#${container.id}`);
        }

        if (toValue(currentComponent)) {
          previousComponent.value = toValue(currentComponent);
        }

        currentComponent.value = {
          render: () => h(
            component,
            getCreateElementData((vm as ComponentInternalInstance), options),
          ),
        };

        show.value = true;

        instance.$forceUpdate();
      },

      showPrevious() {
        if (!toValue(previousComponent)) return;

        currentComponent.value = toValue(previousComponent);
        previousComponent.value = null;

        (instance as ComponentPublicInstance).$forceUpdate();
      },

      hide() {
        if (!instance) return;

        currentComponent.value = null;
        previousComponent.value = null;

        show.value = false;

        (instance as ComponentPublicInstance).$forceUpdate();
      },
    };

    app.provide('$dialog', $dialog);
  },
};

function getCreateElementData(ctx: ComponentInternalInstance, payload: ComponentPayload) {
  if (!payload) return {};

  return {
    ...payload.props && payload.props.call(ctx),
    ...bindMethodsCtx(payload.on, ctx),
  };
}

function bindMethodsCtx(obj: { [key: string]: Function } = {}, ctx: ComponentInternalInstance) {
  const res: { [key: string]: Function } = {};

  for (const key in obj) {
    const eventName = `on${key.charAt(0).toUpperCase() + key.slice(1)}`;

    res[eventName] = obj[key].bind(ctx);
  }

  return res;
}