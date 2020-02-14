import { TElement, TNotRegularImageReturn } from '../interfaces/index'

const isNotRegularImage = (element: TElement): TNotRegularImageReturn => {
  const isNotAnImage = !(element && element.match(/(\.png)|(\.jpg)|(\.jpeg)|(\.webp)/i))

  if (isNotAnImage) {
    console.error('\\033[31m%s\x1b[0m', `Error: ${element} is not a regular image to process!`)
  }

  return isNotAnImage
}

export default isNotRegularImage
