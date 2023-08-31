const choices = ["rock", "paper", "scissors"];
let gameStarted = false;

document.getElementById("start").addEventListener("click", () => {
    gameStarted = true;
    document.getElementById("start").style.display = "none";
});

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function animateHand(elementId, choice) {
    const handElement = document.getElementById(elementId);
    handElement.src = `${choice}.png`;
    setTimeout(() => {
        handElement.src = "blank.png";
    }, 1000);
}

function displayResult(result) {
    document.getElementById("result").textContent = result;
}

function checkWinner(userChoice, botChoice) {
    // Your existing checkWinner logic...

    animateHand("player-hand", userChoice);
    animateHand("bot-hand", botChoice);
    displayResult(result);
}

document.querySelectorAll(".choices button").forEach(button => {
    button.addEventListener("click", function() {
        if (!gameStarted) {
            return;
        }

        const userChoice = this.id;
        const botChoice = getRandomChoice();
        checkWinner(userChoice, botChoice);
    });
});
