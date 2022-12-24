"use strict";
var _ = require('lodash');

let a = 5; //Количество сотрудников A
let salaryA = 10_000; // Зарплата сотрудника A
let b = 15; //Количество сотрудников B
let salaryB = 25_000; // Зарплата сотрудника B
let c = 40; //Количество сотрудников C
let salaryC = 50_000; // Зарплата сотрудника C
let d = 10; //Количество сотрудников D
let salaryD = 100_000; // Зарплата сотрудника D
let tax = 0.2;

let salary = [a * salaryA, b * salaryB, c * salaryC, d * salaryD];
var salarySum = _.sum(salary);
let sumTaxes = salarySum * tax;
console.log("Суммарные налоговые отчисления со всех зарплат: " + sumTaxes + " рублей");
let staff = [a, b, c, d];
var staffSum = _.sum(staff);
let averageTax = sumTaxes / staffSum;
console.log("Средние налоговые отчисления на человека: " + Math.floor(averageTax) + " рублей");