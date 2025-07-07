"use strict";

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia = dogsJulia.slice(1, -2);
  const allDogs = [...correctedDogsJulia, ...dogsKate];

  allDogs.forEach(function (dogs, i) {
    if (dogs >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and it's ${dogs} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
