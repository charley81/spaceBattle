setTimeout(() => {
  if (confirm('Welcome to spaeBattle. Click ok to begin')) {
    class Soldier {
      constructor(name) {
        this.name = name
        this.health = 20
        this.power = 5
        this.accuracy = 0.7
      }

      attack(alien) {
        if (Math.random() < alien.accuracy) {
          console.log(`${this.name} attacked ${alien.name}`)
          alien.health -= this.power
          checkBattle(alien)
        }
        console.log(`${this} missed`)
      }
    }

    class Alien {
      constructor(name) {
        this.name = name
        this.health = Math.floor(Math.random() * (6 - 3 + 1)) + 3
        this.power = Math.floor(Math.random() * (4 - 2 + 1)) + 2
        this.accuracy = Number((Math.random() * (0.8 - 0.6) + 0.6).toFixed(1))
      }

      attack(enemy) {
        console.log('Alien attack method')
      }
    }

    const checkBattle = alien => {
      if (sgtSmith.health <= 0 || aliens.every(alien => alien.health <= 0)) {
        const winner = sgtSmith.health <= 0 ? 'Aliens' : 'Soldier'
        alert(`Game Over: ${winner} won`)
      } else {
        if (alien.health > 0) {
          alien.attack(sgtSmith)
        } else {
          aliens.shift()
        }
      }
    }

    const sgtSmith = new Soldier('SGT Smith')
    const aliens = [
      new Alien('Xanthe'),
      new Alien('Adzoa'),
      new Alien('Bhura'),
      new Alien('Ralet'),
      new Alien('Brel'),
      new Alien('Ozanka'),
    ]

    aliens.forEach(alien => {
      sgtSmith.attack(alien)
    })

    const aliensLength = aliens.length
    console.log(aliensLength)
  } else {
    alert('Refresh the page if you change your mind')
  }
}, 1000)
