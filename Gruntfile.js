const fs = require('fs');
const path = require('path');
const initConfig = require('./grunt/initConfig');
const config = JSON.parse(fs.readFileSync(path.resolve('grunt.json')));

module.exports = function(grunt) {
  let tasks = [
    'readme'
  ];

  initConfig.pkg = grunt.file.readJSON('package.json');
  grunt.initConfig(initConfig);

  if (config.isProduction) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    tasks.push('uglify');
  } else {
    grunt.loadNpmTasks('grunt-contrib-concat');
    tasks.push('concat');
  }

  tasks.push('test');

  grunt.registerTask('setup', function () {
    require('./grunt/setup')(this.async());
  });

  grunt.registerTask('readme', function () {
    require('./grunt/readme').task(this.async());
  });

  grunt.registerTask('test', function () {
    require('./grunt/test').task(this.async());
  });

  if (!config.isProduction) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    tasks.push('watch');
  }

  grunt.registerTask('default', tasks);
};
