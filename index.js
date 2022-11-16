const http = require('http')

const PORT = 8080

const server = http.createServer((peticion, respuesta) => {
    respuesta.end('Bienvenido')
})

const connectedServer = server.lister(PORT, () => {
    console.log(`Servidor HTTP escuchando el puerto 
    ${connectedServer.adress().port} `)

})