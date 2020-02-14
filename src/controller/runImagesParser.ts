import fs from 'fs'

import isNoImagesFounded from '../utils/imagesNotFound'
import isFolder from '../utils/isFolder'
import isNotRegularImage from '../utils/isNotRegularImage'
import isAlreadyWebP from '../utils/isAlreadyWebP'
import createWebPImage from '../controller/createWebPImage'

import { TPath, TImageParserReturn } from '../interfaces'

const runImageParser = (PATH: TPath): TImageParserReturn => {
  const folderElemList = fs.readdirSync(PATH)

  if (isNoImagesFounded(folderElemList)) {
    console.error('Error: no elements were found, aborting! Path: ', PATH)

    return
  }

  folderElemList.forEach((element, index) => {
    const elementToProcess = `${PATH}/${element}`

    if (isFolder(elementToProcess)) {
      console.log('Folder was founded instead of an image, going deeply:', elementToProcess)

      runImageParser(elementToProcess)

      return
    }

    if (isNotRegularImage(element) || isAlreadyWebP(element)) {

      return
    }

    createWebPImage(PATH, element, index)
  })
}

export default runImageParser
