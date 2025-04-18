/* eslint-disable @typescript-eslint/no-shadow */
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  RightComponent,
  LeftComponent,
  errorMessage,
  boxProps,
  ...RNTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $TextInputContainer: BoxProps = {
    padding: 's16',
    borderRadius: 's12',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    flexDirection: 'row',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text preset="paragraphMedium" marginBottom="s4">
            {label}
          </Text>
        )}
        <Box {...$TextInputContainer}>
          {LeftComponent && (
            <Box justifyContent="center" mr="s16">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$TextInputStyle}
            {...RNTextInputProps}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $TextInputStyle: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  flexGrow: 1,
  ...$fontSizes.paragraphMedium,
};
