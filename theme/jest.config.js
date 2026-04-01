module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!@primer/behaviors|@primer/react|@lit-labs/react|@github/relative-time-element|@github/tab-container-element)',
  ],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/fileMock.js',
  },
}
