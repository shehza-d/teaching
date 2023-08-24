#! /usr/bin/env node

import { sum } from "./add.js";
import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    name: "num1",
    message: "Enter first number",
    type: "number",
  },
  {
    name: "num2",
    message: "Enter second number",
    type: "number",
  },
]);

const result = sum(answers.num1, answers.num2);

console.log("result is ", result);
