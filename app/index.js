var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    createProjectFile: function() {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function(answers) {
            this.log(answers.name);
            this.copy('project.sublime-project', answers.name + '.sublime-project');
            done();
        }.bind(this));
    }
});