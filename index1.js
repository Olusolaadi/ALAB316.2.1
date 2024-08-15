
const minNum = 1;
const maxNum = 100;

// This generates a random number between 1 to 100.
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let playing = true;

while(playing) {


    guess = window.prompt(`Please guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert('Enter a number');
    }
    else if(guess < minNum || guess> maxNum) {
        window.alert('Please enter a valid number');
    }
    else {
        attempts++;
        if(guess < randomNum) {
            window.alert('Number is higher than your guess. Please try again.');
        }
        else if (guess > randomNum) {
            window.alert('Number is lower than your guess. Please try again.')
        }
        else {
            window.alert(`Correct number! You had ${attempts} attempts.`);
            // This is just to tell us that the game is over after getting the correct guess.
            playing = false;
        }
    }
}