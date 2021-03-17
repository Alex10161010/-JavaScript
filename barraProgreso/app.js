/**
 * Autor: EAMM
 * Fecha Creacion: ?
 * Fecha Modificacion: 17/03/21
 */

let arrayColor = [];
const divProgressBar = document.querySelector('#divProgressBar');
const templateProgreso = document.querySelector('#templateProgreso').content;
const fragmento = document.createDocumentFragment();

const resp = {
	graduados: '0%',
	total: '0',
	datos: [
		{
			ultimo_tema: 'Cálculo diferencial',
			total: '1',
			porcentaje: '5%',
		},
		{
			ultimo_tema: 'Álgebra de Baldor',
			total: '1120',
			porcentaje: '45%',
		},
		{
			ultimo_tema: 'Matemáticas discretas',
			total: '1149',
			porcentaje: '50%',
		},
	],
};

document.addEventListener('DOMContentLoaded', (e) => {
	pintarProgressBar(resp.datos);
});

const pintarProgressBar = (respuesta) => {
	respuesta.forEach((e, index) => {
		arrayColor[index] = hexGenerator();
		const entero = parseInt(e.porcentaje);
		let clone = templateProgreso.cloneNode(true);
		let progressBar = clone.querySelector('.progress-bar');
		progressBar.setAttribute('aria-valuenow', entero);
		progressBar.style.width = `${entero}%`;
		progressBar.style.backgroundColor = arrayColor[index];
		fragmento.appendChild(progressBar);
	});
	divProgressBar.appendChild(fragmento);
};

/**
 * Titulo: La mejor manera de generar color HEX aleatorio
 * Creacion: Viernes 23/10/2020
 * Autor: https://stackoverflow.com/questions/49329179/random-hex-color
 */
const randomHex = () => {
	var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

	// picking a random item of the array
	return hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
};

// Genarates a Random Hex color
const hexGenerator = () => {
	let hexValue = ['#'];
	for (var i = 0; i < 6; i += 1) {
		hexValue.push(randomHex());
	}
	return hexValue.join('');
};
