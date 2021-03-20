// Functions



// var readlineSync = require('readline-sync');
// var userName = readlineSync.question(' ');

// 1.Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// function calPower(a,b){
//     let powerValue = 1;
//     let i =1;
//     while( i<=b)
//     {
//         powerValue = powerValue*a;
//         i++;
//     }
//     return powerValue;
// }
// calPower(3,3);

// 2.Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// let st = "We are neoGrammers";

// function wordsCal (st){
//     let sum=0;
//     for (let i=0;i<=st.length-1;i++)
//     {
//         if(st[i]=== ' ')
//         {
//            sum = sum +1        }

//     }
//     return sum+1;
// }
// // wordsCal(st);
// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

// const rr = [3,5,,9,1]
// function a (rr){
//     const abc = [...rr]
//     return Math.min(abc)
// }
// // a (rr)


// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle


// function typeOfTriangle(a,b,c){
// if(a !==b || b !==c  || c !==a)
// {
//     console.log("sc")
// }
// else if(a == b || b == c || c == a )
// {
//     console.log("iso")
// }
// else if(a == b == c )
// {
//     console.log("eq")
// }
// else{console.log("not any")}
// }
// typeOfTriangle(30,60,90)



// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 



// const arr = [5,6,3,25,6,2]
// function findArrayLength (arr){
//     let count = 0;
//      for(let i of arr)
//      {
//          count= count+1;
//      }
// return count;
// }
// findArrayLength(arr);

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const arr = [1,6,3,25,6,3];

// function indexArray(arr,indexArrayNumber)
// {
//     let i = 0;
//  for(let value of arr)
//  {
//   if(i == indexArrayNumber)
//   {
//       console.log(value)
//   }
//   i = i+1;
//  }
// }
// indexArray(arr,5)


// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const arr = [1,5,3,5,6,8];
// function replaceNumber(arr,changeNumber,replaceNumber)
// {
//     let index = 0;
//     let newarray =[];
// for(let i of arr)
// {
//     if(i === changeNumber)
//     {
//         newarray[index] = replaceNumber;
       
    
//     }
//     else{
//         newarray[index] = i;
     
//     }
//     index = index+1;
// }
// return newarray;
// }

// replaceNumber(arr,5,10);

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// let arr = [1,3,5];
// let arr1 = [2,4,6];
// function mergeArray(arr,arr1)
// {
//     return [...arr ,...arr]
// }
// mergeArray(arr,arr1)

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// const archar = "neoGcamp";
// function charAt (archar,indexNumber){
//     let index = 0;

//     for(let i of archar)
//     {
//         if(index == indexNumber)
//         {
//             return archar[index];
//         }
//         index = index+1;
//     }

// }
// charAt(archar,4)


// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const dateOne = '23/05/1921';
// const datetwo = '24/01/2021';

// function minDateFind(dateOne ,datetwo){
    
//     let date ='';
 
//     let year ='';
//     let month = ''

//     for(let i = 0 ; i<=9 ;i++)
//     {
//     // if( i<=2)
//     //  {
//     //      if(dateOne[i]<datetwo[i])
//     //  {
//     //      date = date+dateOne[i];
//     //  }
//     //     else {
//     //      date = date + datetwo[i];
//     //  }
//     //  }
//     // else if(i<=5)
//     // {
//     //     if(dateOne[i]<datetwo[i])
//     //  {
//     //      month = month+dateOne[i];
//     //  }
//     //     else {
//     //      month = month + datetwo[i];
//     //  }
//     // }
 
//      if(i<=9)
//     {
//         if(dateOne[i]<datetwo[i])
//      {
//          year = year+dateOne[i];
//      }
//          else {
//          year = year + datetwo[i];
//      }

//     }
 
//     // for(let j= 0;i<=9;j++)
//     // {
//     //     if(final[j] === dateOne[j])
//     //     {
//     //         return console.log("dateOne is Max" ,dateOne)
//     //     }
//     //     else{
//     //        return  console.log("datetwo is Max",datetwo)
//     //     }
//     // }

//     }
  
//   console.log("A",year)



// }
// minDateFind(dateOne,datetwo);


// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on

// const camp = "neogcamp";
// function encodeString(camp,shiftValue){
// let finalString = '';
// let index = 0;
// for(let i of camp)
// {
//   const charCode = i.charCodeAt(0);
//   const convertCodeTOString =String.fromCharCode(charCode+shiftValue);
//   finalString = finalString + convertCodeTOString;
//   index = index+1;
// }
// return finalString;
// }

// encodeString(camp,2)



// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


// const camp = "we are neo Grammers";


// function toSentenceCase(camp){


// let finalString = '';
// let index = 0;

// for(let i of camp)
// {
//  const charCode = i.charCodeAt(0);

//   if(charCode >=97)
//     {
//        const convertCodeTOString =String.fromCharCode(charCode-32);
//     finalString = finalString + convertCodeTOString;
    
//     }
//    else if ( charCode == 32){
    
//     finalString = finalString + ' ' ;
//    }
    
//     else {
//     finalString = finalString + i ;
//     }
    
    
    
// }
//  return finalString;
// }
// toSentenceCase(camp);

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// const newline = "we are neoGrammers "

// function reverseCharactersOfWord(newline){

//  const stringLength = newline.length-1;

//  let reverseString = '';
//  let newString = '';
 
//  for (let i = 0 ; i<=stringLength ; i++)



//  if(newline[i] === ' ' || i == stringLength)
//  {

//    for(let j = newString.length-1 ; j>=0 ;j--)
//    {
//        reverseString = reverseString + newString[j];
//    }
//    reverseString = reverseString + ' '
//    newString = '' ;
//  }
//  else
//  {
//   newString = newString + newline[i];
  
//  }
// return reverseString;
// }

// reverseCharactersOfWord(newline);


///////////////////////////////////////////////////////////////////////////////
