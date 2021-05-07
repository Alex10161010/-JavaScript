import $ from 'jquery';
import Login from '../models/login.js';

const login = new Login();
login.btnLogin.addEventListener('click', async (e) => {
	if (login.validacionFormulario()) {
		const resp = await login.iniciarLogin();
		login.alerta(resp);
		console.log(resp);
	}
});

$('#login-button').click(function () {
	$('#login-button').fadeOut('slow', function () {
		$('#container').fadeIn();
		TweenMax.from('#container', 0.4, { scale: 0, ease: Sine.easeInOut });
		TweenMax.to('#container', 0.4, { scale: 1, ease: Sine.easeInOut });
	});
});
$('.close-btn').click(function () {
	TweenMax.from('#container', 0.4, { scale: 1, ease: Sine.easeInOut });
	TweenMax.to('#container', 0.4, { left: '50%', scale: 0, ease: Sine.easeInOut });
	$('#container, #forgotten-container').fadeOut(800, function () {
		$('#login-button').fadeIn(800);
	});
});
