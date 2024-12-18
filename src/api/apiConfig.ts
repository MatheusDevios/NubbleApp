import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

// This is the base URL of the API. It is important to note that the Android emulator uses the IP in use below, but if you are using an iOS emulator,
// you should use the IP commented out below. If you are using a physical device, you should use the IP of the machine/server where the API is running.
export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  // baseURL: 'http://127.0.0.1:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

// This function will be used to register an interceptor that will refresh the token when it expires.
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
