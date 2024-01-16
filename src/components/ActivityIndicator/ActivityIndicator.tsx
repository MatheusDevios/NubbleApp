import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import React from 'react';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} />;
}
