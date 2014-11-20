module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jscs: {
      src: "src/*.js",
      options: {
          config: "config.json"
      }
    }
  });

  // Load the plugin that provides the "jscs" task.
  grunt.loadNpmTasks("grunt-jscs");

  // Default task(s).
  grunt.registerTask('default', ['jscs']);

};