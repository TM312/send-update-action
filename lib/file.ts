import * as fs from 'fs';
import * as path from 'path';

class File {
  filepath: string;
  fileContent: string;

  constructor (filepath: string) {
    const root = path.join(process.env.GITHUB_WORKSPACE || '', './')

    if (fs.statSync(root).isDirectory()) {
      filepath = path.join(root, filepath)
    }

    if (!fs.existsSync(filepath)) {
      throw new Error(`The file ${filepath} does not exist found.`)
    }

    this.filepath = filepath
    this.fileContent = JSON.parse(fs.readFileSync(filepath, { encoding: 'utf-8' }))
  }
}

export default File;