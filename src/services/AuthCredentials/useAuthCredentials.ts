import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../Storage';

import {AuthCredentialServices} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialServices {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialServices>()(
  persist(
    set => ({
      authCredential: null,
      saveCredentials: async ac => set({authCredential: ac}),
      removeCredentials: async () => set({authCredential: null}),
      isLoading: false,
    }),
    {
      name: '@Auth',
      storage: storage,
    },
  ),
);
