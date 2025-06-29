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
