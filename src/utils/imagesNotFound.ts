import { TImagesNotFound, TImagesNotFoundReturn } from '../interfaces/index'

const imagesNotFound = (folderElemList: TImagesNotFound): TImagesNotFoundReturn => {
  return !folderElemList || folderElemList && folderElemList.length === 0
}

export default imagesNotFound
