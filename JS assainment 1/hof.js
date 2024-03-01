// ========================================================================================
// 1)Write a function myForEach that takes an array and a callback function and performs the same action as the forEach method.
// ========================================================================================

// function myForEach(arr, callback) {
//   for (i = 0; i <= arr.length - 1; i++) {
//     callback(arr[i], i, arr);
//   }
// }
// const nums = [1, 2, 3, 4, 5];
// function logElement(element, index, arr) {
//   console.log(`Element at index ${index}: ${element}: ${arr}`);
// }
// myForEach(nums, logElement);

// ========================================================================================
// 2)Create a function myMap that takes an array and a callback function and returns a new array with the results of applying the callback to each element.
// ========================================================================================
// function myMap(array,callback){
//     const arrMap=[]
//     for(i=0;i<=array.length-1;i++){
//         arrMap.push(callback(array[i],i,array));
//     }
//     return arrMap;
// }
// const num = [1, 2, 3, 4, 5]
// const squaredNumbers = myMap(num, (num)=>num*num);
// console.log(squaredNumbers);

// ========================================================================================
// 3)Write a function myFilter that takes an array and a callback function and returns a new array containing only the elements that satisfy the callback condition.
// ========================================================================================
// function myFilter(array,callback){
//     const Arrfilter=[];
//     for(i=0;i<=array.length-1;i++){
//         if(callback(array[i],i,array)){
//             Arrfilter.push(array[i])
//     }
//     }
//     return Arrfilter;
// }
// const Numbers=[11,22,33,44,55]
// const even=myFilter(Numbers,Num=>Num%2===0)
// console.log(even)

// ========================================================================================
// 4)Create a function myReduce that takes an array, a callback function, and an initial value, and applies the callback function to reduce the array to a single value.
// ========================================================================================
// function myReduce(array, callback, initialValue) {
//     if (array.length === 0 && initialValue === undefined) {
//       console.log("Reduce of empty array with no initial value");
//     }
//     let accumulator = array[0];
//     const startIndex = 1;
//     for (let i = startIndex; i < array.length; i++) {
//       accumulator = callback(accumulator, array[i], i, array);
//     }

//     return accumulator;
//   }
//   const number = [1, 2, 3, 4, 5];
// const sum = number.reduce((acc, current) => acc + current, 0);
//   console.log(sum);

// ========================================================================================
// 5)Implement a function compose that takes two functions and returns a new function that is the composition of the two.
// ========================================================================================

// function compose(func1, func2) {
//     return function (x) {
//       return func2(func1(x));
//     };
//   }
  
//   function double(x) {
//     return x * 2;
//   }
  
//   function square(x) {
//     return x * x;
//   }
  
//   const composedFunction = compose(double, square);
  
//   const result = composedFunction(2);  
//   console.log(result); 
  

// ========================================================================================
// 6)Implement a function chainFunctions that takes an array of functions and returns a new function that chains the functions together, passing the result of each as the argument to the next.
// ========================================================================================
// function chainFunctions(functions) {
//     return function (x,y) {
//       let result = functions[0](x,y);
//       for (let i = 1; i < functions.length; i++) {
//         result = functions[i](result);
//       }
//       return result;
//     };
//   }

//   function add(x, y) {
//     return x + y;
//   }
  
//   function double(x) {
//     return x * 2;
//   }
  
//   function square(x) {
//     return x * x;
//   }
//   const chainedFunction = chainFunctions([add, double, square]);
//   const result = chainedFunction(1,2); 
//   console.log(result);
  
// ========================================================================================
// 7)Given an array of numbers, use higher-order functions to find the sum of squares of only the even numbers.
// ========================================================================================
// const numbers = [1, 2, 3, 4, 5, 6];
// const sumOfSquaresOfEvenNumbers = numbers
//   .filter(num => num % 2 === 0)     
//   .map(num => num * num)           
//   .reduce((sum, square) => sum + square); 
// console.log(sumOfSquaresOfEvenNumbers); 


// ========================================================================================
// 8)Write a function customMap and customFilter that behave similarly to the built-in map and filter functions
// ========================================================================================
// function customMap(array, callback) {
//   const result = [];
//   for (i = 0; i <= array.length - 1; i++) {
//     result.push(callback(array[i], i, array));
//   }
//   return result;
// }
// function customFilter(array, callback) {
//   const result = [];
//   for (i = 0; i <= array.length - 1; i++) {
//     if (callback(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
// //Examples usage of customMap and customFilter
// const numbers = [1, 2, 3, 4, 5];
// const sqrnumbers = customMap(numbers, (num) => num ** 2);
// console.log(sqrnumbers);

// const oddnumbers = customFilter(numbers, (num) => num % 2 !== 0);
// console.log(oddnumbers);

