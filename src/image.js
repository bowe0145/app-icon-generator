const sharp = require('sharp');
const defaultName = 'icon';

function getImageName (defaultName, size, scale) {
  return `${defaultName}-${size}@${scale}x.png`;
}

function Resize(icon, size, scale) {
  return sharp(icon)
    .resize(+size, +size)
}

module.exports.Resize = Resize;
module.exports.getImageName = getImageName;