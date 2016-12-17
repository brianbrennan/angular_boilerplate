module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //typescript compilation options
        ts: {
            build: {
                src: ['./app/**/*.ts'],
                options: {
                    target: 'es5',
                    module: 'system',
                    moduleResolution: 'node',
                    sourceMap: false,
                    emitDecoratorMetadata: false,
                    experimentalDecorators: true,
                    lib: ['es2015', 'dom'],
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors: true,
                    forceConsistentCasingInFileNames: true,
                    pretty: true,
                    fast: 'never'
                }
            }
        },
        //sass compilation options
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    './dist/styles.css': './app/globals/assets/scss/main.scss'
                }
            }

        },
        //string replace options for build
        'string-replace': {
            build: {
                files: {
                    'dist/': './index.html'
                },
                options: {
                    replacements: [
                        {
                            pattern: '<script src="./node_modules/core-js/client/shim.min.js"></script>',
                            replacement: ''
                        },
                        {
                            pattern: '<script src="./node_modules/zone.js/dist/zone.js"></script>',
                            replacement: ''
                        },
                        {
                            pattern: '<script src="./node_modules/reflect-metadata/Reflect.js"></script>',
                            replacement: ''
                        },
                        {
                            pattern: '<script src="./node_modules/systemjs/dist/system.src.js"></script>',
                            replacement: ''
                        },
                        {
                            pattern: './systemjs.config.js',
                            replacement: './app.js'
                        }
                    ]
                }
            }
        },
        //bundle scripts into single file
        browserify: {
            build: {
                files: {
                    './dist/app.js': ['./node_modules/core-js/client/shim.min.js',
                        './node_modules/zone.js/dist/zone.js',
                        './node_modules/reflect-metadata/Reflect.js',
                        './node_modules/systemjs/dist/system.src.js',
                        './systemjs.config.js',
                        './app/main/bootstrap.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', ['ts:build', 'sass:dist', 'browserify:build', 'string-replace:build']);
};