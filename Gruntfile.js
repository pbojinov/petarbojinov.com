/**
 * Author: Petar
 * Date: 8/23/13
 */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                curly: true,
                debug: true,
                unused: true,
                forin: true,
                eqnull: true,
                eqeqeq: true,
                browser: true,
                globals: {
                    devel: true,
                    jquery: true
                }
            },
            all: ['app/scripts/portfolio.js'] //,'dist/scripts/portfolio-v<%= pkg.version %>.js']
        },
        concat: {
            js: {
                src: ['app/scripts/jquery.js', 'app/scripts/bootstrap.min.js', 'app/scripts/portfolio.js'],
                dest: 'dist/scripts/portfolio-v<%= pkg.version %>.js',
                options: {
                    separator: ';'
                }
            },
            css: {
                src: ['app/styles/bootstrap-cleaned.css', 'app/styles/font-awesome.min.css', 'app/styles/stylish-portfolio.css', 'app/styles/animate-custom.css'],
                dest: 'dist/styles/portfolio-v<%= pkg.version %>.css',
                options: {
                    separator: ' '
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                preserveComments: false,
                beautify: false,
                compress: false
            },
            my_target: {
                files: {
                    'dist/scripts/portfolio-v<%= pkg.version %>.min.js': 'dist/scripts/portfolio-v<%= pkg.version %>.js' //destination:source
                }
            }
        },
        cssmin: {
            css: {
                src: 'dist/styles/portfolio-v<%= pkg.version %>.css',
                dest: 'dist/styles/portfolio-v<%= pkg.version %>.min.css'
            }
        },
        imagemin: {
            dynamic: {
                options: { // Target options
                    optimizationLevel: 7,
                    progressive: true,
                    pngquant: true
                },
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'app/images/', // Src matches are relative to this path
                    src: ['*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/images/' // Destination path prefix
                }]
            }
        },
        //font awesome font folder not copying for some reason...
        //'app/font-awesome/font/'
        copy: {
            main: {
                src: ['app/*.html', 'app/favicon.ico', 'app/images'], //, 'app/font'],
                dest: 'dist/',
                flatten: true,
                expand: true
                //filter: 'isFile'
            }
        },
        htmlrefs: {
            dist: {
                src: 'dist/*.html',
                dest: 'dist/',
                /** any other parameter included on the options will be passed for template evaluation */
                options: {
                    buildNumber: 'portfolio-v<%= pkg.version %>'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    //destination:source
                    'dist/index.html': 'dist/index.html',
                    'dist/404.html': 'dist/404.html',
                }
            }
        },
        // gzip assets 1-to-1 for production
        compress: {
            main: {
                options: {
                    mode: 'gzip',
                    pretty: true
                },
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: 'public/'
            }
        }
    });

    // Load Modules
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-htmlrefs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');


    grunt.registerTask('image', ['imagemin']);

    grunt.registerTask('gzip', ['compress']);

    // Default task(s).
    grunt.registerTask('default', [ 'concat', 'uglify', 'cssmin', 'imagemin',
        'copy', 'htmlrefs', 'htmlmin'
    ]);    

    grunt.registerTask('dev', ['jshint', 'concat', 'uglify', 'cssmin', 'imagemin',
        'copy', 'htmlrefs', 'htmlmin', 'jshint'
    ]);

};
