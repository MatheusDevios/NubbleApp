import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Screen, Text} from '@components';
import {AppStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export const HomeScreen = ({navigation}: ScreenProps) => {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingScreen')}
      />
    </Screen>
  );
};
