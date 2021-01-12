// ARRAY METHODS
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//remove the last item for vegetable array
vegetables.pop()
console.log(vegetables);
//remove the first item form the fruit array
fruit.shift()
console.log(fruit);
//find index of orange. note because the index returns an integer value so you will need to store its value in another variable and then do a console.log of that variable  
var index = fruit.indexOf("orange")
console.log(index)
//add that number to end of the fruit array
fruit.push("1")
console.log(fruit)
//find length of vegetable array
console.log(vegetables.length)
//add hat number to end of vegetables array
vegetables.push("3")
console.log(vegetables)
//put both array into one array
var food = fruit.concat(vegetables)
console.log(food)
//remove 2 items from the new array
food.splice(4,2)
console.log(food)
//reverse the array
food.reverse()
console.log(food)
//turn the array into a string
 var string = food.join(",")
console.log(string)