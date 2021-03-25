module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'latest'
    }
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    'react/prop-types': ['off'],
    'no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': ['off'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-sort-props': ['warn'],
    indent: [2, 2, { SwitchCase: 1 }]
  }
}
