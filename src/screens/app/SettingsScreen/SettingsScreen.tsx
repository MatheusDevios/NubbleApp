import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

type SettingsScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'SettingScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SettingsScreen = ({navigation}: SettingsScreenProps) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
};
