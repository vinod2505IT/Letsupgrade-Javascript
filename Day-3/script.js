
//Create a person object;
var person = {
    name: 'Vinod',
    age : 33,
    likesCoding : true,
}
person.hobby = "Coding";//add new key/values in object
console.log(person);
console.log(person.name); //dot notation
console.log(person['age']); //bracket Syntax

//---------------------------------------------

// Change the object value
person.age = 19;
console.log(person);
//---------------------------------------------

// for in loop -- note: U can't use a .notation in console in this loop
for (var k in person){
    console.log(k,person[k]);
}
//---------------------------------------------

//Question asked in video-day3
var arr = [6,7,8,9,0];
console.log(arr.slice(-3,-1));
console.log(arr.slice(-2,4));
//---------------------------------------------

//Creating function 
function showMessage(name){
    console.log(`Hello form ${name}`)
}
showMessage("Vinod")

function square(num){
    console.log(num*num);
}
square(6);
//---------------------------------------------

//Arrow function
var add = (num)=> num+num;
console.log(add(10));
//---------------------------------------------
//note -> In alert u can't use backtic key(` `);
function showArgumet(firstName,LastName){
    console.log(`Hello ${arguments[0]} ${arguments[1]}`);
}
showArgumet("Vinod","T.H");
//---------------------------------------------

function showMessage1(){
    for(let i=0;i<arguments.length; i++){
        console.log(arguments[i])
    }
}
showMessage1("vinod","Naveen","Hari","Jeeva");

//---------------------------------------------

