import {postCommentService, PostComment} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.createPost(postId, variables.message),
    onSuccess: postCommentData => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(postCommentData);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'An error occurred.');
      }
    },
  });

  async function createPost(message: string) {
    mutate({message});
  }

  return {createPost, isLoading, isError};
}
