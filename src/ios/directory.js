const fs = require('fs');

function CreateIOSDirectory () {
  // Create the ./resources/ios directory
  if (!fs.existsSync('./resources/ios')) {
    fs.mkdirSync('./resources/ios');

    // Create the icons directory
    fs.mkdirSync('./resources/ios/icons');
    // Create the config directory
    fs.mkdirSync('./resources/ios/config');
  } else {
    // If the IOS directory exists, remove it and recreate it
    fs.rmdirSync('./resources/ios', { recursive: true });
    fs.mkdirSync('./resources/ios');
  }
}

function SaveConfig (config) {
  // Save the xml config to the ./resources/ios/config directory
  fs.writeFileSync('./resources/ios/config/config.xml', config);
}

module.exports = CreateIOSDirectory;
module.exports.SaveConfig = SaveConfig;