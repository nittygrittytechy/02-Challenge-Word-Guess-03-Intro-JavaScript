// 🧠 Starter Word Guess Game — Keyboard Input Ready

// Word bank
let words = ["honey", "pooh", "tiger", "tree", "winnie", "rabbit"];

// Randomly select one word from the list
let chosenWord = words[Math.floor(Math.random() * words.length)];

// Track guessed letters and remaining attempts
let guessedLetters = [];
let attempts = 10;

// Log the chosen word for debugging
console.log("Chosen word:", chosenWord);

// 🎮 Function students will build next
function startGame(letter) {
  // Check if this letter has already been guessed
  if (guessedLetters.includes(letter)) {
    console.log("You already guessed that letter!");
    return; // Exit the function early - don't process this guess again
  }
  
  // Log which letter was pressed (for debugging)
  console.log(`You pressed: ${letter}`);
  
  // Add this new letter to the list of guessed letters
  guessedLetters.push(letter);

    // Check if the guessed letter is in the chosen word
if (chosenWord.includes(letter)) {
  // Correct guess! (no penalty)
  console.log("Good guess!");
  document.getElementById("message").textContent = "✅ Good guess!";
} else {
  // Wrong guess - decrease attempts
  attempts = attempts - 1;
  console.log("Wrong guess! Attempts remaining: " + attempts);
  document.getElementById("message").textContent = "❌ Wrong guess! Try again.";
}
  
  // Create an empty string to build the masked word (letters + underscores)
  let maskedWord = "";
  
  // Loop through each letter in the chosen word
  for (let i = 0; i < chosenWord.length; i++) {
    // Check if the current letter has been guessed
    if (guessedLetters.includes(chosenWord[i])) {
      // If YES: show the actual letter with a space
      maskedWord += chosenWord[i] + " ";
    } else {
      // If NO: show an underscore with a space
      maskedWord += "_ ";
    }
  }
  
  // Log the masked word to the console (for debugging)
  console.log("Word: " + maskedWord);
  
  // Update the masked word on the webpage
  // Finds the element with id="maskedWord" and changes its text
  document.getElementById("maskedWord").textContent = maskedWord;
  
  // Update the attempts counter on the webpage
  // Finds the element with id="attempts" and changes its number
  document.getElementById("attempts").textContent = attempts;
  
  // Update the list of guessed letters on the webpage
  if (guessedLetters.length > 0) {
    // If letters have been guessed: join them with commas like "h, o, n"
    document.getElementById("guessedLetters").textContent = guessedLetters.join(", ");
  } else {
    // If no letters guessed yet: show "None yet"
    document.getElementById("guessedLetters").textContent = "None yet";
  }
}

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});
