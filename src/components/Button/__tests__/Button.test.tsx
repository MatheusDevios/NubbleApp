import React from 'react';

import {ReactTestInstance} from 'react-test-renderer';
import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderButton(props?: Partial<ButtonProps>) {
  render(<Button title="Test" {...props} />);
  const titleElement = screen.queryByText('Test');
  const buttonElement = screen.queryByText('Test');
  const loadingElement = screen.queryByTestId('loadingButton');
  return {titleElement, loadingElement, buttonElement};
}

describe('<Button/>', () => {
  it('calls onPress function when button is pressed.', () => {
    const mockOnPress = jest.fn();
    const {titleElement, loadingElement} = renderButton({onPress: mockOnPress});

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  it('disables button when button is pressed and loading is true.', () => {
    const mockOnPress = jest.fn();
    const {titleElement} = renderButton({onPress: mockOnPress, disabled: true});

    fireEvent.press(titleElement as ReactTestInstance);

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('the title should be gray when the button is disabled.', () => {
    const {titleElement} = renderButton({disabled: true});

    expect(titleElement).toHaveStyle({color: theme.colors.gray2});
  });

  it('when button is loading: it shows active indicator, it hides the button title and disables the onPress function', () => {
    const mockedOnPress = jest.fn();
    const {loadingElement, titleElement, buttonElement} = renderButton({
      loading: true,
      disabled: false,
      onPress: mockedOnPress,
    });

    expect(loadingElement).toBeTruthy();
    expect(titleElement).toBeFalsy();

    fireEvent.press(buttonElement as ReactTestInstance);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
