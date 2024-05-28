import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export const PostHeader = ({author}: PostHeaderProps) => {
  const navigation = useNavigation();

  const handleNavigateProfile = () => {
    navigation.navigate('ProfileScreen', {userId: author.id});
  };

  return (
    <Pressable onPress={handleNavigateProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text semiBold preset="paragraphMedium" ml="s12">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
};
