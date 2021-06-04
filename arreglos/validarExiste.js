document.addEventListener('DOMContentLoaded', () => {
	let arrayDatos = [120, 130, 250, 560, 145];
	const exite = validaExiteOtrosZ(arrayDatos);
	console.log(exite);
});

/* Si cumple la condicion sale del ciclo*/
const validaExiteOtrosX = (arraySelect) => {
	const arrayIdOtros = [128, 132, 136, 150, 158, 141, 147];
	let existe = false;
	for (let i = 0; i < arraySelect.length; i++) {
		if (arrayIdOtros.some((elem) => elem === arraySelect[i])) {
			existe = true;
			break;
		}
	}
	return existe;
};

/* No se puede ocupar break, realiza todo el recorrido*/
const validaExiteOtrosY = (arraySelect) => {
	const arrayIdOtros = [128, 132, 136, 150, 158, 141, 147];
	let existe = false;
	arraySelect.forEach((select) => {
		if (arrayIdOtros.some((elem) => elem === select)) {
			existe = true;
		}
	});
	return existe;
};

const validaExiteOtrosZ = (arraySelect) => {
	const arrayIdOtros = [128, 132, 136, 150, 158, 141, 147];
	let existe = false;
	arraySelect.forEach((elem) => {
		if (arrayIdOtros.includes(elem)) {
			existe = true;
		}
	});
	return existe;
};
