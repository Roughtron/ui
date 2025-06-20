import { reactive } from 'vue';

export const useReactiveArrayModel = <T>(
  modelValue: T[],
  emit: (e: 'update:modelValue', ...args: any[]) => void,
) => {
  const localValue = reactive([...modelValue]);

  return new Proxy(localValue, {
    set(target, key, value) {
      const index = Number(key);

      if (!isNaN(index)) {
        target[index] = value;
        emit('update:modelValue', [...target]);
        return true;
      }

      if (key === 'length' && typeof value === 'number') {
        target.length = value;
        emit('update:modelValue', [...target]);
        return true;
      }

      (target as any)[key] = value;

      return true;
    },

    deleteProperty(target, key) {
      const index = Number(key);
      if (!isNaN(index)) {
        target.splice(index, 1);

        emit('update:modelValue', [...target]);

        return true;
      }

      delete (target as any)[key];

      return true;
    },
  });
};

export const useReactiveObjectModel = <T extends Record<string, any>>(
  modelValue: T,
  emit: (e: 'update:modelValue', ...args: any[]) => void,
) => {
  const localValue = reactive({ ...modelValue });

  return new Proxy(localValue, {
    set(target, key, value) {
      (target as T)[key as keyof T] = value;

      emit('update:modelValue', { ...target });

      return true;
    },

    deleteProperty(target, key) {
      delete (target as T)[key as keyof T];

      emit('update:modelValue', { ...target });

      return true;
    },
  });
};
