"use strict";

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(
  (dog) => (dog.recomendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));

const isTheDogEatTooMuch = (dog) =>
  dog.curFood > dog.recomendedFood * 1.1 ? true : false;
const isTheDogEatTooLittle = (dog) =>
  dog.curFood < dog.recomendedFood * 0.9 ? true : false;

const ownersEatToomuch = dogs
  .filter((dog) => isTheDogEatTooMuch(dog))
  .flatMap((dog) => dog.owners)
  .join(" and ");

const ownersEatTooLittle = dogs
  .filter((dog) => isTheDogEatTooLittle(dog))
  .flatMap((dog) => dog.owners)
  .join(" and ");

const exactlyAmountOfFoodDog = dogs.some(
  (dog) => dog.curFood === dog.recomendedFood
);

const okayAmountOfFoodDog = dogs.some(
  (dog) =>
    dog.curFood > dog.recomendedFood * 0.9 &&
    dog.curFood < dog.recomendedFood * 1.1
);

const okayDogs = dogs.filter(
  (dog) =>
    dog.curFood > dog.recomendedFood * 0.9 &&
    dog.curFood < dog.recomendedFood * 1.1
);

const sortedDogs = dogs
  .slice(0)
  .sort((a, b) => a.recomendedFood - b.recomendedFood);

console.log(dogs);
console.log(
  `Sarah dogs is eating too ${
    isTheDogEatTooMuch(sarahDog)
      ? "much"
      : isTheDogEatTooLittle
      ? "little"
      : "alright"
  }`
);
console.log(`${ownersEatToomuch}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle}'s dogs eat too little!`);
console.log(exactlyAmountOfFoodDog);
console.log(okayAmountOfFoodDog);
console.log(okayDogs);
console.log(sortedDogs);
