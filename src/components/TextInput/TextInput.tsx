import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Icon} from '../Icon/Icon';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
  icon?: boolean;
}

export function TextInput({label, icon, ...RNTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  return (
    <Box>
      <Text preset="paragraphMedium" mb="s4">
        {label}
      </Text>
      <Box {...$TextInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$TextInputStype}
          {...RNTextInputProps}
        />
        {/* {icon && <Icon name="eyeOn" size={24} color="gray4" />} */}
      </Box>
    </Box>
  );
}

const $TextInputContainer: BoxProps = {
  padding: 's16',
  borderRadius: 's12',
  borderWidth: 1,
  borderColor: 'gray4',
  // flexDirection: 'row',
};

const $TextInputStype: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
