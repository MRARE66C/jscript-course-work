"use strict";

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    const output = `${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Ky";
calcAge(1999);
