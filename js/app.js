'use strict';

/* Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit. */

// var userName = prompt('What is your name?');
//
// alert('Hello ' + userName);

// Question 1

var answer1 = prompt('Do I live in Colorado?').toLowerCase();
console.log('Answer 1 is, ' + answer1 + '.')

// var answer2 = prompt('Do I live in Colorado?').toLowerCase();
// console.log('Answer 1 is, ' + answer1 + '.')
//
// var answer3 = prompt('Do I live in Colorado?').toLowerCase();
// console.log('Answer 1 is, ' + answer1 + '.')
//
// var answer4 = prompt('Do I live in Colorado?').toLowerCase();
// console.log('Answer 1 is, ' + answer1 + '.')
//
// var answer5 = prompt('Do I live in Colorado?').toLowerCase();
// console.log('Answer 1 is, ' + answer1 + '.')

if (answer1 === 'n' || answer1 === 'no') {
  //Tell user they got the correct answer.
  alert('You are correct.');
} else {
  //Tell user they got the wrong answer.
  alert('You are incorrect')
  }
//
// if (answer2 === 'n' || answer2 === 'no') {
//   //Tell user they got the correct answer.
//   alert('You are correct.');
// } else {
//   //Tell user they got the wrong answer.
//   alert('You are incorrect')
//   }
//
// if (answer3 === 'n' || answer3 === 'no') {
//   //Tell user they got the correct answer.
//   alert('You are correct.');
// } else {
//   //Tell user they got the wrong answer.
//   alert('You are incorrect')
//   }
//
// if (answer4 === 'n' || answer4 === 'no') {
//   //Tell user they got the correct answer.
//   alert('You are correct.');
// } else {
//   //Tell user they got the wrong answer.
//   alert('You are incorrect')
//   }
//
// if (answer5 === 'n' || answer5 === 'no') {
//   //Tell user they got the correct answer.
//   alert('You are correct.');
// } else {
//   //Tell user they got the wrong answer.
//   alert('You are incorrect')
//   }
