const alienDiv = document.querySelector('.alien')
const soldierDiv = document.querySelector('.soldier')

// soldier class
class Soldier {
  constructor(name, type) {
    this.name = name
    this.type = type
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
        const input = confirm('Click ok to attack next alien')
        if (!input) {
          window.location.reload()
        }
      }
    } else {
      console.log(`You missed ${enemy.name}`)
    }
  }
}

// alien class
class Alien {
  constructor(name, type) {
    this.name = name
    this.type = type
    this.health = Math.floor(Math.random() * (6 - 3)) + 3
    this.power = Math.floor(Math.random() * (4 - 2)) + 2
    this.accuracy = Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1))
  }

  attack(enemy) {
    console.log(`${this.name} is attacking ${enemy.name}`)
    if (this.health > 0) {
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
}

// array of alian instances
const aliens = [
  new Alien('Xanthe', 'alien'),
  new Alien('Adzoa', 'alien'),
  new Alien('Bhura', 'alien'),
  new Alien('Ralet', 'alien'),
  new Alien('Brel', 'alien'),
  new Alien('Ozanka', 'alien'),
]

// soldier instance
const sgtSmith = new Soldier('SGT Smith', 'soldier')

// game intro
function gameIntro() {
  const input = confirm(`Welcome to spaceBattle. Click ok to start`)
  input ? playGame() : alert('later...')
}

// playGame
function playGame() {
  aliens.forEach(alien => {
    while (sgtSmith.health > 0 && alien.health > 0) {
      sgtSmith.attack(alien)
      if (!destroyed(alien)) {
        alien.attack(sgtSmith)
      }
    }
  })

  if (sgtSmith.health > 0) {
    const input = confirm(`${sgtSmith.name} Won! Click ok to start over`)
    input ? window.location.reload() : alert('later...')
  }
}

// check if ship is destroyed
const destroyed = player => player.health <= 0

// set stats in the DOM
function setStats(player) {
  alienDiv.querySelector('.name').textContent = player.name
  alienDiv.querySelector('.health').textContent = player.health
  alienDiv.querySelector('.power').textContent = player.power
  alienDiv.querySelector('.accuracy').textContent = player.accuracy
}

setTimeout(() => {
  gameIntro()
}, 1000)
