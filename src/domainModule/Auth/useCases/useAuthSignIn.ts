import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const {mutate, isLoading, isSuccess, isError} = useMutation<
    AuthCredentials,
    Error,
    Variables
  >({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
      // being made at the AuthCredentialsProvider as every time the credentials are saved, the token is updated
      // and also when the app is reloaded the token has to be updated from the storage.
      // authService.updateToken(authCredentials.token);
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading,
    signIn: (variables: Variables) => mutate(variables),
    isSuccess,
    isError,
  };
}
