import {usePaginatedList} from 'src/domainModule/hooks/usePaginatedList';

import {postCommentService} from '../postCommentService';

export function usePostCommentList(postID: number) {
  const getList = (page: number) => postCommentService.getList(postID, page);

  return usePaginatedList(getList);
}
