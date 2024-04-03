import React from 'react';
import {useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordTextInput,
} from '@components';
import {RootStackParamList} from '@routes';
import {Alert} from 'react-native';
import {LoginSchema, loginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({email, password}: LoginSchema) => {
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

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Password"
        placeholder="Password"
        boxProps={{mb: 's20'}}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        mb="s48"
        bold>
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
