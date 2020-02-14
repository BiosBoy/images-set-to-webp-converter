import fs from 'fs'
import { TElement, TFolderReturn } from '../interfaces/index'

const isFolder = (elementToProcess: TElement): TFolderReturn => {
  return fs.existsSync(elementToProcess) && fs.lstatSync(elementToProcess).isDirectory()
}

export default isFolder
