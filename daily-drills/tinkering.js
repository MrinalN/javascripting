const table = [
  { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
  { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
  { winner: 'Elise', loser: 'Carol', loser_points: 4 },
  { winner: 'Alice', loser: 'Carol', loser_points: 2 },
  { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
  { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

//GET LIST OF ALL PARTICPANTS
//iterate table array
const result = [];
for (let match of table) {
  //push winner key or loser key into result array 
  result.push(match.winner);
  result.push(match.loser);
}
//filter out duplicates
let uniq = [...new Set(result)]
console.log(uniq)
//RESULT: array of all participants


//GET TOTAL POINTS 
//set result variable to 0
let result_points = 0;
//iterate through table array
for(let battle of table) {
  // add loser_points key of each obj to result var
  result_points += battle.loser_points;
}
// return result var
console.log(result_points);

