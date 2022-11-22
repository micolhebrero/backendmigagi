const express = require('express')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor prendido escuchadno ${PORT}`)
})

let productos = getall

app.get('/', (req, res) => {
    res.send({ mesnaje: `Esto es una prueba`})
})

app.get('/productos', (req, res) => {
    res.send(productos)
})

app.get('/random', (req, res) => {
    getbyId = [];
    res.send(productos)
})

server.on('error', (err) => {console.error(err)})