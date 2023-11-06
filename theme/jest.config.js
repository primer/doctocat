module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['/node_modules/@primer/react/lib-esm/utils/test-helpers'],
  transformIgnorePatterns: ['/node_modules/(?!@primer/behaviors)'],
}
