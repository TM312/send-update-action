import * as fs from 'fs';
import * as path from 'path';


async function getFileBuffer(filepath: string) {
  const root = path.join(process.env.GITHUB_WORKSPACE || '', './')

  let filepathFull = null;
  if (fs.statSync(root).isDirectory()) {
    filepathFull = path.join(root, filepath)
  }

  if (!filepathFull || (!!filepathFull && !fs.existsSync(filepathFull))) {
    throw new Error(`The path ${filepathFull} does not exist.`)
  } else {
    return fs.readFileSync(filepathFull)
  }
} 

export default getFileBuffer;