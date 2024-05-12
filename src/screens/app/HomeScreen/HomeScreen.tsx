/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, usePostList} from '@domain';

import {Screen, PostItem} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export const HomeScreen = ({}: AppTabScreenProps<'HomeScreen'>) => {
  const {loading, error, postList, refetch, fetchNextPage} = usePostList();

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };

  return (
    <Screen style={$screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} error={error} loading={loading} />
        }
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
