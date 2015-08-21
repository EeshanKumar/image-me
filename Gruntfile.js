module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");

  var srcFiles = ["app/**/*.js", "server.js", "lib/**/*.js"];

  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true
      }
    }
  });

  grunt.registerTask("default", [ "jshint"]);
};
