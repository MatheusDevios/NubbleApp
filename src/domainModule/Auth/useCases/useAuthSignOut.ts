import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const {mutate, isLoading} = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
  });

  return {
    isLoading,
    signOut: () => mutate(),
  };
}
