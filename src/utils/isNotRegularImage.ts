import { TElement, TNotRegularImageReturn } from '../interfaces/index'

const isNotRegularImage = (element: TElement): TNotRegularImageReturn => {
  const isNotAnImage = !(element && element.match(/(\.png)|(\.jpg)|(\.jpeg)|(\.webp)/i))

  if (isNotAnImage) {
    console.error(`Error: ${element} is not a regular image to process!`)
  }

  return isNotAnImage
}

export default isNotRegularImage
