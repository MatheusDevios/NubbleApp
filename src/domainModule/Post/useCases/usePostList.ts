import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      //setPostList gets its previous state and adds the new data to it...
      //...and create a new array with the whole data till now
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        //if there is a next page, increment the page number
        setPage(prev => prev + 1);
      } else {
        //if there is no next page, set hasNextPage to false to avoid further requests
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {loading, error, postList, refresh: fetchInitialData, fetchNextPage};
}
