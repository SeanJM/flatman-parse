const fs = require('fs');
const readme = require('./readme');
const test = require('./test');
const scripts = require('./scripts');

const config = JSON.parse(fs.readFileSync('grunt.json'));

module.exports = {
  concat : scripts.task.concat,

  uglify : scripts.task.uglify,

  watch : config.isProduction
    ? {}
    : Object.assign({
    readme : {
      files : readme.files,
      tasks : ['readme']
    },

    test : {
      files : test.files,
      tasks : ['test']
    },

    // Config and Environment
    configFiles : {
      files : ['Gruntfile.js'],
      options : {
        reload : true
      },
      tasks: ['default']
    }
  },
    scripts.task.watch
  )
};
