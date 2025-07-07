"use strict";
const calcAverageHumanAge = function (dogsAge) {
  const averageAdultAgeDogs = dogsAge
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

  return averageAdultAgeDogs;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
