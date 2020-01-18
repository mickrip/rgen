const askComponentName = require("../helpers/askComponentName");
const askToCreateDir = require("../helpers/askToCreateDir");

module.exports = {
  description: "Standard Component (with styled component)",
  prompts: [
    askComponentName,
    askToCreateDir,
    {
      type: "list",
      name: "sctemplate",
      choices: [
        { name: "standard", value: "componentstyles" },
        { name: "tailwind", value: "componentstylestailwind" }
      ],
      message: "Type of styled-component"
    }
  ],
  files: [
    {
      target: "{{pascalCase name}}.jsx",
      template: "component/component.hbs"
    },
    {
      target: "{{pascalCase name}}Styles.jsx",
      template: "component/{{sctemplate}}.hbs"
    }
  ]
};
