const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplayDiv = document.querySelector(".word-display");
const guessestext = document.querySelector(".guesses-text b");
const gameModal = document.querySelector(".game-modal");
const playAgainbtn = document.querySelector(".play-again");

let currentWord = "",
  correctLetters = new Set(),
  incorrectLetters = new Set(),
  wordGuessCount = 0;
const maxGuess = 6;

// Obtener palabra aleatoria
const getRandomWord = () => {
  if (!wordList || wordList.length === 0) {
    console.error("wordList no está definido o está vacío.");
    return;
  }

  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word.toLowerCase(); // Convertir a minúsculas para evitar errores
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

// Reiniciar el juego
const resetGame = () => {
  correctLetters.clear();
  incorrectLetters.clear();
  wordGuessCount = 0;
  hangmanImage.src = `images/hangman-${wordGuessCount}.svg`;
  guessestext.innerText = `${wordGuessCount} / ${maxGuess}`;

  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));

  wordDisplayDiv.innerHTML = currentWord
    .split("")
    .map(() => "<li class='letter'></li>")
    .join("");

  gameModal.classList.remove("show");
};

// Mostrar resultado
const gameOver = (isVictory) => {
  setTimeout(() => {
    gameModal.querySelector("img").src = `images/${
      isVictory ? "victory" : "lost"
    }.gif`;
    gameModal.querySelector("h4").innerText = isVictory
      ? "¡Ganaste!"
      : "¡Perdiste!";
    gameModal.querySelector(
      "p"
    ).innerHTML = `La palabra era: <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

// Validar la letra seleccionada
const initGame = (button, clickedLetter) => {
  clickedLetter = clickedLetter.toLowerCase(); // Asegurar que siempre se compara en minúsculas

  if (
    correctLetters.has(clickedLetter) ||
    incorrectLetters.has(clickedLetter)
  ) {
    return; // Evitar que el usuario repita la misma letra
  }

  button.disabled = true;

  if (currentWord.includes(clickedLetter)) {
    correctLetters.add(clickedLetter);
    [...currentWord].forEach((letter, i) => {
      if (letter === clickedLetter) {
        wordDisplayDiv.querySelectorAll("li")[i].innerText = letter;
        wordDisplayDiv.querySelectorAll("li")[i].classList.add("guessed");
      }
    });
  } else {
    incorrectLetters.add(clickedLetter);
    wordGuessCount++;
    hangmanImage.src = `images/hangman-${wordGuessCount}.svg`;
  }

  guessestext.innerText = `${wordGuessCount} / ${maxGuess}`;

  // Verificar si el jugador gana
  const allLettersRevealed = [...currentWord].every((letter) =>
    correctLetters.has(letter)
  );

  if (allLettersRevealed) return gameOver(true);
  if (wordGuessCount === maxGuess) return gameOver(false);
};

// Crear teclado
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, e.target.innerText)
  );
}

// Iniciar el juego
getRandomWord();
playAgainbtn.addEventListener("click", getRandomWord);
