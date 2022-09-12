// function to generate random numbers for alien health, power, and accuracy
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

// player class to generate aliens and soldier
class Player {
  constructor(name, health, power, accuracy) {
    this.name = name
    this.health = health
    this.power = power
    this.accuracy = accuracy
  }

  hitAccuracy(accuracy) {
    Math.random() < accuracy ? true : false
  }
}

setTimeout(() => {
  // object where the magic happens
  const BattleGround = {
    createPlayers() {
      this.aliens = [
        new Player(
          'Xanthe',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
        new Player(
          'Adzoa',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
        new Player(
          'Bhura',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
        new Player(
          'Ralet',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
        new Player(
          'Brel',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
        new Player(
          'Ozanka',
          randomNumber(3, 6),
          randomNumber(2, 4),
          randomNumber(0.6, 0.8)
        ),
      ]
      this.sgtSmith = new Player('SGT Smith', 20, 5, 0.7)
    },
    gameIntro() {
      this.createPlayers()
      alert('Welcome to spaceBattle')
      const input = confirm('Click ok to play')
      input ? this.playGame() : alert('later...')
    },
    playGame() {
      while (
        this.sgtSmith.health > 0 &&
        this.aliens.some(alien => alien.health > 0)
      ) {
        this.aliens.forEach(alien => {
          if (!this.destroyed(alien)) {
            this.soldierAttack(alien)
            if (!this.destroyed(alien)) {
              this.alienAttack(alien)
            }
          }
        })
      }
    },
    soldierAttack(enemy) {
      console.log(`${this.name} is attacking ${enemy.name}`)
      if (this.sgtSmith.hitAccuracy(this.sgtSmith.accuracy)) {
        enemy.health -= this.sgtSmith.firepower
        if (enemy.health <= 0) {
          console.log(`You destroyed ${enemy.name}`)
        } else {
          console.log(
            `You attacked ${enemy.name} and their health is now ${enemy.health}`
          )
        }
      } else {
        console.log(`You missed the target`)
      }
    },
    alienAttack(attacker) {
      console.log(`You are being attacked by ${attacker.name}`)
      if (attacker.hitAccuracy(attacker.accuracy)) {
        this.sgtSmith.health -= attacker.power
        if (this.sgtSmith.health > 0) {
          console.log(
            `You've been hit and you health is now ${sgtSmith.health}`
          )
        } else {
          alert(`Game Over: The aliens have taken over`)
        }
      } else {
        console.log(`The missed you and you health is ${this.sgtSmith.health}`)
      }
    },
    destroyed(player) {
      if (player.health <= 0) {
        return true
      }
      return false
    },
  }

  BattleGround.gameIntro()
}, 1000)
