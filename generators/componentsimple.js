const askComponentName = require("../helpers/askComponentName");
const askToCreateDir = require("../helpers/askToCreateDir");

module.exports = {
  description: "Standard Component (no Styling)",
  prompts: [askComponentName, askToCreateDir],
  files: [
    {
      target: "{{pascalCase name}}.jsx",
      template: "component/component.hbs"
    }
  ]
};
