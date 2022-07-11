function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
  console.log([...new Set(letter
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  .split("").filter(a => a !== " ")
  .sort())]
  /* .length >= 28 */)
 }