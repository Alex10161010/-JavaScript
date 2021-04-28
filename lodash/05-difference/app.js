/*
Ejecicio 12:
    encontrar la Diferencia entre Dos Arreglos con la Función difference()
    A = {1, 2, 3}
    B = {3, 4, 5}
    Calcular la diferencia entre A y B (Los elemento que sean unicos en A y que hacen diferente a A de B)
    A - B = {1, 2}
    El orden de los conjuntos altera el resultado
    B - A = {4, 5}

    Esto tambien aplica en objectos
 */

const _ = require('lodash');

let A = [1, 2, 3];
let B = [3, 4, 5];

console.log(A);
console.log(B);
console.log('');

console.log('Calcular la diferencia entre A y B ');
let C = _.difference(A, B);
console.log(C);
console.log('');

console.log('Calcular la diferencia entre B y A ');
let D = _.difference(B, A);
console.log(D);
console.log('');

A = ['Java', 'JavaScript', 'PHP', 'Python'];
B = ['Python', 'C++', 'C#'];

console.log('Calcular la diferencia entre A y B ');
C = _.difference(A, B);
console.log(C);
