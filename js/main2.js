// function checkLeapYear(year) {




//     ///////////1. answer/////////
//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// const year = prompt('Enter a year:');

// checkLeapYear(year);







//////////2. answer/////////

// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var result = cTemp + ': ' + cToFahr;
//     console.log(result);
// }

// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var result = fTemp + ': ' + fToCel;
//     console.log(result);
// }
// cToF(60);
// fToC(45);





//////////////3.answer/////////////

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let n = 4;
// answer = factorial(n);
// console.log("the factorial of " + n + " is " + answer);




//////////////4.answer///////////////


// function checkTriangle(x, y, z) {


//     if (x == y && y == z)
//         document.write("Equilateral Triangle");


//     else if (x == y || y == z || z == x)
//         document.write("Isosceles Triangle");


//     else
//         document.write("Scalene Triangle");
// }

// let x = 8,
//     y = 10,
//     z = 9;


// checkTriangle(x, y, z);

////////////////////////5.answer//////////////////


// function marksGrade() {

//     window.prompt("enter the grade: ");
//     var Grade = prompt("enter the grade :")

//     switch (Grade) {
//         case 'S':
//             console.log(marks >= 100 || marks <= 90);

//             break;

//         case 'A':
//             console.log(marks >= 80 || marks <= 90);

//             break;
//         case 'B':
//             console.log(marks >= 70 || marks <= 80);

//             break;
//         case 'C':
//             console.log(marks >= 60 || marks <= 70);

//             break;
//         case 'D':
//             console.log(marks >= 50 || marks <= 60);

//             break;
//         case 'E':
//             console.log(marks >= 40 || marks <= 50);

//             break;
//         case 'F':
//             console.log(marks <= 40);

//             break;
//         default:
//             console.log("invalid marks");
//     }

// }
// marksGrade();
// case (score >= 80 && score <= 90):
//     gscore = 'A';
//     break;
// case (score >= 70 && score <= 80):
//     gscore = 'B';
//     break;
// case (score >= 60 && score <= 70):
//     gscore = 'C';
//     break;
// case (score >= 50 && score <= 60):
//     gscore = 'D';
//     break;
// case (score >= 40 && score <= 50):
//     gscore = 'E';
//     break;
// case (score <= 40):
//     gscore = 'F';
//     break;
// default:
//     return 'INVALID SCORE';





// }
// result = console.log(myGrading);


// }




///////////////6.answer//////////////////

// function sumOfMultiples(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfMultiples(10));
// console.log(sumOfMultiples(15));




////////////7.answer/////////////

// let a, b, i, j, flag;
// a = window.prompt("enter lower bound of the interval: ");
// b = window.prompt("enter upper bound of the interval: ");
// console.log("prime numbers between " + a + " and " + b);
// for (i = a; i <= b; i++) {
//     if (i == 1 || i == 0)
//         continue;
//     flag = 1;
//     for (j = 2; j <= i / 2; ++j) {
//         if (i % j == 0) {
//             flag = 0;
//             break;
//         }
//     }
//     if (flag == 1) {
//         console.log(i, " ");
//     }
// }



/////////Assignment 2.///////////


////1. answer///

// function numberPyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '';
//     }
// }
// numberPyramid();


//////2.answer/////////

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');


// let type = number;
// while (type > 0) {

//     let remainder = type % 10;

//     sum += remainder * remainder * remainder;


//     type = parseInt(type / 10);
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an amstrong number`);
// }