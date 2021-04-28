/*
Ejecicio 9:
    Lodash Ejercicio: 9 Compactar (Remover) Valores Nulos (o Equivalentes) de un Arreglo con compat()
    Las equivalencias del valor (false) son = null, 0, '', ``, undefined, NaN

    elimino todos los valores equivalentes de false
 */

const _ = require('lodash');

let valores = [
	1,
	0,
	3,
	{ nombre: 'Eduar', edad: null },
	-10,
	undefined,
	1 / 0,
	'',
	'',
	'JavaScript',
	``,
	null,
	NaN,
];

console.log('cantidad de elementos del arreglo valores:', valores.length);
console.log(valores);
console.log('');

let resultado = _.compact(valores);
console.log('cantidad de elementos del arreglo valores:', resultado.length);
console.log(resultado);
console.log('');
