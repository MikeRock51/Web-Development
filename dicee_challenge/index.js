let rollDiceButton = document.querySelector(".roll_dice");
let player1Dice = document.querySelector(".p1_dice");
let player2Dice = document.querySelector(".p2_dice");
let resultTab = document.querySelector(".result");

function rollDice() {
    let n = (Math.random() * 6) + 1;
    return (Math.floor(n));
}

function selectDice(diceNumber, playerDice) {
    playerDice.setAttribute("src", "./images/dice" + diceNumber + ".png");
}

function announceResult(player1, player2) {
    if (player1 > player2) {
        resultTab.textContent = "Player 1 Wins";
    }
    else if (player2 > player1) {
        resultTab.textContent = "Player 2 Wins";
    }
    else {
        resultTab.textContent = "Draw";
    }
}

rollDiceButton.addEventListener("click", function() {
    console.log(player1DiceNumber = rollDice());
    console.log(player2DiceNumber = rollDice());
    
    selectDice(player1DiceNumber, player1Dice);
    selectDice(player2DiceNumber, player2Dice);

    announceResult(player1DiceNumber, player2DiceNumber)
})