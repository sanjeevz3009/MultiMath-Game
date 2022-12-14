// /// <reference path="player.ts" />

// function startGame() {

//     let playerName: string | undefined = getInputValue('playername');
//     logPlayer(playerName);

//     postScore(80, playerName);
//     postScore(-5, playerName);
// }

// function logPlayer(name: string = 'MultiMath Player'): void {
//     console.log(`New game starting for player: ${name}`);
// }

// function postScore(score: number, playerName: string = "MultiMath Player"): void {

//     let logger: (value: string) => void;

//     if (score < 0) {
//         logger = logError;
//     } else {
//         logger = logMessage; 
//     }

//     const scoreElement: HTMLElement | null = document.getElementById("postedScores");
//     scoreElement!.innerText = `${score} - ${playerName}`;

//     logger(`Score: ${score}`);
// }

// document.getElementById("startGame")!.addEventListener('click', startGame);

// // function logMessage(message: string): void {
// //     console.log(message);
// // }

// // Arrow function version of the traditional function above
// const logMessage = (message: string) => console.log(message);

// // logMessage("Welcome to MultiMath");

// function logError(err: string): void {
//     console.error(err);
// }

// // let myResult: Result = {
// //     playerName: "Marie",
// //     score: 5,
// //     problemCount: 5,
// //     factor: 7
// // };

// // let player: Person = {
// //     name: "Daniel",
// //     formatName: () => "Dan"
// // };

// const firstPlayer: Player = new Player();
// firstPlayer.name = "Lanier";
// console.log(firstPlayer.formatName());