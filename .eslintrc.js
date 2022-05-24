module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // ESLINT BASE RULES
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'no-unused-expressions': ['warn', { allowTernary: true, allowShortCircuit: true, enforceForJSX: true }],
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please, import specific function (e.g. lodash/get) instead of full lodsah lib to keep bundeled size minimal.',
      },
      {
        name: 'lodash/chain',
        message:
          'Chain imports full lodash lib inside, it should not be used.' +
          ' More: https://medium.com/bootstart/why-using-chain-is-a-mistake-9bc1f80d51ba',
      },
    ],
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-script-url': 'error',
    'no-param-reassign': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    // REACT RULES
    'react/jsx-indent-props': [2, 'first'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/jsx-key': 'error',
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    // REACT-HOOKS PLUGIN RULES
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'no-unused-vars': 'off',
        // TYPESCRIPT PLUGIN RULES
        '@typescript-eslint/no-unused-vars': ['warn'],
        // '@typescript-eslint/explicit-function-return-type': [
        //   'error',
        //   {
        //     allowExpressions: true,
        //     allowTypedFunctionExpressions: true,
        //     allowHigherOrderFunctions: true,
        //     allowDirectConstAssertionInArrowFunctions: true,
        //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        //   },
        // ],
      },
    },
  ],
};
