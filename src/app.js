import { envs } from './config/env.js' // Traemos las variables de entorno
import { startServer } from './server/server.js'

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
