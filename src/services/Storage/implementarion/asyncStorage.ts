import AsyncStorage from '@react-native-async-storage/async-storage';

import {Storage} from '../storage';

export const asyncStorage: Storage = {
  getItem: async (key: string) => {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  setItem: async (key: string, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};
