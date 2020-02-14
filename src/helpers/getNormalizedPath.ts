import { PATH_TO_PARSE } from '../constants'

const getNormalizedPath = () => {
  const receivedPath = process.argv.find((arg = '') => arg.match(/^(path=)/i))

  if (!receivedPath || receivedPath.length === 0) {
    throw new Error(`The path was not provided, aborting! Please, check it: ${PATH_TO_PARSE}`)
  }

  return receivedPath.replace(/^(path=)/i, '')
}

export default getNormalizedPath
