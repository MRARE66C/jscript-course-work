"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

console.log(bankDepositSum);

// 2.

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, arr) => (arr >= 1000 ? acc + 1 : acc), 0);

console.log(numDeposits1000);

// 3.

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 4.

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(
  convertTitleCase(
    "When i was a young boy my father took me into the city to see the marching band he said son when you grow up would you be the savior of the broken the beaten and the damned beacuse one day i'll leave you a phantom to lead you in the summer to join the black parade"
  )
);
console.log(
  convertTitleCase(
    "When i was a young boy my father took me into the city to see the marching band he said son when you grow up would you be the savior of the broken the beaten and the damned"
  )
);
console.log(
  convertTitleCase("Some time i get the feeling she watching over me")
);
console.log(convertTitleCase("and other times i feel like i should go"));
