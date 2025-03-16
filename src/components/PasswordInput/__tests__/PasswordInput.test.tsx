import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {IconProps, PasswordInput} from '@components';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnChange = jest.fn;

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText('Password');

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('when pressing eye button, it should show password and show the eye off icon', () => {
    const mockedOnChange = jest.fn;

    render(
      <PasswordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeButton: IconProps['name'] = 'eyeOn';
    const eyeIcon = screen.getByTestId(eyeButton);

    fireEvent.press(eyeIcon);

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText('Password');

    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
