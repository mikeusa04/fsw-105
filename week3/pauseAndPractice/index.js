/*Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
Log to the console a personalized message like:
Mike is not old enough to see Mad Max.
or
Madeline is old enough to see Mad Max.
Check to see if the movie goer is a male or female for an even more personalized message.
Mike is not old enough to see Mad Max Fury Road, don't let HIM in.
or
Madeline is old enough. SHE'S good to see Mad Max Fury Road.
Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.
The light is off to start with. Log to the console whether or not the light is on at the end.
Sample Arrays:*/






// JavaScript Loops & Nesting Loops
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
    },{
        name: "Madeline",
        age: 80,
        gender: "female",
    },{
        name: "Cheryl",
        age: 22,
        gender: "female",
    },{
        name: "Sam",
        age: 30,
        gender: "male",
    },{
        name: "Suzy",
        age: 4,
        gender: "female",
    }
];
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ) {
        console.log("Old enough");
        //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
    } else {
        console.log("Not old enough");
    }
};

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not old enough");
    }
};

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ) {
        var gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "He is" : "She is"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. "+gender+ " good to see Mad Max Fury Road");
    } else {
        var gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not old enough to see Mad Max Fury Road, don't let "+gender+ " in.");
    }
};

for (var i = 0; i <= 100; i++) {
    if( i % 2 === 0 ){
        console.log(i + " Even"); // we can jut put "even" but if we i it will show the (number+even)  
    } else{
        console.log(i + " Odd"); // we can jut put "even" but if we i it will show the (number+odd)
    }
}

var light = false;
var array = [2, 5, 435, 4, 3];
for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array[i]; j++){
        light = !light;
    }
};
if( light ){
    console.log("the light is on");
} else{
    console.log("the light is off");
}
var light = false;
var array = [ 1, 1, 1, 1, 3 ];
for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array[i]; j++){
        light = !light;
    }
};
if( light ){
    console.log("the light is on");
} else{
    console.log("the light is off");
}
var light = false;
var array = [9, 3, 4, 2 ];
for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array[i]; j++){
        light = !light;
    }
};
if( light ){
    console.log("the light is on");
} else{
    console.log("the light is off");
}
