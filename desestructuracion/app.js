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

let platicas = data.platicas;
for (let i = 0; i < platicas.length; i++) {
	console.log(platicas[i].salon);
}
