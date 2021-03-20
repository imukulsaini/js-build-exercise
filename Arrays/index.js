// Arrays
var readlineSync = require('readline-sync');
// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
// const arr = [10,4,5,2,5,6,9];
// let sum = 0;
// for(let  i of arr )
// {
// sum=sum+i;
// }
// console.log({sum})

// Find average of an array and display the output.
// const arr = [10,4,5,2,5,6,9];
// let count = 0; 
// let sum = 0;
// let average = 0;
// for(let i  of arr )
// {
//     sum =sum +i;
//     count = count+1;
// }
// average = sum /count;
// console.log({average})

// Find maximum and minimum of an array.
// const arr = [10,4,52,2,5,6,9];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log({min});
// console.log({max});


// Find sum of two arrays.

//     [3,5,2,9,4] = 3+5+2+9+4 = 23
//    [6,2,8,1,3] = 6+2+8+1+3 = 20
//     Final Output : 20+23 = 43
//  let arrOne  = [3,5,2,9,4];  let arrTwo = [6,2,8,1,3] ;
//  let sumAll = 0;
//  let sumOneArr = 0;
//  let sumTwoArr =0;
//  for(let  i of arrOne )
//  {
//  sumOneArr=sumOneArr+i;
// } 
// for(let  j of arrTwo )
//  {
// sumTwoArr=sumTwoArr+j;
// }
// sumAll = sumOneArr+sumTwoArr;
// console.log({sumAll});

// Find number of constants and vowels in a string;

// const inputString = readlineSync.question('enter string :')
// let vowerlCount = 0;
// let consonantsCount = 0;

// const stringLength = inputString.length-1;
// let newString = '';


//     for (let  i = 0 ;  i<=stringLength ;i++)
//     {
//         if(
//             inputString[i] == 'a'|| inputString[i] == 'e'||inputString[i] == 'i'||inputString[i] == 'o'||inputString[i] == 'u'||inputString[i] == 'A'||inputString[i] == 'E'||inputString[i] == 'I'||inputString[i] == 'O'||inputString[i] == 'U'
//         )
//         {
//          vowerlCount = vowerlCount +1;
//         }
//         else 
//         {
         
//         consonantsCount  = consonantsCount + 1 ;
//         }
//     }

// console.log({vowerlCount},{consonantsCount})


// Shift an array by X to right.

//     Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

// const arr =  [1,2,3,4,5] ; 
// let popArr = arr.pop();
//  arr.unshift(popArr)
// console.log({arr})