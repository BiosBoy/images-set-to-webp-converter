import { TElement, TWEbPReturn } from '../interfaces/index'

const isAlreadyWebP = (element: TElement): TWEbPReturn => {
  const isWebPImage = /(\.webp)$/.test(element)

  if (isWebPImage) {
    console.log('\\033[33m', 'Warning: some WEBP image is found! It will be rewritten: ', element)
  }

  return isWebPImage
}

export default isAlreadyWebP
