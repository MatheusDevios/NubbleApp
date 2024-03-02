import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export const SuccessScreen = () => {
  const goBackToHome = () => {
    //TODO navigate to Login screen
    //TODO navigate to Home screen
  };

  return (
    <Screen>
      <Icon name="camera" />
      <Text preset="headingLarge" mt="s24">
        {' '}
        Title{' '}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {' '}
        Description{' '}
      </Text>
      <Button title="Home Screen" onPress={goBackToHome} mt="s40" />
    </Screen>
  );
};
