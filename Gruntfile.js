module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {// Task
            dist: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    'static/css/default.css': 'static/css/sass/default.scss',
                    'static/css/vendors.css': 'static/css/sass/vendors.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'static/css/sass/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        //Minify JS
        uglify: {
            options: {
                mangle: false
            },
            theme: {
                files: {
                    'static/deploy/theme.min.js': [
                        'static/plugins/bootstrap-4.0.0-alpha/js/bootstrap.min.js',
                        'static/plugins/fancybox/js/jquery.fancybox.js',
                        'static/plugins/jquery/js/jquery.min.js',
                        'static/plugins/jquery.nicescroll/js/jquery.nicescroll.min.js',
                        'static/plugins/owl-carousel/js/owl.carousel.min.js',
                        'static/plugins/html5.js',
                        'static/plugins/jquery-migrate-1.2.1.min.js',
                        'static/plugins/respond.min.js',
                        'static/dev/js/_article-templates.js',
                        'static/dev/js/home.js',
                        'static/dev/js/user-articles.js',
                        'static/dev/js/auth.js',
                        'static/dev/js/search.js',
                        'static/dev/js/common.js',
                        'static/dev/js/account-modal.js',
                        'static/dev/js/user-profile.js',
                        'static/dev/js/login.js'
                    ]                    
                }
            }
        },
        cachebreaker: {
            theme: {
                options: {
                    match: ['theme.min.js', 'output.min.css']
                },
                files: {
                    src: [
                        'layouts/partials/_javascript.twig',
                        'layouts/main.twig'
                    ]
                }
            }
        },
        //Minify Css Files
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            theme: {
                files: {
                    'static/deploy/output.min.css' : [
                        'static/css/default.css',
                        'static/css/vendors.css'
                    ]
                }
            }
        },
    });
    
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'cachebreaker']);
};