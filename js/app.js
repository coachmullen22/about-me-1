'use strict';


//Declare Variables
var wowCount = 0;

alert ('Greetings stranger. It seems you have stumbled upon my Secret Garden.');

//Get Users Name and returns value to page
var user = prompt(' Before we begin, what may I ask is your name?');
document.getElementById("username").innerHTML = user;
console.log("The user input their name as " + user + ".s");


//Question One
var gate = prompt(' Well, ' + user + '! Are you ready to be dazzled!?').toLowerCase();

if (gate.toLowerCase() === "yes" || gate.toLowerCase() === "y")
{
alert("Well, " +user + " Let us begin!");
console.log(user + " is ready.");
}
else
{
alert("TOO BAD!");
console.log(user + " is not ready.");
};

//Question two

//Question three

//Question four


//WOWZA counter
function Counter()
{
    wowCount=wowCount +1;
    document.getElementById("showCount").innerHTML = wowCount;
}