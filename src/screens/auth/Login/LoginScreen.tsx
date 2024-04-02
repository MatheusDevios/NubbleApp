import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

type LoginFormType = {
  email: string;
  password: string;
};

const isValidEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginFormType) => {
    Alert.alert(`Login: ${email} ${'\n'} Password: ${password}`);
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Hi there!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Please type your email and password to login.
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: isValidEmailRegex,
            message: 'Invalid email',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's20'}}
            placeholder="Email"
            label="Email"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Password"
            placeholder="Password"
            boxProps={{mb: 's10'}}
          />
        )}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold
        mb="s48">
        Forgot password
      </Text>
      <Button
        disabled={!formState.isValid}
        title="Login"
        mb="s12"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        onPress={navigateToSignUpScreen}
        title="Sign up"
        preset="outline"
      />
    </Screen>
  );
}
