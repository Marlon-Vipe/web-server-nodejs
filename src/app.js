const { envs } = require('./config/env') // Traemos las variables de entorno
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica (sin nombre)
// Autoconvocada porque se ejecuta con los parentesis al final
(async () => {
    main()
})()
