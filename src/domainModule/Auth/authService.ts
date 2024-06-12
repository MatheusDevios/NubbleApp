import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('Email or Password is invalid.');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

function updateToken(token: string): void {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken(): void {
  api.defaults.headers.common.Authorization = null;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function refreshToken(refreshedToken: string): Promise<AuthCredentials> {
  const authAPI = await authApi.refreshToken(refreshedToken);

  const authCredentials = authAdapter.toAuthCredentials(authAPI);
  return authCredentials;
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  requestNewPassword,
  refreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
