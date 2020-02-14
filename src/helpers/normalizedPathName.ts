import { PATH_TO_PARSE } from '../constants/index'
import { TPath } from '../interfaces/index'

const normalizedPathName = (): TPath => {
  const onBeginning = !(/^\//.test(PATH_TO_PARSE)) ? `/${PATH_TO_PARSE}` : PATH_TO_PARSE
  const onEnding = (/\/$/.test(onBeginning)) ? onBeginning.substr(0, onBeginning.length - 1) : onBeginning

  const normalizedPath = onEnding

  return normalizedPath
}

export default normalizedPathName
