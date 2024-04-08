import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const FavoriteScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) => {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
};
