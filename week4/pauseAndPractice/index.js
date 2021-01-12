//1.Make a function that will return any given string into all caps followed by the same string all lowercase.
function capitalizedAndLowerCase(string) {
    var str = string.toUpperCase();
    var newStr = string.toLowerCase();
    console.log(newStr);
    console.log(str);
    console.log(str + newStr)
}
capitalizedAndLowerCase("HELLO")

//2. Make a function that returns a number half the length and rounded down.
// using "Hello"
function findMiddleIndex(text){
    var text = "Hello"; 
    var length = text.length;
    console.log(Math.floor(length / 2));
}
findMiddleIndex("Hello")

// using "Hello World"
function findMiddleIndex1(text){
    var text = "Hello World"; 
    var length = text.length;
    console.log(Math.floor(length / 2));
}
findMiddleIndex1("Hello World")

// 3. Make a function that uses slice() and the other functions you've written to return the first half of the string.
// returnFirstHalf("Hello")
function returnFirstHalf(text){
    var length = text.length
    console.log(text.slice(0, Math.floor(length / 2)));
}
returnFirstHalf("Hello")

// returnFirstHalf("Hello World")
function returnFirstHalf(text){
    var length = text.length
    console.log(text.slice(0, Math.floor(length / 2)));
}
returnFirstHalf("Hello World")

// 4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. (If the string length is odd, capitalize the shorter of the first half.)
// capilized and lower case "hello"
function capitalizAndLowerCase(text){
    if ( text.length % 2 !== 0 ){
        var upper = text.toUpperCase();
        var uppering = upper.slice(0,Math.floor(upper.length / 2));
        var lower = text.toLowerCase();
        var lowering = lower.slice(Math.floor(upper.length / 2));
        console.log(uppering + lowering);
    }
    else{
        var lower = text.toLowerCase();
        var lowering = lower.slice(0,Math.floor(lower.length / 2));
        var upper = text.toUpperCase();
        var uppering = upper.slice(Math.floor(lower.length / 2));
        console.log(lowering + uppering);
    }
}
capitalizAndLowerCase("Hello")

// capilized and lower case "hello world"
function capitalizAndLowerCase(text){
    if ( text.length % 2 !== 0 ){
        var upper = text.toUpperCase();
        var uppering = upper.slice(0,Math.floor(upper.length / 2));
        var lower = text.toLowerCase();
        var lowering = lower.slice(Math.floor(upper.length / 2));
        console.log(uppering + lowering);
    }
    else{
        var lower = text.toLowerCase();
        var lowering = lower.slice(0,Math.floor(lower.length / 2));
        var upper = text.toUpperCase();
        var uppering = upper.slice(Math.floor(lower.length / 2));
        console.log(lowering + uppering);
    }
}
capitalizAndLowerCase("Hello World");

// Make a function that takes any string and capitalizes any character that follows a space.
// capitalize ("hey friends! practice practice practice!")
function capitalize(str) {
    var arr = str.toLowerCase().split(" ");
    var result = arr.map(
        function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            // or return val.replace(val[0], val[0].toUpperCase());
        });
    console.log(result.join(" "));
}
capitalize("hey friend! jerome, aaron and brenden practice practice practice!");
