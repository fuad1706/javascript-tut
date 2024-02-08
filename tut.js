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

// var lastNameLength = 0;
// var lastName = "Lovelace";
// lastNameLength = lastName.length;
// console.log(lastNameLength)

// Bracket Notation to find first character in string

//var firstLetterOfFirstName = "";
//var firstName = "Ada";

//firstLetterOfFirstName = firstName[0];
//console.log(firstLetterOfFirstName)

// var firstLetterOfLastName = "";
// var lastname = "Lovelace";
// firstLetterOfLastName = [4];
// console.log(firstLetterOfLastName);

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
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb;
  return result;
}
console.log(worldBlanks("dog", "big", "ran", "quickly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"));

// Store multiple values with arrays

var ourArray = ["John", 23];
console.log(ourArray);

//Nested Array

var ourArray = [
  ["The universe", 42],
  ["everything", 101010]
];

console.log(ourArray);

//Access Array Data with indexes

var ourArray = [50, 60, 70];
var ourData = ourArray[0];

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

//Modify Array Data with indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray);

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

//Access Multi-domensional Arrays with indexes

var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
var myData = myArray[3][0];
console.log(myData);

// Manipulate Arrays with push() add item to the end of an array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

var myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
console.log(myArray);

//Manipulate Arrays with pop() it remove data from the begining of an array
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

var myArray = [
  ["John", 23],
  ["cat", 2],
];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//Manipulate Arrays with shift() it removed the first item instead of the last item
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

var myArray = [
  ["John", 23],
  ["dog", 3],
];
var removedFromMyArray = myArray.shift();
console.log(myArray);

// Manipulate Arrays with unshift() add to the begining of the array
var ourArray = ["Stimpson", "j", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

var myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Olofin", 208]);
console.log(myArray);

// Shopping List

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];

// write reusable code with functions

function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);

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

function addFive() {
  sum += 5;
}

//Assignment with a returned value

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

var processed = 0;
function processArg(num) {
  return (num + 2) / 7;
}

processed = processArg(47);
console.log(processed);

//Stand in Line

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean Values true or false

//use conditional logic with if statements

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(false));

// comparison with the equality operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));

//comparison with the strict equality operator must be the number if not it will return false
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(3));

//Practice Comparing Different Values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

//comparison with the inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(23));

//compariosn with the strict inequality operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17));

//comparison with the logical and operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(101));

//comparison with greater than or equal to operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(22));

//comparison with less than operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(22));

//comparison with less than or equal to operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
console.log(testLessOrEqual(50));

//comparison with the logical and operator &&

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(27));

// Comparison with the logical or Operator ||

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(5));

//Else Statements
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}
console.log(testElse(5));

//Else if Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(4));

//Logical order in if else statement

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(3));

//Chaining If else statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(200));

//Golf code

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(1, 3));

/*
Strokes     Return
1           "Hole-in-one!"
<= par -2   "Eagle"
par - 1      "Birdie"
par          " Par"
par + 1      " Bogey"
par + 2      " Double Bogey"
>= par + 3    "Go Home!"
*/

//Switch statement
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }

  return answer;
}

console.log(caseInSwitch(3));

//Default option in switch statements

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  return answer;
}
console.log(switchOfStuff("a"));

//Multiple identical options in switch statements

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}
console.log(sequentialSizes(3));

// Replacing if else chain with switch
function chainToSwitch(val) {
  var answer = "";
  /*if (val === "bob"){
    answer = "Marley"
  } else if (val === 42) {
    answer = "The Answer"
  }else if (val === 1){
    answer = "There is no #1"
  } else if (val === 99){
    answer = "Missed me by this much!"
  }else if (val === 7){
    answer = "Ate Nine"
  }
*/

  //replacement
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
console.log(chainToSwitch("bob"));

// Returning boolean values from functions

function isLess(a, b) {
  /*if (a > b){
    return true
  }else{
    return false
  }*/

  // the code can also be written
  return a < b;
}
console.log(isLess(10, 15));

//Returning Early Pattern from function

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));

// Counting Cards

var count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

//Build Javascript object
//Example
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: [],
};

var myDog = {
  name: "Quincy",
  legs: 3,
  tails: 2,
  frineds: [],
};

//Accessing object properties with dot notation
var testObj = {
  hat: "ballcap",
  shirt: "Jersey",
  shoes: "cleats",
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);

//Accessing Object properties with bracket notation

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue);

// Accessing objext properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 12;
var player = testObj[playerNumber];
console.log(player);

//Updating Object Properties

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.name = "Happy Camper";

console.log(ourDog.name);

// Add new properties to an object
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog.bark = "bow-wow";

var ourDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog["bark"] = "woof!";
console.log(ourDog);
// console.log(myDog['bark']);

//Delete properties from an object
var ourDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete ourDog.tails;

//Using Object for lookup
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easybank",
    foxtrot: "frankophone",
  };
  result = lookup[val];

  return result;
  // switch (val) {
  // case "alpha":
  // result = "Adams";
  // break;
  // case "bravo":
  // result = "Boston";
  // break;
  // case "charlie":
  // result = "Chicago";
  // break;
  // case "delta":
  // result = "Denver";
  // break;
  // case "echo":
  // result = "Easy";
  // break;
  // case "foxtrot":
  // result = "Frank";
  // }
}

//Testing Object for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("food"));

//Manipulating complex objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: [
      "Youtube video",
      "spotify",
      "audio mack",
      "deezer",
      "apple music",
    ],
  },
];
console.log(myMusic[1]);

//Accessing Nested Objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var handGloveContents = myStorage.car.inside["passenger seat"];
console.log(handGloveContents);

//Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record Collection
var collection = {
  2548: {
    album: "Slippery When wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "ABBA"));

//Iterate with while loops //loops allow you to run code multiple times
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//iterate with for loop
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);

//iterate odd number with a for loop
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

//count backwards with a for loop
//even number
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

//odd number
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

//Iterate through an array with a for loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

//Nesting for Loops
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

//Iterate with do... while loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

//profile lookup

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}
var data = lookUpProfile("dan", "lastName");
console.log(data)

// Generate Random Fractions
function randomFraction(){
  return Math.random();
}
console.log(randomFraction());

// Generate random whole numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 20);
}
console.log(randomWholeNum());

// Generate Random whole Number within Range
function randomRange(myMin, myMax){
  return Math.floor(Math.random() * (myMax - myMin + 1)) +myMin;
}
var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt Function
function convertToInteger(str){
  return parseInt(str);
}
console.log(convertToInteger("56"));

// use the parseInt Function with a Radix
function convertToInteger(str){
  return parseInt(str, 2)
}
console.log(convertToInteger("10001"));

//Use the conditional (ternary) operator
// condition ? stattement-if-true: statement-if-false;

function checkEqual(a, b){
  return a === b ? true : false;
}

checkEqual(2, 1);
console.log(checkEqual());

//using multiple ternary operator
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0))

// Difference Between the var and let Keywords
// let does not allow you to declare a variable twice
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk(){
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!"
}

//compare scope of the var and let keywords
// Declare  read-only variable with the const keyword
//mutate an array declared with const
const s = [5, 7, 2];
function editInPlace(){
  "use strict";
  //s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s)

//Prevent Object Mutation
//use arrow function to write concise anonymous function
const magic = () => new Date();

// write arrow function with parameters
//var myConcat = function(arr1, arr2) {
 // return arr1.concat(arr2);
//};
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3, 4, 5]));

//write higher order arrow functions
