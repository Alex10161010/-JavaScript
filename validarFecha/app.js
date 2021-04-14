document.addEventListener('DOMContentLoaded', (e) => {
	//console.log('cargando....');
	//console.log(moment().format());
});

const txtdia = document.querySelector('#txtdia');
const txtmes = document.querySelector('#txtmes');
const txtanio = document.querySelector('#txtanio');
const btnform1 = document.querySelector('#btnform1');

//aceptar solo numero
$('.inputNumero').on('input', function () {
	this.value = this.value.trim().replace(/[^0-9]/g, '');
});

btnform1.addEventListener('click', (e) => {
	e.preventDefault();
	//console.log('Evento click');
	validarFormulario();
});

const validarFormulario = () => {
	if (txtdia.value == '') {
		console.log('Favor de selececcionar el dia');
		txtdia.focus();
	} else if (txtmes.value == '') {
		console.log('Favor de selececcionar el mes');
		txtmes.focus();
	} else if (txtanio.value == '') {
		console.log('Favor de selececcionar el año');
		txtanio.focus();
	} else {
		validaFecha(txtanio.value, txtmes.value, txtdia.value);
	}
};

const validaFecha = (anio, mes, dia) => {
	let mesx = parseInt(mes) - 1;
	let date = moment([anio, mesx, dia]);
	let fechaNac = moment(date).format('YYYY-MM-DD');
	if (date.isValid()) {
		console.log('fecha valida');
		bueno(fechaNac);
	} else {
		error();
	}
};

const error = () => {
	Swal.fire({
		icon: 'warning',
		title: 'Oops...',
		text: 'La fecha es incorrecta!',
	});
};

const bueno = (fecha) => {
	Swal.fire({
		icon: 'success',
		title: 'Ok',
		text: 'La fecha es: ' + fecha,
	});
};
