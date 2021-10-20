// SmartWizard initialize
$('#smartwizard').smartWizard({
	selected: 0, // Initial selected step, 0 = first step
	theme: 'arrows',
	autoAdjustHeight: false, // Automatically adjust content height
	cycleSteps: false, // Allows to cycle the navigation of steps
	backButtonSupport: false, // Enable the back button support
	useURLhash: true, // Enable selection of the step based on url hash
	transition: {
		animation: 'none', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
		speed: '400', // Transion animation speed
		easing: '', // Transition animation easing. Not supported without a jQuery easing plugin
	},
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

const divFormContenido = document.querySelector('#divFormContenido');
const template = document.querySelector('#template_span');
const fragmento = document.createDocumentFragment();

divFormContenido.addEventListener('click', (e) => {
	if (e.target.classList.contains('btnSiguiente')) {
		const idFormulario = parseInt(e.target.getAttribute('data-id'));
		validacionCuestionarios(idFormulario);
	}
});

const showMensajeError = (mensaje, insertar) => {
	console.log(template);
	template.children.querySelector('.span_mensaje').textContent = mensaje;
	const clone = template.cloneNode(true);
	fragmento.appendChild(clone);
	insertar.appendChild(fragmento);
};

const validacionCuestionarios = (idFormulario) => {
	switch (idFormulario) {
		case 1:
			cuestionario_1(idFormulario);
			break;
		case 2:
			cuestionario_2(idFormulario);
			break;
		case 3:
			cuestionario_3(idFormulario);
			break;
		default:
			console.error('El cuestionario: ' + idFormulario + ' No se encuentra');
			break;
	}
};

const cuestionario_1 = (idPregunta) => {
	quitarStyles();
	quitarMensaje();
	const inputfecha = document.querySelector('#fecha');
	const inputcategoria = document.querySelector('#categorias');
	if (inputcategoria.value == '') {
		inputcategoria.classList.add('is-invalid');
		showMensajeError('Es necesario el correo', inputcategoria.parentNode);
		inputcategoria.focus();
	} else {
		console.log('Exito');
	}
};

const quitarStyles = () => {
	const allInput = document.querySelectorAll('.is-invalid');
	allInput.forEach((elem) => {
		elem.classList.remove('is-invalid');
	});
};

const quitarMensaje = () => {
	const allNodos = document.querySelectorAll('.span_mensaje');
	allNodos.forEach((elem) => {
		elem.remove();
	});
};
