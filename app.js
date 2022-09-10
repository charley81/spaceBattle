// soldier class
const soldier = {
  type: 'soldier',
  name: 'SGT Smith',
  health: 20,
  power: 5,
  accuracy: 0.7,
}

const aliens = [
  {
    type: 'alien',
    name: 'Xanthe',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
  {
    type: 'alien',
    name: 'Adzoa',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
  {
    type: 'alien',
    name: 'Xanthe',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
  {
    type: 'alien',
    name: 'Ozanka',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
  {
    type: 'alien',
    name: 'Orin',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
  {
    type: 'alien',
    name: 'Xalvadora',
    health: Math.floor(Math.random() * 4) + 3,
    power: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
  },
]

// set the name and stats of each player
const setNameAndStats = (player, enemy) => {
  const attacker = document.querySelector(`.${player.type}`)
  const attacked = document.querySelector(`.${enemy.type}`)
  attacker.querySelector('.name').textContent = player.name
  attacked.querySelector('.name').textContent = enemy.name
  attacker.querySelector('.health').textContent = `Health: ${player.health}`
  attacked.querySelector('.health').textContent = `Health: ${enemy.health}`
  attacker.querySelector('.power').textContent = `Power: ${player.power}`
  attacked.querySelector('.power').textContent = `Power: ${enemy.power}`
  attacker.querySelector(
    '.accuracy'
  ).textContent = `Accuracy: ${player.accuracy}`
  attacked.querySelector(
    '.accuracy'
  ).textContent = `Accuracy: ${enemy.accuracy}`
}

// create alert or confirm with a custom message
const callMessage = (type, message) => {
  if (type === 'alert') {
    alert(message)
  } else if (type === 'confirm') {
    confirm(message)
  } else {
    console.error('no message entered')
  }
}

// call attack
const callAttack = (player, enemy) => {
  if (Math.random() < player.accuracy) {
    callMessage('alert', `${player.name} just attacked ${enemy.name}`)
  } else {
    callMessage('alert', 'You Missed!')
  }

  enemy.health -= player.power
  // Check the player.type to set their name and stats in the UI
  player.type === 'soldier'
    ? setNameAndStats(player, enemy)
    : setNameAndStats(enemy, player)
}

// loop over the aliens to start battle
aliens.forEach(alien => {
  callAttack(soldier, alien)
})
