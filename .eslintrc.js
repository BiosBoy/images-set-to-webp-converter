module.exports = {
  extends: ['airbnb', 'plugin:import/react'],
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'import', 'jest'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  settings: {
    'import/parser': 'babel-eslint',
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['./apps', './shared', './config', './globals'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  globals: {
    jest: true,
    react_disableWarnings: true,
    react_enableWarnings: true,
    __DEV__: false,
    __TEST__: false,
    __PROD__: false,
    __COVERAGE__: false,
    __NODE_ENV__: false,
    __CT_CHUNK_FIX__: false,
    __WEBPACK_MODE__: false
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    indent: [
      1,
      2,
      {
        SwitchCase: 1
      }
    ],
    'import/extensions': [
      1,
      'always',
      {
        js: 'never',
        jsx: 'never',
        json: 'never',
        ts: 'never',
        tsx: 'never',
        '.tsx': 'never'
      }
    ],
    'import/no-named-as-default': 0,
    'linebreak-style': [1, 'unix'],
    'no-restricted-imports': [1, 'lodash'],
    'no-restricted-globals': [2, 'find'],
    'no-var': 0,
    'no-shadow': 2,
    'vars-on-top': 0,
    'consistent-return': 1,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^prevState|^prevProps|^nextProps|^nextState'
      }
    ],
    'no-cond-assign': [1, 'always'],
    'default-case': 1,
    'no-use-before-define': 1,
    'one-var-declaration-per-line': 1,
    'no-confusing-arrow': 1,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 1,
    'no-case-declarations': 1,
    'newline-per-chained-call': 1,
    'no-restricted-syntax': 1,
    'guard-for-in': 1,
    'no-mixed-operators': 0,
    'no-continue': 1,
    'func-name-matching': 1,
    'prefer-template': 1,
    'no-useless-escape': 1,
    'new-parens': 1,
    'class-methods-use-this': 1,
    'no-return-assign': 1,
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-properties': 1,
    'prefer-promise-reject-errors': [
      1,
      {
        allowEmptyReject: false
      }
    ],
    'one-var': [1, 'never'],
    'object-shorthand': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'max-len': [
      2,
      {
        code: 120,
        ignoreStrings: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'dot-location': [2, 'property'],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '>': 'before',
          '>=': 'before',
          '<': 'before',
          '<=': 'before',
          '||': 'before',
          '&&': 'before',
          '+': 'before',
          '-': 'before'
        }
      }
    ],
    'max-statements': [2, 15],
    'max-depth': [1, 2],
    complexity: [2, 10],
    'max-params': [1, 3],
    'max-nested-callbacks': [2, 3],
    'space-before-function-paren': [2, 'never'],
    semi: ['error', 'never'],
    'prefer-const': 1,
    'no-param-reassign': [
      1,
      {
        props: false
      }
    ],
    'dot-notation': 'off',
    'no-console': 'off',
    curly: 0,
    'comma-dangle': [2, 'never'],
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'newline-after-var': [2, 'always'],
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['When', 'Then', 'Given', 'Nothing', 'T', 'F'],
        newIsCap: false,
        capIsNew: false
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-underscore-dangle': [
      0,
      {
        allowAfterThis: true,
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '__DEV__',
          '__NODE_ENV__',
          '__INITIAL_STATE__',
          '_exception',
          '__html'
        ]
      }
    ],
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: false
      }
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      0,
      {
        labelComponents: ['CustomLabel'],
        labelAttributes: ['inputLabel'],
        controlComponents: ['CustomInput'],
        assert: 'both',
        depth: 3
      }
    ],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/interactive-supports-focus': 1,
    'react/jsx-indent': [1, 2],
    'react/jsx-fragments': 0,
    'react/static-property-placement': 0,
    'react/no-array-index-key': 1,
    'react/no-will-update-set-state': 1,
    'react/jsx-boolean-value': 0,
    'react/require-default-props': 1,
    'react/style-prop-object': 0,
    'react/jsx-first-prop-new-line': 1,
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': [
      0,
      {
        ignorePureComponents: true
      }
    ],
    'react/jsx-no-bind': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-key': 2,
    'react/no-find-dom-node': 1,
    'react/require-optimization': [
      1,
      {
        allowDecorators: ['pureRender', 'connect']
      }
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 2,
    'react/no-children-prop': 1,
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any']
      }
    ],
    'quote-props': [1, 'as-needed'],
    'react/prop-types': 2,
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: false
      }
    ],
    'react/jsx-indent-props': [1, 2],
    'react/no-multi-comp': [
      1,
      {
        ignoreStateless: true
      }
    ],
    'react/jsx-handler-names': [
      1,
      {
        eventHandlerPrefix: '_handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: true
      }
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 2
      }
    ],
    'react/jsx-wrap-multilines': 0,
    'react/no-unused-prop-types': 1,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'mixins',
          'displayName',
          'actions',
          'contextTypes',
          'childContextTypes',
          'propTypes',
          'defaultProps',
          'pure',
          'statics',
          'state',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'getStoresState',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          '/^component.+$/',
          '/^get.+$/',
          '/^on.+$/',
          '/^handle.+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: false
      }
    ],
    'import/no-commonjs': [
      0,
      {
        allowPrimitiveModules: true
      }
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/prefer-default-export': 1,
    'import/newline-after-import': 0,
    'import/unambiguous': 0,
    'import/no-webpack-loader-syntax': 1,
    'import/first': 1,
    'import/no-dynamic-require': 1,
    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ]
  }
}
