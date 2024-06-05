import {MMKV} from 'react-native-mmkv';

import {Storage} from '../storage';

const MMKVInstance = new MMKV();

export const MMKVStorage: Storage = {
  getItem: (key: string) => {
    const item = MMKVInstance.getString(key);
    return item ? JSON.parse(item) : null;
  },
  setItem: (key, value) => {
    MMKVInstance.set(key, JSON.stringify(value));
  },
  removeItem: key => {
    MMKVInstance.delete(key);
  },
};
