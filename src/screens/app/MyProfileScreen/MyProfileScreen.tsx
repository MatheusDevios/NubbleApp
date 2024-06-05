import React from 'react';

import {useAuthCredentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export const MyProfileScreen = ({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) => {
  const {authCredential} = useAuthCredentials();
  const name = authCredential?.user.fullName;
  return (
    <Screen canGoBack>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingSmall">{name}</Text>}
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingScreen')}
        />
      </Box>
    </Screen>
  );
};
