const express = require('express')

const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor prendido escuchadno ${PORT}`)
})

app.get('/', (req, res) => {
    res.send({ mesnaje: `Esto es una prueba`})
})

server.on('error', (err) => {console.error(err)}) 