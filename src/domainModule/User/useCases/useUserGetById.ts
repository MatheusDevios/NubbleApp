import {QueryKeys} from '@infra';

import {useQuery} from '@tanstack/react-query';

import {userService} from '../userServices';

export function useUserGetById(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: async () => {
      return await userService.getById(id);
    },
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}
