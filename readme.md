# generator-sublime-project

A [Yeoman](http://yeoman.io) generator for creating frontend sublime project.
Simply copies `.sublime-project` file and renames it.

- ignores `node_modules`, `bower_components`, `temp` and `dist` folders
- ignores `*.sublime-project` and `*.sublime-workspace` files

## Getting Started

First, install [Yeoman](http://yeoman.io) if you haven't already

```bash
$ npm install -g yo
```

Then install `generator-sublime-project`:

```bash
$ npm install -g generator-sublime-project
```

Now to create a sublime project, create a project folder and inside that folder run `yo sublime-project`:

```bash
$ mkdir project
$ cd project
$ yo sublime-project
```