import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentRemove} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: PostCommentItemProps) {
  const {deletePostComment} = usePostCommentRemove();

  function confirmRemoval() {
    Alert.alert(
      'Remove comment',
      'Are you sure you want to remove this comment?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => deletePostComment({postCommentId: postComment.id}),
        },
      ],
      {},
    );
  }

  return (
    <Pressable onLongPress={confirmRemoval}>
      <Box flexDirection="row" mb="s16" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
