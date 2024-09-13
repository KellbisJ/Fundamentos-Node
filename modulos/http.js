const http = require('http');
http.createServer(router).listen(8000);
function router(req, res) {
	console.log(req.url);

	switch (req.url) {
		case '/hola':
			let saludo = hola();
			res.write(saludo);
			res.end();
			break;
		default:
			res.write('Error 404: not found');
			res.end();
	}
}
function hola() {
	return 'Hola que tal';
}
console.log('Server running at http://localhost:8000/');
// res.writeHead(201, { 'Content-Type': 'text/plain' });
// res.write('Hello World, now I am know how to use http module');
// res.end();
