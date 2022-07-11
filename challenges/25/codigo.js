const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]
const room1 = [
    [' ', ' ', ' '],
    [' ', 'm', '*'],
    ['*', ' ', ' ']
  ]
  const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', '*', ' ', ' '],
    [' ', ' ', ' ', '*']
  ]
function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    let result = [];
    for (let i = 0; i < game.length; i++) {
      result.push(
        game[i].indexOf('m') !== -1 && direction === 'right' && game[i].indexOf('*') === game[i].indexOf('m') + 1 ? true : 
        game[i].indexOf('m') !== -1 && direction === 'left' && game[i].indexOf('*') === game[i].indexOf('m') - 1 && game[i].indexOf('*') !== -1 ? true : 
        i < game.length - 1 &&
        direction === 'down' &&
        game[(i < game.length - 1 ? i + 1 : i)].indexOf('*') === game[i].indexOf('m') && 
        game[i].indexOf('m') !== -1 ? true :
        i > 0 &&
        direction === 'up' &&
        game[(i > 0 ? i - 1 : i)].indexOf('*') === game[i].indexOf('m') && 
        game[i].indexOf('m') !== -1 ? true : false);
    }
    return result.includes(true)
  }
/*canMouseEat('up',    room)
canMouseEat('down',  room)
canMouseEat('right', room)
canMouseEat('left',  room)
canMouseEat('up',    room2)
canMouseEat('down',  room2)
canMouseEat('right', room2)
canMouseEat('left',  room2) */