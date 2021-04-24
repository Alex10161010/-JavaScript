const idu = document.querySelector('#idu').value;
const ide = document.querySelector('#ide').value;

const service = (data) => {
	$.ajax({
		url: 'includes/get-answers.asp',
		type: 'POST',
		data: {
			idu: idu,
			ide: ide,
		},
		async: false,
		success: function (resp) {
			let paso = data.step + 1;
			guardarStep(paso);
		},
		error: function (xhr, status, error) {
			console.log(xhr.responseText);
		},
	});
};

//-----------------valores de los inputs---------------
let fechaNac = null;
const idu = document.querySelector('#idu').value;
const ide = document.querySelector('#ide').value;
const cmbespecialidad = document.querySelector('#especialidad');
const cmbpractica = document.querySelector('#tipo_practica');
const cmbestado = document.querySelector('#estado');
const txtdia = document.querySelector('#txtdia');
const txtmes = document.querySelector('#txtmes');
const txtanio = document.querySelector('#txtanio');

const txtp_14 = document.querySelector('#p_14');
const txtp_15 = document.querySelector('#p_15');
const txtp_16 = document.querySelector('#p_16');
const txtp_17 = document.querySelector('#p_17');
const txtp_18 = document.querySelector('#p_18');
const txtp_19 = document.querySelector('#p_18');
const txtp_20 = document.querySelector('#p_20');
const txtp_21 = document.querySelector('#p_21');
const txtp_22 = document.querySelector('#p_22');

const titulo19 = document.querySelector('#pre19');

/* Div contiene el input txt otra */
const divotro17 = document.querySelector('#divotro17');
const divotro19 = document.querySelector('#divotro19');
const divotro20 = document.querySelector('#divotro20');
const divotro21 = document.querySelector('#divotro21');
/* input txt Otro */
const txtotro_17 = document.querySelector('#txtotro17');
const txtotro_19 = document.querySelector('#txtotro19');
const txtotro_20 = document.querySelector('#txtotro20');
const txtotro_21 = document.querySelector('#txtotro21');

//Botones de formularios
const divFormulario = document.querySelector('#divFormContenido');
const encuesta = document.querySelector('#encuesta');

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
			keyNavigation: false, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
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
	/*  */
	if (retornarIdStep() != 0) {
		let datos = retornarDataBase();
		cmbespecialidad.selectedIndex = buscarSelectCombo(cmbespecialidad, datos.idEspecia);

		cmbpractica.selectedIndex = datos.idPractic;
		cmbestado.selectedIndex = datos.idEstadop;
		fechaNac = datos.fechaNaci;
		console.log(datos);
	}
	if (retornarIdStep() == 10) {
		window.location.href = 'thank-you.asp';
	}
	redireccionaCuestionario();

	/* OCULTAR DIVs OTRA */
	ocultarDivOtros();
});

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

divFormulario.addEventListener('click', (e) => {
	/* Evento del boton siguiente */
	if (e.target.classList.contains('btnSiguiente')) {
		let idStrForm = e.target.getAttribute('id');
		let idCuestionario = parseInt(idStrForm.substring(8, idStrForm.length));
		idCuestionario = idCuestionario - 1; //ID DEL CUESTIONARIO
		validacionCuestionarios(idCuestionario);
	}
	/* Evento del boton enviar */
	if (e.target.classList.contains('btnEnviar')) {
		let idStrForm = e.target.getAttribute('id');
		let idCuestionario = parseInt(idStrForm.substring(8, idStrForm.length));
		idCuestionario = idCuestionario - 1; //ID DEL CUESTIONARIO
		validacionCuestionarios(idCuestionario);
	}
	/* Envento label del checkbox Otra*/
	if (
		e.target.classList.contains('labOtra_17') ||
		e.target.classList.contains('labOtra_19') ||
		e.target.classList.contains('labOtra_20') ||
		e.target.classList.contains('labOtra_21')
	) {
		let idStrLabelCheckbox = e.target.getAttribute('id');
		let idCheckbox = parseInt(idStrLabelCheckbox.substring(8, idStrLabelCheckbox.length));
		myCheckboxSelect(idCheckbox);
	}
	/* Envento input del checkbox Otra*/
	if (
		e.target.classList.contains('cheOtra_17') ||
		e.target.classList.contains('cheOtra_19') ||
		e.target.classList.contains('cheOtra_20') ||
		e.target.classList.contains('cheOtra_21')
	) {
		let idStrInputCheckbox = e.target.getAttribute('id');
		let idCheckbox = parseInt(idStrInputCheckbox.substring(4, idStrInputCheckbox.length));
		myCheckboxSelect(idCheckbox);
	}
});

const ocultarDivOtros = () => {
	divotro17.style.display = 'none';
	divotro19.style.display = 'none';
	divotro20.style.display = 'none';
	divotro21.style.display = 'none';
};

const mostrarDivOtro = (idPregunta) => {
	const divOtro = document.querySelector('#divotro' + idPregunta + '');
	const txtOtro = document.querySelector('#txtotro' + idPregunta + '');
	swal('Especifique cuál');
	divOtro.style.display = 'block';
	txtOtro.focus();
};

const myCheckboxSelect = (idPregunta) => {
	const divOtro = document.querySelector('#divotro' + idPregunta + '');
	const txtOtro = document.querySelector('#txtotro' + idPregunta + '');
	const arrayCheckboxs = guardaCheckboxSelecionados(idPregunta);
	const existencia = validaExiteOtro(arrayCheckboxs);
	if (existencia) {
		divOtro.style.display = 'block';
		txtOtro.focus();
	} else {
		divOtro.style.display = 'none';
		txtOtro.value = '';
	}
};

const guardaCheckboxSelecionados = (idPregunta) => {
	let arryResp = []; //input[name="p_3"]
	let checkboxs = document.querySelectorAll('input[name="p_' + idPregunta + '"]');
	checkboxs.forEach(function (elem, index) {
		if (elem.checked) {
			arryResp.push(elem.value);
		}
	});
	return arryResp;
};

const validaExiteOtro = (arraySelect) => {
	return (existe = arraySelect.some((elem) => elem == 'Otra'));
};

const service = (data) => {
	$.ajax({
		url: 'includes/save-answers.asp',
		type: 'POST',
		data: {
			idu: idu,
			ide: ide,
			especialidad: cmbespecialidad.value,
			tipo_practica: cmbpractica.value,
			fecha_nacimiento: fechaNac,
			estado: cmbestado.value,
			id_pregunta: data.id,
			respuesta: data.valor,
			otro: data.otro ? data.otro.trim() : 'NULL',
		},
		async: false,
		success: function (resp) {
			let paso = data.step + 1;
			guardarStep(paso);
		},
		error: function (xhr, status, error) {
			console.log(xhr.responseText);
		},
	});
};

const validacionCuestionarios = (idCuestionario) => {
	switch (idCuestionario) {
		case 0:
			cuestionario_0(); //----Base -->
			break;
		case 1:
			cuestionario_1(); //----Numerica -->
			break;
		case 2:
			cuestionario_2(); //----Numerica -->
			break;
		case 3:
			cuestionario_3(); //----Radio-evaluacion -->
			break;
		case 4:
			cuestionario_4(); //----Checkbox 17--
			break;
		case 5:
			cuestionario_5(); //----Radio-evaluacion -->
			break;
		case 6:
			cuestionario_6(); //----Checkbox 19-->
			break;
		case 7:
			cuestionario_7(); //----Checkbox 20-->
			break;
		case 8:
			cuestionario_8(); //----Checkbox 21-->
			break;
		case 9:
			cuestionario_9(); //----Abierta -->
			break;

		default:
			console.error('El cuestionario no existe', idCuestionario);
			break;
	}
};

const cuestionario_0 = () => {
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
	} else {
		validaFecha(txtanio.value, txtmes.value, txtdia.value);
	}
};

const cuestionario_1 = () => {
	if (txtp_14.value == '') {
		swal('Ingrese un número de pacientes');
		txtp_14.focus();
	} else {
		let data = { valor: txtp_14.value, id: 14, step: 1 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_2 = () => {
	if (txtp_15.value == '') {
		swal('Ingrese un número de pacientes');
		txtp_15.focus();
	} else {
		if (txtp_15.value == 0) {
			let data = { valor: txtp_15.value, id: 15, step: 2 };
			service(data);
			$('#smartwizard').smartWizard('goToStep', 9);
		} else {
			if (parseInt(txtp_14.value) < parseInt(txtp_15.value)) {
				swal(
					'El número de pacientes con ansiedad no puede ser mayor al de los pacientes promedio que atiende al mes.'
				);
				txtp_15.focus();
			} else {
				let data = { valor: txtp_15.value, id: 15, step: 2 };
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};
/* Radio */
const cuestionario_3 = () => {
	let resp16 = [];
	let checks16 = document.querySelectorAll('input[name="p_16"]');
	checks16.forEach(function (elem) {
		if (elem.checked) {
			resp16.push(elem.value);
		}
	});
	if (resp16.length == 0) {
		swal('Elija una opción');
	} else {
		let data = { valor: resp16.toString(), id: 16, step: 3 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};
/* Checkbox 17 */
const cuestionario_4 = () => {
	const arryResp = guardaCheckboxSelecionados(17);
	if (arryResp.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_17.value == '') {
				mostrarDivOtro(17);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 17,
					otro: txtotro_17.value,
					step: 4,
				};
				service(data);
				$('#smartwizard').smartWizard('goToStep', 9);
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_17.value == '') {
					mostrarDivOtro(17);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 17,
						otro: txtotro_17.value,
						step: 4,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 17,
					step: 4,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};
/*Radio 18*/
const cuestionario_5 = () => {
	let resp18 = [];
	let checks18 = document.querySelectorAll('input[name="p_18"]');
	checks18.forEach(function (elem) {
		if (elem.checked) {
			resp18.push(elem.value);
		}
	});
	if (resp18.length == 0) {
		swal('Elija una opción');
	} else {
		titulo19.innerHTML =
			'¿Cuál es la razón mas importante por lo que usted decidió prescribir ' + resp18.toString() + '?';
		let data = { valor: resp18.toString(), id: 18, step: 5 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};
/* Checkbox 19 */
const cuestionario_6 = () => {
	const arryResp = guardaCheckboxSelecionados(19);
	if (arryResp.length == 0) {
		swal('Seleccione la/las razones mas importantes por lo que usted decidió prescribir');
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_19.value == '') {
				mostrarDivOtro(19);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 19,
					otro: txtotro_19.value,
					step: 6,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_19.value == '') {
					mostrarDivOtro(19);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 19,
						otro: txtotro_19.value,
						step: 6,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 19,
					step: 6,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};
/* Checkbox 20 */
const cuestionario_7 = () => {
	const arryResp = guardaCheckboxSelecionados(20);
	if (arryResp.length == 0) {
		swal('Seleccione el/los efectos adversos mas frecuentes');
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_20.value == '') {
				mostrarDivOtro(20);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 20,
					otro: txtotro_20.value,
					step: 7,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_20.value == '') {
					mostrarDivOtro(20);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 20,
						otro: txtotro_20.value,
						step: 7,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 20,
					step: 7,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};
/* Checkbox 21 */
const cuestionario_8 = () => {
	const arryResp = guardaCheckboxSelecionados(21);
	if (arryResp.length == 0) {
		swal('Seleccione otras afecciones mentales se presentan con frecuencia en su práctica clínica');
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_21.value == '') {
				mostrarDivOtro(21);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 21,
					otro: txtotro_21.value,
					step: 8,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_21.value == '') {
					mostrarDivOtro(21);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 21,
						otro: txtotro_21.value,
						step: 8,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 21,
					step: 8,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};
/* Abierta 22 */
const cuestionario_9 = () => {
	let data = {
		valor: txtp_22.value == '' ? '' : txtp_22.value,
		id: 22,
		step: 9,
	};
	service(data);
	encuesta.reset();
	$('#smartwizard').smartWizard('reset');
	window.location.href = 'thank-you.asp';
};

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

const insetarDatosBaseRedireccionar = (resp) => {
	if (resp.secuencia == 10 || resp.secuencia == 11) {
		window.location.href = 'thank-you.asp';
	} else {
		cmbespecialidad.selectedIndex = buscarSelectCombo(cmbespecialidad, resp.id_especialidad);
		cmbpractica.selectedIndex = resp.tipo_practica;
		cmbestado.selectedIndex = resp.id_estado;
		fechaNac = resp.fecha;
		let secuencia = parseInt(resp.secuencia);
		$('#smartwizard').smartWizard('goToStep', secuencia);
	}
};
