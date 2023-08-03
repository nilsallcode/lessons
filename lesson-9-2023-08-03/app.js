const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = ['apple', 'office', 'water', 'javascript', 'html', 'green'];
let chosenWord = '';
let guessedWord = '';
let attemptsLeft = 0;

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function initializeGame(attempts) {
    chosenWord = selectRandomWord();
    guessedWord = '-'.repeat(chosenWord.length);
    attemptsLeft = attempts;
    console.log('Welcome to Hangman!');
    console.log('Guess the word: ' + guessedWord);
    // run the game
    turn();
}

function checkLetter(letter) {
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            // Update the game state
            guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
            // Return the boolean to game logic
            found = true;
        }
    }
    return found;
}

function turn() {

    rl.question('Guess the word: ', (input) => {
        let letter = input.toLowerCase();
        let letterIsCorrect = checkLetter(letter);

        if (letterIsCorrect) {
            console.log(`Good guess: ${guessedWord}`);
        } else {
            attemptsLeft--;
            console.log(`Wrong! You have ${attemptsLeft} attempts left.`);
            if (attemptsLeft === 0) {
                console.log('You lost!');
                rl.close();
                return;
            }
        }

        if (guessedWord === chosenWord) {
            console.log('Congratulations! You guessed the word, it was ' + chosenWord);
            rl.close();
        } else {
            turn();
        }

    });

}

initializeGame(10);