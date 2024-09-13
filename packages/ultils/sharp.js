const sharp = require('sharp');

const image = sharp('./zangetsu-resize.svg');

image.resize(240, 240);

image.toFile('./zangetsu-resize2.png');
