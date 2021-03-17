const resp = [
	{
		abreviatura: 'mx',
		pais: 'México',
		total: '155254',
		porcentaje: '93,529%',
	},
	{
		abreviatura: 've',
		pais: 'Venezuela',
		total: '1980',
		porcentaje: '1,193%',
	},
	{
		abreviatura: 'co',
		pais: 'Colombia',
		total: '1478',
		porcentaje: '0,89%',
	},
	{
		abreviatura: 'ec',
		pais: 'Ecuador',
		total: '1445',
		porcentaje: '0,871%',
	},
	{
		abreviatura: 'do',
		pais: 'República Dominicana',
		total: '1136',
		porcentaje: '0,684%',
	},
	{
		abreviatura: 'pe',
		pais: 'Perú',
		total: '752',
		porcentaje: '0,453%',
	},
	{
		abreviatura: 'gt',
		pais: 'Guatemala',
		total: '675',
		porcentaje: '0,407%',
	},
	{
		abreviatura: 'bo',
		pais: 'Bolivia',
		total: '672',
		porcentaje: '0,405%',
	},
	{
		abreviatura: 'hn',
		pais: 'Honduras',
		total: '451',
		porcentaje: '0,272%',
	},
	{
		abreviatura: 'ar',
		pais: 'Argentina',
		total: '353',
		porcentaje: '0,213%',
	},
	{
		abreviatura: 'cr',
		pais: 'Costa Rica',
		total: '344',
		porcentaje: '0,207%',
	},
	{
		abreviatura: 'ni',
		pais: 'Nicaragua',
		total: '295',
		porcentaje: '0,178%',
	},
	{
		abreviatura: 'sv',
		pais: 'El Salvador',
		total: '279',
		porcentaje: '0,168%',
	},
	{
		abreviatura: 'cl',
		pais: 'Chile',
		total: '241',
		porcentaje: '0,145%',
	},
	{
		abreviatura: 'us',
		pais: 'EUA',
		total: '142',
		porcentaje: '0,086%',
	},
	{
		abreviatura: 'pa',
		pais: 'Panamá',
		total: '130',
		porcentaje: '0,078%',
	},
	{
		abreviatura: 'cu',
		pais: 'Cuba',
		total: '122',
		porcentaje: '0,073%',
	},
	{
		abreviatura: 'br',
		pais: 'Brasil',
		total: '94',
		porcentaje: '0,057%',
	},
	{
		abreviatura: 'es',
		pais: 'España',
		total: '80',
		porcentaje: '0,048%',
	},
	{
		abreviatura: 'uy',
		pais: 'Uruguay',
		total: '23',
		porcentaje: '0,014%',
	},
	{
		abreviatura: 'py',
		pais: 'Paraguay',
		total: '19',
		porcentaje: '0,011%',
	},
	{
		abreviatura: 'ca',
		pais: 'Canadá',
		total: '14',
		porcentaje: '0,008%',
	},
	{
		abreviatura: 'dm',
		pais: 'Dominica',
		total: '7',
		porcentaje: '0,004%',
	},
	{
		abreviatura: 'bz',
		pais: 'Belice',
		total: '6',
		porcentaje: '0,004%',
	},
	{
		abreviatura: 'bb',
		pais: 'Barbados',
		total: '2',
		porcentaje: '0,001%',
	},
	{
		abreviatura: 'kn',
		pais: 'San Cristóbal y Nieves',
		total: '1',
		porcentaje: '0,001%',
	},
];

document.addEventListener('DOMContentLoaded', () => {

	const dataTabla = estructuraDataTablePais();
	const dataGrafica = crearEstructuraObj();

	iniciarDataTablePais(dataTabla);
	iniciarGraficaMapa(dataGrafica);
});

const iniciarGraficaMapa = (datos) => {
	jQuery('#vmap').vectorMap({
		map: 'world_en',
		backgroundColor: '#ffff',
		color: '#ffffff',
		hoverOpacity: 0.7,
		selectedColor: '#666666',
		enableZoom: false,
		showTooltip: true,
		values: datos,
		scaleColors: ['#d896ff', '#800080'],
		normalizeFunction: 'polynomial',
	});
};

const iniciarDataTablePais = (datos) => {
	$('#tablaPais').DataTable({
		data: datos,
		columns: [{ data: 'pais' }, { data: 'total' }, { data: 'porcentaje' }],
	});
};
const crearEstructuraObj = () => {
	let newObj = new Object();
	for (let i = 0; i < resp.length; i++) {
		newObj[`${resp[i].abreviatura}`] = resp[i].total;
	}
	return newObj;
};

const estructuraDataTablePais = () => {
	let arrayObjetos = [];
	for (let i = 0; i < resp.length; i++) {
		let newObj = new Object();
		newObj['pais'] = resp[i].pais;
		newObj['total'] = resp[i].total;
		newObj['porcentaje'] = resp[i].porcentaje;
		arrayObjetos[i] = newObj;
	}
	return arrayObjetos;
};
