const data = {
	target: 'platicasActuales',
	platicas: [
		{
			Salon: 'Salon 1',
			Ponencia: 'En un momento comenzamos',
			Usuarios: 1,
		},
		{
			Salon: 'Salon 2',
			Ponencia: 'En un momento comenzamos',
			Usuarios: 2,
		},
	],
};

const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneracion',
	getNombre() {
		return `${this.nombre} ${this.apellido} ${this.poder}`;
	},
};

/* Desestructuración de objetos*/
const user = {
	id: 42,
	is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true

const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder, edad);

/* Desestructuración en los argumentos */
function imprimeHeroe({ nombre, apellido, poder, edad = 50 }) {
	console.log(nombre, apellido, poder, edad);
}

/*  Desestructuración de arreglos*/
const heroes = [
	'Chica Maravilla',
	'Deadpool',
	'Supermen',
	'Batmant',
	'Spiderman',
	'Ironman',
	'Doctor Strange',
];

const [, , , batmant] = heroes;
console.log(batmant);

const [h1, h2, ...restoheros] = heroes;
console.log(restoheros);
