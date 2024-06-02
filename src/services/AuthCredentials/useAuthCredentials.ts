import {create} from 'zustand';

import {AuthCredentialServices} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialServices {
  return useAuthCredentialsZustand();

  //   return {
  //     authCredential: null,
  //     saveCredentials: async () => {},
  //     removeCredentials: async () => {},
  //     isLoading: false,
  //   };
}

const useAuthCredentialsZustand = create<AuthCredentialServices>(set => ({
  authCredential: null,
  saveCredentials: async ac => set({authCredential: ac}),
  removeCredentials: async () => {},
  isLoading: false,
}));
