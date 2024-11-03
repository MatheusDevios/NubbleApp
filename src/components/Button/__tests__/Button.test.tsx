import React from 'react';

import {render, fireEvent, screen} from 'test-utils';

import {Button} from '../Button';

describe('<Button/>', () => {
  it('calls onPress function when button is pressed.', () => {
    const mockOnPress = jest.fn();
    // Your test here
    render(<Button title="Test" onPress={mockOnPress} />);

    const titleElement = screen.getByText('Test');

    fireEvent.press(titleElement);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
