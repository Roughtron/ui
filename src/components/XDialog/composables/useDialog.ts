import { inject } from 'vue';
import { type Dialog } from '../types';

export default () => {
  const $dialog = inject('$dialog') as Dialog;

  return { $dialog };
};
