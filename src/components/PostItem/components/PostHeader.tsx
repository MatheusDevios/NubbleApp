import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export const PostHeader = ({author}: PostHeaderProps) => {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Text semiBold preset="paragraphMedium" ml="s12">
        {author.userName}
      </Text>
    </Box>
  );
};
