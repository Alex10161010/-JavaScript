/*
Ejemplo 15:
    Encontrar Diferencia de Dos Arreglos de Objetos con la Función differenceWith()
 */
const _ = require('lodash');
let objPuntos = [
	{ x: 1, y: 2 },
	{ x: 0, y: 0 },
	{ x: -10, y: 10 },
];

let objCompara = [
	{ x: 1, y: 2 },
	{ x: 5, y: 5 },
	{ x: -10, y: 10 },
];
console.log('objecto de objPuntos');
console.log(objPuntos);
console.log('objecto de objCompara');
console.log(objCompara);
console.log('El objecto que hace diferente a objPuntos de objCompara es');
let diferencia = _.differenceWith(objPuntos, objCompara, _.isEqual);
console.log(diferencia);
