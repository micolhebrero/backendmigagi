const Contenedor = require('./contenedor.js')
const log = (p) => console.log(p)

const item1 = {
    title: "verano",
    precio: 500,
    foto: "./fotos/verano.jpg",
}

const item2 = {
    title: "Mandalas",
    precio: 1000,
    foto: "./fotos/carrou.jpg" ,
}

const item3 = {
    title: "Chaleco",
    precio: 2500,
    foto: "./fotos/felipe.jpg" ,
}

const item4 = {
    title: "Saco",
    precio: 5000,
    foto: "./fotos/geminis.jpg" ,
}

async function main() {

    const contenedor = new Contenedor('./productos.txt')

    let datos1 = await contenedor.getAll()
    log(datos1)

    let id1 = await contenedor.save(item1)
    log(id1)

    let id2 = await contenedor.save(item2)
    log(id2)

    let datos2 = await contenedor.getAll()
    log(datos2)

    let busca1 = await contenedor.getById(1)
    log(busca1)

    let busca2 = await contenedor.getById(10)
    log(busca2)

    let id3 = await contenedor.save(item4)
    log(id3)

    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    log(delete1)

    await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    log(delete2)


}

main()