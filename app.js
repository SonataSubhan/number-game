let random = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
const restart = document.getElementById('restart');
restart.style.display = "none";

function checkGuess() {



    const userGuess = Number(guessField.value)
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: "
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;
    if (userGuess === random) {
        lastResult.textContent = `congrulations you win, Number is ${random}`;
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = `Game Over, Number is ${random}`;
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else {
        lastResult.textContent = "wrong";
        lastResult.style.backgroundColor = "red";

        if (userGuess < random) {
            lowOrHi.textContent = "your guess too low"

        }
        else if (userGuess > random) {
            lowOrHi.textContent = "your guess too high";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkGuess();
    }
})
guessSubmit.addEventListener('click', checkGuess);
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    lowOrHi.textContent = "";
    guesses.textContent = "";
    restart.style.display = "flex";


}
restart.addEventListener('click', restartGame);
function restartGame() {
    lastResult.textContent = "";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessCount = 1;
    restart.style.display = "none";
    random = Math.floor(Math.random() * 100) + 1;




}