//Preliminaries 1
var i = 5;
if (i > 3){
console.log("5 is greater than 3");
}
else {
    console.log("5 is NOT greater than3");
}
// 2
if ("cat".length === 3){
    console.log("is the length")
}
/*or
var cat = "cat"
if (cat.length == 3){
    console.log("is the length");
}
else {
    console.log("is NOT the length")
}*/
// 3
if("cat" != "dog"){
    console.log("not the same")
}
/* or 
var cat = "cat";
var dog = "dog";
if (cat == dog){
    console.log("Cat equal to Dog");
}
else {
    console.log("not the same");
}*/
// Bronze Medal 1
var person = {
    name: "Bobby",
    age: "12",
};
if (person.age >= 18){
    console.log("Bobby is allowed to go to the movie");
}
else {
    console.log("Name: " + person.name + " is NOT allowed to go to the movie");
}
// 2
var person = {
    name: "Bobby",
    age: "12",
};
//console.log(person.name.charAt(1));
if (person.name.charAt(0) == "B"){
    console.log("Bronze #2: allowed into movie");
}
else {
    console.log("Bronze #2: not allowed into the movie");
}
// 3
var person = {
    name: "Bobby",
    age: "12",
};
if (person.name.charAt(0) == "B" && person.age >= 18){
    console.log("Bronze #3: allowed int movie")
}
else {
    console.log("Bronze #3: not allowed into movie")
}
//silver #1
if (1 === "1") {
    console.log("strict");
}
else if (1 == "1"){
    console.log("loos or abstract");
}
else {
    console.log("not equal at all");
}
//silver #2
if (1 <= 2 && 2==4){
    console.log("yes");
}
else {
    console.log("no");
}
//Gold medal
//#1
var strValue = "dog";
if ( typeof strValue == "string"){
    console.log("is a string");
}
else {
    console.log("is not a string");
}
// or
if ( typeof "dog" === "string"){
    console.log("is a string");
}
else {
    console.log("is NOT a string");
}
//#2
var boolValue = true;
if ( typeof boolValue == "boolean"){
    console.log("is a boolean");
}
else {
    console.log("is not a boolean");
}
// or
if (typeof "true" === "boolean"){
    console.log("is a boolean");
}
else {
    console.log("is NOT a boolean");
}
// or
if (typeof true === "boolean"){
    console.log("is a boolean");
}
else {
    console.log("is NOT a boolean");
}
//#3
var name = "mike";
if(typeof name !== "undefined"){
    console.log("this variable is defined");
}
else {
    console.log("this variable is NOT defined");
}

var mike;
if(typeof mike !== "undefined"){
    console.log("this variable is defined");
}
else {
    console.log("this variable is NOT defined");
}

/*var firstName;
if (firstName === null){
    console.log("null or defined");
}
else {
    console.log("undefined");
}
var lastName = null;
if (lastName === undefined){
    console.log("undefined");
}
else {
    console.log("defined");
}*/

// #4
if( "s" > 12 ){
    console.log("this is true");
}
else {
    console.log("this is false");
}

//#5
if( "a" <= 18 ){
    console.log("this is true");
}
else {
    console.log("this is false");
}

//#6
var myNum = 10;
myNum%2 === 0 ? console.log("the number is even") : console.log("the number is odd")
//or
10%2 === 0 ? console.log("the number is even") : console.log("the number is odd")
11%2 === 0 ? console.log("the number is even") : console.log("the number is odd")
