import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();
  const {mutate, isError, isLoading} = useMutation<
    string,
    unknown,
    {postCommentId: number}
  >({
    mutationFn: ({postCommentId}) =>
      postCommentService.deletePost(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'An error occurred.');
      }
    },
  });

  return {deletePostComment: mutate, isLoading, isError};
}
