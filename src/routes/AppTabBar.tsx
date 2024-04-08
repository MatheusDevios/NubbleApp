import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {AppTabBottomTabParamList, mapScreenToProps} from '@routes';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <Box flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            activeOpacity={1}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}>
            <Icon
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              semiBold
              preset="paragraphCaption"
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

// ...
