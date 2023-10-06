const fs = require('fs')
console.log('leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8', (_error, text) => {
  console.log('primer texto', text)
})

console.log('-----------> hacer cosas mientras <----------')

console.log('leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8', (_error, text) => {
  console.log('segundo texto', text)
})
