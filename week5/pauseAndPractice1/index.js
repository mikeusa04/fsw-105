// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater using .filter()
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
         if (num >= 5)
             return num;
    });
    return result;
 }
 console.log(fiveAndGreaterOnly([2, 4, 6, 8, 32, 3, 25, 100]));
 
 // 2) Given an array of numbers, return a new array that only includes the even numbers using .filter()
 function evensOnly(arr){
     const result =arr.filter(function(num){
         if (num % 2 == 0)
         return num;
     });
     return result;
 }
 console.log(evensOnly([2, 3, 6, 13, 30]));
 
 // Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+) using .filter()
 function ofAge(arr){
     const result = arr.filter(function(num){
         if (num.age >= 17)
         return num
     })
     return result
 }
 console.log(ofAge([{name: "Angelina Jolie", age: 80},
 {name:"Eric Jones", age:2}, {name: "Paris Hilton", age: 5},
 {name: "Kanye West", age: 16}, {name: "Bob Ziroll", age: 100}
 ]));
 
 // 1) Make an array of numbers that are doubles of the first array using .map()
 function doubleNumber(arr){
     const result= arr.map(function(num){
         return num * 2;
     });
         return result;
 }
 console.log(doubleNumber([8, 12, 5, 2, 100, 7]))
 
 // 2) Take an array of numbers and make them strings using .map()
 function stringItUp(arr){
     const result = arr.map(function(num){
         return num + ""
     })
     return result;
 }
 console.log(stringItUp([2, 5, 100]));
 
 // 3) Capitalize each of an array of names using .map()
 function capitalizeNames(arr){
     const result = arr.map(function(name){
         var capitalLetter = name[0].toUpperCase()
         var rest = name.slice(1).toLowerCase()
         console.log(capitalLetter + rest)
         return capitalLetter + rest
     })
     return result;
 }
 console.log(capitalizeNames(["john", "JACOB", "jingleHeimer", "schmidt"]));
 
 // 1) Turn an array of numbers into a total of all the numbers using .reduce()
 function total(arr){
     const result = arr.reduce(function(num, addition){
         sum = num + addition
         return sum
     })
     return result
 }
 console.log(total([1, 2, 3]))
 
 // 2) Turn an array of numbers into a long string of all those numbers using .reduce()
 function stringConcat(arr){
     const result = arr.reduce(function(num, additions){
         num += additions.toString()
         return num
     })
     return result
 }
 console.log(stringConcat([1, 2, 3]))
 
 // 3) Turn an array of voter objects into a count of how many people voted 
 function totalVotes(arr){
         var voted = 0
         let result = arr.filter(function(i){
             if (i.voted == true){
                 return voted ++
             }
         })
         return voted;
     }
     var voters = [
         {name: "Bob", age: 30, voted: true},
         {name: "Jake", age: 32, voted: true},
         {name: "Kate", age: 25, voted: false},
         {name: "Sam", age: 20, voted: false},
         {name: "Phil", age: 21, voted: true},
         {name: "Ed", age: 55, voted: true},
         {name: "Tami", age: 54, voted: true},
         {name: "Mary", age: 31, voted: false},
         {name: "Becky", age: 43, voted: false},
         {name: "Joey", age: 41, voted: true},
         {name: "Jeff", age: 30, voted: true},
         {name: "Zack", age: 19, voted: false}
     ];
     console.log(totalVotes(voters))
 
     // 1) Sort an array from smallest number to largest using .sort()
     function leastToGreatest(arr){
         const number = arr.sort(function(a, b){
           return a - b;  
         })
         return number
     }
     console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
 
     // 2) Sort an array from largest number to smallest
     function greatestToLeast(arr){
         const number = arr.sort(function(a, b)
         {
           return b - a;  
         })
         return number
     }
     console.log(greatestToLeast([1, 3, 5, 2, 90, 20]))
 
     // 3) Sort an array from shortest string to longest
     function lengthSort(arr){
         const animals = arr.sort(function(a, b){
             return a.length - b.length
         })
         return animals
     }
     console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]))