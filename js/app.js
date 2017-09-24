'use strict';
// As a prospective job seeker, I want to have five yes/no questions in my "about me" guessing game so that I have enough questions to cover a variety of things about me.
// As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
//
// /* Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toUpperCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit. */
//
var totalCount = 0;
var userName = prompt('Welcome, what is your name?');

alert('Hello, ' + userName + ' nice to meet you!');

// Did I live in Colorado?
function whatState() {
  var pastYearStateResidence = prompt('Did I live in Colorado within the past year?').toUpperCase();
  console.log('Response to pastYearStateResidence is: ' + pastYearStateResidence);

  if (pastYearStateResidence === 'N' || pastYearStateResidence === 'NO') {
    //Tell user they got the correct answer.
    alert('That\'s right, I\'ve lived in Seattle for 3 years now!');
    totalCount++;
  } else {
    //Tell user they got the wrong answer.
    alert('Nope, it\'s been 3 years but I\'d move back there in a heartbeat!');
  }
}

function whatElevation() {
  var highestElevationRidden = prompt('Have I ridden my bike past the equivalent of two miles in elevation?').toUpperCase();
  console.log('Response to highestElevationRidden is: ' + highestElevationRidden + '.');

  if (highestElevationRidden === 'Y' || highestElevationRidden === 'YES') {
    //Tell user they got the correct answer.
    alert('Technically I pushed my bike at this elevation ;-).');
    totalCount++;
  } else {
    //Tell user they got the wrong answer.
    alert('I have, actually. Soo hard to breathe!');
  }
}

function whatCountry() {
  var foreignCountryVisited = prompt('Have I ever been to Canada?').toUpperCase();
  console.log('Response to foreignCountryVisited is: ' + foreignCountryVisited);

  if (foreignCountryVisited === 'Y' || foreignCountryVisited === 'YES') {
    //Tell user they got the correct answer.
    alert('Yep!  I\'ve been to Victoria and Vancouver.');
    totalCount++;
  } else {
    alert('I\'ve actually been a few times.');
  }
}

function whatCar() {
  var firstCar = prompt('Was my first car a Ford?').toUpperCase();
  console.log('Response to firstCar is: ' + firstCar);

  if (firstCar === 'N' || firstCar === 'NO') {
    //Tell user they got the correct answer.
    alert('That\'s right!  It was a Honda Civic with 220k miles!');
    totalCount++;
  } else {
    //Tell user they got the wrong answer.
    alert('Nope, but the new Ford Focus hatchbacks are pretty rad!');
  }
}

function whatCity() {
  var futureCityResidence = prompt('Will I move to Los Angeles in the next three years? Y/N').toUpperCase();
  console.log('Response to futureCityResidence is: ' + futureCityResidence);

  if (futureCityResidence === 'Y' || futureCityResidence === 'YES') {
    //Tell user they got the correct answer.
    alert('Fingers are crossed that I make it out there.');
    totalCount++;
  } else {
    //Tell user they got the wrong answer.
    alert('Yeah, you\'re probably right.  I should stick around the PNW.');
  }
}

function guessGame() {
  var bikesOwned = 4;
  var guessesLeft = 4;

  do {
    guessesLeft--;
    var numberGuess = parseInt(prompt('How many bikes do I own?'));

    if (numberGuess === bikesOwned) {
      alert('Yep, you\'re right, the number is 3 too many! Want to buy a bike?');
      console.log('Response to bikesOwned is: ' + numberGuess + ' and is correct!');
      totalCount++;
    } else if (numberGuess < bikesOwned) {
      //Tell user they got they're too low.
      alert('Sorry, try again you\'re too low! ' + '\n' + 'You have ' + guessesLeft + ' of four tries.');
      console.log('Response to bikesOwned is: ' + numberGuess + ' and was too low.');
    } else {
      //Tell user they got they're too high.
      alert('Sorry, try again you\'re too high! ' + '\n' + 'You\'ve used all four of your tries.');
      console.log('Response to bikesOwned is: ' + numberGuess + ' and was too high.');
    }
  }
  while (guessesLeft > 0 && numberGuess !== bikesOwned);
}

function statesLived() {
  var guessesLeft = 6;
  var statesLivedIn = ['colorado', 'ohio', 'pennsylvania'];

  while (guessesLeft > 0) {
    var statesGuess = prompt('Can you guess a state I\'ve lived in?').toLowerCase();
    guessesLeft--;

    for (var i = 0; i < statesLivedIn.length; i++) {

      if (statesGuess === statesLivedIn[i]) {
        alert('Yes that\'s correct');
        console.log('State guess is ' + statesGuess);
        totalCount++;
        guessesLeft = -1;
        break;
      }
    }

    if (guessesLeft > 0) {
      alert('Sorry try again, ' + statesGuess + ' is incorrect. You have ' + guessesLeft + ' remaining.');
      console.log('State guess is ' + statesGuess + ' and is incorrect.');
    }
    if (guessesLeft === 0) {
      alert('Sorry, you\'re out of guesses!  The states I\'ve lived in are Colorado, Ohio, and Pennsylvania.');
      console.log('The user guessed their last guess.');
    }
  }
}

whatState();
whatCountry();
whatCity();
whatElevation();
whatCar();
guessGame();
statesLived();

alert('Hey! You got ' + totalCount + ' of 7 questions correct!');
