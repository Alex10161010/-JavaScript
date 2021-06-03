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

const txtp_36 = document.querySelector('#p_36');

/* Div contiene el input txt otra */
const divotro27 = document.querySelector('#divotro128');
const divotro28 = document.querySelector('#divotro132');
const divotro29 = document.querySelector('#divotro29');
const divotro30 = document.querySelector('#divotro30');
const divotro31 = document.querySelector('#divotro31');
const divotro34 = document.querySelector('#divotro34');
const divotro35 = document.querySelector('#divotro35');
/* input txt Otro */
const txtotro_27 = document.querySelector('#txtotro128');
const txtotro_28 = document.querySelector('#txtotro132');
const txtotro_29 = document.querySelector('#txtotro29');
const txtotro_30 = document.querySelector('#txtotro30');
const txtotro_31 = document.querySelector('#txtotro31');
const txtotro_34 = document.querySelector('#txtotro34');
const txtotro_35 = document.querySelector('#txtotro35');

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
});

divFormulario.addEventListener('click', (e) => {
	/* Evento del boton siguiente */
	if (e.target.classList.contains('btnSiguiente')) {
		const idPregunta = e.target.getAttribute('data-prg');
		let idStrForm = e.target.getAttribute('id');
		let formulario = parseInt(idStrForm.substring(8, idStrForm.length));
		formulario = formulario - 1; //ID DEL CUESTIONARIO
		validacionCuestionarios(formulario, idPregunta);
	}
	/*  Evento del boton enviar
	if (e.target.classList.contains('btnEnviar')) {
		const idPregunta = e.target.getAttribute('data-id');
		let idStrForm = e.target.getAttribute('id');
		let formulario = parseInt(idStrForm.substring(8, idStrForm.length));
		formulario = formulario - 1; //ID DEL CUESTIONARIO
		validacionCuestionarios(formulario, idPregunta);
	} */
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

const buscarExiteIdCheckRadio = (id) => {
	let existe = false;
	const arrayIdChecks = [128, 132, 136, 150, 158];
	const arrayIdRadios = [141, 147];
	let datos = arrayIdChecks.concat(arrayIdRadios);
	existe = datos.some((checkid) => checkid === id);
	return existe;
};

const ocultarTodosDivOtros = () => {
	const divOtros = document.querySelectorAll('.divOtros');
	divOtros.forEach((divOtro) => {
		divOtro.style.display = 'none';
	});
};

const mostrarOcultarDivOtro = (idCheckBox, idPregunta) => {
	const divOtro = document.querySelector('#divotro' + idPregunta + '');
	const txtOtro = document.querySelector('#txtotro' + idPregunta + '');
	if (document.getElementById('checkbox' + idCheckBox).checked) {
		swal('Especifique cuál');
		divOtro.style.display = 'block';
		txtOtro.focus();
	} else {
		divOtro.style.display = 'none';
		txtOtro.value = '';
	}
};

const guardarOpcionSelecionadas = (idPregunta) => {
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
	return arraySelect.some((elem) => elem == 'Otra');
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
	}); */
};

const validacionCuestionarios = (idformulario, idPregunta) => {
	switch (idformulario) {
		case 0:
			cuestionario_0(idPregunta); //----Base -->
			break;
		case 1:
			cuestionario_1(idPregunta); //----Numerica -->
			break;
		case 2:
			cuestionario_2(idPregunta); //----Numerica -->
			break;
		case 3:
			cuestionario_3(idPregunta); //----Radio-evaluacion -->
			break;
		case 4:
			cuestionario_4(idPregunta); //----Checkbox --
			break;
		case 5:
			cuestionario_5(idPregunta); //----Radio-evaluacion -->
			break;
		case 6:
			cuestionario_6(idPregunta); //----Checkbox -->
			break;
		case 7:
			cuestionario_7(idPregunta); //----Checkbox-->
			break;
		case 8:
			cuestionario_8(idPregunta); //----Checkbox -->
			break;
		case 9:
			cuestionario_9(idPregunta); //----Abierta -->
			break;
		case 10:
			cuestionario_10(idPregunta); //----Abierta -->
			break;

		default:
			console.error('El cuestionario no existe', idCuestionario);
			break;
	}
};

const cuestionario_0 = (idPregunta) => {
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

const cuestionario_1 = (idPregunta) => {
	const txtp_25 = document.getElementById('p_' + idPregunta);
	if (txtp_25.value == '') {
		swal('Ingrese un número de pacientes');
		txtp_25.focus();
	} else {
		let data = { valor: txtp_25.value, id: 25, step: 1 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_2 = (idPregunta) => {
	const txtp_26 = document.getElementById('p_' + idPregunta);
	if (txtp_26.value == '') {
		swal('Ingrese un número de pacientes');
		txtp_26.focus();
	} else {
		if (txtp_26.value == 0) {
			let data = { valor: txtp_26.value, id: 26, step: 2 };
			service(data);
			$('#smartwizard').smartWizard('goToStep', 10);
		} else {
			if (parseInt(txtp_25.value) < parseInt(txtp_26.value)) {
				swal(
					'El número de pacientes con ansiedad no puede ser mayor al de los pacientes promedio que atiende al mes.'
				);
				txtp_26.focus();
			} else {
				let data = { valor: txtp_26.value, id: 26, step: 2 };
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_3 = (idPregunta) => {
	const arryResp = guardarOpcionSelecionadas(idPregunta);
	if (arryResp.length == 0) {
		swal('Seleccione al menos una opción');
	} else {
		/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
		let data = {
			valor: arryResp.toString(),
			id: 27,
			step: 4,
		};
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_4 = (idPregunta) => {
	const arrayObjResp = guardarOpcionSelecionadas(28);
	const opcselectStr = getOpcionesSelectStr(arrayObjResp);
	if (arryResp.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_28.value == '') {
				mostrarDivOtro(28);
			} else {
				let opcion = 'lo anterior';
				titulo19.innerHTML =
					'¿Cuál es la razón más importante por lo que usted decidió prescribir ' + opcion + '?';
				let data = {
					valor: opcselectStr,
					id: 28,
					otro: txtotro_28.value,
					step: 4,
				};
				service(data);
				//$('#smartwizard').smartWizard("next");
				$('#smartwizard').smartWizard('goToStep', 6);
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_28.value == '') {
					mostrarDivOtro(28);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 28,
						otro: txtotro_28.value,
						step: 4,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 28,
					step: 4,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_5 = (idPregunta) => {
	const arryResp = guardarOpcionSelecionadas(29);
	if (arryResp.length == 0) {
		swal(
			'Seleccione el/los principios activos que conoce o ha oído nombrar aunque nunca las haya prescrito'
		);
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_29.value == '') {
				mostrarDivOtro(29);
			} else {
				let opcion = 'lo anterior';
				titulo19.innerHTML =
					'¿Cuál es la razón más importante por lo que usted decidió prescribir ' + opcion + '?';
				let data = {
					valor: arryResp.toString(),
					id: 29,
					otro: txtotro_29.value,
					step: 4,
				};
				service(data);
				//$('#smartwizard').smartWizard("next");
				$('#smartwizard').smartWizard('goToStep', 6);
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_29.value == '') {
					mostrarDivOtro(29);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 29,
						otro: txtotro_29.value,
						step: 4,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 29,
					step: 4,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_6 = (idPregunta) => {
	let resp30 = [];
	let checks30 = document.querySelectorAll('input[name="p_30"]');
	checks30.forEach(function (elem) {
		if (elem.checked) {
			resp30.push(elem.value);
		}
	});
	if (resp30.length == 0) {
		swal('Elija una opción');
	} else {
		let opcion = resp30.toString();
		titulo19.innerHTML =
			'¿Cuál es la razón más importante por lo que usted decidió prescribir ' + opcion + '?';
		//titulo19.innerHTML = "¿Cuál es la razón mas importante por lo que usted decidió prescribir "+ resp30.toString() +"?";
		let data = { valor: resp30.toString(), id: 30, step: 5 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_7 = (idPregunta) => {
	let resp31 = [];
	let checks31 = document.querySelectorAll('input[name="p_31"]');
	checks31.forEach(function (elem) {
		if (elem.checked) {
			resp31.push(elem.value);
		}
	});
	if (resp31.length == 0) {
		swal('Elija una opción');
	} else {
		let opcion = resp31.toString();
		titulo19.innerHTML =
			'¿Cuál es la razón más importante por lo que usted decidió prescribir ' + opcion + '?';
		//titulo19.innerHTML = "¿Cuál es la razón mas importante por lo que usted decidió prescribir "+ resp31.toString() +"?";
		let data = { valor: resp31.toString(), id: 31, step: 5 };
		service(data);
		$('#smartwizard').smartWizard('next');
	}
};

const cuestionario_8 = (idPregunta) => {
	const arryResp = guardarOpcionSelecionadas(34);
	if (arryResp.length == 0) {
		swal('Seleccione el/los efectos adversos mas frecuentes');
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_34.value == '') {
				mostrarDivOtro(34);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 34,
					otro: txtotro_34.value,
					step: 7,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_34.value == '') {
					mostrarDivOtro(34);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 34,
						otro: txtotro_34.value,
						step: 7,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 34,
					step: 7,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_9 = (idPregunta) => {
	const arryResp = guardarOpcionSelecionadas(35);
	if (arryResp.length == 0) {
		swal('Seleccione otras afecciones mentales se presentan con frecuencia en su práctica clínica');
	} else {
		/* NADA MAS ESTA SELECCIONADA  OTRA*/
		if (validaExiteOtro(arryResp) && arryResp.length == 1) {
			if (txtotro_35.value == '') {
				mostrarDivOtro(35);
			} else {
				let data = {
					valor: arryResp.toString(),
					id: 35,
					otro: txtotro_35.value,
					step: 8,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		} else {
			/* ESTA SELECCIONADO OTRA PERO MAS OPCIONES SELECCIONADAS */
			if (validaExiteOtro(arryResp)) {
				if (txtotro_35.value == '') {
					mostrarDivOtro(35);
				} else {
					let data = {
						valor: arryResp.toString(),
						id: 35,
						otro: txtotro_35.value,
						step: 8,
					};
					service(data);
					$('#smartwizard').smartWizard('next');
				}
			} else {
				/*  MAS OPCIONES SELECCIONADAS PERO NO EXISTE OTRAS*/
				let data = {
					valor: arryResp.toString(),
					id: 35,
					step: 8,
				};
				service(data);
				$('#smartwizard').smartWizard('next');
			}
		}
	}
};

const cuestionario_10 = (idPregunta) => {
	let data = {
		valor: txtp_36.value == '' ? '' : txtp_36.value,
		id: 36,
		step: 10,
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

const getOpcionesSelectStr = (arrayObjResp) => {
	const selecionado = [];
	arrayObjResp.forEach((elem) => selecionado.push(elem.valor));
	return selecionado.toString();
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
