function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: ".concat(score));
}
document.getElementById("startGame").addEventListener('click', startGame);
// function logMessage(message: string): void {
//     console.log(message);
// }
// Arrow function version of the traditional function above
var logMessage = function (message) { return console.log(message); };
// logMessage("Welcome to MultiMath");
function logError(err) {
    console.error(err);
}
// let myResult: Result = {
//     playerName: "Marie",
//     score: 5,
//     problemCount: 5,
//     factor: 7
// };
// let player: Person = {
//     name: "Daniel",
//     formatName: () => "Dan"
// };
var firstPlayer = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());
