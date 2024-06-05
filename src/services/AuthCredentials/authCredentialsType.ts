import {AuthCredentials} from '@domain';

export interface AuthCredentialServices {
  authCredentials: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
