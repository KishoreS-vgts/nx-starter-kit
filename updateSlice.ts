const fs = require('fs');

const directoryPath = './store/slices';

// Use fs.readdirSync to read the contents of the directory synchronously.
const fileList =
  fs
    .readdirSync(directoryPath)
    .map((filename) => `export * from './slices/${filename.split(".")[0]}'`) || [];
const content = fileList.join('\n') || '';

fs.writeFile('./store/index.ts', content, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });