/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export const PostHeader = ({author}: PostHeaderProps) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text semiBold preset="paragraphMedium" ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
};
