'use strict'

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //JS
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false
      },
      build: {
          files: [{
              expand: true,
              cwd: 'src/js',
              src: '**/*.js',
              dest: 'app/js'
          }]
      }
    },
    // compile SASS stylesheets to css -----------------------------------------
    sass: {
      dist: {
        options:{
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'app/css/style.css': 'src/css/style.scss'
        }
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
  
};