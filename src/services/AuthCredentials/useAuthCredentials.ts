import {useContext} from 'react';

import {AuthCredentialServices} from './authCredentialsType';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialServices {
  const context = useContext(AuthCredentialsContext);

  if (!context) {
    throw new Error(
      'useAuthCredentials must be used within a AuthCredentialsProvider',
    );
  }

  return context;
}

// const useAuthCredentialsZustand = create<AuthCredentialServices>()(
//   persist(
//     set => ({
//       authCredential: null,
//       saveCredentials: async ac => set({authCredential: ac}),
//       removeCredentials: async () => set({authCredential: null}),
//       isLoading: false,
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
