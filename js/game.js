const suits = ["clubs", "spades", "hearts", "diamonds"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Game {
  constructor() {
    this.playerOne = new Player()
    this.playerTwo = new Player()
  }

  start() {
    this.deck = new Deck()
    this.deal()
  }

  deal() {
    this.playerOne.addCards( this.deck.slice( 0, 26 ))
    this.playerTwo.addCards( this.deck.slice( 26 ))
  }

  play() {
    var shownCardOne = this.playerOne.hand.shift()
    debugger
    var shownCardTwo = this.playerTwo.hand.shift()
    console.log(`player one's card was ${shownCardOne.cardName()}, player two's card was ${shownCardTwo.cardName()}`)
    if (shownCardOne.defaultValue > shownCardTwo.defaultValue) {
      this.playerOne.addCards([shownCardOne, shownCardTwo])
    } else if (shownCardOne.defaultValue < shownCardTwo.defaultValue) {
      this.playerTwo.addCards([shownCardOne, shownCardTwo])
    } else if (shownCardOne.defaultValue === shownCardTwo.defaultValue) {
      this.playerOne.addCards([shownCardOne])
      this.playerTwo.addCards([shownCardTwo])
    }
  }
}
