// PART ONE //

/* Prints the numbers from 100 to 200 to the console, with three exceptions:
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number. */

// for (let i = 0; i <= 200; i++) {
//   if(i % 3 === 0 && i % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (i % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (i % 3 === 0) {
//     console.log("Loopy");
//   } else {
//   console.log(i);
//   }
// }

// PART TWO //

/*Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples. */

// const loopyLighthouse= (range, multiples, words) => {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if(i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//     console.log(i);
//     }
//   }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// PART 3 //
//Refactor

const loopyLighthouse= (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    (i % multiples[0] === 0 && i % multiples[1] === 0) ? console.log(words[0] + words[1]) : 
    i % multiples[1] === 0 ? console.log(words[1]) : 
    i % multiples[0] === 0 ? console.log(words[0]) : console.log(i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
