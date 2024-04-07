import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IconProps} from '@components';
import {AppStack, AuthStack} from '@routes';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

export function Router() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
