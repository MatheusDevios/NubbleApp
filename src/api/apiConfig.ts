import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const isFromRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);
      const status = responseError.response.status;

      if (status === 401) {
        if (
          !authCredentials?.refreshToken ||
          isFromRefreshTokenRequest ||
          failedRequest.sent
        ) {
          await removeCredentials();
          return Promise.reject(responseError);
        }

        // marks the request as sent to avoid infinite loop.
        failedRequest.sent = true;

        const newAuthCredentials = await authService.refreshToken(
          authCredentials?.refreshToken,
        );

        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remove interceptor listener when component unmounts
  return () => api.interceptors.response.eject(interceptor);
}
