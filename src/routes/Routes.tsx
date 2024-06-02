import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStack, AuthStack} from '@routes';

export function Router() {
  // const isAuthenticated = false;
  const {authCredential} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredential ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
