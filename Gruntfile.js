module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles.css': 'scss/import.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/jquery-2.1.1.min.js', 'js/main.js'],
                dest: 'scripts.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'scripts.min.js': ['js/jquery-2.1.1.min.js', 'js/main.js']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};