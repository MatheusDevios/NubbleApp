import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Button, Screen, Text, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: `We sent the instructions ${'\n'}to your e-mail`,
  description: 'Click on the link we sent you to reset your password.',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();
  const {showToast} = useToastService();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParam),
    onError: message => showToast({message, type: 'error'}),
  });

  const submitForm = (values: ForgotPasswordSchema) => {
    requestNewPassword(values.email);
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Forgot Password
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Type your email and we'll send you the instructions to modify your
        password.
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        boxProps={{mb: 's20'}}
      />
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Forgot Password"
        mb="s12"
      />
    </Screen>
  );
}
