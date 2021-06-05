const btn_siguiente = document.querySelector('#btn_siguiente');
const template = document.querySelector('#template_span').content;
const fragmento = document.createDocumentFragment();

btn_siguiente.addEventListener('click', (e) => {
	validarCuestionario();
});

const validarCuestionario = () => {
	quitarStyles();
	quitarMensaje();
	const correo = document.querySelector('#correo');
	const telefono = document.querySelector('#telefono');

	if (correo.value == '') {
		correo.classList.add('is-invalid');
		showMensajeError('Es necesario el correo', correo.parentNode);
		correo.focus();
	} else if (telefono.value == '') {
		telefono.classList.add('is-invalid');
		showMensajeError('Es necesario su numero telefonico', telefono.parentNode);
		telefono.focus();
	} else {
		console.log('Exito');
	}
};

const showMensajeError = (mensaje, insertar) => {
	template.querySelector('.span_mensaje').textContent = mensaje;
	const clone = template.cloneNode(true);
	fragmento.appendChild(clone);
	insertar.appendChild(fragmento);
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
