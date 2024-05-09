import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        reactionCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        text={post.text}
        author={post.author}
        commentCount={post.commentCount}
      />
    </Box>
  );
};
