'use strict';

module.exports = {
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-ember-template-tag'],
    importOrder: [
        '^@glimmer/(.*)$',
        '^@ember/(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^band-songs/(.*)$',
        '^[./]',
        '',
        '<TYPES>',
        '<TYPES>^[.]'
    ],
    importOrderCaseSensitive: true,
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    overrides: [
        {
            files: '*.{js,gjs,ts,gts,mjs,mts,cjs,cts}',
            options: {
                templateSingleQuote: false,
                printWidth: 120
            }
        },
        {
            files: '*.json',
            options: {
                singleQuote: false
            }
        },
        {
            files: '*.hbs',
            options: {
                parser: 'glimmer',
                singleQuote: false
            }
        }
    ]
};
