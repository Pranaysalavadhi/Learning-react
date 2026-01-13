
var createCounter = function(init) {
   let count = init;

   return {
    increment : () => ++count,
    decrement : () => --count,
    reset :     () => (count = init)    
   } 
};


//   const counter = createCounter(5)
//   console.log(counter.increment()); // 6
//   console.log(counter.reset()); // 5
//   console.log(counter.decrement()); // 4

var expect = function(val) {
   return{
    toBe : (expected) =>{
        if(val === expected) return true;
        throw("Not Equal");
         
    },
    notToBe : (expected) => {
        if(val !== expected) return true;
        throw "Equal"
    }
   }
};

//  console.log(expect(5).toBe(5)); // true
//  console.log(expect(5).toBe(null)); // throws "Equal"
//  console.log(expect(5).notToBe(null));
//   console.log(expect(5).notToBe(5));

let arr = [];
for(let i = 'A';i<26;i++)
    arr.push(i+" ");

console.log(arr)