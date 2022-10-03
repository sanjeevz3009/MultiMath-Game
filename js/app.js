import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';
let newGame;
document.getElementById("startGame").addEventListener("click", () => {
    const player = new Player();
    player.name = Helpers.getValue('playername');
    const problemCount = Number(Helpers.getValue('problemCount'));
    const factor = Number(Helpers.getValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener("click", () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map