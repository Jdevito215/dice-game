function rollDice() {
    const diceValues = [];
    for (let i = 0; i < 5; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceValues.push(randomValue);
    }
    document.getElementById("ones").value = countDiceValue(diceValues, 1);
    document.getElementById("twos").value = countDiceValue(diceValues, 2);
}
function countDiceValue(diceValues, value) {
    return diceValues.filter(die => die === value).reduce((total, die) => total + die, 0);
}
document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("rollButton").focus();