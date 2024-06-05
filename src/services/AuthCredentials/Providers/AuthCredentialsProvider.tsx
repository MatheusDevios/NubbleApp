import React, {createContext, useEffect, useState} from 'react';

import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialServices} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialServices>({
  authCredentials: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  isLoading: true,
});

export const AuthCredentialsProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // authCredentialsStorage.remove();
    loadCredentials();
  }, []);

  async function loadCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      console.error('Error loading credentials', error);
      //TODO handle error
    } finally {
      setIsLoading(false);
    }
  }

  const saveCredentials = async (ac: AuthCredentials): Promise<void> => {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  };

  const removeCredentials = async (): Promise<void> => {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  };

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
};
