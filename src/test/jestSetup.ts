export {};

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Mocking the useNavigation hook
// This is necessary because the useNavigation hook is used in the PostBottom component
// and we need to mock it to avoid errors when testing
export const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({navigate: mockedNavigate}),
}));
