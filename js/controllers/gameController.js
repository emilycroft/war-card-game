class GameController {
  constructor() {
    this.status = document.getElementById('status')
    this.button = document.getElementById('nextRound')
    this.addEventListeners()

  }

  addEventListeners() {
    this.button.addEventListener('click', function(){
      alert("YAY!")
    })
    }

}