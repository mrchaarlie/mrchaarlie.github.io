module.exports = {
  plugins: ['standard', 'react'],

  extends: ['standard', 'prettier', 'prettier/standard'],

  settings: {
    react: {
      version: '16.8',
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    jest: true,
    browser: true,
  },

  rules: {
    'no-var': 2,
    'no-trailing-spaces': 2,
    'eol-last': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 1,
  },
}
