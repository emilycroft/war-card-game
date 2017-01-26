const suits = ["clubs", "spades", "hearts", "diamonds"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Game {
  constructor() {
    this.playerOne = new Player()
    this.playerTwo = new Player()
  }

  start() {
    this.deck      = new Deck()    
    this.deal()

  }

  deal() {
    this.playerOne.addCards( this.deck.splice( 0, 26 ) )
    this.playerTwo.addCards( this.deck.splice(25, 26))
  }


}










game = new Game()