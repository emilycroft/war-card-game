const suits = ["clubs", "spades", "hearts", "diamonds"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
class Deck {
  constructor() {
    this.deck = []
  }
  // const allCards = ["c2"]

  newDeck() {
    var deck = []

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < values.length; j++) {
        debugger
        this.deck.push(new Card(suits[i], values[j]))
      }
    }
  }
}

class Card {
  constructor(suit, value) {

  }
}
