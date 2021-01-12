/*Project Requirements:
Console must greet player with a fun message
Console must ask for the player's name and store it
Walking:
The console will ask the user to enter a "w" to walk
Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
If a wild enemy appears:
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, you will choose a random attack power between a min and max
If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
If the enemy kills the player the console prints a cool death message and the game ends
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their invent*/
// go to this folder and put (npm install readline-sync) in order to make it work


const readlineSync = require('readline-sync');
const name = readlineSync.question('What ia your name? ');
readlineSync.question('Hello ' + name + ', Welcome to GAME Where you will risk your life to defeat evil. Press Enter to begin');

const badGuys = ['Zombie', 'Demon', 'Ghost', 'Wild Dragon'];
const treasure = ['Medkit', 'Security Armor', 'Berserk Pack', 'Health Postion'];
var prize = []
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickup = treasure[Math.floor(Math.random() * treasure.length)];


function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'What would you like to do next?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickup);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log('Walking....');
        } else if (key >= .3){
            console.log(badGuy +  ' showed up.');

            while(badGuysHealth > 0 && userHealth > 0){
                const user = readlineSync.question('What do you wnat to do? enter "r" to run or "a" attack: ');

                switch (user){
                    case 'r': //runaway
                       const run = Math.random();
                       if(run < .5){
                           console.log('Before you can run away ' + badGuy + ' attacks you with: ' + badGuysPower);
                    } else {
                        console.log('You ran away!');
                        break;
                    }
                    case 'a': //attack
                       badGuysHealth -= attackPower;
                       console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attack power' );

                       userHealth -= badGuysPower;
                       console.log('Enemy just attacked you with: ' + badGuysPower + ' attack power');
                       if (badGuysHealth <= 0){
                           console.log('You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickup);
                           let loot = Math.random();
                           if (loot <= .3){
                               prize.push(pickup);
                            } 
                            } else if(userHealth <= 0){
                                console.log(badGuy + ' has defeaed you. You are dead.');
                            }
                    }


                }
            }
        }
    

}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}