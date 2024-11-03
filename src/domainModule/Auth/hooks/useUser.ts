import {useAuthCredentials} from '@services';

export function useUser() {
  const {authCredentials} = useAuthCredentials();
  const userId = authCredentials?.user.id;

  return {
    id: userId || 0,
  };
}
