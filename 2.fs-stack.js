const fs= require('node:fs');
const stats = fs.statSync('./archivo.txt');
console.log(
    stats.size, //tamaño en bytes
    stats.isFile(),// si es un fichero
    stats.isSymbolicLink(),// si es un enlace simbolico
    stats.isDirectory(),// si es un fichero
);