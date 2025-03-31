import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {renderHook} from 'test-utils';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

// Mocking the useSafeAreaInsets hook from react-native-safe-area-context
// This is necessary because the useSafeAreaInsets hook is used in the useAppSafeArea hook
jest.mock('react-native-safe-area-context', () => {
  // Mocking the useSafeAreaInsets hook to return a fixed value for testing purposes
  return {
    ...jest.requireActual('react-native-safe-area-context/jest/mock'),
    useSafeAreaInsets: jest.fn(),
  };
});

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 4,
          bottom: 2,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s24);
    expect(result.current.bottom).toEqual(theme.spacing.s24);
  });

  test('when the safe area is greater than minimum requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 40,
          bottom: 40,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
