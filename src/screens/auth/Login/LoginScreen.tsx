import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen({navigation}: any) {
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Hi there!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Please type your email and password to login.
      </Text>
      <TextInput boxProps={{mb: 's20'}} placeholder="Email" label="Email" />
      <TextInput
        placeholder="password"
        label="Password"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        errorMessage="Error Message"
        boxProps={{mb: 's10'}}
      />
      <Text color="primary" preset="paragraphSmall" bold mb="s48">
        Forgot password
      </Text>
      <Button title="Login" mb="s12" />
      <Button
        onPress={navigateToSignUpScreen}
        title="Sign up"
        preset="outline"
      />
    </Screen>
  );
}
