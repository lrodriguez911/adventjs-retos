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
    let roomsflat = game.flat();
    console.log(game[0].length)
    console.log(roomsflat.indexOf('m'))
    return direction === 'up' && roomsflat.indexOf('m') - game[0].length === roomsflat.indexOf('*') ? true :
    direction === 'down' && roomsflat.indexOf('m') + game[0].length === roomsflat.indexOf('*') ? true :
    direction === 'left' && roomsflat.indexOf('m') - 1 === roomsflat.indexOf('*') && roomsflat.indexOf('m') - 1 % game[0].length === 0 ? true :
    direction === 'right' && roomsflat.indexOf('m') + 1 === roomsflat.indexOf('*') ? true : false;
  }
/* canMouseEat('up',    room)
canMouseEat('down',  room)
canMouseEat('right', room)
canMouseEat('left',  room)
canMouseEat('up',    room2)
canMouseEat('down',  room2)
canMouseEat('right', room2)
canMouseEat('left',  room2) */