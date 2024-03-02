import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Sign Up Successful.',
      description: 'You have successfully signed up.',
      icon: {name: 'checkRound', color: 'success'},
    });
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
