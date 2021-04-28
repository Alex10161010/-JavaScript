/*
Ejercicio: 21
    Encontrar el indice primera Coincidencia Elemento en un Arreglo con findIndex()
    este busca de derecha a izquierda
 */

const _ = require('lodash');
let programas = [
	{ id: 1001, nombre: 'Notepad++', instalado: true },
	{ id: 1002, nombre: 'Visual Studio Code', instalado: true },
	{ id: 1004, nombre: 'MySQL Workbench', instalado: true },
	{ id: 1003, nombre: 'Eclipse IDE', instalado: false },
	{ id: 1005, nombre: 'Visual Studio', instalado: false },
];
console.log(programas);
console.log('');
console.log('Buscado el indice objecto con id == 1003');
//let indice = _.findIndex(programas, (p) => p.id == 1003);
let indice = _.findIndex(programas, ['id', 1003]);
console.log('Dentro del arreglo de objectos el indice que buscas es el: ', indice);
console.log();
console.log('El objecto que buscas');
console.log(programas[indice]);

/*Ejercicio: 22
    Encontrar el indice primera Coincidencia Elemento en un Arreglo con findLastIndex()
    este busca de izquierda a derecha
 */
console.log('');
console.log('');
console.log(programas);
console.log('Buscado el indice objecto con instalado == false');
let indicex = _.findIndex(programas, (p) => p.instalado == false);
console.log('la primera considencia del program que esta instalado se encontro en el indice: ', indicex);
console.log('El objecto que buscas');
console.log(programas[indicex]);
