 

import { readFile } from 'node:fs/promises'
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8'),
]).then(([text, text2]) =>{
    console.log('primer texto', text);
    console.log('segundo texto', text2)
});

console.log('leyendo el primer archivo');

const text = await readFile('./archivo.txt', 'utf-8')



console.log('-----------> hacer cosas mientras <----------');

console.log('leyendo el segundo archivo');

const secundtext = await readFile('./archivo2.txt', 'utf-8')


    




