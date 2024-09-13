const fs = require('fs');
const path = `${__dirname}/text.txt`;

function createFile(path) {
	fs.writeFile(path, 'Este es un archivo creado con fs', (err) => {
		if (err) {
			console.log(`Error al crear el archivo ${err}`);
		} else {
			console.log('Archivo creado correctamente');
		}
	});
}

function readFile(path) {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			console.log(`Error al leer el archivo ${err}`);
		} else {
			console.log(data);
		}
	});
}
function writeFile(path, data) {
	fs.writeFile(path, data, (err) => {
		if (err) {
			console.log(`Error al leer el archivo ${err}`);
		} else {
			console.log('Archivo escrito correctamente');
		}
	});
}

function deleteFile(path) {
	fs.unlink(path, (err) => {
		if (err) {
			console.log(`Error al leer el archivo ${err}`);
		} else {
			console.log('Archivo eliminado');
		}
	});
}

writeFile(path, 'lalallalalalal');
readFile(path);
