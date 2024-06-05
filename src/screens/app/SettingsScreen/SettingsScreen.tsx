import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen} from '@components';
import {AppScreenProps} from '@routes';

export const SettingsScreen = ({}: AppScreenProps<'SettingScreen'>) => {
  const {signOut, isLoading} = useAuthSignOut();

  return (
    <Screen canGoBack title="Settings Screen">
      <Button loading={isLoading} title="Logout" onPress={signOut} />
    </Screen>
  );
};
