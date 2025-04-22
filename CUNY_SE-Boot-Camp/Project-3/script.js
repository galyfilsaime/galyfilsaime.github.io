// Game state
let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
let guessHistory = [];

// DOM elements
const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const messageDisplay = document.getElementById('message');
const historyList = document.getElementById('historyList');
const gameSection = document.querySelector('.game-section');

// Check guess
checkBtn.addEventListener('click', () => {
    const guess = guessInput.value.trim();
    
    // Validate input
    if (!guess || isNaN(guess) || guess < 1 || guess > 100) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }

    const guessNum = parseInt(guess);

    // Check for duplicate guess
    if (guessHistory.includes(guessNum)) {
        messageDisplay.textContent = 'You already guessed this number!';
        return;
    }

    // Add to history
    guessHistory.push(guessNum);
    updateHistory();

    // Check if correct
    if (guessNum === secretNumber) {
        messageDisplay.innerHTML = 'YOU WIN!<br>Congratulation! Your guess was correct.';
        gameSection.classList.add('win');
        guessInput.disabled = true;
        checkBtn.disabled = true;

        // Update high score
        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
        }
        return;
    }

    // Wrong guess
    score--;
    scoreDisplay.textContent = score;

    // Check if game over
    if (score === 0) {
        messageDisplay.innerHTML = `Unfortunately You Lost the Game!<br>Don't give up and Try Again.<br>My number was: ${secretNumber}`;
        gameSection.classList.add('lose');
        guessInput.disabled = true;
        checkBtn.disabled = true;
        return;
    }

    // Provide hint
    messageDisplay.textContent = guessNum < secretNumber 
        ? 'Your guess is too low' 
        : 'Your guess is too high';
});

// Reset game
resetBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    score = 10;
    guessHistory = [];
    scoreDisplay.textContent = score;
    highScoreDisplay.textContent = highScore;
    messageDisplay.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    checkBtn.disabled = false;
    gameSection.classList.remove('win', 'lose');
    updateHistory();
});

// Update guess history
function updateHistory() {
    historyList.innerHTML = '';
    guessHistory.forEach(guess => {
        const li = document.createElement('li');
        li.textContent = guess;
        historyList.appendChild(li);
    });
}