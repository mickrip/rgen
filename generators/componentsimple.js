const askComponentName = require("../helpers/askComponentName");

module.exports = {
  description: "Standard Component",
  prompts: [askComponentName],
  files: [
    {
      target: "{{pwd name}}/{{pascalCase name}}.jsx",
      template: "component/component.hbs"
    }
  ]
};
