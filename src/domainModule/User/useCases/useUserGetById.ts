import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userServices';

export function useUserGetById(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: async () => {
      return await userService.getById(id);
    },
    staleTime: 1000 * 30, // 10 seconds
    // cacheTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}
