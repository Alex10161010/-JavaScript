//En qué año se lanzó JavaScript

const arrayPreguntas = [
	{
		pregunta: 'How would you like Premium to help?',
		a: 'Contenido gratis imagenes y recursos',
		b: 'Codigo fuente',
		c: 'Puntuaje mejor',
		d: 'Dinero',
		correcto: 'c',
	},
	{
		pregunta: 'what is the most used programming languaje in 2021',
		a: 'Python',
		b: 'Java',
		c: 'JavaScript',
		d: 'C#',
		correcto: 'a',
	},
	{
		pregunta: 'who is the president of US',
		a: 'Alejandro Morales',
		b: 'Laska Ruby',
		c: 'Bola de Nieve',
		d: 'Angel Memo',
		correcto: 'b',
	},
	{
		pregunta: 'What does HTML stand for?',
		a: 'Hypertex Markup Languaje',
		b: 'Cascading Style Sheet',
		c: 'Jason Object Notation',
		d: 'Application Programming Interface',
		correcto: 'a',
	},
	{
		pregunta: 'What year was JavaScript launched?',
		a: '1996',
		b: '1994',
		c: '1995',
		d: 'none of the above',
		correcto: 'c',
	},
];

let cuestionarioActual = 0;
let puntuaje = 0;

const answerEls = document.querySelectorAll('.answer');
const quiz = document.querySelector('#box-quiz');
const title = document.querySelector('#quiz-title');
const a_text = document.querySelector('#quiz-text-a');
const b_text = document.querySelector('#quiz-text-b');
const c_text = document.querySelector('#quiz-text-c');
const d_text = document.querySelector('#quiz-text-d');
const botton = document.querySelector('#btn-submit');
document.addEventListener('DOMContentLoaded', () => {
	cargandoCuestionario();
});

const getRadioSelected = () => {
	let answer = undefined;
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
};

const cargandoCuestionario = () => {
	deseleccionarRadio();
	const quizData = arrayPreguntas[cuestionarioActual];
	title.textContent = quizData.pregunta;
	a_text.textContent = quizData.a;
	b_text.textContent = quizData.b;
	c_text.textContent = quizData.c;
	d_text.textContent = quizData.d;
};

const deseleccionarRadio = () => {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
};

botton.addEventListener('click', () => {
	const answer = getRadioSelected();
	console.log(answer);

	if (answer) {
		if (answer === arrayPreguntas[cuestionarioActual].correcto) {
			puntuaje++;
		}
		cuestionarioActual++;
	}

	if (cuestionarioActual < arrayPreguntas.length) {
		cargandoCuestionario();
	} else {
		quiz.innerHTML = `<h2>You finished! puntuacion: ${puntuaje}/${arrayPreguntas.length}</h2>
		<button onclick="location.reload()">Recargar</button>`;
	}
});
