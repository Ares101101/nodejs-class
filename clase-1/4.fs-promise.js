// Esto solo en los modulos nativos
// que no tengan las promesas nativas
// const{promisify} = require('node:util');
// const readFilePromisify = promisify(fs.readFile);

import { readFile } from 'node:fs/promises'
console.log('leyendo el primer archivo')

readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('primer texto', text)
  })

console.log('-----------> hacer cosas mientras <----------')

console.log('leyendo el segundo archivo')

readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto', text)
  })
