"use strict";

var originCSS = 'web/static/css/*.css',
  originJS = 'web/static/js/**/*.js';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'web/static/dist_grunt/js/test.min.js': ['web/static/dist_grunt/js/test.js'],
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'web/static/dist_grunt/css/test.min.css': ['web/static/dist_grunt/css/test.css'],
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'web/static/fonts',
          src: ['*.*'],
          dest: 'web/static/dist_grunt/fonts'
        }]
      }
    }
  });

  grunt.registerTask("prepare", "Finds and prepares concatenation.", function() {
    var concat = grunt.config.get('concat') || {};
    concat['js'] = {
      src: [originJS],
      dest: 'web/static/dist_grunt/js/test.js'
    };
    concat['css'] = {
      src: [originCSS],
      dest: 'web/static/dist_grunt/css/test.css'
    };
    grunt.config.set('concat', concat);
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'prepare', 'concat', 'uglify', 'cssmin']);
};