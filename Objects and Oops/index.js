// Objects and Oops


// Given an array of objects of student's marks:

//     Print the name and total marks of each student.
//     Print the name of student whose total marks is highest.
//     Print the name of student whose total marks is lowest.
//     Print the average marks of the class in computer subject.
//     Print the grades of all students:
//     Grade A if total marks is higher than or equal to 75%,
//     Grade B if higher than or equal to 60%,
//     Grade C if higher than or equal to 35%,
//     Grade D if lower than 35%.
//     Print the total number of students passed and their names. Pass when total marks is greater than 35%

// const studentDetails = [
// 	{
// 		roll: 1,
// 		name: "Rohan Singh",
// 		maths: 86,
// 		science: 90,
// 		english: 75,
// 		computer: 85
// 	},
// 	{
// 		roll: 2,
// 		name: "Ritvik Patel",
// 		maths: 27,
// 		science: 30,
// 		english: 35,
// 		computer: 30
// 	},
// 	{
// 		roll: 3,
// 		name: "Neha Maurya",
// 		maths: 75,
// 		science: 69,
// 		english: 40,
// 		computer: 75
// 	},
// 	{
// 		roll: 4,
// 		name: "Mohit Verma",
// 		maths: 21,
// 		science: 31,
// 		english: 45,
// 		computer: 40
// 	},
// 	{
// 		roll: 5,
// 		name: "Karan Trivedi",
// 		maths: 70,
// 		science: 80,
// 		english: 35,
// 		computer: 60
// 	}
// ];



// let totalMarksData =[]


// let i = j = sum = average = per =totalmarksAllSum = sumOfComputerSubjects = maximum = minimum = 0;
// let totalmarksAll = passStudentData = failedStudentData = [];


// for(let value in studentDetails )
// {
//     sum =    (studentDetails[i].maths +studentDetails[i].science
//              +studentDetails[i].english+studentDetails[i].computer)

//     per  = sum / 5; 

//     totalMarksData =  [...totalMarksData , {  roll : studentDetails[i].roll ,name :studentDetails[i].name , totalMarks :sum }] 

//     sumOfComputerSubjects = sumOfComputerSubjects + studentDetails[i].computer;

//      totalmarksAll  = [...totalmarksAll , totalMarksData[i].totalMarks];
   
    

//     if(  per >= 75 )
//      {
//        totalMarksData[i] = { ...totalMarksData[i] , grade : 'A'}
//      }
//      else if( per < 75 &&  per >=60)
//      {
//        totalMarksData[i] = {...totalMarksData[i] , grade : 'B'}
//      }
//        else if(  per < 60 &&  per >=35)
//      {
//        totalMarksData[i] = { ...totalMarksData[i] , grade : 'C'}
//      }
//        else if(  per < 35 )
//      {
//        totalMarksData[i] = { ...totalMarksData[i] , grade : 'D'}
//      }

//      if(per > 35 )
//      {
//          passStudentData = [...passStudentData ,{name:studentDetails[i].name,roll:studentDetails[i].roll }]
//      }
//      else {
//          failedStudentData = [...failedStudentData , {name:studentDetails[i].name,roll:studentDetails[i].roll}]
//      }


//   i = i+1;

// }

// console.log({totalMarksData})
// maximum = Math.max(...totalmarksAll);
// minimum = Math.min(...totalmarksAll);

// let maximumStudentData = [{
//      roll:0,
//     name : ''
   
    
// }];

// let minimumStudentData = [{
//      roll:0,
//     name : ''
   
    
// }];

// for(let j = 0; j<totalMarksData.length ;j++)
// {                      //sum of total Marks 

//          totalmarksAllSum = totalmarksAllSum +totalMarksData[j].totalMarks ;
         

//          if(  totalMarksData[j].totalMarks == maximum )
//          {
//              maximumStudentData = { roll :totalMarksData[j].roll , name: totalMarksData[j].name  }
//          }
//         else if( totalMarksData[j].totalMarks ==  minimum  )
//          {
//               minimumStudentData = { roll :totalMarksData[j].roll , name: totalMarksData[j].name }
//          }

// }

// console.log("Average Marks of Class in Computer Subject " , sumOfComputerSubjects / i )
// console.log( " Average Class Marks - ", {average  : totalmarksAllSum / i})
// console.log("Need to improve - " ,minimumStudentData)
// console.log("Topper - " ,maximumStudentData)


// console.log({failedStudentData})
// console.log({passStudentData});


// Given an array of objects of items in cart, print:

//     the total No. of items
//     the total cart value
//     the total discounted value(sum of dicounted values on each item) based on the given discount
//     total tax amount (18% tax, calculated on total cart value)

// const cartItems = [
// 	{
// 		id: "101",
// 		name: "Oreo",
// 		count: 2,
// 		price: 30.0,
// 		discount: 0.18
// 	},
// 	{
// 		id: "102",
// 		name: "Red Bull",
// 		count: 1,
// 		price: 99.0,
// 		discount: 0.15
// 	},
// 	{
// 		id: "103",
// 		name: "Dairy Milk Silk",
// 		count: 3,
// 		price: 175.0,
// 		discount: 0.05
// 	},
// 	{
// 		id: "104",
// 		name: "Pulse Candy Pack",
// 		count: 1,
// 		price: 135.0,
// 		discount: 0.2
// 	}
// ];

// let count = 0;
// let cartValue = 0;
// let discountValue =discount =  0;
// let tax = 0;
// let finalCartValue = 0;
// for(let i in cartItems)
// {
//     discountValue = discountValue + cartItems[count].discount;
//     cartValue = cartValue + cartItems[count].price;
//     tax = cartItems[count].price * 0.18 ; 
//     count = count+1;
   
     
// }
// finalCartValue = cartValue *(discountValue/100);
// console.log("total Number of Cartitems " ,count);
// console.log("total Cart Value " ,  cartValue);
// console.log("total Discount Value = ",  discountValue,"%");
// console.log("value after discount = " , cartValue - finalCartValue)


// Salary calculation using OOPS concept.

//     Create a Class using ES6 in JavaScript named Employee and assign necessary
//     data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
//     Create two Instances of Employee with all necessary details.
//     Call the getSalary method of each instance and return the net salary based on your computation.

// Bank Account (Object Oriented Programming in JavaScript)

//     Create a class and define data members such as name, bank account number,
//     account balance, account type, ifsc and name it as BankAccount.
//     Create three Instances(three customers) of BankAccount with all necessary details.
//     Print the name of customers and their account balances.
//     Calculate the average account balance from all the instances.
