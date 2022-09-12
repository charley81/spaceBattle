class Spaceship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
    this.alive = true
  }
  attackChance(accuracy) {
    if (Math.random() < this.accuracy) {
      return true
    }
  }
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const spaceBattle = {
  createShips: function () {
    this.alienShips = [
      new Spaceship(
        'USS Captain America',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Ironman',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Black Widow',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Hulk',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Thor',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Hawkeye',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
      new Spaceship(
        'USS Loki',
        randInt(3, 7),
        randInt(2, 5),
        randInt(6, 9) / 10
      ),
    ]
    this.ussAssembly = new Spaceship('USS Assembly', 20, 5, 0.7)
  },
  gameStart: function () {
    this.createShips()
    alert('Welcome to our awesome game: Space Battle!')
    const readyToPlay = confirm(
      `Are you ready to embark on your journey as ${this.ussAssembly.name}?`
    )
    if (readyToPlay) {
      this.play()
    } else {
      alert('Maybe next time!')
    }
  },
  play: function () {
    indexVal = 0
    while (this.ussAssembly.hull > 0) {
      if (amIAlive(alienShips[indexVal])) {
        this.attack(this.alienShips[indexVal])
        if (amIAlive(alienShips[indexVa])) {
          this.defend(this.alienShips[indexVal])
        }
      }
      if (!amIAlive(alienShips[indexVal])) {
        indexVal += 1
      }
    }
  },
  attack: function (defender) {
    console.log(`You are attacking ${defender.name}.`)
    if (this.ussAssembly.attackChance()) {
      defender.hull -= this.ussAssembly.firepower
      if (defender.hull <= 0) {
        console.log(`You hit and destroyed ${defender.name}!`)
      } else {
        console.log(
          `You attacked and ${defender.name} and the hull of that ship is now ${defender.hull}.`
        )
      }
    } else {
      console.log(`You missed hitting ${defender.name}.`)
    }
  },
  defend: function (attacker) {
    console.log(`You are being attacked by ${attacker.name}.`)
    if (attacker.attackChance()) {
      this.ussAssembly.hull -= attacker.firepower
      if (this.ussAssembly.hull > 0) {
        //FIXME: Make this a function
        console.log(`They hit and your hull is now ${this.ussAssembly.hull}.`)
      } else {
        console.log(`You have lost.`)
        alert('Game over.')
      }
    } else {
      console.log(`They missed you.
Your hull value is ${this.ussAssembly.hull}.`)
    }
  },
  amIAlive: function (ship) {
    if (ship.hull > 0) {
      return true
    }
  },
}
spaceBattle.gameStart()
