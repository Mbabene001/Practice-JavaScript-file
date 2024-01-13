// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// console.log(isValid);

// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4) ;

// //  
// // Check if all numbers are divisible by 5. Cache the result in a variable.


// let divByFive = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0) ;
// console.log(divByFive)

// // Check if the first number is larger than the last. Cache the result in a variable.

// const isFirstLargerThanLast = n1 > n4;
// console.log (isFirstLargerThanLast)


// // Accomplish the following arithmetic chain:
// // Subtract the first number from the second number.

// const SubstractResult = n2 - n1 ;
// console.log (SubstractResult)


// // Multiply the result by the third number.

// const MultiplyResult = SubstractResult * n3 ;
// console.log ( MultiplyResult)


// // Find the remainder of dividing the result by the fourth number.

// const remainder = MultiplyResult % n4 ;
// console.log (remainder)
// // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// const isLess25 = ( n1 < 25 )  &&  ( n2 < 25 ) && ( n3 < 25) && ( n4 < 25 ) ;
// console.log (isLess25)




// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// console.log(isValid);

// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4) ;

// //  
// // Check if all numbers are divisible by 5. Cache the result in a variable.


// let divByFive = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0) ;
// console.log(`Are all numbers divisible by 5? ${divByFive}`)

// // Check if the first number is larger than the last. Cache the result in a variable.

// const isFirstLargerThanLast = n1 > n4;
// console.log (`is the First number larger than the last?  )


// // Accomplish the following arithmetic chain:
// // Subtract the first number from the second number.

// const SubstractResult = n2 - n1 ;
// console.log (SubstractResult)


// // Multiply the result by the third number.

// const MultiplyResult = SubstractResult * n3 ;
// console.log ( MultiplyResult)


// // Find the remainder of dividing the result by the fourth number.

// const remainder = MultiplyResult % n4 ;
// console.log (remainder)
// // Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// const isLess25 = ( n1 < 25 )  &&  ( n2 < 25 ) && ( n3 < 25) && ( n4 < 25 ) ;
// console.log (isLess25)

const totalMiles = 1500; 
const fuelBudget = 175;
const costOfFuel = 3;

let galPerBudget = fuelBudget/ costOfFuel;
console.log (galPerBudget); 

let FiftyFiveMilePerHr = 30;
let SixtyMilesPerHr = 28;
let SeventyFiveMilePerHr = 23;

// galons needed for the entire trip wigh different speeds 

let galperTrip55 = totalMiles / FiftyFiveMilePerHr;
let galperTrip60 = totalMiles / SixtyMilesPerHr;
let galperTrip75 = totalMiles / SeventyFiveMilePerHr;

// calculate if the budget is enough for each speed

let budgetEnough55 = galperTrip55 <= galPerBudget;
let budgetEnough60 = galperTrip60 <= galPerBudget;
let budgetEnough75 = galperTrip75 <= galPerBudget;

// calculate trip duration at different speeds 

let tripDuration55 = totalMiles / 55;
let tripDuration60 = totalMiles / 60;
let tripDuration75 = totalMiles / 75;


//using template literals 



// At 55 MPH

console.log (` At FiftyFiveMilePerHr:`);
console.log (`- Gallons of fuel needed: $ {galperTrip55}`);
console.log (`- Trip duration: $ {tripDuration55} hours` ) ;
console.log(`-Budget enough: $ {budgetenough55 ? 'Yes' : 'No'  }`);


// At 60 MpH

console.log (` At SixtyMilesPerHr:`);
console.log (`- Gallons of fuel needed: $ {galperTrip60}`);
console.log (`- Trip duration: $ {tripDuration60} hours` ) ;
console.log(`-Budget enough: $ {budgetenough60 ? 'Yes' : 'No'  }`);


// At 75 MPH 

console.log (` At SeventyFiveMilePerHr:`);
console.log (`- Gallons of fuel needed: $ {galperTrip75}`);
console.log (`- Trip duration: $ {tripDuration75} hours` ) ;
console.log(`-Budget enough: $ {budgetenough75 ? 'Yes' : 'No'  }`);











