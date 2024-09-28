require('dotenv').config();
const { get } = require('env-var');

// Configuracion de variables de entorno
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

//Exportamos
module.exports = {
    envs
}