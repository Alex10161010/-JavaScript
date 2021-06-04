//-----------------valores de los inputs---------------
let fechaNac = null;
const idu = document.querySelector('#idu').value;
const ide = document.querySelector('#ide').value;
const incentivo = document.querySelector('#incentivo').value;
const cmbespecialidad = document.querySelector('#especialidad');
const cmbpractica = document.querySelector('#tipo_practica');
const cmbestado = document.querySelector('#estado');
const txtdia = document.querySelector('#txtdia');
const txtmes = document.querySelector('#txtmes');
const txtanio = document.querySelector('#txtanio');
const txtcedula = document.querySelector('#txtcedula');

//Botones de formularios
const divFormulario = document.querySelector('#divFormContenido');

/* Arreglo de check y radio */
let arrayIdOtros = null;

document.addEventListener('DOMContentLoaded', () => {
	$('#smartwizard').smartWizard({
		selected: 0, // Initial selected step, 0 = first step
		autoAdjustHeight: true, // Automatically adjust content height
		cycleSteps: false, // Allows to cycle the navigation of steps
		backButtonSupport: false, // Enable the back button support
		useURLhash: true, // Enable selection of the step based on url hash
		lang: {
			// Language variables
			next: 'Siguiente',
			previous: 'Anterior',
		},
		toolbarSettings: {
			toolbarPosition: 'bottom', // none, top, bottom, both
			toolbarButtonPosition: 'right', // left, right
			showNextButton: false, // show/hide a Next button
			showPreviousButton: false, // MOSTRAR/ OCULTAR EL BOTON ANTERIOR (true/false)
		},
		anchorSettings: {
			anchorClickable: false, // Enable/Disable anchor navigation
			enableAllAnchors: false, // Activates all anchors clickable all times
			markDoneStep: true, // add done css
			enableAnchorOnDoneStep: true, // Enable/Disable the done steps navigation
		},
		keyboardSettings: {
			keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
			keyLeft: [37], // Left key code
			keyRight: [39], // Right key code
		},
		contentURL: null, // content url, Enables Ajax content loading. can set as data data-content-url on anchor
		disabledSteps: [], // Array Steps disabled
		errorSteps: [], // Highlight step with errors
		theme: 'dots',
		transitionEffect: 'fade', // Effect on navigation, none/slide/fade
		transitionSpeed: '400',
	});

	//serviceGetUsuario(); //TODO: esta parte lo comento para hacer pruebas
	/* OCULTAR DIVs OTRA */
	ocultarTodosDivOtros();
	imprimeMeses();
});

divFormulario.addEventListener('click', (e) => {
	/* Evento del boton siguiente */
	if (e.target.classList.contains('btnSiguiente')) {
		const idPregunta = e.target.getAttribute('data-prg');
		let idStrForm = e.target.getAttribute('id');
		let formulario = parseInt(idStrForm.substring(8, idStrForm.length));
		validacionCuestionarios(formulario, idPregunta);
	}

	/* Evento clik radio*/
	if (e.target.classList.contains('radioclick')) {
		const idStrCheck = e.target.getAttribute('id');
		const idCheckBox = parseInt(idStrCheck.substring(8, idStrCheck.length));
		const idPregunta = e.target.getAttribute('data-div');
		if (buscarExiteIdCheckRadio(idCheckBox)) {
			mostrarOcultarDivOtro(idCheckBox, idPregunta);
		} else {
			ocultarDivOtros(idPregunta);
		}
	}

	/* Evento clik checkbox o radio*/
	if (e.target.classList.contains('checkclick')) {
		const idStrCheck = e.target.getAttribute('id');
		const idCheckBox = parseInt(idStrCheck.substring(8, idStrCheck.length));
		const idPregunta = e.target.getAttribute('data-div');
		if (buscarExiteIdCheckRadio(idCheckBox)) {
			mostrarOcultarDivOtro(idCheckBox, idPregunta);
		}
	}
});

const imprimeMeses = () => {
	const meses = [
		{ valor: 'Enero', id: 1 },
		{ valor: 'Febrero', id: 2 },
		{ valor: 'Marzo', id: 3 },
		{ valor: 'Abril', id: 4 },
		{ valor: 'Mayo', id: 5 },
		{ valor: 'Junio', id: 6 },
		{ valor: 'Julio', id: 7 },
		{ valor: 'Agosto', id: 8 },
		{ valor: 'Septiembre', id: 9 },
		{ valor: 'Octubre', id: 10 },
		{ valor: 'Noviembre', id: 11 },
		{ valor: 'Diciembre', id: 12 },
	];
	const selectMeses = document.getElementById('txtmes'); //Seleccionamos el select
	let optionx = document.createElement('option');
	optionx.innerHTML = 'Mes';
	optionx.value = '';
	selectMeses.appendChild(optionx);

	meses.forEach((mes) => {
		let option = document.createElement('option'); //Creamos la opcion
		option.innerHTML = mes.valor; //Metemos el texto en la opción
		option.setAttribute('value', mes.id);
		selectMeses.appendChild(option); //Metemos la opción en el select
	});
};

const buscarExiteIdCheckRadio = (id) => {
	let existe = false;
	const arrayIdChecks = [128, 132, 136, 150, 158];
	const arrayIdRadios = [141, 147];
	arrayIdOtros = arrayIdChecks.concat(arrayIdRadios);
	existe = arrayIdOtros.some((checkid) => checkid === id);
	return existe;
};

const ocultarTodosDivOtros = () => {
	const divOtros = document.querySelectorAll('.divOtros');
	divOtros.forEach((divOtro) => {
		divOtro.style.display = 'none';
	});
};

const ocultarDivOtros = (idPregunta) => {
	const divOtro = document.querySelector('#divotro' + idPregunta);
	const txtOtro = document.querySelector('#txtotro' + idPregunta);
	divOtro.style.display = 'none';
	txtOtro.value = '';
};

const mostrarOcultarDivOtro = (idCheckBox, idPregunta) => {
	const divOtro = document.querySelector('#divotro' + idPregunta);
	const txtOtro = document.querySelector('#txtotro' + idPregunta);
	if (document.getElementById('checkbox' + idCheckBox).checked) {
		divOtro.style.display = 'block';
		txtOtro.focus();
	} else {
		divOtro.style.display = 'none';
		txtOtro.value = '';
	}
};

const getOpcionesSelecionadas = (idPregunta) => {
	let arryResp = [];
	let checkboxs = document.querySelectorAll('input[name="p_' + idPregunta + '"]');
	checkboxs.forEach((element) => {
		if (element.checked) {
			let obj = {
				valor: element.value,
				id: parseInt(element.getAttribute('id').substring(8, element.length)),
			};
			arryResp.push(obj);
		}
	});
	return arryResp;
};

const validaExiteOtro = (arraySelect) => {
	let existe = false;
	for (let i = 0; i < arraySelect.length; i++) {
		if (arrayIdOtros.some((elem) => elem === arraySelect[i])) {
			existe = true;
			break;
		}
	}
	return existe;
};

const procesando = (cadena, idPregunta, txtotro, paso, toStep = 0) => {
	let data = { valor: cadena, id: idPregunta, otro: txtotro, step: paso };
	service(data);
	toStep > 0 ? $('#smartwizard').smartWizard('goToStep', toStep) : $('#smartwizard').smartWizard('next');
};

const selectOtroUnicamente = (arrayId) => {
	let verifica = false;
	if (validaExiteOtro(arrayId) && arrayId.length == 1) {
		verifica = true;
	}
	return verifica;
};

const service = (data) => {
	//TODO: esta parte lo comento para hacer pruebas
	console.log({ data });
	/* $.ajax({
		url: 'includes/save-answers.asp',
		type: 'POST',
		data: {
			idu: idu,
			ide: ide,
			especialidad: cmbespecialidad.value,
			tipo_practica: cmbpractica.value,
			fecha_nacimiento: fechaNac,
			cedula_profesional: txtcedula.value,
			estado: cmbestado.value,
			id_pregunta: data.id,
			respuesta: data.valor,
			otro: data.otro==='' ? 'NULL': data.otro.trim(),
		},
		async: false,
		success: function (resp) {
			let paso = data.step + 1;
			guardarStep(paso);
		},
		error: function (xhr, status, error) {
			console.log(xhr.responseText);
		},
	}); */
};

const validacionCuestionarios = (idFormulario, idPregunta) => {
	let opcion = idFormulario - 1; //ID DEL CUESTIONARIO
	switch (opcion) {
		case 0:
			cuestionario_0(idPregunta, idFormulario);
			break;
		case 1:
			cuestionario_1(idPregunta, idFormulario);
			break;
		case 2:
			cuestionario_2(idPregunta, idFormulario);
			break;
		case 3:
			cuestionario_3(idPregunta, idFormulario);
			break;
		case 4:
			cuestionario_4(idPregunta, idFormulario);
			break;
		case 5:
			cuestionario_5(idPregunta, idFormulario);
			break;
		case 6:
			cuestionario_6(idPregunta, idFormulario);
			break;
		case 7:
			cuestionario_7(idPregunta, idFormulario);
			break;
		case 8:
			cuestionario_8(idPregunta, idFormulario);
			break;
		case 9:
			cuestionario_9(idPregunta, idFormulario);
			break;
		case 10:
			cuestionario_10(idPregunta, idFormulario);
			break;

		default:
			console.error('El cuestionario: ' + opcion + ' ,No se encuentra pregunta:', idPregunta);
			break;
	}
};

const cuestionario_0 = (idPregunta, idFormulario) => {
	if (cmbespecialidad.value == '') {
		swal('Seleccione una especialidad');
		cmbespecialidad.focus();
	} else if (cmbpractica.value == '') {
		swal('Seleccione un tipo de practica');
		cmbpractica.focus();
	} else if (cmbestado.value == '') {
		swal('Seleccione el estado en el que práctica');
		cmbestado.focus();
	} else if (txtdia.value == '') {
		swal('Favor de selececcionar el dia');
		txtdia.focus();
	} else if (txtmes.value == '') {
		swal('Favor de selececcionar el mes');
		txtmes.focus();
	} else if (txtanio.value == '') {
		swal('Favor de selececcionar el año');
		txtanio.focus();
	} else if (txtcedula.value == '') {
		swal('Escriba su número de cédula profesional');
		txtcedula.focus();
	} else {
		validaFecha(txtanio.value, txtmes.value, txtdia.value);
	}
};

const cuestionario_1 = (idPregunta, idFormulario) => {
	const txtpreg1 = document.getElementById('p_' + idPregunta);
	if (txtpreg1.value == '') {
		swal('Ingrese un número de pacientes');
		txtpreg1.focus();
	} else {
		let data = { valor: txtpreg1.value, id: idPregunta, step: idFormulario };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_2 = (idPregunta, idFormulario) => {
	const txtpreg1 = document.getElementById('p_' + (parseInt(idPregunta) - 1));
	const txtpreg2 = document.getElementById('p_' + idPregunta);
	if (txtpreg2.value == '') {
		swal('Ingrese un número de pacientes');
		txtpreg2.focus();
	} else {
		if (txtpreg2.value == 0) {
			let data = { valor: txtpreg2.value, id: idPregunta, step: idFormulario };
			service(data);
			$('#smartwizard').smartWizard('goToStep', 10);
		} else {
			if (parseInt(txtpreg1.value) < parseInt(txtpreg2.value)) {
				swal(
					'El número de pacientes con osteoporosis no puede ser mayor al de los pacientes promedio que atiende al mes.'
				);
				txtpreg2.focus();
			} else {
				let data = { valor: txtpreg2.value, id: idPregunta, step: idFormulario };
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_3 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayOpciones.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS SELECCIONO LA OPCION (OTRA) */
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
			console.log('NADA MAS SELECCIONO LA OPCION (OTRA)');
		} else {
			/* ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arrayId)) {
				if (txtotro.value == '') {
					swal('Especifique cuál');
				} else {
					procesando(cadena, idPregunta, txtotro.value, idFormulario);
				}
				console.log('ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS');
			} else {
				/* DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)*/
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
				console.log('DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)');
			}
		}
	}
};

const cuestionario_4 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayOpciones.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS SELECCIONO LA OPCION (OTRA) */
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
			console.log('NADA MAS SELECCIONO LA OPCION (OTRA)');
		} else {
			/* ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arrayId)) {
				if (txtotro.value == '') {
					swal('Especifique cuál');
				} else {
					procesando(cadena, idPregunta, txtotro.value, idFormulario);
				}
				console.log('ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS');
			} else {
				/* DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)*/
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		}
	}
};

const cuestionario_5 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayOpciones.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS SELECCIONO LA OPCION (OTRA) */
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		} else {
			/* ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arrayId)) {
				if (txtotro.value == '') {
					swal('Especifique cuál');
				} else {
					procesando(cadena, idPregunta, txtotro.value, idFormulario);
				}
			} else {
				/* DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)*/
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		}
	}
};

const cuestionario_6 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayId.length == 0) {
		swal('Elija una opción');
	} else {
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				let data = { valor: cadena, id: idPregunta, step: idFormulario };
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			let data = { valor: cadena, id: idPregunta, step: idFormulario };
			service(data);
			$('#smartwizard').smartWizard('next');
		}
	}
};

const cuestionario_7 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayId.length == 0) {
		swal('Elija una opción');
	} else {
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				let data = { valor: cadena, id: idPregunta, step: idFormulario };
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			let data = { valor: cadena, id: idPregunta, step: idFormulario };
			service(data);
			$('#smartwizard').smartWizard('next');
		}
	}
};

const cuestionario_8 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayOpciones.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS SELECCIONO LA OPCION (OTRA) */
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		} else {
			/* ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arrayId)) {
				if (txtotro.value == '') {
					swal('Especifique cuál');
				} else {
					procesando(cadena, idPregunta, txtotro.value, idFormulario);
				}
			} else {
				/* DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)*/
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		}
	}
};

const cuestionario_9 = (idPregunta, idFormulario) => {
	const arrayOpciones = getOpcionesSelecionadas(idPregunta);
	const cadena = getStringOpciones(arrayOpciones);
	const arrayId = getIdsOpciones(arrayOpciones);
	const txtotro = document.getElementById('txtotro' + idPregunta);

	if (arrayOpciones.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS SELECCIONO LA OPCION (OTRA) */
		if (selectOtroUnicamente(arrayId)) {
			if (txtotro.value == '') {
				swal('Especifique cuál');
			} else {
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		} else {
			/* ESTA SELECCIONADO (OTRA) PERO CON MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arrayId)) {
				if (txtotro.value == '') {
					swal('Especifique cuál');
				} else {
					procesando(cadena, idPregunta, txtotro.value, idFormulario);
				}
			} else {
				/* DENTRO DE LA SELECCIONADAS NO SE ENCUETRA (OTRA)*/
				procesando(cadena, idPregunta, txtotro.value, idFormulario);
			}
		}
	}
};

const cuestionario_10 = (idPregunta, idFormulario) => {
	const encuesta = document.querySelector('#encuesta');
	const txtarea = document.getElementById('p_' + idPregunta);
	let data = {
		valor: txtarea.value == '' ? '' : txtarea.value,
		id: idPregunta,
		step: idFormulario,
	};
	service(data);
	encuesta.reset();
	$('#smartwizard').smartWizard('reset');
	//enviarMail(); //TODO: esta parte lo comento para hacer pruebas
};

function enviarMail() {
	$.ajax({
		url: 'includes/enviar-mail-agradecimiento.asp',
		type: 'POST',
		data: {
			idu: idu,
			ide: ide,
			incentivo: incentivo,
		},
		async: false,
		success: function (resp) {
			window.location.href = 'thank-you.asp?inc=' + incentivo + '&iu=' + idu;
		},
		error: function (xhr, status, error) {
			console.log(xhr.responseText);
		},
	});
}

const validaFecha = (anio, mes, dia) => {
	let mesx = parseInt(mes) - 1;
	let date = moment([anio, mesx, dia]);
	fechaNac = moment(date).format('YYYY-MM-DD');
	if (date.isValid()) {
		let objBase = {
			idUsuario: idu.value,
			idEncuest: ide.value,
			idEspecia: cmbespecialidad.value,
			idPractic: cmbpractica.value,
			idEstadop: cmbestado.value,
			fechaNaci: fechaNac,
			cedProf: txtcedula.value,
			fechaDias: dia,
			fechaMese: mes,
			fechaAnio: anio,
		};
		guardarDataBase(JSON.stringify(objBase));
		$('#smartwizard').smartWizard('next');
	} else {
		error();
	}
};

//aceptar solo numero
$('.inputNumero').on('input', function () {
	this.value = this.value.trim().replace(/[^0-9]/g, '');
});

const error = () => {
	swal({
		icon: 'warning',
		title: 'Oops...',
		text: 'La fecha es incorrecta!',
	});
};

const bueno = (fecha) => {
	swal({
		icon: 'success',
		title: 'Ok',
		text: 'La fecha es: ' + fecha,
	});
};

const guardarStep = (paso) => {
	localStorage.setItem('idPasoAnsioliticos', paso);
};

const guardarDataBase = (objBase) => {
	localStorage.setItem('baseAnsioliticos', objBase);
};

const resetearStep = () => {
	localStorage.removeItem('idPasoAnsioliticos');
};

const resetearDataBase = () => {
	localStorage.removeItem('baseAnsioliticos');
};

const retornarIdStep = () => {
	return parseInt(
		localStorage.getItem('idPasoAnsioliticos') ? localStorage.getItem('idPasoAnsioliticos') : 0
	);
};

const retornarDataBase = () => {
	let dato = null;
	if (localStorage.getItem('baseAnsioliticos')) {
		dato = JSON.parse(localStorage.getItem('baseAnsioliticos'));
	}
	return dato;
};

const redireccionaCuestionario = () => {
	const idStep = retornarIdStep();
	$('#smartwizard').smartWizard('goToStep', idStep);
};

const serviceGetUsuario = () => {
	$.ajax({
		url: 'includes/get-answers.asp',
		type: 'POST',
		data: {
			idu: idu,
			ide: ide,
		},
		async: false,
		success: function (resp) {
			let dato = JSON.parse(resp);
			if (dato.secuencia > 0) {
				insetarDatosBaseRedireccionar(dato);
			} else {
				$('#smartwizard').smartWizard('goToStep', 0);
			}
		},
		error: function (xhr, status, error) {
			console.log(xhr.responseText);
		},
	});
};

const getStringOpciones = (arrayObjResp) => {
	const selecionado = [];
	arrayObjResp.forEach((elem) => selecionado.push(elem.valor));
	return selecionado.toString();
};

const getIdsOpciones = (arrayObjResp) => {
	const selecionado = [];
	arrayObjResp.forEach((elem) => selecionado.push(elem.id));
	return selecionado;
};

const insetarDatosBaseRedireccionar = (resp) => {
	console.log(resp);
	if (resp.secuencia == 10 || resp.secuencia == 11) {
		window.location.href = 'thank-you.asp?inc=' + incentivo + '&iu=' + idu;
	} else {
		cmbespecialidad.selectedIndex = buscarSelectCombo(cmbespecialidad, resp.id_especialidad);
		cmbpractica.selectedIndex = resp.tipo_practica;
		cmbestado.selectedIndex = resp.id_estado;
		fechaNac = resp.fecha;
		txtcedula.value = resp.cedula;
		let secuencia = parseInt(resp.secuencia);
		$('#smartwizard').smartWizard('goToStep', secuencia);
	}
};

const buscarSelectCombo = (lista, buscar) => {
	let indice = 0;
	let strbuscar = buscar.toString();
	let sizelista = lista.length;
	for (let index = 0; index < sizelista; index++) {
		if (lista.options[index].value == strbuscar) {
			indice = index;
			return indice;
		}
	}
};
