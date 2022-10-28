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
    
     save(){
        try{
            productos.forEach((item, i) => {
                item.id = i + 1;
            });
             fs.appendFile('./productos.txt', `${JSON.stringify(productos)}`, (err) =>{
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
    getData() {
        try {
            const data = fs.promises.readFile('./productos.txt',  'utf-8')
            console.log(data);
        }
        catch(err){
            console.log('error de lectura', err);
        }
    }
    getById() {
        const object = productos.find(obj =>obj.id === 2)
    }
}
const productos = [];
productos.push(new Producto('Martillo', 2500, './Martillo.png'));
productos.push(new Producto('Espatula', 1500, './Espatula.png'));
productos.push(new Producto('Destornillador', 1000, './Destornillador.png'));
save();
getById();
getData();

const express = require('express');
const { json } = require('body-parser');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/productos', (req, res) => {
  res.json(JSON.parse(productos))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

