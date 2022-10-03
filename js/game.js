import { getValue } from './utility';
import { Scoreboard as ResultPanel } from './scoreBoard';
export class Game {
    player;
    problemCount;
    factor;
    scoreboard = new ResultPanel();
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
    }
    displayGame() {
        let gameForm = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        const gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    }
    calculateScore() {
        let score = 0;
        for (let i = 1; i <= this.problemCount; i++) {
            const answer = Number(getValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        const result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}
//# sourceMappingURL=game.js.map