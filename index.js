const { largeNumber, cut3 } = require('./uti-1');
const mod = require('./uti-2');


//finding the largest number in an array
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const largestNumber = largeNumber(arrayNum);
console.log(largestNumber);

//removing the 3rd item in an array
const removeThridItem = cut3(arrayNum);
console.log(removeThridItem); 

//finding the sum of an array
const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 5, 3, 4];

const sumArray = mod.sum(arrayOne);
console.log(sumArray);

const concatArray = mod.concat(arrayOne, arrayTwo);
console.log(concatArray);
