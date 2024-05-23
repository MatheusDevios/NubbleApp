import React from 'react';

import {PostComment} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: PostCommentItemProps) {
  return (
    <Box flexDirection="row" mb="s16" alignItems="center">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Box flexDirection="row">
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            - {postComment.createdAt}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
