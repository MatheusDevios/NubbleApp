import React, {createContext, useEffect, useState} from 'react';

import {registerInterceptor} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialServices} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialServices>({
  authCredentials: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  isLoading: true,
  userId: null,
});

export const AuthCredentialsProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //§ useEffect to load credentials from storage when component mounts and update state.
  useEffect(() => {
    // authCredentialsStorage.remove();
    loadCredentials();
  }, []);

  // useEffect to handle token expiration and refresh token logic,
  // to see if the token is expired and refresh it.
  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      saveCredentials,
      removeCredentials,
    });

    // remove interceptor listener when component unmounts
    return interceptor;
  }, [authCredentials]);

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

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
        userId,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
};
