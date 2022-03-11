module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx',
    'airbnb',
    'google',
    'plugin:security/recommended',
  ],
  plugins: [
    'security',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    __DEV__: false,
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    'prefer-rest-params': 'off',
    'react/display-name': 'off',
    'require-jsdoc': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'complexity': [
      'error',
      { max: 10 },
    ],
  },
};
