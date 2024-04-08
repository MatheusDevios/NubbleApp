import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const HomeScreen = ({navigation}: AppTabScreenProps<'HomeScreen'>) => {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingScreen')}
      />
      <Button
        title="Favorite"
        mt="s10"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
};
