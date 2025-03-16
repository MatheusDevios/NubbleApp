import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

// Mocking the useNavigation hook
// This is necessary because the useNavigation hook is used in the PostBottom component
// and we need to mock it to avoid errors when testing
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({navigate: mockedNavigate}),
}));

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('does not show the comment link if it has no comment in the post', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/See comment/i);

    expect(commentLinkElement).toBeNull();
  });

  it('navigates to PostCommentScreen when the comment link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comments/i);

    fireEvent.press(commentLinkElement);

    //expect navigation to PostCommentScreen with the correct params
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });

  it('show the correct comment link text when there is only one comment', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.getByText(/See comment/i);

    expect(commentLinkElement).toBeDefined();
  });
});
