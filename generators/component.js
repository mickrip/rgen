const askComponentName = require("../helpers/askComponentName");

module.exports = {
  description: "Standard Component (with styled component)",
  prompts: [askComponentName],
  files: [
    {
      target: "{{name}}/{{pascalCase name}}.jsx",
      template: "component/component.hbs"
    },
    {
      target: "{{name}}/{{pascalCase name}}Styles.jsx",
      template: "component/componentstyles.hbs"
    }
  ]
};
