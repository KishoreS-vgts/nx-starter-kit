const nx = require('@nx/eslint-plugin')

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // 'jsx-a11y': [
      //   2,
      //   {
      //     'jsx-a11y/aria-role': 'warn',
      //     allowedInvalidRoles: ['text'],
      //     ignoreNonDOM: true,
      //   },
      // ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
            {
              sourceTag: 'type:shared-ui',
              onlyDependOnLibsWithTags: ['type:shared-ui', 'scope:utils'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
]
