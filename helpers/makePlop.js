const path = require("path");

let data = {};

const makeActions = data => {
  return data.map(v => {
    return {
      type: "add",
      path: v.target,
      templateFile: path.join(
        __dirname,
        "..",
        "generators",
        "templates",
        v.template
      )
    };
  });
};

module.exports = plop => {
  // Since there's no way I could figure out how to easily
  // programmatically create a plop function without giving it a filename,
  // I'm using globals! hmm.
  data = global._terribleIdea;
  plop.setGenerator("default", {
    description: "Generated Generator",
    prompts: data.prompts,
    actions: makeActions(data.files)
  });
};
