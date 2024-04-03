import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import React from 'react';
import {ThemeColors} from '@theme';
import {useAppTheme} from '@hooks';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
}
