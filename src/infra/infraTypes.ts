export enum QueryKeys {
  UserGetById = 'UserGetById',
  PostList = 'PostList',
  PostCommentList = 'PostCommentList',
  IsUserNameAvailable = 'IsUserNameAvailable',
  IsEmailAvailable = 'IsEmailAvailable',
}

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
