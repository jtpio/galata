module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: { browser: true, es6: true, node: true },
  parserOptions: { ecmaVersion: 2018 },
  // Apply @typescript-eslint rules only on typescript files
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/quotes': [
          'error',
          'single',
          { avoidEscape: true, allowTemplateLiterals: false }
        ],
        curly: ['error', 'all'],
        eqeqeq: 'error',
        'prefer-arrow-callback': 'error'
      }
    }
  ]
};
