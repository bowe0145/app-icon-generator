const convert = require('xml-js');
const config = require('../config/ios.json');
const SaveConfig = require('./directory').SaveConfig;
const Resize = require('../image').Resize;
const getImageName = require('../image').getImageName;
const defaultName = 'icon';
// If we got here, then the directories exist

function ToXML (icon) {

}

// Using the config/ios.json, create the icons with the desired sizes
function ResizeIOS (iconFile) {
  const icons = config.icons;
  let resources = {}
  let xmlString = '';

  for (let i = 0; i < icons.length; i++) {
    let icon = icons[i];
    const imageName = getImageName(defaultName, icon.size, icon.scale);
    let fileName = `./resources/ios/icons/${imageName}`;
    
    const iconJson = {
      icon: {
        _attributes: {
          width: icon.size,
          height: icon.size,
          src: fileName.substring(2)
        }
      }
    }

    const temp = convert.js2xml(iconJson, {compact: true, ignoreComment: true, spaces: 4});
    xmlString += "\n" + temp;

    // Resize and save the icon
    Resize(iconFile, icon.size, icon.scale).toFile(fileName);
  }

  // Save the config.xml
  SaveConfig(xmlString);
}

module.exports = ResizeIOS;