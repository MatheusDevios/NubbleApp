import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Post[]> {
  const postList = await postApi.getList({page, per_page: 10});

  // throw new Error('Error');
  return postList.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
