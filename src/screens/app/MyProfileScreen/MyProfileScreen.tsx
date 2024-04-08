import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const MyProfileScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  );
};
