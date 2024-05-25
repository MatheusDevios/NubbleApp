import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(options?: MutationOptions<string>) {
  const {mutate, error, loading} = useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postCommentService.deletePost(postCommentId),
    options,
  );

  return {deletePostComment: mutate, loading, error};
}
