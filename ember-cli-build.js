'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
        'ember-cli-babel': { enableTypeScriptTransform: true },

        svgJar: {
            sourceDirs: [
                'public/assets',
                'node_modules/@ember-eui/core/public',
                'node_modules/@ember-eui/core/vendor/icon'
            ]
        }

        // Add options here
    });

    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
        staticAddonTestSupportTrees: true,
        staticAddonTrees: true,
        staticEmberSource: true,
        staticInvokables: true,
        skipBabel: [
            {
                package: 'qunit'
            }
        ]
    });
};
