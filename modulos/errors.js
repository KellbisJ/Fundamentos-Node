function error() {
	return 3 + z;
}

function asyncError() {
	setTimeout(() => {
		try {
			return 3 + z;
		} catch (err) {
			console.error(`Ha ocurrido un error: ${err}`);
		}
	}, 1000);
}

try {
	// error();
	asyncError();
} catch (err) {
	console.error(`Ha ocurrido un error: ${err}`);
}

console.log('esto puede continuar gracias al try catch, aprendimos a manejar errores');
