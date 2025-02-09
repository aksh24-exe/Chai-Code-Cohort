// map
// signature: - return array, call back function, each element iterate

// polyfill of myMap

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userfn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userfn(this[i], i);
      result.push(value);
    }
    return result;
  };
  
}

const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((e)=>e*2);
// console.log(newArr);

// const newArr2 = arr.myMap((e) => {
//   return e * 3;
// });

const newArr3 = arr.myMap((e)=> e*4);
console.log(newArr3);

