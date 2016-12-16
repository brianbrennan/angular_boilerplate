module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        ts: {
            build: {
                src: ['./app/**/*.ts'],
                options: {
                    experimentalDecorators: true
                }
            }
        }
    });

    grunt.registerTask('build', ['ts:build']);
};