// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.
const Tea = {
  name: "Ice Lemon Tea",
  type: "Cold",
  caffine: "low",
};
// Problem: Access and print the name and type properties of the tea object.
// console.log(Tea.name);
// console.log(Tea.type);

//Problem: Add a new property origin to the tea object.
Tea.origin = "Assam";
// console.log(Tea);

//Problem: Change the caffeine level of the tea object to "Medium".
Tea.caffine = "Medium";
// console.log(Tea);

//Problem: Remove the type property from the tea object.
delete Tea.type;
console.log(Tea);

//Problem: Check if the tea object has a property origin.
// console.log("origin" in Tea);

//Problem: Use a for...in loop to print all properties of the tea object.
for (const key in Tea) {
  console.log(`${key} : ${Tea[key]}`);
}

//Problem: Create a nested object representing different types of teas and their properties.
const Teas = {
  green: {
    name: "Herbal",
    type: "Hot",
    caffine: "Zero",
  },
  black: {
    name: "Tusli",
    type: "oxidized",
    caffine: "high",
  },
};
console.log(Teas);
