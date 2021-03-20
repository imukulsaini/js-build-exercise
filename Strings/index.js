// Strings
var readlineSync = require('readline-sync');

// const stringInput = readlineSync.question('enter string :')

// Write a program that converts the string into uppercase

// const stringInput = readlineSync.question('enter string :')
// let finalString = '';
// let index = 0;
// for(let i of stringInput )
// {

//  const charCode = i.charCodeAt(0);

//   if(charCode >=97)
//     {
//     const convertCodeTOString =String.fromCharCode(charCode-32);
//     finalString = finalString + convertCodeTOString;
    
//     }
//    else if ( charCode == 32){
    
//     finalString = finalString + ' ' ;
//     // finalString.concat(...finalString , ' ')
//    }
    
//     else {
//      finalString.concat(...finalString , i)
//     }
    
//     index = index+1;
    
// }

// console.log({finalString})

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// const stringOne = readlineSync.question('enter string :')

// const stringTwo = readlineSync.question('enter string two :')
// let shiftString = ''

// if(stringOne === 'Good' && stringTwo === 'Morning')
// {
//  shiftString.concat(stringTwo,stringOne)
// }
// else {
//     console.log("enter Good Morning for shift")
// }

// Program that reads string and count number of characters present in the string
// const inputString = readlineSync.question('enter string :')
// let count = 0;
// for(let i of inputString )
// { 
//     count = count+1;
// }
// console.log({count})

// Write a program that converts string like "124" to 124

// const inputString = "123"
// const stringToNumber = parseInt(inputString);
// console.log("your string " , inputString);
// console.log("your number" ,stringToNumber);

// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// const inputString = readlineSync.question('enter string :')
// const stringLength = inputString.length-1;
// let newString = '';
// if(stringLength < 80 )
// {
//     for (let  i = 0 ;  i<=stringLength ;i++)
//     {
//         if(
//             inputString[i] == 'a'|| inputString[i] == 'e'||inputString[i] == 'i'||inputString[i] == 'o'||inputString[i] == 'u'||inputString[i] == 'A'||inputString[i] == 'E'||inputString[i] == 'I'||inputString[i] == 'O'||inputString[i] == 'U'
//         )
//         {
//          newString.concat('')
//         }
//         else 
//         {
         
//         newString = ''.concat(newString , inputString[i])
//         }
//     }

// }

// console.log({newString})



// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
// const inputString = readlineSync.question('enter string :');
// const numorNot = inputString.isAlpha();
// if(numorNot){
// console.log("Not")

// }
// else{
//     console.log("yes")
// }

// A program that reads three strings and prints the longest and smallest one


// const inputStringOne = readlineSync.question('enter string :');
// const inputStringTwo = readlineSync.question('enter string :');
// const inputStringThree = readlineSync.question('enter string :');
// let countOne = countTwo = countThree =0;
// for(let i of inputStringOne){
//     countOne = countOne+1;
// }
// for(let j of inputStringTwo){
//     countTwo = countTwo+1;
// }
// for(let k of inputStringThree){
//     countThree = countThree+1;
// }
// if(countOne > countTwo && countOne > countThree)
// {
//     console.log(" string one = " ,inputStringOne)
// }
// else if(countTwo > countOne && countTwo > countThree)
// {
//     console.log(" string Two = " ,inputStringTwo)
// }
// else 
// {
//     console.log(" string three = " ,inputStringThree)
// }



// A program that counts number of vowels and consonants in a String?

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

// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// const stringInput = "mukulsaini"
// let count = 0;
// let stCal = false;
// for(let i of stringInput)
//   {
//     count = count +1;
//   }
// if(count > 7)
//   {
//      stCal = true;
//   }
// console.log(stCal);

// Write a program that takes two strings and copies smaller string into bigger string
// const stringInputOne = "mukul";
// const stringInputTwo = "sainisaini";
// let stringOneLen = stringInputOne.length -1;
// let stringTwoLen = stringInputTwo.length -1 ;
// if(stringOneLen > stringTwoLen)
//   {
//     console.log(stringInputOne.concat(stringInputTwo))
//   }
// else {
//   console.log(stringInputTwo.concat(stringInputOne))
// }


// Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.
// const dateString = "Wed April 15, 7pm";
// let newDate = ''
// let stopiterate = false;
// let count = 0;
// for(let i of dateString)
//   {
//    if(i == ',')
//      {
//        stopiterate =true;
       
//      }
//     else {
//       if(!stopiterate)
//         {
//         newDate = ''.concat(newDate , i);
//         count = count +1;
//         }
//     }
//   }
//     console.log(newDate);


// Write a program that masks all but last four characters of the string "5565534276455423" to '#'
// const charString  = "5565534276455423";
// const count = 0;
// let convertString = '';
// for(let  i = 0 ;i<=charString.length-1 ;i++)
// {
//   if(i<=charString.length -5 )
//   {
//     convertString = ''.concat(convertString,charString[i])
//   } 
//   else 
//     {
//       convertString=''.concat(convertString,'#')
//     }
// }
// console.log({convertString});

// // Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case.

// const gameString = "tic tac toe is a fun game";
// let convertString = '';
// for (let i = 0 ; i<=gameString.length-1 ;i++)
//   {
//     if(i<=6)
//       {
        
//         convertString = ''.concat(convertString,gameString[i].toUpperCase())
//        }
//     else {
//         convertString = ''.concat(convertString,gameString[i])
//     }
//   }
// console.log({convertString});

// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// let s = readlineSync.question('enter string :');
// const c1 = readlineSync.question('enter a character :');
// const c2 = readlineSync.question('enter a character which you want to replace  :');
// let count = 0;
// let news = '';
// for(let i of s)
// {
//     if(i === c1 )
//     {
//        news = ''.concat(news,c2);
//     }
//     else {
//         news = ''.concat(news,i);
//     }

//     count =count+1;
// }

// console.log({news})

// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

// Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

// const s = "Welcome to NeoG Camp";
// let splitString = s.split(' ')
// let reverseString= splitString.reverse();
// const reverseStringFinal = reverseString.join(" ");
// console.log({reverseStringFinal})



// A program that counts the value of each character and prints the most repeated character?



// Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

// const  s = "neogcamp";
// let newString = '';
// for(let i = 0 ; i<=s.length-1 ;i++)
// {
//     if(i%2 == 0)
//     {
//         newString = ''.concat(newString,s[i].toLowerCase()) 
//     }
//     else {
//         newString = ''.concat(newString , s[i].toUpperCase())
//     }
// }
// console.log({newString});

// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

// const s = "programming camp are amazing";
// const removeWord = "programming";
// const  splitString = s.split(' ')
// const removeWordIndex = splitString.indexOf(removeWord);
// console.log({removeWordIndex})
// splitString.splice(removeWordIndex,1)
// const removeString = splitString.join('  ');
// console.log({s})
// console.log({removeString})


/////////////////////////////////////////////////////////////////////////////////////////////////