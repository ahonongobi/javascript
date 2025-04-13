// Random fraction
function randomFunction(){
    return Math.random()
}
console.log(randomFunction())

function ourrandomFunction(min, max) {
  return Math.floor(Math.random()* (max - min + 1)) + min
}
console.log(randomFunction());

function convertToInt(str){
    return parseInt(str)
}

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

const s = [4,5,6,7]

function editInPlace(){
  ("use strict"); // "use strict" te protège des mauvaises pratiques (ex : variables non déclarées).

  //s = [2,5,6,9]
  S[0] = 1;
  s[1] = 10;
}

var magic = function(){
    return new Date();
};
const magic = ()=>{return new Date();}

const myConcat = (arr1, arr2) => arr1.concat(arr2)

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr']

let arr2

(function(){
  // IIFE (Immediately Invoked Function Expression), execute immediataly after her definition

  arr2 = [...arr1];

  arr1[0] = "Potato";
})();
console.log(arr2)

var vowels = {x: 3.6, y: 4.2, z: 5.1};

var x = vowels.x;
var y = vowels.y;
var z = vowels.z;
console.log(x);
console.log(y);

const {x: a, y: b, z: c} = vowels; // a = 3.6, b = 4.2, c = 5.1

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
    };
function getTempOfTmrw(avgTemperatures){
    "use strict";
    const {today: tempOfTomorrow} = avgTemperatures; // destructuring
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // 79

let a_ = 8, b_ = 6;

(()=>{
    "use strict";
    // a = 6, b = 8
    [a_,b_] = [b_,a_]; // destructuring
    console.log(a_); // console.log(a_);
    console.log(b_);

})()

const source = [1,2,3,4,5];

 function removeFirstTwo(list){
    const [,,...arr] = list; // destructuring
    return arr;
 }
 console.log(removeFirstTwo(source)); // [3,4,5]

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;
console.log(stats); // {max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, average: 35.85}
console.log(half(stats)); // 28.015 

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greating = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greating); // Hello, my name is Zodiac Hasbro! I am 56 years old.


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-duplicate-imports"]
};
const {success, failure} = result; // destructuring
const failuresList = failure.map((item) => {
    return `<li class="text-warning">${item}</li>`;
});
console.log(failuresList); // ["<li class="text-warning">no-var</li>", "<li class="text-warning">var-on-top</li>", "<li class="text-warning">linebreak</li>"]
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer est une variable fictive
    const responseFromServer = true;

    if(responseFromServer){
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

const createUser = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
}
console.log(createUser("Jean", 25, "M"))

function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name); // carrot

// Using getters and setters
class Book{
    constructor(author){
        this._author = author;
    }
    get writer(){
        return this._author;
    }
    set writer(newAuthor){
        this._author = newAuthor;
    }
}
const book = new Book("anonymous");
console.log(book._author)

import { capitamizeString } from "./string_function";
const str = capitamizeString("hallo")
console.log(str)

