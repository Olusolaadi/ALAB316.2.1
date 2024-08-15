const app = document.getElementById('app')
//const gameBox = document.createElement('table')

//Creating a random number
const randomNum = Math.trunc(Math.random()* 100) +1
console.log(randomNum);

//Create Prompt for user to guess
let guess
console.log(guess);

window.alert('Welcome! Please guess a number between 1 - 100')

do {
    guess = parseInt(window.prompt('Pick a number between 1-100'))
    if(randomNum === guess) {
        output = 'You are such a smart cookie!'

    } else {
        output = `Sorry the random number was ${randomNum}, Please guess again.`
    }
    window.alert(output)
}while (randomNum !== guess);





