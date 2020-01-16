const askComponentName = require("../helpers/askComponentName");

module.exports = {
  description: "Standard Component (Don't create a Dir)",
  prompts: [askComponentName],
  files: [
    {
      target: "{{pwd ''}}/{{pascalCase name}}.jsx",
      template: "componentsimple/component.hbs"
    }
  ]
};
