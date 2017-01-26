class PlayerController {
  constructor(playerDiv) {
    this.playerDiv = document.getElementById(playerDiv)
    this.cardCount = this.playerDiv.getElementsByClassName('card-count')[0]
  }
}