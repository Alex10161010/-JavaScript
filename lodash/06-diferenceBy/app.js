/*
Ejecicio 13:
    Lodash: Usar Criterio para Encontrar Diferencia entre Dos Arreglos con differenceBy()

    A = [1.5, 3.3, 7.11]
    B = [3.9, 13.19, 7.87, 1.23]

    criterio: indicando una operacion matematica que obtenga la unica parte de numero
    A = [1, 3, 7]
    B = [3, 13, 7, 1]

    cuales son los elementos que hacen que A sea diferente de B
    A - B = []

 */

const _ = require('lodash');

let A = [1.5, 3.3, 7.11];
let B = [3.9, 13.19, 7.87, 1.23];

let C = _.differenceBy(A, B, Math.floor);

console.log(C);
console.log();
A.push(23.29);

C = _.differenceBy(A, B, Math.floor);
console.log(C);
