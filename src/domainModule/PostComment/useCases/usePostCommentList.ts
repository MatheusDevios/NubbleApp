import {postCommentService} from '@domain';
import {usePaginatedList} from '@infra';

export function usePostCommentList(postID: number) {
  const getList = (page: number) => postCommentService.getList(postID, page);

  return usePaginatedList(getList);
}
