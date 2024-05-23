import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {$TextInputStyle} from '@components';
import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: () => void;
}
export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const inputRef = useRef<RNTextInput>(null);
  const {colors} = useAppTheme();

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          placeholderTextColor={colors.gray2}
          style={[$TextInputStyle, {color: colors.gray1}]}
          {...rnTextInputProps}
        />
        <Pressable disabled={sendIsDisabled} onPress={onPressSend}>
          <Text color={sendIsDisabled ? 'gray2' : 'primary'} bold>
            Send
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
