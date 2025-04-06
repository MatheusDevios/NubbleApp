/* eslint-disable testing-library/prefer-find-by */
import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {server, mockedPostComment, resetInMemoryResponse} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment, the list is automatically updated', async () => {
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

    //wait for the new comment created to be displayed
    const newComment = await screen.findByText(/New comment/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(3);
  });

  test('When DELETING a comment, the list is automatically updated and a toast message is displayed ', async () => {
    //mocking the auth credentials storage to return the user that is logged in
    //as we cannot use the user from the server itself
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        const button = buttons?.find(item => item.style === 'destructive');
        if (button) {
          mockedConfirm = button.onPress;
        }
      });

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

    //wait for the list to load
    //and Identify the comment to be deleted
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );

    expect(comment).toBeTruthy();

    //Long press on the comment to be deleted
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();

    //Press the confirm button to delete the comment on the alert
    //and call the mocked function to delete the comment
    mockedConfirm && mockedConfirm();

    //Verify if "my" comment was deleted from the list
    await waitForElementToBeRemoved(() =>
      screen.queryByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );

    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    //Verify if the toast message was displayed
    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
