import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [list, setList] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchInitialData = async () => {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
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
      const {data, meta} = await getList(page);
      //setPostList gets its previous state and adds the new data to it...
      //...and create a new array with the whole data till now
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        //if there is a next page, increment the page number and set hasNextPage to true
        setPage(prev => prev + 1);
        setHasNextPage(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    list,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
