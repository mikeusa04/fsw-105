// Building JS Functions to Keep Code DRY

// Write a function that accepts two numbers as parameters and returns the sum.
var sum = function (a, b){
    return a + b;
};
console.log(sum(7, 5));

// Write a function that accepts three numbers as parameters and returns the largest of those numbers.
// either you do this   var largest = function (a, b, c){  or
function largest(a, b, c){    
    if (a >= b && a >= c){
        console.log(a+ " is the largest number");
    }
    else if (b >= a && b >= c){
        console.log(b+ " is greater than "+ a + " and "+ c)
    }
    else{
        console.log(c+ " is greater than "+ a + " and "+ b)
    }
}
largest(15, 7, 40 );

/* another way to do the above 
var largestNumber = function(a, b, c){
    var greatestNumber = 0;
    var numbersArray = [a, b, c];
    for (var i = 0; i < numbersArray.length; i++);{
        if (numbersArray[i] > greatestNumber){
            greatestNumber = numbersArray[i];
        }
    }
    console.log("My greatest number is " + greatestNumber);
};
largestNumber(5, 4, 8); */

// Write a function that accepts one number as a parameter and returns whether that number is even or odd. (Return the string "even" or "odd")
var evenOdd = function(num){
    if (num % 2 === 0){
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
evenOdd(17)

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function stringLength(flowers){
    if (flowers.length <= 20){
        console.log(flowers + flowers);
    }
    else if(flowers.length >= 20){
        console.log(flowers.length, "length");
        console.log(flowers.slice(0, flowers.length), "slicing the legth of the flowers" );
        console.log(flowers.slice(0, flowers.length/2), "slicing half the length of the flowers");
        console.log(flowers.slice(0, Math.round(flowers.length/2)), "rounding down half length");
    }
}
var shortStr = "10";
var longStr = "87857098098665544232470990998";
stringLength(longStr)

// Extra Credit
/* Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
The first numbers are:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

So, if n were 6, the sum of 1+1+2+3+5+8 would be 20
*/
var fibonacci_series = function (n) {
    if (n === 1){
        return [0, 1];
    }    
    else {
        var s = fibonacci_series (n-1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
console.log(fibonacci_series(5));

// Write a function that accepts a string as a parameter. Return the most frequently occurring letter in that string. (White spaces count as a letter)
