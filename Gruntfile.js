module.exports = function (grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            temp: [
                "dist/js/scripts.js",
                "dist/js/libs.js",
                "dist/js/scripts.min.js",
                "dist/js/libs.min.js"
            ],
            all: ["dist/"]
        },

        jshint: {
            dist: {
                src: ["js/**/*.js"]
            }
        },

        concat: {
            scripts: {
                src: [
                    'assets/js/**/*.js',
                    "js/**/*.js"
                ],
                dest: "dist/js/scripts.js"
            },
            libs: {
                src: [
                    "lib/angular/angular-messages.js",
                    "lib/angular/angular-route.js",
                    "lib/angular/angular.js"
                ],
                dest: "dist/js/libs.js"
            },

            all: {
                src: [
                    "dist/js/scripts.min.js",
                    "dist/js/libs.min.js"
                ],
                dest: "dist/js/all.min.js"
            }

        },

        uglify: {
            scripts: {
                src: ["dist/js/scripts.js"],
                dest: "dist/js/scripts.min.js"
            },
            libs: {
                src: ["dist/js/libs.js"],
                dest: "dist/js/libs.min.js"
            }
        },

        cssmin: {
            all: {
                src: [
                    'assets/css/**/*.css',
                    'assets/font-awesome/**/*.css'
                ],
                dest: "dist/css/styles.min.css"
            }
        },

        htmlmin:{
            views: {
                options: {
                    collapseWhitespace: true,
                    removeComments: true
                },
                expand: true,
                cwd: "view/",
                src: ["*.html"],
                dest: "dist/view"
            }
        },

        copy: {
            all: {
                src: "index-prod.html",
                dest: "dist/index.html"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask("default", ["clean:all", "jshint", "concat:scripts", "concat:libs", "uglify", "concat:all", "cssmin", "htmlmin", "copy", "clean:temp"]);
}