const makeCase = function(input, caseType) {
  let res = "";
  let arr = input.split(" ");
  switch(caseType) {
    case 'camel':
    //itrate array
    for (let i = 0; i < arr.length; i++) {
      //if it is not the first word, the first letter of each word is caps, everything after is lowecase OR all of the word is left lowercase
      //res += adds one letter at a time back into an empty string
      res += (i !== 0) ? arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() : arr[i].toLowerCase();
    }
      break;
    case 'pascal':
      for (let i = 0; i < arr.length; i++) {
        //if it is not the first word, the first letter of each word is caps, everything after is lowecase OR all of the word is left lowercase
        //res += adds one letter at a time back into an empty string
        res += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() 
      }
      break;
    case 'snake':
      res += arr.join("_");
      break;
    case 'kebab':
      res += arr.join("-")
    break;
    case 'title':
      for (let i = 0; i < arr.length; i++) {
      res += arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase() + (" ");
      }
      res.trim();
      break;
    case 'vowel':
      for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(/([aeiou])/g, function (match) {
        return match.toUpperCase();
        });
      }
      res += arr.join(' ');
      break;
    case 'consonant':
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/([^aeiou])/g, function (match) {
          return match.toUpperCase();
          });
        }
        res += arr.join(' ');
      break;

    }
    return res;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING