//-----------------------------------------------------------------------------------------------------------
// Notion covered: Variables and Data Types                                                                |
//-----------------------------------------------------------------------------------------------------------
var number = 5; // number is a variable

/* Data types:
   - string: "hello"
   - number: 5
   - boolean: true/false
   - undefined: no value assigned
   - null: intentional absence of value
   - object: complex data structure
   - array: list of values
*/

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: var, let, const                                                                         |
//-----------------------------------------------------------------------------------------------------------
/* Difference between var, let, and const:
   - var: function-scoped, can be redeclared and updated
   - let: block-scoped, can be updated but not redeclared
   - const: block-scoped, cannot be updated or redeclared
*/
var x = 10;
let y = 20;
const z = 30;

var x = 15; // redeclared
// let y = 25; // ❌ Error: Identifier 'y' has already been declared
// const z = 35; // ❌ Error: Assignment to constant variable

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Operators                                                                               |
//-----------------------------------------------------------------------------------------------------------
var a = 5, b = 10;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = a ** b;

a += 10; // same as a = a + 10
var i = a++; // post-increment
var j = ++a; // pre-increment
var k = a--; // post-decrement
var l = --a; // pre-decrement

var m = (a == b);   // equality
var n = (a === b);  // strict equality
var o = (a != b);   // inequality
var p = (a !== b);  // strict inequality
var q = (a > b);    // greater than
var r = (a < b);    // less than
var s = (a >= b);   // greater or equal
var t = (a <= b);   // less or equal
var u = (a && b);   // logical AND
var v = (a || b);   // logical OR
var w = !a;         // logical NOT

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Strings                                                                                 |
//-----------------------------------------------------------------------------------------------------------
var str = "He said, \"Hello\"";
var str2 = 'He said, "Hello"';
var str3 = `He said, "Hello"`;

var str1 = "Hello";
var str2 = "World";
var str3 = str1 + " " + str2;
var str4 = `Hello ${str2}`;
var str5 = str1.concat(" ", str2);
var ourString = "Hello World";
ourString += "!";
console.log(ourString);

var myName = "Aylin";
var myString = "My name is " + myName + " and I am well!";

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: String Methods                                                                          |
//-----------------------------------------------------------------------------------------------------------
var str = "Hello World";
console.log(str.length);           // 11
console.log(str.indexOf("World")); // 6
console.log(str.lastIndexOf("o")); // 7
console.log(str.substring(0, 5));  // Hello
console.log(str.slice(0, 5));      // Hello
console.log(str.charAt(0));        // H
console.log(str.charCodeAt(0));    // 72
console.log(str[str.length - 1]);  // d

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Functions                                                                               |
//-----------------------------------------------------------------------------------------------------------
function add(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    return `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Objects                                                                                 |
//-----------------------------------------------------------------------------------------------------------
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Arrays                                                                                  |
//-----------------------------------------------------------------------------------------------------------
var array = ["apple", "banana", "cherry"];
var array1 = new Array("apple", "banana", "cherry");
var array2 = new Array(3);
var array3 = ["apple", "banana", "cherry", "date"];

var ourArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(ourArray[0][1]); // 2

var array = ["apple", "banana", "cherry"];
array[0] = "orange";
array[1] = "grape";
array.push("date");
array.unshift("kiwi");
array.pop();
array.shift();
console.log(array.indexOf("grape"));

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: For Loops                                                                               |
//-----------------------------------------------------------------------------------------------------------
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Scope                                                                                   |
//-----------------------------------------------------------------------------------------------------------
var globalVar = "I am global";
function myFunction() {
    var localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}
myFunction();
// console.log(localVar); // ❌ Error: not defined

function fun1(){
   var Output = "";
   if(typeof globalVar !== "undefined"){
      Output += "globalVar: " + globalVar;
   }
}

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Queue Simulation with Arrays                                                            |
//-----------------------------------------------------------------------------------------------------------
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var arr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(arr));
console.log(nextInLine(arr, 6)); // 1
console.log("After: " + JSON.stringify(arr)); // [2,3,4,5,6]

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Equality Checks                                                                         |
//-----------------------------------------------------------------------------------------------------------
function testEqual(val) {
    if (val == 12) return "Equal";
    return "Not Equal";
}
console.log(testEqual(10));
console.log(testEqual(12));

function testStrict(val) {
    if (val === 12) return "Equal";
    return "Not Equal";
}
console.log(testStrict(10));

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Switch Statement                                                                      |    
// ----------------------------------------------------------------------------------------------------------

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
            break;
        default:
            answer = "Not Found";
    }
    return answer;
}
console.log(caseInSwitch(1)); // alpha
console.log(caseInSwitch(5)); // Not Found

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: Return early pattern                                                                | 
//-----------------------------------------------------------------------------------------------------------
function isLess(a, b) {
    return a < b ? true : false;
}
console.log(isLess(10, 15)); // true
console.log(isLess(15, 10)); // false
console.log(isLess(10, 10)); // false

//-----------------------------------------------------------------------------------------------------------
//| Notion covered: object
// -----------------------------------------------------------------------------------------------------------

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
var pet = "pet";
var bed = "bed";
var gift = "gift";
var myResult = myObj.gift;
console.log(myResult); // pony
myResult = myObj[pet];
console.log(myResult); // kitten
myResult = myObj[bed];
console.log(myResult); // sleigh
myResult = myObj["gift"];
console.log(myResult); // pony
myResult = myObj["pet"];
console.log(myResult); // kitten
myResult = myObj["bed"];
console.log(myResult); // sleigh

var myObj = {
      "name": "Kirk",
      "age": 34,
      "job": "Captain"
   };
   myObj.name = "James T. Kirk";
   myObj["age"] = 34;
   myObj.job = "Captain";
   myObj["job"] = "Captain";
   myObj["age"] = 34;

   console.log(myObj.name); // James T. Kirk
   console.log(myObj.age); // 34
   console.log(myObj.job); // Captain

   function phoneticLookup(val) {
      var result = "";
      var lookup = {
         "alpha": "Adams",
         "bravo": "Boston",
         "charlie": "Chicago",
         "delta": "Denver",
         "echo": "Easy",
         "foxtrot": "Frank"
      };
      result = lookup[val];
      return result;
   }
   console.log(phoneticLookup("charlie")); // Chicago
   console.log(phoneticLookup("delta")); // Denver
   console.log(phoneticLookup("echo")); // Easy
   console.log(phoneticLookup("foxtrot")); // Frank
   console.log(phoneticLookup("alpha")); // Adams
   console.log(phoneticLookup("bravo")); // Boston

   var myMusic = [{
      "artist": "Billy Joel",
      "title" : "Piano Man",
      "release_year": 1973,
      "formats": [
         "CD",
         "8T",
         "LP"
      ],
      "gold": true
   }, 
   {
      "artist": "Beatles",
      "title" : "Help",
      "release_year": 2020,
      "formats": [
         "Youtube"
      ],
      "gold": false
   }];
   console.log(myMusic[0].artist); // Billy Joel
   console.log(myMusic[1].artist); // Beatles
   console.log(myMusic[0].formats[0]); // CD
   console.log(myMusic[1].formats[0]); // Youtube
   console.log(myMusic[0].release_year); // 1973

    var myStorage = {
         "car": {
               "inside": {
                  "glove box": "maps",
                  "passenger seat": "crumbs"
               },
               "outside": {
                  "trunk": "jack"
               }
         }

      };
      var gloveBoxContents = myStorage.car.inside["glove box"];
      console.log(gloveBoxContents); // maps
      var passengerSeatContents = myStorage.car.inside["passenger seat"];
      console.log(passengerSeatContents); // crumbs
      var trunkContents = myStorage.car.outside.trunk;
      console.log(trunkContents); // jack

   var myPlants = [
      {
         "type": "flowers",
         "list": [
            "rose",
            "tulip",
            "daisy"
         ]
      },
      {
         "type": "trees",
         "list": [
            "fir",
            "pine",
            "birch"
         ]
      }
   ];
   var secondTree = myPlants[1].list[2];
   console.log(secondTree); // pine
   var secondFlower = myPlants[0].list[1];

   // Record Collection
   var collection = {
      "2548": {
         "album": "Slippery When Wet",
         "artist": "Bon Jovi",
         "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
         ]
      },
      "2468": {
         "album": "1999",
         "artist": "Prince",
         "tracks": [
            "1999",
            "Little Red Corvette"
         ]
      },
      "1245": {
         "artist": "Robert Palmer",
         "tracks": []
      },
      "5439": {
         "album": "ABBA Gold"
      }
   };
   function updateRecords(id, prop, value) {
      if (value === "") { // if value is empty
         delete collection[id][prop]; // delete the property
      } else if (prop === "tracks") {
         if (!collection[id].hasOwnProperty("tracks")) {
            collection[id][prop] = []; // create an empty array
         }
         collection[id][prop].push(value); // add value to the array
      } else {
         collection[id][prop] = value; // update the property
      }
      return collection; // return the updated collection
   }
   console.log(updateRecords(5439, "artist", "ABBA")); // { album: 'ABBA Gold', artist: 'ABBA' }
   console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); // { album: 'ABBA Gold', tracks: [ 'Take a Chance on Me' ] }

   // -----------------------------------------------------------------------------------------------------------
   //| Notion covered: While Loop                                                                              |
   // -----------------------------------------------------------------------------------------------------------
   var myArray = [];
   var i = 0;
   while(i < 5) {
      myArray.push(i); // add i to the array
      i++;
   }
   console.log(myArray); // [0, 1, 2, 3, 4]
   var myArray = [];
   var i = 0;
   while(myArray.length < 5) {
      myArray.push(myArray.length);
   }

   // -----------------------------------------------------------------------------------------------------------
   //| Notion covered: For loops                                                                        |
   // -----------------------------------------------------------------------------------------------------------
   var myArray = [];
   for (var i = 0 ; i < 6; i++ ){
      myArray.push(i); // add i to the array
   }
   console.log(myArray); // [0, 1, 2, 3, 4, 5]

   // Iterate  odd numbers with a for loop
   var myArray = [];
   for (var i = 1; i < 10; i+=2) {
      myArray.push(i); // add i to the array
   }
   console.log(myArray); // [1, 3, 5, 7, 9]

   // Count backwards with a for loop
   var myArray = [];
   for (var i = 10; i > 0; i-=2) {
      myArray.push(i); // add i to the array
   }
   console.log(myArray); // [10, 8, 6, 4, 2]

   for (var i = 9; i > 0; i-=2) {
      myArray.push(i); // add i to the array
   }
   console.log(myArray); // [9, 7, 5, 3, 1]

   // Iterate through an array with a for loop
   var myArray = [2, 3, 4, 5, 6];
   var total = 0;
   for (var i = 0; i < myArray.length; i++) {
      total += myArray[i]; // add the element to total
   }
   console.log(total); // 20
   // Nesting for loops
   var arr = [];
   for (var i = 0; i < 3; i++) {
      arr[i] = [];
      for (var j = 0; j < 3; j++) {
         arr[i][j] = i + j;
      }
   }
   console.log(arr); // [[0, 1, 2], [1, 2, 3], [2, 3, 4]]

   function multiplyAll(arr) {
      var product = 1;
      for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]; // multiply the element to product
         }
      }
      return product;
   }
   console.log(multiplyAll([[1,2],[3,4],[5,6]])); // 720
   // trace of how it works
   // arr[0][0] = 1
   // arr[0][1] = 2
   // arr[1][0] = 3
   // arr[1][1] = 4
   // arr[2][0] = 5
   // arr[2][1] = 6
   // product = 1 * 1 = 1
   // product = 1 * 2 = 2
   // product = 2 * 3 = 6
   // product = 6 * 4 = 24 
   // product = 24 * 5 = 120
   // product = 120 * 6 = 720

   // ----------------------------------------------------------------------------------------------------------- 
   //| Notion covered: Do While Loop                                                                          |
   // -----------------------------------------------------------------------------------------------------------
   var myArray = [];
   var i = 10;
   do {
      myArray.push(i); // add i to the array
      i++;
   } while (i < 5);
   console.log(i, myArray); // [10]

   // -----------------------------------------------------------------------------------------------------------
   //| Notion covered: Lookup Profile                                                                          |
   // -----------------------------------------------------------------------------------------------------------
   var contacts = [
      {
         "firstName": "Akira",
         "lastName": "Laine",
         "number": "0543216543",
         "likes": ["Pizza", "Coding", "Brownie Points"]
      },
      {
         "firstName": "Harry",
         "lastName": "Potter",
         "number": "0543216543",
         "likes": ["Hogwarts", "Magic", "Hagrid"]
      },
      {
         "firstName": "Sherlock",
         "lastName": "Holmes",
         "number": "0543216543",
         "likes": ["Intriguing Cases", "Violin"]
      },
      {
         "firstName": "Kristian",
         "lastName": "Vos",
         "number": "0543216543",
         "likes": ["JavaScript", "Gaming", "Foxes"]
      }
   ];
   function lookUpProfile(name, prop) {
      for (var i = 0; i < contacts.length; i++) {
         if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
               return contacts[i][prop]; // return the property
            } else {
               return "No such property"; // property not found
            }
         }
      }
      return "No such contact"; // contact not found
   }
   console.log(lookUpProfile("Akira", "likes")); // ["Pizza", "Coding", "Brownie Points"]