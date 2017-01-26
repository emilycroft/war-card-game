class Player {
  constructor(name){
    this.hand = []
    this.name = name
  }

  addCards(card) {
    this.hand.push(...card)
  }

}
