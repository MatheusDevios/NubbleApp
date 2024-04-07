import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, Screen, Text, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export const ForgotPasswordScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) => {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();
  const submitForm = () => {
    reset({
      title: 'Check your email',
      description: 'We sent you the instructions to modify your password.',
      icon: {name: 'messageRound', color: 'primary'},
    });
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
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Forgot Password"
        mb="s12"
      />
    </Screen>
  );
};
