# React front-end generators

A boilerplate-friendly node based code generation tool
using [plop](https://plopjs.com/) to do the heavy lifting.

## Installation

To use this, we'll need to make this a global npm command.

- Clone this repo, cd into it.
- `npm install`
- `npm link`

## Usage

- cd into the directory you want to add files. ie `./src/components`
- type `rgen`

## Making your own Generators

All generators live in the `generators` dir. They are automagically acknowledged when you type `rgen`.

```js
const askComponentName = require("../helpers/askComponentName");

module.exports = {
  description: "Hello World",
  prompts: [askComponentName],
  files: [
    {
      template: "helloworld.hbs",
      target: "{{pwd name}}/{{pascalCase name}}.txt"
    }
  ]
};
```

- The template specifies the handlebars template in the `templates` dir.
- The target is the target relative to the current directory.
- some useful helpers are documented [here](https://github.com/plopjs/plop#built-in-helpers). You could make your own

Feel free to fork and/or pilfer it.
