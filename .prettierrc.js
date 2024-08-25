'use strict';

module.exports = {
    overrides: [
        {
            files: '*.{js,ts}',
            options: {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none',
                printWidth: 120
            }
        },
        {
            files: '*.json',
            options: {
                singleQuote: false,
                trailingComma: 'none'
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
