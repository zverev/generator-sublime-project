var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    method1: function() {
        console.log('foo');
    },
    method2: function() {
        console.log('bar');
    }
});