import 'bootstrap';
import '../css/styles.scss';
import '../img/imagen.jpg';

const btnModalAbrir = document.querySelector('#btnModalAbrir');
const btnModalCerrar = document.querySelector('#btnModalCerrar');

btnModalAbrir.addEventListener('click', (e) => {
	$('#my-modal').modal('show');
});

btnModalCerrar.addEventListener('click', (e) => {
	$('#my-modal').modal('hide');
});
