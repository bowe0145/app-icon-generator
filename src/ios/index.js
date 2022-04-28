// import directory
const directory = require('./directory');
const image = require('./image');

function HandleIOS (icon) {
  directory()
  image(icon)
}

module.exports = HandleIOS;
