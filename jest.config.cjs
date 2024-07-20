/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>./setupTests.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
