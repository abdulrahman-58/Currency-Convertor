#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
  USD: 1,
  PKR: 278.45,
  EUR: 0.94,
  AFN: 72.5,
  INR: 83.57,
};

let userAnswer: any = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter from currency",
    choices: ["USD", "PKR", "EUR", "AFN", "INR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter to currency",
    choices: ["USD", "PKR", "EUR", "AFN", "INR"],
  },
  {
    name: "amount",
    type: "input",
    message: "Enter your amount",
  },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
