import React from 'react';

import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value}, fieldState}) => (
        <TextInput
          onChangeText={onChange}
          value={value}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    />
  );
}
