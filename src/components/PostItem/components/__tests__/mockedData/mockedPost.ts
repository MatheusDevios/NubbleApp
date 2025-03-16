import {Post} from '@domain';

export const mockedPost: Post = {
  id: 3,
  imageURL: 'fake-image-url',
  commentCount: 5,
  favoriteCount: 4,
  reactionCount: 5,
  text: 'fake-text',
  author: {
    id: 1,
    name: 'fake-name',
    profileURL: 'fake-profile-url',
    userName: 'fake-username',
  },
};
