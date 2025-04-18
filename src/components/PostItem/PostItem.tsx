import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {ProfileUser} from '../ProfileUser/ProfileUser';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface PostItemProps {
  post: Post;
}

export const PostItem = ({post}: PostItemProps) => {
  return (
    <Box paddingHorizontal="s24" mb="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          username: post.author.userName,
          profileUrl: post.author.profileURL,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        text={post.text}
        author={post.author}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
};
