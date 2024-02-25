// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }, // Closing the ecmaFeatures object with a comma
  }, // Closing the parserOptions object with a comma
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ], // Terminating the extends array with a comma
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add specific rules as needed
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allows implicit return types in functions
    'react/prop-types': 'off', // Disable prop-types since we're using TypeScript for type-checking
  },
};
