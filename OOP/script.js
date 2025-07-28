"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calAge = function () {
  //     const age = new Date().getFullYear() - this.birthYear;
  //     return age;
  //   };
};

const masato = new Person("Masato", 2005);
// console.log(masato);
// console.log(masato.calAge());

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  const age = new Date().getFullYear() - this.birthYear;
  return age;
};

// console.log(masato.calcAge());

Person.prototype.species = "Gear";

// Object.prototype

const arr = [
  5, 4, 86, 46, 871, 2, 34, 21, 5, 4, 1, 12, 4, 51, 5, 2, 5, 57, 5, 5, 5,
];
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

//Challenge 1

const Car = function (make, currSpeed) {
  this.make = make;
  this.currSpeed = currSpeed;
};

Car.prototype.accelerate = function () {
  this.currSpeed = this.currSpeed + 10;
  console.log(this.currSpeed);
};

Car.prototype.break = function () {
  this.currSpeed = this.currSpeed - 5;
  console.log(this.currSpeed);
};

// const bmw = new Car("BMW", 120);
// console.log(bmw);
// bmw.accelerate();
// bmw.break();

// const toyota = new Car("Toyota", 80);
// console.log(toyota);
// toyota.accelerate();
// toyota.break();

//ES6 Classes

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const makiske = new PersonCL("Makiske Odenburg", 2002);
console.log(makiske);
makiske.calcAge();
makiske.greet();
console.log(makiske.age);

const account = {
  owner: "Jonas",
  movements: [100, 200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//object.create

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

const jack = Object.create(PersonProto);
jack.init("Jack", 1987);
console.log(jack);
jack.calcAge();

//Challenge 2

class CarCl {
  constructor(maker, currSpeed) {
    this.maker = maker;
    this.currSpeed = currSpeed;
  }

  accelerate() {
    this.currSpeed += 10;
    console.log(this.currSpeed);
    return this;
  }

  brake() {
    this.currSpeed -= 5;
    console.log(this.currSpeed);
    return this;
  }

  get speedUS() {
    return this.currSpeed / 1.6;
  }

  set speedUS(speed) {
    this.currSpeed = speed * 1.6;
  }
}

// const ford = new Car("Ford", 120);
// console.log(ford);
// console.log(ford.speedUS);
// ford.speedUS = 90;
// console.log(ford);

// Inheritance between class : contructor functions

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ria = new Student("Ria", 1991, "Magic Engineer");
console.log(ria);
ria.introduce();
console.log(ria.calcAge());

//Challenge 3

const EV = function (make, currSpeed, batt) {
  Car.call(this, make, currSpeed);
  this.batt = batt;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.batt = chargeTo;
};

EV.prototype.accelerate = function () {
  this.currSpeed += 20;
  this.batt--;
  console.log(
    `${this.make} is going at ${this.currSpeed}, with a charge of ${this.batt}%`
  );
};

// const tesla = new EV("Tesla", 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.break();

// Inheritance Between Classes ES6

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${new Date().getFullYear() - this.birthYear} year olds`);
  }
}

const evelyn = new StudentCL("Evelyn Tomomi", 1992, "Business Analysis");
console.log(evelyn);
evelyn.introduce();
evelyn.calcAge();

//Inheritance Between Classes object.create

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jake = Object.create(StudentProto);
jake.init("Jake", 1991, "Electrical Engineer");
console.log(jake);
jake.introduce();
jake.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    this.currTotal = 0;
  }

  deposits(val) {
    this._movements.push(val);
    this.currTotal += val;
    console.log(this._movements, this.currTotal);
    return this;
  }

  withdrawals(val) {
    this._movements.push(-Math.abs(val));
    this.currTotal -= val;
    console.log(this._movements, this.currTotal);
    return this;
  }

  _approvedLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approvedLoan(val)) {
      this.deposits(val);
      console.log(`loan approved`);
      return this;
    }
  }
}

const acc1 = new Account("Amelia", "EUR", 1111);
console.log(acc1);
acc1.deposits(1000);
acc1.withdrawals(500);
acc1.requestLoan(1000);
console.log(acc1);

//challenge 4

class EVCl extends CarCl {
  #charge;

  constructor(maker, currSpeed, charge) {
    super(maker, currSpeed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.currSpeed += 20;
    this.#charge--;
    console.log(
      `${this.maker} is going at ${this.currSpeed}, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate();
