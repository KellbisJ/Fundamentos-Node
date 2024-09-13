const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readStream = fs.createReadStream('./cono.txt');

readStream.setEncoding('utf-8');

// readStream.on('data', (chunk) => {
// 	data += chunk;
// });

// readStream.on('end', () => {
// 	console.log(data);
// });

// process.stdout.write('Hola');
// process.stdout.write('Hola');

const Transform = stream.Transform;

function Mayus() {
	Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, encoding, callback) {
	chunkMayus = chunk.toString().toUpperCase();
	this.push(chunkMayus);
	callback();
};

let mayus = new Mayus();

readStream.pipe(mayus).pipe(process.stdout);
