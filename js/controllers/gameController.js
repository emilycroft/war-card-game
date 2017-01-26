class GameController {
  constructor() {
    this.status = document.getElementById('status')
    this.button = document.getElementById('nextRound')
    this.addEventListeners()
    this.game = new Game()
    this.game.start()
  }

  addEventListeners() {
    this.button.addEventListener('click', () => {
      this.game.play()
    })
  }

  updateStatus(str) {
    this.status.textContent = str
    playerOneController.showCardCount(this.game.playerOne.hand.length)
    playerTwoController.showCardCount(this.game.playerTwo.hand.length)
  }
}
