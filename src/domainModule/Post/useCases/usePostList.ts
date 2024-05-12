import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  const [page, setPage] = useState(1);

  const fetchPostList = async () => {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (!loading) {
      fetchPostList();
    }
  };

  useEffect(() => {
    fetchPostList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, error, postList, refetch: fetchPostList, fetchNextPage};
}
