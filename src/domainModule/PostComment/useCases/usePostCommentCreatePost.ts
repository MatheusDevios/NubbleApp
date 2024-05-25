import {MutationOptions, useMutation} from '@infra';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentCreatePost(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, error, loading} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.createPost(postId, message),
    options,
  );

  async function createPost(message: string) {
    await mutate({message});
  }

  return {createPost, loading, error};
}
