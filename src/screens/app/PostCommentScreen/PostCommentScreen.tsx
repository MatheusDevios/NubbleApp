import React from 'react';

import {usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  const postId = route.params.postId;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {list} = usePostCommentList(postId);
  return (
    <Screen title="Comments" canGoBack>
      <Box>
        <Text>PostCommentScreen {route.params.postId}</Text>
      </Box>
    </Screen>
  );
};
