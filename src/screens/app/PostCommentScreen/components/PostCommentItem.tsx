import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
}

export function PostCommentItem({
  postId,
  postComment,
  userId,
  postAuthorId,
}: PostCommentItemProps) {
  const {showToast} = useToastService();
  const {deletePostComment} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({
        message: 'Comment removed',
        type: 'success',
        duration: 5000,
        position: 'bottom',
      });
    },
  });

  const isAllowedToDelete = postCommentService.isAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

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
    <Pressable disabled={!isAllowedToDelete} onLongPress={confirmRemoval}>
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
