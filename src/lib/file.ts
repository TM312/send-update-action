import * as fs from 'fs';
import * as path from 'path';

class File {
  filepath: null | string;
  fileContent: null | string;

  constructor (filepath: null | string) {
    const root = path.join(process.env.GITHUB_WORKSPACE || '', './')

    let filepathFull = null;
    let fileContent = null;

    // if (!!filepath) {
    //   if (fs.statSync(root).isDirectory()) {
    //     filepathFull = path.join(root, filepath)
    //   }

    //   if (!fs.existsSync(filepathFull)) {
    //     throw new Error(`The file ${filepathFull} does not exist found.`)
    //   }

    //   fileContent = JSON.parse(fs.readFileSync(filepathFull, { encoding: 'utf-8' }))
    // }

    this.filepath = filepathFull;
    this.fileContent = fileContent;
  }
}

export default File;