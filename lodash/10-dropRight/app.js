/*
Lodash Ejercicio: 17
    Eliminar Desde la Derecha N Cantidad de Elementos de un Arreglo con dropRight()

    [1, 2, 3, 4, 5, 6, 7]
    n = 3

    la eliminacion empieza dedes la derecha
    [1, 2, 3, 4]
 */

const _ = require('lodash');
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log('numeros', numeros);
console.log('Despues de eliminar 3 elementos de la derecha');
let resultado = _.dropRight(numeros, 3);
console.log('resultado', resultado);
console.log('');
