const askComponentName = require("../helpers/askComponentName");
const askToCreateDir = require("../helpers/askToCreateDir");

module.exports = {
  description: "Typescript Standard Component (with styled component)",
  prompts: [
    askComponentName,
    askToCreateDir,
    {
      type: "list",
      name: "sctemplate",
      choices: [{ name: "standard", value: "componentstyles" }],
      message: "Type of styled-component"
    }
  ],
  files: [
    {
      target: "{{pascalCase name}}.tsx",
      template: "component/componenttypescript.hbs"
    },
    {
      target: "{{pascalCase name}}Styles.tsx",
      template: "component/{{sctemplate}}.hbs"
    }
  ]
};
