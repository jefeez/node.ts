/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  clearMocks: true,
  roots: ['<rootDir>/'],
  modulePaths: ['./'],
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  verbose: false,
  cache: true,
}
