// filter
// signature: - return new Array, call back function, conditon denga if it is true and it will add in new array otherwise it will not add

// polyfill for myFilter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userfn){
      const result = [];
      for(let i=0;i<this.length;i++){
        if(userfn(this[i])){
          result.push(this[i]);
        }
      }
      return result;
    }
  }
  
  const arr = [1, 2, 3 ,4, 5];
  
  // const newArr = arr.filter((e)=> e % 2 === 0);
  // console.log(newArr);
  
  const newArr2 = arr.myFilter((e)=> e % 3 == 0);
  console.log(newArr2);
  