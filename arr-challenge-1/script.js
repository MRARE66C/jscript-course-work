"use strict";
const calcAverageHumanAge = function (dogsAge) {
  const calcDogsAge = dogsAge.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adultDogs = calcDogsAge.filter((age) => age > 18);
  const averageAdultAgeDogs =
    adultDogs.reduce((sum, age) => sum + age) / adultDogs.length;

  return averageAdultAgeDogs;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
