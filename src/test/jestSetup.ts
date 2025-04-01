export {};

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// Mocking the useSafeAreaInsets hook from react-native-safe-area-context
// This is necessary because the useSafeAreaInsets hook is used in the useAppSafeArea hook
jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

// Mocking the useNavigation hook
// This is necessary because the useNavigation hook is used in the PostBottom component
// and we need to mock it to avoid errors when testing
export const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({navigate: mockedNavigate}),
}));
