const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://wikipedia.org/wiki/Node.js');
	// await browser.close();
	var titulo1 = await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		console.log(h1.innerHTML);
		return h1.innerHTML;
	});
	console.log(titulo1);
	console.log('termino');
	await browser.close();
	console.log('cerrado');
})();
