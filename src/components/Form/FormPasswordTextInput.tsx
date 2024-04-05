import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState}) => (
        <PasswordInput
          onChangeText={onChange}
          value={value}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
