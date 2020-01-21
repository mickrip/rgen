const askComponentName = require("../helpers/askComponentName");
const askToCreateDir = require("../helpers/askToCreateDir");

module.exports = {
  description: "React Storybook helpers",
  prompts: [askComponentName, askToCreateDir],
  files: [
    {
      target: "{{lowerCase name}}.stories.js",
      template: "storybook/storybook.hbs"
    },
    {
      target: "readme.md",
      template: "storybook/readme.hbs"
    }
  ]
};
