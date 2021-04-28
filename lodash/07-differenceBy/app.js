/*
Ejecicio 14:
    Lodash: Usar Criterio para Encontrar Diferencia entre Dos Arreglos con differenceBy()

 */

const _ = require('lodash');

let grupo1 = [
	{
		nombre: 'Edward',
		edad: 29,
		webcapt: true,
		tiempo: '5:min',
	},
	{
		nombre: 'Julio',
		edad: 43,
		webcapt: false,
		tiempo: '',
	},
	{
		nombre: 'Alex',
		edad: 37,
		webcapt: false,
		tiempo: '',
	},
	{
		nombre: 'Abraham',
		edad: 31,
		webcapt: true,
		tiempo: '25:min',
	},
];

let grupo2 = [
	{
		nombre: 'Olga',
		edad: 23,
		webcapt: false,
		tiempo: '',
	},
	{
		nombre: 'Luisa',
		edad: 19,
		webcapt: false,
		tiempo: '',
	},
	{
		nombre: 'Elias',
		edad: 13,
		webcapt: true,
		tiempo: '30:min',
	},
	{
		nombre: 'Edward',
		edad: 29,
		webcapt: true,
		tiempo: '5:min',
	},
];

/* Obtener un tercer arreglo del grupo de personas en donde nos indique cuales son los
objectos diferencia el primer grupo del segundo grupo*/

/* 3 parametro es el criterio de comparacion  */
let newGrupo = _.differenceBy(grupo1, grupo2, 'nombre');
console.log(newGrupo);
