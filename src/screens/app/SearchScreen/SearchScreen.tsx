import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User, useUserSearch} from '@domain';
import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  const {addUser} = useSearchHistoryService();

  const {list} = useUserSearch(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser onPress={() => addUser(item)} user={item} />;
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon color="gray3" name="search" />}
        />
      }>
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  );
}
