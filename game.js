class Game {
    constructor(playerOne, playerTwo) {
        this.playerOneName = playerOne;
        this.playerTwoName = playerTwo;
    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}.`
    }
}
