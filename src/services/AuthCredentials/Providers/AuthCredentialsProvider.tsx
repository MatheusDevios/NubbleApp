import React, {createContext, useEffect, useState} from 'react';

import {api} from '@api';
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

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        const status = responseError.response.status;
        if (status === 401) {
          if (!authCredentials?.refreshToken) {
            await removeCredentials();
            return Promise.reject(responseError);
          }

          const failedRequest = responseError.config;
          const newAuthCredentials = await authService.refreshToken(
            authCredentials?.refreshToken,
          );

          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
          return api(failedRequest);
        }
      },
    );

    // remove interceptor listener when component unmounts
    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

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
