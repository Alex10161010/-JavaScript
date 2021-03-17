import { buscarHeroe } from './callbacks.js';

const heroeId= 'capi';
buscarHeroe(heroeId, () => {
	console.log('callback llamando!');
});