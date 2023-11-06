module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['@primer/react/lib-esm/utils/test-helpers'],
  transformIgnorePatterns: ['/node_modules/(?!@primer/behaviors)'],
}
