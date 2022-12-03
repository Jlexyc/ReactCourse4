module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': ['off'],
    'import/prefer-default-export': ['off'],
    'react/require-default-props': ['off'],
    'default-param-last': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/jsx-props-no-spreading': ['off'],
  },
};
