import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm, Controller} from 'react-hook-form';

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
      <Controller
        control={control}
        name="username"
        rules={{required: 'Username is required'}}
        render={({field: {onChange, value}, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            label="Username"
            placeholder="@"
            onChangeText={onChange}
            value={value}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        rules={{required: 'Full Name is required'}}
        render={({field: {onChange, value}, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            label="Full Name"
            placeholder="Full Name"
            onChangeText={onChange}
            value={value}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{required: 'Email is required'}}
        render={({field: {onChange, value}, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            label="Email"
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{required: 'Password is required'}}
        render={({field: {onChange, value}, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            label="Password"
            placeholder="Password"
            onChangeText={onChange}
            value={value}
            boxProps={{mb: 's48'}}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Sign Up"
      />
    </Screen>
  );
}
