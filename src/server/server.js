const express = require('express')
const path = require('path');
const { start } = require('repl');

const startServer = (options) => {
    const {port, public_path = 'public'} = options

    const app = express() //Ejecuta Express

    // Para usar middlewares se usa la palabra: use (en express)
    app.use(express.static(public_path)) // Contenido estatico que ponemos disponible

    app.get('*'), (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    }

}

module.exports = {
    startServer
}