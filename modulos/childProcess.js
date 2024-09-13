const { exec, spawn } = require('child_process');

// exec('node modulos/filesystem.js', (err, stdout, stderr) => {
// 	if (err) {
// 		console.error(`Ha ocurrido un error: ${err}`);
// 		return;
// 	}
// 	console.log(stdout);
// 	console.log(stderr);
// });

let process = spawn('node', ['modulos/filesystem.js'], { stdio: 'pipe' });

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (data) => {
	console.log(`esta muerto?: ${process.killed}`);
	console.log(data.toString());
});

process.on('exit', () => {
	console.log('El proceso ha terminado');
	console.log(`esta muerto?: ${process.killed}`);
});
// process.stdout.on('data', (data) => {
// 	console.log(data.toString());
// });

// process.stderr.on('data', (data) => {
// 	console.error(data.toString());
// });
