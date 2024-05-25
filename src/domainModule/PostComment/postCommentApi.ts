import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const PATH = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>(`${PATH}`, {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function createPost(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(`${PATH}`, {
    post_id,
    message,
  });
  return response.data;
}

async function deletePost(postCommentId: number): Promise<PostCommentAPI> {
  const response = await api.delete(`${PATH}/${postCommentId}`);
  return response.data;
}

export const postCommentApi = {
  getList,
  createPost,
  deletePost,
};
