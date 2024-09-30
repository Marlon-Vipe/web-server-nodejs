const { envs } = require('./config/env') // Traemos las variables de entorno

const main = () => {
    console.log(envs);
}

//Funcion agnostica (sin nombre)
// Autoconvocada porque se ejecuta con los parentesis al final
(async () => {
    main()
})()
