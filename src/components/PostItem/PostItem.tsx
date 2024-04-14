import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />

      <PostImage imageURL={post.imageURL} />
    </Box>
  );
};
