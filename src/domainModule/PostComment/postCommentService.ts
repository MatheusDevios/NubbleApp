import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

async function createPost(
  postId: number,
  message: string,
): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.createPost(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function deletePost(postCommentId: number): Promise<string> {
  const response = await postCommentApi.deletePost(postCommentId);

  return response.message;
}

/**
 * @description This function is used to check if the user is allowed to delete a postComment.
 *
 * @param postComment The postComment object to be deleted.
 * @param userId The user id.
 * @param postComment.author.id The author id of the postComment.
 *
 * @returns {boolean} Returns true if the user is allowed to delete a postComment, otherwise false.
 */
function isAllowedToDelete(
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean {
  if (userId === postComment.author.id || userId === postAuthorId) {
    return true;
  }
  return false;
}

export const postCommentService = {
  getList,
  createPost,
  deletePost,
  isAllowedToDelete,
};
