#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



console.log(chalk.redBright("WELCOME"));
let base = "USD"
const baseCurrency: any = {
  USD: 1, 
  PKR: 282,
  EUR: 0.8201,
  GBP: 0.7089,
  JPY: 108.46,
  CAD: 1.2553,
  AUD: 1.2976,
  // Additional currency rates can be included here
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: " which currency from",
    type: "list",
    choices: ["USD", "PKR", "EUR", "JPY", "CAD", "AUD", "GBP"]
  }]);
  
  let userAnswer1 = await inquirer.prompt([
  {
    name: "to",
    message: " which currency to",
    type: "list",
    choices: ["USD", "PKR", "EUR", "JPY", "CAD", "AUD", "GBP"],
  }]);
  let userAnswer2 = await inquirer.prompt([

  {
    name: "amount",
    message: " Enter your amount please",
    type: "number",
  },
]);

let fromAmount = baseCurrency[userAnswer.from];
let toAmount =  baseCurrency[userAnswer1.to]
let amount = userAnswer2.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount*toAmount
console.log(convertedAmount)

