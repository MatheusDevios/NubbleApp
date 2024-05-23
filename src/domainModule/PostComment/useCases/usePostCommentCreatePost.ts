import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreatePost(postId: number) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createPost(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.createPost(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {createPost, loading, error};
}
