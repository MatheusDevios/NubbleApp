import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            postAuthorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/random comment/i);
    expect(comment).toBeTruthy();

    //find placeholder
    const inputText = screen.getByPlaceholderText(/Add a comment.../i);

    //type new comment
    fireEvent.changeText(inputText, 'New comment');

    //click on the button to send the comment
    fireEvent.press(screen.getByText(/Send/i));

    //wait for the new comment to be displayed
    const newComment = await screen.findByText(/New comment/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(2);
  });
});
