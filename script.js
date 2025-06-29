// const country = 'North Korea';
// const continent = 'Asia';
// let population = 2;

// const isIsLand = false;
// const language = 'english';

// console.log(country, continent, population, language);

// console.log(typeof(isIsLand),typeof(population),typeof(country),typeof(language))

// population = 60;

// console.log(country, continent, population, language);

// console.log(population / 2);
// console.log(population + 1);

// const finland = 6;

// console.log(finland > population)

// const avgPopulation = 33;

// const isAvgHigher = avgPopulation > population;

// const desc = `${country} is in ${continent}, and its ${population} million poeple speak ${language}`
// console.log(desc)

// const aboveOrBelow = avgPopulation < population ? 'above' : 'below';

// console.log(`${country}'s population is ${aboveOrBelow} average`);

// if(isAvgHigher){
//     console.log(`${country}'s population is ${avgPopulation - population} million below average`)
// }
// else{
//     console.log("nah")
// }


// switch(language){
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('hindi');
//         break;
//     case 'arabic':
//         console.log('arabic')
//         break;
//     default:
//         console.log('Great language too :D');
// }

// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1){1
//     console.log("Only 1 border!")
// }
// else if(numNeighbours > 1){
//     console.log("More than 1 border")
// }
// else{
//     console.log("No borders")
// }

// if (language === 'English' && population > 50 && !isIsLand){
//     console.log(`You should live in ${country}`)
// }
// else{
//     console.log('Nah, get out')
// }

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// function bmiCalculator(mass, height){
//     return mass / (height ** 2)
// }

// const markBMI = bmiCalculator(markMass, markHeight);
// const johnBMI = bmiCalculator(johnMass, johnHeight);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// if(markHigherBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// }
// else{
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }


// const scoreDolphins = (96 + 108 + 89) / 3 ;
// const scoreKoalas = (96+ 108 + 89) / 3;

// if (scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the trophy');
// }
// else if (scoreDolphins < scoreKoalas){
//     console.log('Koalas win the trophy');
// }
// else{
//     console.log('Both win the trophy');
// }

const bill = Number(prompt('Enter your total bill'));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill > 300 ? bill * 0.2 : 0;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

