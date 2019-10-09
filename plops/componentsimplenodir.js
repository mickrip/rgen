const path = require("path");

module.exports = function(plop) {
  plop.setHelper("pwd", n => path.resolve(process.cwd()));

  plop.setGenerator("default", {
    description: "Component generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "{{pwd ''}}/{{pascalCase name}}.jsx",
        templateFile: "../templates/componentsimple/component.hbs"
      }
    ]
  });
};

//pascalCase
