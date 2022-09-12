// soldier class
class Soldier {
  constructor(name) {
    this.name = name
    this.health = 20
    this.power = 5
    this.accuracy = 0.7
  }

  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`)
    if (Math.random() < enemy.accuracy) {
      enemy.health -= this.power
      if (enemy.health <= 0) {
        console.log(`${enemy.name} has been destroyed`)
        confirm('Click ok to attack the next alien')
      }
    } else {
      console.log(`You missed ${enemy.name}`)
    }
  }
}

// alien class
class Alien {
  constructor(name) {
    this.name = name
    this.health = Math.floor(Math.random() * (6 - 3)) + 3
    this.power = Math.floor(Math.random() * (4 - 2)) + 2
    this.accuracy = Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1))
  }

  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`)
    if (Math.random() < enemy.accuracy) {
      enemy.health -= this.power
      if (sgtSmith.health > 0) {
        console.log(`You've been hit. You health is ${sgtSmith.health}`)
      } else {
        alert(`Game Over: ${sgtSmith.name} lost`)
      }
    } else {
      console.log(`${this.name} missed. You health is ${sgtSmith.health}`)
    }
  }
}

// array of alian instances
const aliens = [
  new Alien('Xanthe'),
  new Alien('Adzoa'),
  new Alien('Bhura'),
  new Alien('Ralet'),
  new Alien('Brel'),
  new Alien('Ozanka'),
]

// soldier instance
const sgtSmith = new Soldier('SGT Smith')

// game intro
function gameIntro() {
  const input = confirm(`Welcome to spaceBattle. Click ok to start`)
  input ? playGame() : alert('later...')
}

// playGame
function playGame() {
  aliens.forEach(alien => {
    if (!destroyed(alien)) {
      sgtSmith.attack(alien)
      if (!destroyed(alien)) {
        alien.attack(sgtSmith)
      }
    }
  })
}

// check if ship is destroyed
function destroyed(player) {
  player.health <= 0 ? true : false
}

setTimeout(() => {
  gameIntro()
}, 1000)
