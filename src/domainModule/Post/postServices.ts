import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postList = await postApi.getList({page, per_page: 10});

  // throw new Error('Error');
  return {
    data: postList.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postList.meta),
  };
}

export const postService = {
  getList,
};
