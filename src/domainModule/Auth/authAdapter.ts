import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
    refreshToken: authCredentialsAPI.auth.refreshToken,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
  };
}

export const authAdapter = {toAuthCredentials};
