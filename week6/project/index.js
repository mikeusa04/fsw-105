var readlineSync = require('readline-sync');
var playerName= readlineSync.question('What is your name? ');
var Message = `Welcome, ${playerName}, welcome to the escape room!`;
console.log(Message);
var Alive = true;
var hasKey = false;
while(Alive == true)
{
    const menuId = readlineSync.keyIn(`Press 1 to Put hand in hole \n Press 2 to Find the Key \n Press 3 to Open the door`, {limit:`$<1-3>`});
    if (menuId == 1){
        console.log(`${playerName} you are Dead. Game is over`);
        Alive = false;
    }
    else if (menuId == 2 && hasKey == false){
        console.log(`${playerName}, you have found the key.  Proceed to the next menu option`);
        hasKey = true;
    }
    else if (menuId == 2 && hasKey == true){
        console.log(`${playerName}, you already have the key.  Do not waste your time.  Proceed to the next menu option!`);
    }
    else if (menuId == 3 && hasKey == false){
        console.log(`${playerName}, you need to locate the key first.  Please find the key first and then proceed to this menu option!`);
    }
    else if (menuId == 3 && hasKey == true){
        console.log(`${playerName}, you opened the door successfully! Game end......`);
        Alive = false;
    }
}