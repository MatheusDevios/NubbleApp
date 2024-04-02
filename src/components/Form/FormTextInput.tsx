import React from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
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
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
