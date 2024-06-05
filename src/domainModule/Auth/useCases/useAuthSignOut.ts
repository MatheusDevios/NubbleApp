import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
  const {mutate, isLoading} = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      // being made at the AuthCredentialsProvider as every time the credentials are removed, the token is updated
      // and also when the app is reloaded the token has to be updated from the storage.
      // authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading,
    signOut: () => mutate(),
  };
}
