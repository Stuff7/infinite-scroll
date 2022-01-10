module.exports = {
  env: {
    'es6': true
  },
  parserOptions: {
    'ecmaVersion': 12,
    "sourceType": "module"
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    curly: ['error', 'all'],
    'func-names': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', {
      after: true,
      before: false,
    }],
    'id-blacklist': ['error', 'getDerivedStateFromProps'],
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    // TODO: Consider re-enabling when perf improves
    'import/no-named-as-default-member': 'off',
    // TODO: Consider re-enabling when perf improves
    'import/prefer-default-export': ['off'],
    // This breaks our custom Link component. If/When we redo the Link component, we can revise this
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'max-len': ['warn', {
      code: 120,
      tabWidth: 4,
    }],
    'no-confusing-arrow': 'off',
    'no-console': ['warn'],
    'no-continue': ['off'],
    'no-debugger': ['off'],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
    }],
    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: ['draft'],
    }],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['off'],
    'no-underscore-dangle': ['error', {
      allow: ['_id'],
    }],
    'object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    'operator-linebreak': ['error', 'after'],
    'sort-keys': ['warn'],
    yoda: ['off'],
  },
  settings: {
    'import/ignore': [
      '\\.ts$',
    ],
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
        ],
      },
    },
  },
};
