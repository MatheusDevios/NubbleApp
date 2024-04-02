import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordTextInput} from '../../../components/Form/FormPasswordTextInput';
import {isValidEmailRegex} from '../Login/LoginScreen';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const {reset} = useResetNavigationSuccess();
  function submitForm(formValues: SignUpFormType) {
    console.log('formValues:', formValues);
    // reset({
    //   title: 'Sign Up Successful.',
    //   description: 'You have successfully signed up.',
    //   icon: {name: 'checkRound', color: 'success'},
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Sign Up
      </Text>

      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username is required'}}
        label="Username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        rules={{required: 'Full Name is required'}}
        autoCapitalize="words"
        label="Full Name"
        placeholder="Full Name"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: isValidEmailRegex,
            message: 'Invalid email',
          },
        }}
        label="Email"
        placeholder="Email"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
        label="Password"
        placeholder="Password"
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Sign Up"
      />
    </Screen>
  );
}
