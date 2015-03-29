module.exports = function(grunt) {

    grunt.initConfig({
        'babel': {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/index.js': 'index.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask("default", ["babel"]);
};