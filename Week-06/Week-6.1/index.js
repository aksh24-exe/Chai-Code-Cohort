const obj1 = {
  fname: "akshat",
  lname: "sharma",
  getfullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};
const obj2 = {
  fname: "ayush",
  lname: "sharma",
  
};

// DRY = Do not repeat yourself 

// We not used __proto__

// obj2.__proto__ = obj1;
// obj1.__proto__ = obj1;

console.log(obj1.getfullname());
console.log(obj2.getfullname());
console.log(obj2.toString());
