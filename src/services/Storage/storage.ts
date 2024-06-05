import {asyncStorage} from './implementarion/asyncStorage';

export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage = asyncStorage;
