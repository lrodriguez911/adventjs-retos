const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    ['*', ' ', ' ']
  ]
const room1 = [
    [' ', ' ', ' '],
    [' ', 'm', '*'],
    ['*', ' ', ' ']
  ]
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', 'm'],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    for (let i = 0; i < game.length; i++) {
        direction === 'up' && game[i][(i-1).indexOf('*')] ? true :
        direction === 'down' && game[i][(i+1).indexOf('*') ] ? true :
        direction === 'right' && game[i][(i).indexOf('*') + 1] ? true :
        direction === 'left' && game[i][(i).indexOf('*') -1] ? true : false
    }
 
  }
/* canMouseEat('up',    room)
canMouseEat('down',  room)
canMouseEat('right', room)
canMouseEat('left',  room)
canMouseEat('up',    room2)
canMouseEat('down',  room2)
canMouseEat('right', room2)
canMouseEat('left',  room2) */