import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack, AuthStack} from '@routes';

export function Router() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
