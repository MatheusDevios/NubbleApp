import React from 'react';
import {Pressable} from 'react-native';

import {Text} from '@components';

interface PostCommentBottomProps {
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
}

export function PostCommentBottom({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) {
  return hasNextPage ? (
    <Pressable onPress={fetchNextPage}>
      <Text bold color="primary" textAlign="center">
        See more
      </Text>
    </Pressable>
  ) : null;
}
