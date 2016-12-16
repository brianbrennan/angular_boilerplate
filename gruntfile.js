module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        ts: {
            build: {
                src: ['./app/**/*.ts'],
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    moduleResolution: 'node',
                    sourceMap: false,
                    emitDecoratorMetadata: false,
                    experimentalDecorators: true,
                    lib: ['es2015', 'dom'],
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors: true
                }
            }
        }
    });

    grunt.registerTask('build', ['ts:build']);
};