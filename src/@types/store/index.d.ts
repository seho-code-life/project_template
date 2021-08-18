declare module 'pinia' {
  export function defineStore<T extends { name: string; state: Record<string, unknown>; getter: Record<string, () => unknown> }>(
    id: T['name'],
    options: Omit<DefineStoreOptions<T['name'], T['state'], T['getter'], unknown>, 'id'>
  ): StoreDefinition<T['name'], T['state'], T['getter'], unknown>;
}
