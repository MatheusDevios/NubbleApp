import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Icon, Text, ScreenProps} from '@components';

type ScreenHeaderProps = Pick<
  ScreenProps,
  'canGoBack' | 'title' | 'HeaderComponent'
>;

export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
}: ScreenHeaderProps) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;
  const ICON_SIZE = 20;

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={() => navigation.goBack()}
          flexDirection="row"
          alignItems="center"
          mr="s10">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Back
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
