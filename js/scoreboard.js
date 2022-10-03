export class Scoreboard {
    results = [];
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
        let output = '<h2>Scoreboard</h2>';
        for (let index = 0; index < this.results.length; index++) {
            const result = this.results[index];
            output += '<h4>';
            output += result.playerName + ':' + result.score + '/' + result.problemCount + ' for factor' + result.factor;
            output += '</h4>';
        }
        const scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
}
//# sourceMappingURL=scoreboard.js.map