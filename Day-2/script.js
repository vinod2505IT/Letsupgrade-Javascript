// let shopping = ['bread', 'milk', 'cheese'];
// shopping[0] = "Vegetable";
// document.write(shopping.length);
// console.log(shopping.length);
//---------------------------------------------

// let sequence = [1,2,3,4,5,8,13];
// for(let i=0; i<sequence.length; i++){
//     console.log(sequence[i]);
// }

//---------------------------------------------

//String to array - split()
let shopping = 'bread milk cheese egg';
let myData = shopping.split(' '); //return array
console.log(myData);
//---------------------------------------------

//Array to String -toString()
let arr = ['bread','milk','cheese','egg'];
let str = arr.toString()
console.log(str);
//---------------------------------------------

//Add a value to last elemet in array - push()
let sequence = ['bread','milk','cheese','egg'];
let addAtEnd = sequence.push('jam','butter');
console.log(sequence);
//---------------------------------------------

//Remove a Last Elemet in array - pop()
let sequence1 = ['bread','milk','cheese','egg'];
let delAtEnd = sequence1.pop();
console.log(sequence1);
//---------------------------------------------

//Remove a First Element in array - shift();
sequence1.shift();
console.log(sequence1);
//---------------------------------------------

// Add a value to first element - unshift();
sequence1.unshift('jam');
console.log(sequence1);

//---------------------------------------------
//splice and slice

let arr1 = [1,2,3,4,5];
console.log(arr1.splice(2,1)); //from index value 2 delete everything
console.log(arr1);

let array = [1,2,3,4,5]
console.log(array.slice(2,5));

//----------------------------------------------
