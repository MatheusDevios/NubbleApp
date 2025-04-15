import React from 'react';
import {Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type ProfileUserProps = {user: Pick<User, 'username' | 'profileUrl' | 'id'>};
export function ProfileUser({user}: ProfileUserProps) {
  const navigation = useNavigation();

  const handleNavigateProfile = () => {
    navigation.navigate('ProfileScreen', {userId: user.id});
  };

  return (
    <Pressable onPress={handleNavigateProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text semiBold preset="paragraphMedium" ml="s12">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
