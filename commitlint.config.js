module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'init',
          'feat',
          'create',
          'add',
          'update',
          'version',
          'fix',
          'docs',
          'chore',
          'style',
          'refactor',
          'ci',
          'test',
          'revert',
          'perf',
          'vercel',
        ],
      ],
    },
  };