import {AuthCredentials} from '@domain';

export interface AuthCredentialServices {
  authCredential: AuthCredentials | null;
  saveCredentials: (authCredentials: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
