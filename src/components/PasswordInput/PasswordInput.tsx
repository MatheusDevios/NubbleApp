import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(true);
  const toggleShownPassword = () => setShowPassword(prev => !prev);
  return (
    <TextInput
      {...props}
      secureTextEntry={showPassword}
      RightComponent={
        <Icon
          onPress={toggleShownPassword}
          color="gray2"
          name={showPassword ? 'eyeOn' : 'eyeOff'}
          size={24}
        />
      }
    />
  );
}
