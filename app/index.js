var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    createProjectFile: function() {
        this.copy('project.sublime-project');
    }
});