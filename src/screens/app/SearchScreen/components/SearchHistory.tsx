import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory} from '@services';

import {Box, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }
  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text mb="s8" preset="headingMedium">
            Recent Searches
          </Text>
        }
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}
