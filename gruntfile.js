module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //typescript compilation options
        ts: {
            build: {
                src: ['./app/**/*.ts'],
                out: './dist/app.js',
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
                            pattern: 'devApp',
                            replacement: 'prodApp'
                        }
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', ['ts:build', 'sass:dist', 'string-replace:build']);
};