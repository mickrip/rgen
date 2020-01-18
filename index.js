#!/usr/bin/env node
const path = require("path");
const nodePlop = require("node-plop");
const inquirer = require("inquirer");
const fs = require("fs");

const GENDIR = "generators";

const goPlop = async thing => {
  const componentLocation = path.join(__dirname, GENDIR, thing);
  global._terribleIdea = require(componentLocation);
  const p = await nodePlop(path.join(__dirname, "helpers", "makePlop.js"), {
    destBasePath: process.cwd()
  });

  const basicAdd = p.getGenerator("default");
  const promptData = await basicAdd.runPrompts();
  await basicAdd.runActions(promptData);
};

(async function main() {
  const directoryList = fs.readdirSync(path.join(__dirname, GENDIR), {
    withFileTypes: true
  });

  const choices = directoryList
    .map(file => {
      if (file.isFile()) {
        const componentLocation = path.join(__dirname, GENDIR, file.name);
        const componentObject = require(componentLocation);
        if (componentObject.skip === true) return null;
        if (componentObject.description) {
          return {
            value: file.name,
            name: componentObject.description
          };
        } else {
          return null;
        }
      } else return null;
    })
    .filter(v => v !== null);

  const promptData = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What are we generating?",
      choices: choices
    }
  ]);

  await goPlop(promptData.choice);
})();
