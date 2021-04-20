document.addEventListener('DOMContentLoaded', (e) => {
	redireccionaCuestionario();
});

const guardarPregunta = (idPregunta) => {
	localStorage.setItem('idPregunta', idPregunta);
};

const recetearPregunta = () => {
	localStorage.removeItem('idPregunta');
};

const retornarIdPregunta = () => {
	return parseInt(localStorage.getItem('idPregunta') ? localStorage.getItem('idPregunta') : 1);
};

const redireccionaCuestionario = () => {
	const idCuest = retornarIdPregunta();
	$('#smartwizard').smartWizard('goToStep', idCuest);
};
