module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    bower: {
      install: {
        options: {
          layout: 'byComponent',
          cleanTargetDir: true,
          targetDir: 'test/mock/storage/bower',
          install: true,
          verbose: false,
          cleanBowerDir: false
        }
      }
    },
    mocha: {
      test: {
        src: ['test/mock/storage/test.html']
      }
    },
    simplemocha: {
      options: {
        globals: ['chai'],
        timeout: 3000,
        ui: 'tdd',
        reporter: 'tap'
      },

      all: { src: [''] }
    },
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.registerTask('test', ['mocha', 'simplemocha']);
};
