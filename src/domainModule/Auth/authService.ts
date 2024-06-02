import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';

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

export const authService = {
  signIn,
  signOut,
};
