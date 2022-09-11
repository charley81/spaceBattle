setTimeout(() => {
  if (confirm('Welcome to spaeBattle. Click ok to begin')) {
    class Soldier {
      constructor(name) {
        this.name = name
        this.health = 20
        this.power = 5
        this.accuracy = 0.7
      }

      attack(enemy) {
        if (Math.random() < enemy.accuracy) {
          console.log(`${this.name} attacked ${enemy.name}`)
          enemy.health -= this.power
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

    // const checkBattle = (soldier, aliens) => {
    //   if (soldier.healt <= 0 || aliens.every(alien => alien.healt <= 0)) {
    //     const winner = soldier.healt <= 0 ? 'Aliens' : 'Soldier'
    //     alert(`Game Over: ${winner} won`)
    //   }
    // }

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
  } else {
    alert('Refresh the page if you change your mind')
  }
}, 1000)
