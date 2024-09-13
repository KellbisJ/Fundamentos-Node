// const process = require('process');

process.on('beforeExit', () => {
	console.log('El proceso va a terminar');
});

process.on('exit', () => {
	console.log('El proceso ha terminado');
	setTimeout(() => {
		console.log('Esto no se va a ver nunca');
	}, 0);
});

process.on('uncaughtException', (error, origin) => {
	console.log('Se nos ha olvidado capturar un error');
	console.log(error.message);
	console.log(origin.stack);
});

// function noExiste() {
// 	undefinedFunction();
// }

// noExiste();

// console.log('El proceso ha iniciado');
