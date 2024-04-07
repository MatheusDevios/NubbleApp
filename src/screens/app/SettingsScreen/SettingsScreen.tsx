import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Screen, Text} from '@components';

export const SettingsScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppScreenProps<'SettingScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
};
