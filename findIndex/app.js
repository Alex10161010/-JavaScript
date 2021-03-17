const asignarIdReferencia = () => {
	let referencias = [
		{
			cveFolio: 'GSTAC25ACA8',
			cvePersona: 12364,
			cvePersona2: 12380,
			cveStatus: 1,
			id_referencia: null,
			parentesco: 'Primo/a',
			tipoPersona: 1,
		},
		{
			cveFolio: 'GSTAC25ACA8',
			cvePersona: 12364,
			cvePersona2: 12371,
			cveStatus: 1,
			id_referencia: null,
			parentesco: 'Ahijado/a',
			tipoPersona: 1,
		},
		{
			cveFolio: 'GSTAC25ACA8',
			cvePersona: 12364,
			cvePersona2: 12362,
			cveStatus: 1,
			id_referencia: null,
			parentesco: 'Abuelo/a',
			tipoPersona: 1,
		},
	];

	let respServidorRef = [
		{ opc: 1, msj: '!Exito', id: 66, cvePersona2: 12362 },
		{ opc: 1, msj: '!Exito', id: 64, cvePersona2: 12380 },
		{ opc: 1, msj: '!Exito', id: 65, cvePersona2: 12371 },
	];

	referencias.forEach((ref, index) => {
		/* cuando la respuesta del servidor se no se encuentra en orden se tendrá que buscar el índice del arreglo  */
		//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función
		let indexArry = respServidorRef.findIndex((elem) => ref.cvePersona2 == elem.cvePersona2);
		ref.id_referencia = respServidorRef[indexArry].id;
		/* si la respuesta del servidor se encuentre ordenado se asigna el id */
		if (ref.cvePersona2 === respServidorRef[index].cvePersona2) {
			ref.id_referencia = respServidorRef[index].id;
		}
	});
	console.log(referencias);
};
