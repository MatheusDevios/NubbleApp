import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/Login/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: undefined;
  // SuccessScreen: icon, title, description;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
