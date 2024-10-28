const fs = require('fs')

export function updateSlice() {
  const directoryPath = '../../core-store/slices'

  // Use fs.readdirSync to read the contents of the directory synchronously.
  const fileList =
    fs
      .readdirSync(directoryPath)
      .map(
        (filename: string) =>
          `export * from './slices/${filename.split('.')[0]}'`
      ) || []
  const content = fileList.join('\n') || ''

  fs.writeFile('./store/index.ts', content, (err: any) => {
    if (err) {
      console.error(err)
    } else {
      // file written successfully
    }
  })
}
