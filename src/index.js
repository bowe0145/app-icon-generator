const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const ios = require('./ios')


// Grab the icon.png from the root of the project

let icon
try {
  // Find the icon in the root of the project

  icon = fs.readFileSync(path.join(__dirname, '../icon.png'));
} catch (e) {
  // Ignore the error
}

// If there's no icon.png, throw an error
if (!icon) {
  throw new Error('No icon.png found');
}

// Create or replace the ./resources directory
if (!fs.existsSync('./resources')) {
  fs.mkdirSync('./resources');
} else {
  // If the resources directory exists, remove it and recreate it
  fs.rmdirSync('./resources', { recursive: true });
  fs.mkdirSync('./resources');
}

// IOS: Handle creating the IOS assets
if (ios) {
  ios(icon);
}
