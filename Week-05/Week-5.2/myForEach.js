// forEach 
// Signature : = No return , function input  , value , index

// Pollyfill for myForEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userfn){
        const OriginalArr = this;  // Current object ko point kar raha hai
        for(let i=0;i<OriginalArr.length;i++){
            userfn(OriginalArr[i], i);
        }
    }
}


const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index)=>{
//     console.log(`The value is ${value} and index is ${index}`);
    
// })

arr.myForEach((value)=>{
    console.log(value);
    
})