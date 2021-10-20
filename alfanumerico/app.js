const boton = document.querySelector('#btn');
const etiq = document.querySelector('#alfa');

boton.addEventListener('click', (e) => {
	let data = generaRandonContra(5);
	console.log(data);
});

// Nota: esta función modifica al arreglo
// internamente
//https://parzibyte.me/blog/2019/08/06/mezclar-arreglo-javascript/
const mezclarArreglo = (arreglo) => {
	for (let i = arreglo.length - 1; i > 0; i--) {
		let indiceAleatorio = Math.floor(Math.random() * (i + 1));
		let temporal = arreglo[i];
		arreglo[i] = arreglo[indiceAleatorio];
		arreglo[indiceAleatorio] = temporal;
	}
	return arreglo;
};

const generaRandonContra = (size) => {
	const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const letras = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const alfanumerico = mezclarArreglo(numeros.concat(letras));
	let max = alfanumerico.length;
	let nuecont = [];
	for (let i = 0; i < size; i++) {
		let x = Math.round(Math.random() * (max - 1) + 0);
		nuecont.push(alfanumerico[x]);
	}
	return nuecont.join('');
};

