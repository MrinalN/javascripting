const camelCase = function(input) {
  let res = ""
  //turn input into an array
  let arr = input.split(" ");
  //itrate array
  for (let i = 0; i < arr.length; i++) {
    //if it is not the first word, the first letter of each word is caps, everything after is lowecase OR all of the word is left lowercase
    //res += adds one letter at a time back into an empty string
    res += (i !== 0) ? arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() : arr[i].toLowerCase();
  }
  return res;
  // Your code here
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));