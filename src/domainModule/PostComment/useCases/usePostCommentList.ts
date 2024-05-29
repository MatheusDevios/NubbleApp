import {postCommentService} from '@domain';
import {QueryKeys, usePaginatedList} from '@infra';

export function usePostCommentList(postID: number) {
  const getList = (page: number) => postCommentService.getList(postID, page);

  return usePaginatedList([QueryKeys.PostList], getList);
}
