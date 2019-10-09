#!/usr/bin/env node
const nodePlop = require("node-plop");
const inquirer = require("inquirer");

const runPlop = async (filename, data) => {
  const plop = nodePlop(`${__dirname}/plops/${filename}.js`);
  const basicAdd = plop.getGenerator("default");
  return await basicAdd.runActions(data);
};

const askName = async q => {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: q
    }
  ]);
};

const choices = [
  {
    name: "Standard Component",
    value: "componentsimple"
  },
  {
    name: "Standard Component (with styled component)",
    value: "component"
  },
  {
    name: "Standard Pure Component (no dir)",
    value: "componentsimplenodir"
  }
];

(async function main() {
  const foo = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What are we generating?",
      choices: choices
    }
  ]);

  let ret;
  switch (foo.choice) {
    case "component":
    case "componentsimple":
    case "componentsimplenodir":
      const answer = await askName("Name of component");
      ret = await runPlop(foo.choice, { name: answer.name });
      break;

    default:
      console.error(`${foo.choice} not found.`);
      break;
  }

  console.log(ret);
})();
