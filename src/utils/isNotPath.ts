import isFolder from './isFolder'
import { TPath, TNotPathReturn } from '../interfaces/index'

const isNotPath = (pathToParse: TPath): TNotPathReturn => {
  return !pathToParse || pathToParse.length === 0 || !isFolder(pathToParse)
}

export default isNotPath
