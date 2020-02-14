import CWebp from '../modules'

import getNormalizedQuality from '../helpers/getNormalizedQuality'

import { WEBP_EXTENSION } from '../constants'
import { TPath, TElement, TIndex, TCreateImage } from '../interfaces'

const createWebPImage = (imagePath: TPath, element: TElement, index: TIndex): TCreateImage => {
  // @ts-ignore
  const encoder = new CWebp(`${imagePath}/${element}`)

  const elementNameProcessed = (element && element.replace(/(\..*)$/i, '')) || `undefined_${index}`
  const elementNameToWrite = `${elementNameProcessed}${WEBP_EXTENSION}`
  const elementToWrite = `${imagePath}/${elementNameToWrite}`

  const fallback = err => console.log(err || `Image ${elementNameToWrite} is converted successfully`)

  encoder.quality(getNormalizedQuality())
  encoder.write(elementToWrite, fallback)
}

export default createWebPImage
