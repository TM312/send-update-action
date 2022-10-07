import * as fs from 'fs';
import * as path from 'path';

class File {
  filepath: null | string;
  fileContent: null | string;

  constructor (filepath: null | string) {
    const root = path.join(process.env.GITHUB_WORKSPACE || '', './')

    let filepathFull = null;
    let fileContent = null;

    if (!!filepath) {
      if (fs.statSync(root).isDirectory()) {
        filepathFull = path.join(root, filepath)
        console.log("filepathFull:", filepathFull)
      }

      if (!filepathFull || (!!filepathFull && !fs.existsSync(filepathFull))) {
        throw new Error(`The file ${filepathFull} does not exist found.`)
      }

      console.log("fs.existsSync(filepathFull):", fs.existsSync(filepathFull))

      fileContent = fs.readFileSync(filepathFull, { encoding: 'utf-8' })
      console.log("fileCOntent:", fileContent)
    }

    this.filepath = filepathFull;
    this.fileContent = fileContent;
  }
}

export default File;