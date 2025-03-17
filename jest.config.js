module.exports = {
  preset: 'react-native',
  // collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  collectCoverageFrom: [
    'src/{components,utils,hooks,domainModule}/**/*.{js,jsx,ts,tsx}',
  ],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
};
