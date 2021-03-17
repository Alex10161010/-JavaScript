const heroes = {
	capi: {
		nombre: 'Capitan America',
		poder: 'Aguantar Inyecciones ',
	},
	iron: {
		nombre: 'Ironman',
		poder: 'Absurda cantidad de dinero',
	},
	spider: {
		nombre: 'Spiderman',
		poder: 'La mejor reacciona alergica a las picadurs de araña',
	},
};

export const buscarHeroe = (id, callback) => {
	const heroe = heroes[id];

	callback(heroe);
};
