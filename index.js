module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['flowtype', 'react', 'prettier'],
  rules: {
    /* disabling airbnb rules */
    'class-methods-use-this': 'off',
    'dot-location': 'warn',
    'func-names': 'off',
    'import/extensions': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'warn',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-bitwise': 'warn',
    'no-fallthrough': 'warn',
    'no-mixed-operators': 'warn',
    'no-multi-assign': 'warn',
    'no-plusplus': 'warn',
    'no-restricted-syntax': 'off',
    'no-return-await': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-undef': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'object-property-newline': 'warn',
    'react/forbid-prop-type': 'off',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/require-default-props': 'warn',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 0,
    'react/style-prop-object': 'warn',
    'space-before-function-paren': 'off',
    'no-await-in-loop': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'no-buffer-constructor': 'warn',
    'no-restricted-globals': 'warn',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**/*.js',
          '**/*.test.js',
          '**/*_test.js',
          '**/*.spec.js',
          '**/*.story.js',
        ],
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }],
  },
};
