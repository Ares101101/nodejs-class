import { readFile } from 'node:fs/promises'
Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log('primer texto', text)
  console.log('segundo texto', text2)
})

console.log('leyendo el primer archivo')

// eslint-disable-next-line no-unused-vars
const text = await readFile('./archivo.txt', 'utf-8')

console.log('-----------> hacer cosas mientras <----------')

console.log('leyendo el segundo archivo')

// eslint-disable-next-line no-unused-vars
const secundtext = await readFile('./archivo2.txt', 'utf-8')
