class PlayerController {
  constructor(playerDiv) {
    this.playerDiv = document.getElementById(playerDiv)
    this.cardCount = this.playerDiv.getElementsByClassName('card-count')[0]
    this.playedCard = this.playerDiv.getElementsByClassName('played-card')[0]
  }

  showCard(card) {
    this.playedCard.textContent = card.cardName()
  }

  showCardCount(playerCardCount) {
    this.cardCount.textContent = `You have ${playerCardCount} cards`
  }
}
