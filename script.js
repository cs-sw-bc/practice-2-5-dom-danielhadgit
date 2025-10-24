// ---------------------------------------------
// LESSON 5 – ROCK PAPER SCISSORS (Starter Code)
// ---------------------------------------------
//
// Students will:
// 1. Write getComputerChoice() using Math.random().
// 2. Use logic to decide a winner.
// 3. Display results in the browser.
// ---------------------------------------------

// 🧩 STEP 1: Get Computer Choice
// Goal: Randomly select "rock", "paper", or "scissors".
// ---------------------------------------------------
// Hints:
//
// 1️⃣ Create an array: const choices = ['rock', 'paper', 'scissors'];
// 2️⃣ Use Math.random() to generate a random number between 0 and 1.
// 3️⃣ Multiply it by the length of the array (3) → gives 0 to <3.
// 4️⃣ Use Math.floor() to round it down to 0, 1, or 2.
// 5️⃣ Use that number as an index to pick from the choices array.
// 6️⃣ Return the choice.

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
    // ✍️ Write your code here following the steps above
}



// 🧩 STEP 2: Determine Winner
// Goal: Compare userChoice and computerChoice
// and return a message like “You win!” or “Computer wins!”.
// ---------------------------------------------------------
// Hints:
// 1️⃣ If both are equal → "It's a tie!"
// 2️⃣ Rock beats Scissors
// 3️⃣ Paper beats Rock
// 4️⃣ Scissors beats Paper
// 5️⃣ Otherwise → "Computer wins!"
// Use if-else ladder

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ("Its a tie.")
    }

    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        return ("you win!") // chose to do or statement for cleaner code.
    } else {
        return ("Computer wins")
    }

    // ✍️ Write your comparison logic here
}



// 🧩 STEP 3: Play the Game
// Goal: Display both choices and the result in the web page.
// ---------------------------------------------------------
// Hints:
// 1️⃣ Get computerChoice by calling your function above.
// 2️⃣ Find the <div id="result"> using document.getElementById().
// 3️⃣ Use innerHTML to show:
//     - You chose ...
//     - Computer chose ...
//     - Final result message

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);

    const resultChoice = document.getElementById("result");
    resultChoice.innerHTML = `
   <p> You Chose: ${getEmoji(userChoice)}</P>
   <p> Computer Chose ${getEmoji(computerChoice)}</p>
   <h3>${resultMessage}</h3>
   `
}



// 🧩 STEP 4: Get Emoji (for fun visuals)
// Goal: Match a choice to an emoji using switch().
// -----------------------------------------------
// rock → 🪨
// paper → 📄
// scissors → ✂️
// using if-else ladder or switch statement(check w3schools for switch)

function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "🪨";

        case "paper":
            return "📃";
        case "scissors":
            return "✂️";
    }
    // ✍️ Write your switch() logic here
}
