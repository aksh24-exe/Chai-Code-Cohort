// Problem: Create an array containing different types of teas.
const teas = [
  "green Tea",
  "Balck Tea",
  "oolong Tea",
  "white Tea",
  "herbal Tea",
];
// console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("chamomile Tea");
// console.log(teas);

//Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("oolong Tea");
if (index > -1) teas.splice(index, 1);
// console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated.
const newTeas = teas.filter((tea) => tea !== "herbal Tea");
// console.log(newTeas);

// Problem: Sort the list of teas in alphabetical order.
teas.sort();
console.log(teas);

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
//   console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "herbal Tea") break;
  count = count + 1;
}
// console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase.
// 1st way using map 
// const uppercaseTea = teas.map((tea)=>tea.toUpperCase());
// 2nd using for loop
const uppercaseTea = [];
for(let i=0;i<teas.length;i++){
    uppercaseTea.push(teas[i].toUpperCase());
}
// console.log(uppercaseTea);


// Problem: Use a for loop to find the tea name with the most characters.
let mostCharacter = "";
for(let i=0;i<teas.length;i++){
    if(teas[i].length>mostCharacter.length){
        mostCharacter = teas[i];
    }
}
console.log(mostCharacter);

// Problem: Use a for loop to reverse the order of teas in the array.
const revArray = [];
for(let i=teas.length-1;i>=0;i--){
    revArray.push(teas[i])
    
}
console.log(revArray);

