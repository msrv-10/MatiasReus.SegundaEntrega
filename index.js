const fs = require('fs');
fs.writeFile('./productos.txt', 'Aca estan los productos\n', error => {
    if(error){
        console.log(error);
    }else{
        console.log('Guardado');
    }
})


class Contenedor{
    constructor(nombre,precio,thumbnail){
        this.nombre=nombre,
        this.precio=precio,
        this.thumbnail=thumbnail
    }
}
const user1 = new Contenedor('Martillo', 2500, './martillo.png')
const user2 = new Contenedor('Espatula', 1500, './Espatula.png')
const user3 = new Contenedor('Destornillador', 1000, './Destornillador.png')

console.log(user1);
async function save(usuario){
    try{
        await ();
    }
    catch(err){
        console.log(err);
    }
}
