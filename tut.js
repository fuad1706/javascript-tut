// // Data Types:
// // undefined, null, boolean, string, symbol, number, and object

// //var myName = "Beau";

// //myName = 8;

// //let ourName = "freeCodeCamp";

// //const pi = 3.14;

// // variable is like a container used to store data

// // three ways to declare a variable in javascript

// // var - allows to be used through out the whole programme

// // let - will only be used in the scope where you declare it

// //const - is avariable that can never chnage if change it will return error

// // variable declaration
// // var a;

// // variable assigning
// // var b = 2;

// //console.log allows you to see things in the console

// //Initialize these three variables

// // var a = 5;
// //var b = 10;
// //var c = "I am a"

// // Do not change code below this line

// // a = a + 1;
// //b = b + 5;
// //c = c + "string";

// // console.log(a);
// //console.log(b);
// //console.log(c);

// // Declarations is case sensitive it is advisable to make use
// // camelCase when declaring variables
// //var studlyCapVar;
// //var properCamelCase;
// //var titleCaseOver;

// // Assignments
// //studlyCapVar = 10;
// //properCamelCase = "A String"
// //titleCaseOver = 9000;

// // Adding numbers

// //var sum = 10 + 10;
// //console.log(sum);

// // Substracting number

// //var difference = 45 - 33;
// //console.log(difference);

// // multiplication
// //var product = 8 * 10;
// //console.log(product);

// // Division
// //var quotient = 66 / 33;
// //console.log(quotient);

// // incrmenting number
// //var myVar = 87;
// //myVar++
// //console.log(myVar)

// // Decrementing numbers
// //var myVar = 11 ;
// //myVar--;
// //console.log(myVar);

// // compound assignment with augmented addition
// //var a = 3;
// //var b = 17;
// //var c = 12;

// //a += 12;
// //b += 9;
// //c += 7;
// //console.log(a)
// //console.log(b)
// //console.log(c)

// // compound assignment with augmented substraction
// //var a = 11;
// //var b = 9;
// //var c = 3;

// //a -= 6;
// //b -= 15;
// //c -= 1;
// //console.log(a)
// //console.log(b)
// //console.log(c)

// // compound assignment with augmented multiplication

// //var a = 5;
// //var b = 12;
// // var c = 4.6;

// // a *= 5;
// // b *= 3;
// // c *= 10;

// // console.log(a)
// // console.log(b)
// // console.log(c)

// //compound assignment with augmented division
// var a = 48;
// var b = 108;
// var c = 33;

// a /= 12;
// b /= 4;
// c /= 11;

// // console.log(a)
// console.log(b)
// console.log(c)

// declare string variable.. single or double quote or batic

// var firstName = "Alan";
// var lastName = "Turing";

// var myFirstName = "Beau";
// var myLastName = "Carnes"

// escaping literal quotes in strings by putting a back slash

//var myStr = "I am a \"double quoted\" string inside \"double quotes"
//console.log(myStr);

// Quoting strings with single quotes
// in some you can also use single quote in place of back slash

// Escape Sequence in strings
/*****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*****/

//var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
//console.log(myStr)

//concatenating strings with plus operator

// var myStr = "This is the start. " + "This is the end."
// console.log(myStr);

//concatenating strings with plus equal operator +=

// var myStr = "This is the first sentence. "
// myStr += "This is the second sentence. "
// console.log(myStr);

//constructive strings with variables

//var myName = "Fuad";
//var myStr = "My name is " + myName + " and I am well!";
//console.log(myStr);

//Appending Variables to Strings

//var anAdjective = "awesome!";
//var ourStr = "freeCodeCamp is ";
//ourStr += anAdjective;
//console.log(ourStr)

//var someAdjective = "worthwhile";
//var myStr = "Learning to code is ";
//myStr += someAdjective;
//console.log(myStr)

// Find lenght of a string
//var firstNameLength = 0;
//var firstName = "Ada";

//firstNameLength = firstName.length;
//console.log(firstNameLength);

//var lastNameLength = 0;
//var lastName = "Lovelace";
//lastNameLength = lastName.length;
//console.log(lastNameLength)

// Bracket Notation to find first character in string

//var firstLetterOfFirstName = "";
//var firstName = "Ada";

//firstLetterOfFirstName = firstName[0];
//console.log(firstLetterOfFirstName)

//var firstLetterOfLastName = "";
//var lastname = "Lovelace";
//firstLetterOfLastName = [4];
//console.log(firstLetterOfLastName);

// Bracket Notation to find last character in string
//var firstName = "Ada";
//var lastLetterOfFirstName = firstName[firstName.length - 1];
//console.log(lastLetterOfFirstName);

//var firstName = "Adebakin";
//var secondLetterOfFirstName = firstName[firstName.length - 6];
//console.log(secondLetterOfFirstName);

// Bracket Notation to find Nth-to-Last Character in String

//var firstName = "Ada";
//var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
//console.log(thirdToLastLetterOfFirstName);

//var lastName = "Lovelace";
//var secondToLastLetterOfLastName = lastName[lastName.length - 2];
//console.log(secondToLastLetterOfLastName);

// let myName = "Fuad";
// let surName = "Adebakin";
//let fullName = myName + " " + surName;
//console.log(fullName);

//let myStr = "Understand";
//console.log(myStr.length);

//Word Blanks

function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
  return result;
}
console.log(worldBlanks("dog", "big", "ran", "quickly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"))

// Store multiple values with arrays

var ourArray = ["John", 23];
console.log(ourArray);

//Nested Array

var ourArray = [["The universe", 42], ["everything", 101010]];

console.log(ourArray);

//Access Array Data with indexes

var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70]
var myData = myArray[0];
console.log(myData);

//Modify Array Data with indexes
var ourArray = [18,64,99];
ourArray[1] = 45;
console.log(ourArray);

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray)

//Access Multi-domensional Arrays with indexes

var myArray = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);

// Manipulate Arrays with push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

var myArray = [["John", 23],["cat", 2]];
myArray.push(["dog", 3])
console.log(myArray);

//Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//Manipulate Arrays with shift() it removed the first item instead of the last item
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray);

// Manipulate Arrayas with unshift() add to the begining of the array
var ourArray = ["Stimpson", "j", "cat"];
ourArray.shift(); 
ourArray.unshift("Happy");
console.log(ourArray);

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Olofin", 208])
console.log(myArray);

// Shopping List

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// write reusable code with functions

function ourReusableFunction() {

  console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction(){
  console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b){
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b){
  console.log(a + b)
}
functionWithArgs(10, 5)

//Global scope and functions

//Local scope and functions

//Global vs Local scope in function

//Return a value from a function with return
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function mutFive(num) {
  return num * 8;
}

console.log(mutFive(30));

//understanding undefined value returned from a function
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum += 5;
}

//Assignment with a returned value

