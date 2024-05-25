import {useState} from 'react';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: () => void;
}

export function usePostCommentCreatePost(postId: number, options?: Options) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createPost(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.createPost(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createPost, loading, error};
}
