class Card {
  constructor(suit, face, value) {
    this.suit = suit
    this.face = face
    this.defaultValue = value
  }

  cardName() {
    return `${this.face} of ${this.suit}!`
  }
}
