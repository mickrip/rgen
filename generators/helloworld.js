const askComponentName = require("../helpers/askComponentName");

module.exports = {
  skip: true,
  description: "Hello World",
  prompts: [askComponentName],
  files: [
    {
      template: "helloworld.hbs",
      target: "{{name}}/{{pascalCase name}}.txt"
    }
  ]
};
