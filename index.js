const fs = require('fs');
fs.writeFile('./productos.txt', 'Aca estan los productos\n', error => {
    if(error){
        console.log(error);
    }else{
        console.log('Guardado');
    }
})

class Producto{
    constructor(nombre, precio, thumbnail){
        this.nombre = nombre;
        this.precio = precio;
        this.thumbnail = thumbnail;
    }

}
const productos = [];
productos.push(new Producto('Martillo', 2500, './Martillo.png'));
productos.push(new Producto('Espatula', 1500, './Espatula.png'));
productos.push(new Producto('Destornillador', 1000, './Destornillador.png'));

async function save(){
    try{
        await productos.forEach((item, i) => {
            item.id = i + 1;
        });
        await fs.appendFile('./productos.txt', `${JSON.stringify(productos)}`, (err) =>{
            if(err){
                console.log('no pude grabar');
            }else{
                console.log('termino bien');
            }
        })
    }
    catch(err){
        console.log(err);
    }
}
save();
function getById(idToFind){
     productos.find((p)=> p.id === idToFind);
/*     try{
        await
        if(err){
            console.log('No lo pude buscar');
        }else {
            console.log('Lo encontre');
        }
    } */
};
console.log(getById(2));
