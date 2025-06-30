"use strict";

//function

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Finland", "6", "Helsinki"));
console.log(describeCountry("Japan", "3", "Tokyo"));
console.log(describeCountry("German", "5", "Berlin"));

// let country;
// let population;
// let capitalCity;

// function getInformation() {
//   const getCountry = prompt("Enter country");
//   const getPopulation = prompt("Enter population");
//   const getCapitalCity = prompt("Enter capitalCity");

//   country = getCountry;
//   population = getPopulation;
//   capitalCity = getCapitalCity;

//   console.log(describeCountry(country, population, capitalCity));
// }

//Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log("Function Declarations");
console.log(percentageOfWorld1(5));
console.log(percentageOfWorld1(520));
console.log(percentageOfWorld1(20));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log("Expressions");
console.log(percentageOfWorld2(5));
console.log(percentageOfWorld2(520));
console.log(percentageOfWorld2(20));

//Arrow Function

const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log("Arrow Function");
console.log(percentageOfWorld3(5));
console.log(percentageOfWorld3(520));
console.log(percentageOfWorld3(20));

//Functions Calling Other Functions

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )}% of the world`;
}

console.log(describePopulation("North Korea", 39));

//Challenge #1
console.log("Challenge #1");

const calcAverage = (score0, score1, score2) => (score0 + score1 + score2) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

//Introduction to Arrays
const population = [5, 6, 7, 8];

const isFour = population.length === 4;

console.log(isFour);

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);

//Basic Array Operations (Methods)

const neighbours = ["South Korea", "China", "Russia"];

console.log(neighbours);

neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

const isCentralEurope = neighbours.includes("Germany")
  ? console.log("Probably a central european country :D")
  : console.log("Probably not a central european country :D");

neighbours[neighbours.indexOf("China")] = "RPC";

console.log(neighbours);

//CHALLENGE #2

console.log("Challenge #2");

// function calcTip(billVal) {
//   if (billVal >= 50 && billVal <= 300) {
//     return billVal * 0.15;
//   } else if (billVal > 300) {
//     return billVal * 0.2;
//   } else {
//     return 0;
//   }
// }

const calcTip = (billVal) =>
  billVal >= 50 && billVal <= 300
    ? billVal * 0.15
    : billVal > 300
    ? billVal * 0.2
    : 0;

const bill = [125, 555, 44];
let tips = [];

for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));
}

let totals = [];

for (let i = 0; i < tips.length; i++) {
  totals.push(tips[i] + bill[i]);
}

console.log(tips);
console.log(totals);

//Introduction to Objects

const myCountry = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 71.7,
  neighbours: ["Laos", "Myanmar", "Cambodia", "Malaysia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

//CHALLENGE #3

console.log("CHALLENGE #3");

const john = {
  fullName: "John Smith",
  mass: 92,
  heigth: 1.95,
  caclBMI: function () {
    this.bmi = this.mass / (this.heigth * this.heigth);
    return this.bmi;
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  heigth: 1.69,
  caclBMI: function () {
    this.bmi = this.mass / (this.heigth * this.heigth);
    return this.bmi;
  },
};

console.log("john bmi", john.caclBMI());
console.log("mark bmi", mark.caclBMI());

const higherBMI =
  john.bmi > mark.bmi
    ? console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
      )
    : console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
      );

//Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

//Looping Arrays, Breaking and Continuing

let percentages2 = [];

for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}

console.log(percentages);
console.log(percentages2);

//Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

//The while Loop

let percentages3 = [];
let i = 0;

while (percentages3.length < population.length) {
  percentages3.push(percentageOfWorld1(population[i]));
  i++;
}

console.log(percentages);
console.log(percentages2);
console.log(percentages3);

//CHALLENGE #4
console.log("CHALLENGE #4");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips0 = [];
const totals0 = [];

for (let i = 0; i < bills.length; i++) {
  const tempTip = calcTip(bills[i]);
  tips0.push(tempTip);
  totals0.push(tempTip + bills[i]);
}

console.log(bills);
console.log(tips0);
console.log(totals0);
