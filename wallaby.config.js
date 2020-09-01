// Wallaby.js configuration

module.exports = function (wallaby) {
    return {
        // set `load: false` to all source files and tests processed by webpack
        // (except external files),
        // as they should not be loaded in browser,
        // their wrapped versions will be loaded instead
        files: [
            { pattern: 'src/**/*.js', load: false },
            '!src/**/*.spec.js'
            // {pattern: 'lib/jquery.js', instrument: false},
        ],

        tests: [
            { pattern: 'src/**/*.spec.js', load: false }
        ],

        postprocessor: wallaby.postprocessors.webpack({
            // webpack options, such as
            // module: {
            //   rules: [...]
            // },
            // externals: { jquery: "jQuery" }
        }),

        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
