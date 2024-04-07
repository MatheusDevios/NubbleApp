import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {
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
