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
        productos.forEach((item, i) => {
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
setTimeout(()=>{
    function getById(idToFind){
    productos.find((p)=> p.id === idToFind);
};
console.log(getById(1));
}, 2000)

/*async function getById(idToFind){
    try{
        productos.find((p)=> p.id === idToFind);
        await
        if(err){
            console.log('No lo pude buscar');
        }else {
            console.log('Lo encontre');
        }
    } */

async  function getData() {
    try {
        const data = await fs.promises.readFile('./productos.txt',  'utf-8')
        console.log(data);
    }
    catch(err){
        console.log('error de lectura', err);
    }
}
getData()
