// Operators, Branching, Loops

var readlineSync = require('readline-sync');

// intNumber = readlineSync.questionInt('enter number :')

//  Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// const numberOne = 5;
// const numberTwo = 13;
// const numberThree = 7;
// const numberFour = 21;
// const numberFive = 48;
// const sumFiveNumbers = numberOne+numberTwo+numberThree+numberFour+numberFive;
// console.log(sumFiveNumbers); 

//Write a program to take a number input from user and determine whether the number is odd or even.

// var intNumber = readlineSync.questionInt('Enter Number :');
// if(intNumber %2 ==0 )
// {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

//  Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// const numberOne = 129; const numberTwo = 251;
// if(numberOne > numberTwo)
// {
//     console.log("NumberOne is Greater" , numberOne);

// }
// else {
//     console.log("Number Two is Greater ",numberTwo)
// }



// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// const numberOne = 8; const numberTwo = 23; const numberThree = 17;
// if(numberOne> numberTwo && numberOne >numberThree)
// {
//     console.log("number One is Greater")
// }
// else if (numberTwo > numberThree && numberTwo > numberOne)
// {
//     console.log("number Two is Greater ")
// }
// else {
//     console.log("number Three is Greater")
// }

// 
// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
// const numberOne = 35; const numberTwo = 29; const numberThree = 46;
// if(numberOne<numberTwo && numberOne <numberThree)
// {
//     console.log("number One is Smaller")
// }
// else if (numberTwo < numberThree && numberTwo < numberOne)
// {
//     console.log("number Two is Smaller ")
// }
// else {
//     console.log("number Three is Smaller")
// }

//  Write program to take a month as an input from the user and find out whether the month has 31 days or not.
// const month = readlineSync.question('enter number')
// if(month == 'Jan'||month == 'Mar'||month == 'May'||month =='July'|| month =='Sep'|| month =='Nov')
// {
//     console.log("30 Days");
// }
// else if (month == 'Feb'){
//     console.log("28/29 Days")
// }
// else {
//     console.log("31 Days")
// }

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// for(let i=1 ; i<=101;i++)
// {
//     if (i%15 == 0)
//     {
//         console.log("FizzBuzz")
//     }
    
//     else if(i%3 == 0)
//     {
        
//         console.log("Fizz")
//     }
//     else if(i%5 == 0)
//     {
        
//         console.log("Buzz")
//     }
  
//     else {
//         console.log(i)
//     }
// }




// Write a program to take a number input from user and print multiplication table 12 times for that number

// const intNumber = readlineSync.questionInt('enter number :')

// for (let i=1;i<=12;i++)
// {
//     console.log(i*intNumber)
// }


// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...

// let a =0,b=1,sum;
// for(let i =0; i<=10;i++)
// {
//    console.log(a);
//     sum =a+b;
//     a = b;
//      b=sum;
// }

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// const intNumber = readlineSync.questionInt('enter number :')
// let FactorialNumber = 1;
// for(let i =1; i<=intNumber;i++)
// {
//  FactorialNumber = FactorialNumber*i
// }
// console.log(FactorialNumber);

// Write a Program to take a number input from user and find if the number is Prime or not.

// let primeNumber = 1;
// const intNumber = readlineSync.questionInt('enter number :');

// for(let i = 2; i<intNumber;i++){

// if(intNumber %i == 0 )
// {
// primeNumber = 0;
// break;
// }
// }

// if(primeNumber == 1)
// {
//     console.log("Prime")
// }
// else {console.log("not Prime")}


//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// const daysInput = readlineSync.question('enter day :');
// if(daysInput == 'Saturday' || daysInput == 'Sunday')
// {
//     console.log("weekend")
// }
// else console.log("weekday");

///////////////////////////////////////////////////////////////////////////////////////////////