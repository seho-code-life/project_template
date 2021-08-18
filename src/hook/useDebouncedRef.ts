import { customRef, Ref } from 'vue';

/**
 * @description 使用自定义 ref 实现带防抖功能的 v-model ：
 * @param {any} value 要更改的值
 * @param {number} delay
 * @returns {T}
 */

export default function useDebouncedRef<T>(value: T, delay = 200): Ref<T> {
  let timeout: number | null = null;
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(newValue: T) {
      clearTimeout(timeout as number);
      timeout = setTimeout(() => {
        value = newValue;
        trigger();
      }, delay);
    }
  }));
}
