import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export const PostBottom = ({
  text,
  author,
  commentCount,
  id,
}: PostBottomProps) => {
  const navigation = useNavigation();

  const navigateToPostCommentScreen = () => {
    navigation.navigate('PostCommentScreen', {postId: id});
  };

  return (
    <Box mt="s14">
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text semiBold preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentCount > 0 && (
        <Text
          onPress={navigateToPostCommentScreen}
          bold
          preset="paragraphSmall"
          color="primary"
          mt="s8">
          {commentCount > 1 ? `See ${commentCount} comments` : 'See comment'}
        </Text>
      )}
    </Box>
  );
};
