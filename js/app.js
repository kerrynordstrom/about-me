// 'use strict';
//
// /* Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toUpperCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit. */
//
var totalCount = 0;
var userName = prompt('What is your name?');

alert('Hello, ' + userName + ' nice to meet you!');

// Did I live in Colorado?

var currentStateResidence = prompt('Do I live in Colorado?').toUpperCase();
console.log('Response to currentStateResidence is: ' + currentStateResidence)

if (currentStateResidence === 'N' || currentStateResidence === 'NO') {
  //Tell user they got the correct answer.
  alert('That\'s right, I live in Seattle!');
  totalCount ++;
} else {
  //Tell user they got the wrong answer.
  alert('Nope, but I would live there again in a heartbeat!');
  totalCount--;
  }

var highestElevationRidden = prompt('Have I ridden my bike past the equivalent of two miles in elevation?').toUpperCase();
console.log('Response to highestElevationRidden is: ' + highestElevationRidden + '.')

if (highestElevationRidden === 'Y' || highestElevationRidden === 'YES') {
  //Tell user they got the correct answer.
  alert('Soooo tough to breathe.');
  totalCount++;
} else {
  //Tell user they got the wrong answer.
  alert('Well, technically I pushed my bike past that elevation. ;-) ');
  totalCount--;
  }

var foreignCountryVisited = prompt('Have I ever been to Canada?').toUpperCase();
console.log('Response to foreignCountryVisited is: ' + foreignCountryVisited)

if (foreignCountryVisited === 'Y' || foreignCountryVisited === 'YES') {
  //Tell user they got the correct answer.
  alert('Yep!  I\'ve been to Victoria and Vancouver.');
  totalCount++;
} else {
  alert('I\'ve actually been a few times.');
  totalCount--;
  }

var firstCar = prompt('Was my first car a Ford?').toUpperCase();
console.log('Response to firstCar is: ' + firstCar)

if (firstCar === 'N' || firstCar === 'NO') {
  //Tell user they got the correct answer.
  alert('That\'s right!  It was a Honda Civic with 220k miles!');
  totalCount++;
} else {
  //Tell user they got the wrong answer.
  alert('Nope, but the new Ford Focus hatchbacks are pretty rad!');
  totalCount--;
  }

var futureCityResidence = prompt('Will I move to Los Angeles in the next three years?').toUpperCase();
console.log('Response to futureCityResidence is: ' + futureCityResidence)

if (futureCityResidence === 'Y' || futureCityResidence === 'YES') {
  //Tell user they got the correct answer.
  alert('Fingers crossed.');
  totalCount++;
} else {
  //Tell user they got the wrong answer.
  alert('Yeah, you\'re probably right.  I should stick around the PNW.');
  totalCount--;
  }

var bikesOwned = 4;
var counter = 0;

do {
  counter ++ ;
  var numberGuess = parseInt(prompt('How many bikes do I own?'));
if (numberGuess === bikesOwned) {
  alert('Yep, you\'re right, the number is 3 too many! Want to buy a bike?');
  console.log('Response to bikesOwned is: ' + numberGuess + ' and is correct!');
  totalCount++;
}
else if (numberGuess < bikesOwned) {
//Tell user they got they're too low.
  alert('Sorry, try again you\'re too low! ' + '\n' + 'You\'ve used ' + counter + ' of four tries.');
  console.log('Response to bikesOwned is: ' + numberGuess + ' and was too low.');
  totalCount--;
} else  {
  //Tell user they got they're too high.
  alert('Sorry, try again you\'re too high! ' + '\n' + 'You\'ve used ' + counter + ' of four tries.');
  console.log('Response to bikesOwned is: ' + numberGuess + ' and was too high.');
  totalCount--;
  }
}
while (counter < 4 && numberGuess !== bikesOwned);


var counter = 0;
var statesLivedIn = ['colorado', 'ohio', 'pennsylvania'];
var statesGuess = prompt('Can you guess a state I\'ve lived in?').toLowerCase();

while (counter <= 5) {

for (i = 0; i <= statesLivedIn.length; i++) {

  if (statesGuess === statesLivedIn[i]) {
    alert('Yes that\'s correct');
    console.log('State guess is ' + statesGuess);
    totalCount++;
    counter === 5;
    break;
    }

   else { (statesGuess !== statesLivedIn[i])
    statesGuess = prompt('Sorry try again, ' + statesGuess + ' is incorrect.').toLowerCase();
    console.log('State guess is ' + statesGuess + ' and is incorrect.');
    totalCount--;
    }

}
counter++
  };

alert(totalCount);
