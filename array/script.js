"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (accs, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? accs.movements.slice().sort((a, b) => a - b)
    : accs.movements;

  movs.forEach(function (mov, i) {
    const isDeposit = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${isDeposit}">
            ${i + 1} ${isDeposit} 
          </div>
          <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const createUsernames = (accs) => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((user) => user[0])
      .join("");
  });

  return accs;
};

const calcDisplayBalance = function (accs) {
  accs.balance = accs.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${accs.balance}€`;
};

const calcDisplaySummary = function (accs) {
  const deposit = accs.movements
    .filter((mov) => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.textContent = `${deposit}€`;

  const withdrawal = accs.movements
    .filter((mov) => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;

  const interest = accs.movements
    .filter((mov) => mov > 0)
    .map((income) => (income * accs.interestRate) / 100)
    .filter((interest) => interest > 1)
    .reduce((sum, interest) => sum + interest);
  labelSumInterest.textContent = `${interest}€`;
};

const updateDisplay = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

createUsernames(accounts);

let currAccount;
let sorted = false;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = "";

    updateDisplay(currAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currAccount.balance >= amount &&
    receiverAcc.username !== currAccount.username
  ) {
    currAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateDisplay(currAccount);

    inputTransferAmount.value = inputTransferTo.value = "";
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currAccount.username &&
    Number(inputClosePin.value) === currAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
    inputLoginUsername.value = inputLoginPin.value = "";
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const isAbleToLoan = currAccount.movements.some((mov) => mov >= amount * 0.1);

  console.log(amount, isAbleToLoan);

  if (isAbleToLoan && amount > 0) {
    currAccount.movements.push(amount);

    inputLoanAmount.value = "";
  }
  updateDisplay(currAccount);
});

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currAccount, !sorted);
  sorted = !sorted;
});

const diceRolls = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1)
);

console.log(diceRolls);
