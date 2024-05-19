import {postCommentService, usePaginatedList} from '@domain';

export function usePostCommentList(postID: number) {
  const getList = (page: number) => postCommentService.getList(postID, page);

  return usePaginatedList(getList);
}
