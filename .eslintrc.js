const baseExtends = [
  'eslint:recommended',
  'plugin:jsx-a11y/recommended', // eslint-config-next does _not_ extend this, just sets some of its rules.
  'plugin:import/recommended', // eslint-config-next does _not_ extend this, just sets some of its rules.
  'plugin:import/typescript', // eslint-config-next does _not_ extend this, just sets some of its rules.
  'plugin:@typescript-eslint/recommended',
  // eslint-config-next
  // extends:
  //  plugin:react/recommended
  //  plugin:react-hooks/recommended
  //  plugin:@next/next/recommended
  //  plugin:@next/next/core-web-vitals
  'next/core-web-vitals',
];

module.exports = {
  extends: baseExtends,
  reportUnusedDisableDirectives: true,
  rules: {
    'max-len': ['error', { code: 120 }],
    'no-console': 'off', // we sometimes log to console while debugging staging
    'no-continue': 'off',

    // eslint-disable-next-line max-len
    // Undo this once https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/18266282424c546f47a74f842a7bf62bdde1d5e8/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links
    // is fixed
    'jsx-a11y/anchor-is-valid': 'off',

    'import/no-unresolved': 'error',

    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/brace-style': ['off'],
    '@typescript-eslint/no-unused-vars': 'off',
    // disabling because this is "technically safe" in React and the next.js docs use it
    // https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ]
  },
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
};
