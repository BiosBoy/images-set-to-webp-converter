import normalizedPathName from './helpers/normalizedPathName'
import runImagesParser from './controller/runImagesParser'
import isNotPath from './utils/isNotPath'

import { POLICE_ALARM_ICON } from './constants/index'
import { TStartReturn } from './interfaces'

const start = (): TStartReturn => {
  console.log(`=== ${POLICE_ALARM_ICON}  [START] Starting parsing process ${POLICE_ALARM_ICON} ===`)

  const pathToParse = normalizedPathName()

  if (isNotPath(pathToParse)) {
    console.error(
      'EROOR: no PATH or wrong one was provided! Please, check it: ',
      pathToParse,
      '\\n Example of the correct run: "node imgWebPConverter /Users/Test_User/Desktop/ImagesToProcessFolder"')

    return
  }

  runImagesParser(pathToParse)

  console.log(`=== ${POLICE_ALARM_ICON}  [END] Parsing process is finished successfully ${POLICE_ALARM_ICON} ===`)
}

start()
