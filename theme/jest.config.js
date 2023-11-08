module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transformIgnorePatterns: ['/node_modules/(?!@primer/behaviors)'],
}
