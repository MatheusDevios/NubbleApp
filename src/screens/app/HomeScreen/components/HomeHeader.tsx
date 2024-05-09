import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      {/* <Box backgroundColor="carrotSecondary" height={16} width={78} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box marginRight="s24">
          <Icon name="search" />
        </Box>
        <Box marginRight="s24">
          <Icon name="bellOn" />
        </Box>
        <Icon name="chatOn" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
