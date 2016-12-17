module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        preprocessors: {
            'test/**/*.js': 'systemjs',
            'app/**/*.js': 'systemjs'
        },

        files: [
            // // Polyfills.
            // './node_modules/core-js/client/shim.min.js',
            //
            // 'node_modules/reflect-metadata/Reflect.js',
            //
            // // System.js for module loading
            // 'node_modules/systemjs/dist/system-polyfills.js',
            // 'node_modules/systemjs/dist/system.src.js',
            //
            // // Zone.js dependencies
            // 'node_modules/zone.js/dist/zone.js',
            // 'node_modules/zone.js/dist/proxy.js',
            // 'node_modules/zone.js/dist/sync-test.js',
            // 'node_modules/zone.js/dist/jasmine-patch.js',
            // 'node_modules/zone.js/dist/async-test.js',
            // 'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


            {pattern: 'karma-test-shim.js', included: false, watched: true},

            // paths loaded via module imports
            // Angular itself
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

            // Our built application code and tests
            {pattern: 'app/**/*.js', included: false, watched: true},
            {pattern: 'test/**/*.js', included: true, watched: true},

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            {pattern: 'app/**/*.html', included: false, watched: true},
            {pattern: 'app/**/*.css', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: false},
            {pattern: 'app/**/*.js.map', included: false, watched: false},
            {pattern: 'test/**/*.ts', included: false, watched: false},
            {pattern: 'test/**/*.js.map', included: false, watched: false}

        ],

        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        }
    })
};