'use strict';

// this is illegal!
/*
foo = 'bar';

console.log('foo is ' + foo);
*/

/*
var answer = prompt('Do you think yes or no?');
var sanitizedAnswer = answer.toUpperCase().trim();

// Don't do this:
if (answer === 'Y' || answer === 'y'
     || answer === 'yes' || answer === 'YES'
     || answer === 'Yes' || answer === 'yEs') {
  alert('yes!');
}
// Do this instead for checking regardless of case
else if (sanitizedAnswer === 'N'
        || sanitizedAnswer === 'NO') {
  alert(answer + ' means no!');
}
else {
  alert('I did not recognize that response!');
}
*/

var guess = prompt('What is my favorite number?');
console.log('Guess is: ' + guess);
var guessCount = 1;

while (guess !== '2') {

  if (guess === null) {
    console.log('Guess is null; breaking');

    // Escape the loop!
    break;
  }

  var promptWarning = 'Wrong!';
  if (guess > 2) {
    promptWarning = 'Too high!';
  } else if (guess < 0) {
    promptWarning = 'Weirdos like negative numbers!';
  } else {
    promptWarning = 'Too low!';
  }
  console.log(promptWarning);

  guess = prompt(promptWarning + ' Try again: what is my favorite number?');

  console.log('Guess is: ' + guess);

  guessCount = guessCount + 1;

  console.log('guessCount is ' + guessCount);
  console.log('end of while loop');
}

console.log('while loop exited');

if (guess === null) {
  alert('Wimp. My favorite number is 2, obviously.');
} else {
  console.log('not a wimp');

  if (guessCount === 1) {
    alert('Right on the first try!'); 
  } else {
    alert('It took ' + guessCount + ' guesses to get it right!');
  }

}

// For loops!

var i = 0;
while (i < 5) {
  console.log(i);

  i = i + 1;
}

for (var j = 0; j < 5; j = j + 1) {
  console.log(j);
}

// Arrays!
var names = ['TRICIA', 'DYLAN', 'ETHAN', 'CRAIG'];
console.log(names.length);
var nameGuess = prompt('Name someone in class!');
var nameGuessTrimmedToUpper = nameGuess.toUpperCase().trim();

if (names.indexOf(nameGuessTrimmedToUpper) >= 0) {
  alert('Yes! ' + nameGuess + ' is in our class!');
} else {
  alert('WRONG');
}

alert('All class members: ' + names.join(', '));
