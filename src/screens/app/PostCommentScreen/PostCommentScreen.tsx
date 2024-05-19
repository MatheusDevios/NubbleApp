import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export const PostCommentScreen = ({
  route,
}: AppScreenProps<'PostCommentScreen'>) => {
  return (
    <Screen title="Comments" canGoBack>
      <Box>
        <Text>PostCommentScreen {route.params.postId}</Text>
      </Box>
    </Screen>
  );
};
