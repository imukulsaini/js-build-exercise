
// Numbers

var readlineSync = require('readline-sync');
 
// var intNumber = readlineSync.questionInt('Enter Number : ');



// `Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

// const intNumber = readlineSync.questionInt('Enter Number : ');
// const intNumberTwo = readlineSync.questionInt('Enter Number two : ');
// sum  = intNumber + intNumberTwo;
// console.log(sum);



// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12
// const principal = 100;
// const time = 2;
// const simpleInterest = (principal * time * simpleInterest ) /100;
// console.log(simpleInterest);



// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v
// const mass = readlineSync.questionInt('Enter mass : ');
// const velocity = readlineSync.questionInt('Enter Velocity : ');
// const kineticEnergy = 0.5 *mass * velocity *velocity;
// console.log(kineticEnergy);



// Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.

// Input: 56
// Output: 13.33333

// const fehrenheit= readlineSync.questionInt('Fahrenheit : ');
// const t = 37;
// const celsius = readlineSync.questionInt('Celsius : ');
// const ctoF = (9*t)/5 +32
// console.log(" celsius to Fehren ", ctoF)



// Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

// const side= readlineSync.questionInt('enter side : ');
// console.log("surface area of cube" ,6*a*a)
// console.log("Volume of cube" ,a*a*a)



// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// const cp = readlineSync.questionInt('Cost price : ');
// const sp = readlineSync.questionInt('selling side : ');
// const cal = sp - cp;
// if(cal > cp )
// {
//     console.log("Profit",cal);

// }
// else {
//     console.log("Loss",cal);
// }



// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050
// const intNumber = readlineSync.questionInt('Enter Number: ');
// let sum = 0;
// for( let i = 0; i<=intNumber; i++)
// {
//     sum  =sum +i;
// }
// console.log(sum);



// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 1
// 3
// 5
// 7

// const intNumber = readlineSync.questionInt('Enter Number: ');
// let odd = [];
// for(let i = 0; i<=intNumber ; i++)
// {
//     if(i%2 == 1)
//     {
//         odd = [...odd , i ];
//     }
// }
// odd.sort(function (a,b){ return b-a})
// for(let value of odd )
//   {
//       console.log(value)
//   }



// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10
// const a = '1234';
// let sum = 0;

// for(let i of a) 
// {
// sum = sum + parseInt(i)
// }
// console.log(sum)



// Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

// const input = 32243;
// const arr = String(input)
// let newArr = [];
// newArr = [...arr];
// const reverseArrayString = newArr.reverse().join('');
// const reverseNumber = parseInt(reverseArrayString);
// console.log({input})
// console.log({reverseNumber})



// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412
// const input = 1234567;
// const cut = readlineSync.questionInt('Enter Number : ');

// const stringInput = String(input) ;
// const lengthInput = stringInput.length-1;
// const lengthcut = lengthInput /cut;
// let newrotate = '';

// for(i = lengthcut ; i<=lengthInput ; i++)
// {

// newrotate = newrotate + stringInput[i]
// }
// for (j = 0 ; j<lengthcut ; j++)    
// {
//     newrotate = newrotate + stringInput[j]
// }
// const newRotatetoInt = parseInt(newrotate);
// console.log({newRotatetoInt}) 


