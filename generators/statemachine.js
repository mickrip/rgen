const askComponentName = require("../helpers/askComponentName");

module.exports = {
  description: "State Machine Hook",
  prompts: [askComponentName],
  files: [
    {
      template: "statemachine.hbs",
      target: "{{name}}.js"
    }
  ]
};
