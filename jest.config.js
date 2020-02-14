module.exports = {
  cacheDirectory: '<rootDir>/.tmp/jest',
  coverageDirectory: './.tmp/coverage',
  moduleNameMapper: {
    '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    NODE_ENV: 'test'
  },
  verbose: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/.*'],
  coveragePathIgnorePatterns: ['typings.d.ts'],
  transformIgnorePatterns: ['.*(node_modules).*$'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
}
