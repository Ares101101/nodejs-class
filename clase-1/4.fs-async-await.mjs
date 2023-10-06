/* eslint-disable no-unused-vars */
import { readFile } from 'node:fs/promises'

console.log('leyendo el primer archivo')

const text = await readFile('./archivo.txt', 'utf-8')

console.log('primer texto', text)

console.log('-----------> hacer cosas mientras <----------')

console.log('leyendo el segundo archivo')

const secundtext = await readFile('./archivo2.txt', 'utf-8')

console.log('segundo texto', text)
