const askComponentName = require("../helpers/askComponentName");

module.exports = {
  skip: true,
  description: "Hello World",
  prompts: [askComponentName],
  files: [
    {
      template: "helloworld.hbs",
      target: "{{pwd name}}/{{pascalCase name}}.txt"
    }
  ]
};
