const fs = require('node:fs');

fs.readdir('.',(err, files)=>{
    if(err){
        console.error('Error en el directorio',err);
        return;
    }
    files.forEach(file =>{
        console.log(file)
    });

})