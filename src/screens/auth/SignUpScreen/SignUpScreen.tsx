import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen(props: ScreenProps) {
  function submitForm() {
    // TODO: implementar
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Sign Up
      </Text>
      <TextInput label="Username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Full Name"
        placeholder="Full Name"
        boxProps={{mb: 's20'}}
      />
      <TextInput label="Email" placeholder="Email" boxProps={{mb: 's20'}} />

      <PasswordInput
        label="Password"
        placeholder="Password"
        boxProps={{mb: 's48'}}
      />

      <Button onPress={submitForm} title="Sign Up" />
    </Screen>
  );
}
