module.exports = {
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'prefer-template': 'error',
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          singleQuote: true,
          parser: 'typescript',
          endOfLine: 'auto',
        },
      ],
    },
    ignorePatterns: ['build'],
  };
  