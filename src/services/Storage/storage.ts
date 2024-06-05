export interface Storage {
  getItem: <T>(key: string) => T | null | Promise<T | null>;
  setItem: <T>(key: string, value: T) => void | Promise<void>;
  removeItem: (key: string) => void | Promise<void>;
}

export let storage: Storage;

export function initializeStorage(storageImplementation: Storage) {
  storage = storageImplementation;
}
