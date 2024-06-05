import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {ActivityIndicator, Box} from '@components';
import {AppStack, AuthStack} from '@routes';

export function Router() {
  // const isAuthenticated = false;
  const {authCredentials, isLoading} = useAuthCredentials();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
