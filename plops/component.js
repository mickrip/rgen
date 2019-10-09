const path = require("path");

module.exports = function(plop) {
  plop.setHelper("pwd", n => path.resolve(process.cwd(), n));

  plop.setGenerator("default", {
    description: "Component generator",
    actions: [
      {
        type: "add",
        path: "{{pwd name}}/{{pascalCase name}}.jsx",
        templateFile: "../templates/component/component.hbs"
      },
      {
        type: "add",
        path: "{{pwd  name}}/{{pascalCase name}}Styles.jsx",
        templateFile: "../templates/component/componentstyles.hbs"
      }
    ]
  });
};

//pascalCase
