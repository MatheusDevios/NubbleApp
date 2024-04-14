import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'commentCount' | 'favoriteCount' | 'reactionCount'
>;

const likePost = () => {
  //TODO: Implement likePost
};
const navigateToComments = () => {
  //TODO: Implement navigateToComments
};
const favoritePost = () => {
  //TODO: Implement favoritePost
};

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={true}
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        count={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComments}
        icon={{default: 'comment', marked: 'comment'}}
        count={commentCount}
      />
      <Item
        marked={true}
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        count={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  count: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked, count}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'maked' : undefined}
      />
      {count > 0 && (
        <Text bold preset="paragraphSmall" ml="s4">
          {count}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
