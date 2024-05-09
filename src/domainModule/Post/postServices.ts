import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();

  return postList.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
