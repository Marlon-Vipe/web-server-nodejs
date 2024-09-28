
const main = () => {
    console.log('Aqui comenzamos el servidor');
}


//Funcion agnostica (sin nombre)
// Autoconvocada porque se ejecuta con los parentesis al final
(async () => {
    main()
})()
