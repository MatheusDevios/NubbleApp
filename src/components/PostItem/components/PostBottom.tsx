import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount'>;

export const PostBottom = ({text, author, commentCount}: PostBottomProps) => {
  return (
    <Box mt="s14">
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text semiBold preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentCount > 0 && (
        <Text bold preset="paragraphSmall" color="primary" mt="s8">
          {commentCount > 1 ? `See ${commentCount} comments` : 'See comment'}
        </Text>
      )}
    </Box>
  );
};
