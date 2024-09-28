const { envs } = require('./config/env')

const main = () => {
    console.log(envs);
}

//Funcion agnostica (sin nombre)
// Autoconvocada porque se ejecuta con los parentesis al final
(async () => {
    main()
})()
